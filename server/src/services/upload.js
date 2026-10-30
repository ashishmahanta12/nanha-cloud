import fs from "fs";
import fsp from "fs/promises";
import path from "path";
import crypto from "crypto";
import { Readable } from "stream";
import { v4 as uuidv4 } from "uuid";
import mongoose from "mongoose";
import { env } from "../config/env.js";
import { UploadSession } from "../models/UploadSession.js";
import { Asset, serializeAsset } from "../models/Asset.js";
import { ensureGalleryFolders, categoryFolderKey } from "../drive/folders.js";
import { getDrive, withDriveRetry } from "../drive/driveClient.js";
import { validateFileBuffer } from "./validate.js";
import { generateStaticThumbnail, readImageDimensions } from "./thumbnail.js";
import { getIo } from "../sockets/progress.js";

function emit(galleryId, event, payload) {
  try {
    const io = getIo();
    if (io) io.of("/cloud").to(`gallery:${galleryId}`).emit(event, payload);
  } catch {
    /* sockets optional during tests */
  }
}

export async function initUpload({ galleryId, name, size, mimeType, category }) {
  await fsp.mkdir(env.TMP_DIR, { recursive: true });
  const uploadId = uuidv4();
  const tempPath = path.join(env.TMP_DIR, `${uploadId}.part`);
  await fsp.writeFile(tempPath, Buffer.alloc(0));

  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);
  const session = await UploadSession.create({
    _id: uploadId,
    galleryId,
    tempPath,
    originalName: name,
    mimeType,
    category,
    totalBytes: size,
    bytesReceived: 0,
    status: "in_progress",
    expiresAt,
  });

  return { uploadId: session._id, totalBytes: size };
}

/**
 * Append chunk to temp file. Validates magic bytes on first chunk.
 */
export async function appendChunk(uploadId, chunk, contentRange) {
  const session = await UploadSession.findById(uploadId);
  if (!session || session.status !== "in_progress") {
    const err = new Error("Upload session not found or not active");
    err.status = 404;
    throw err;
  }

  const start = session.bytesReceived;
  let rangeStart = start;
  let rangeEnd = start + chunk.length - 1;
  let total = session.totalBytes;

  if (contentRange) {
    const m = /bytes\s+(\d+)-(\d+)\/(\d+|\*)/i.exec(contentRange);
    if (m) {
      rangeStart = Number(m[1]);
      rangeEnd = Number(m[2]);
      if (m[3] !== "*") total = Number(m[3]);
    }
  }

  if (rangeStart !== session.bytesReceived) {
    const err = new Error(
      `Unexpected Content-Range start ${rangeStart}, expected ${session.bytesReceived}`
    );
    err.status = 409;
    throw err;
  }

  if (session.bytesReceived === 0 && chunk.length > 0) {
    const check = await validateFileBuffer(chunk.subarray(0, Math.min(chunk.length, 4100)), {
      expectedMime: session.mimeType,
      filename: session.originalName,
    });
    if (!check.ok) {
      const err = new Error(check.error || "Invalid file content");
      err.status = 400;
      throw err;
    }
  }

  await fsp.appendFile(session.tempPath, chunk);
  session.bytesReceived += chunk.length;
  if (total && total !== session.totalBytes) session.totalBytes = total;
  await session.save();

  const percent =
    session.totalBytes > 0
      ? Math.min(100, Math.round((session.bytesReceived / session.totalBytes) * 100))
      : 0;

  emit(session.galleryId, "upload:progress", {
    uploadId: session._id,
    phase: "uploading",
    bytesReceived: session.bytesReceived,
    totalBytes: session.totalBytes,
    percent,
  });

  return {
    bytesReceived: session.bytesReceived,
    totalBytes: session.totalBytes,
    percent,
    complete: session.bytesReceived >= session.totalBytes,
  };
}

async function uploadFileToDrive({ filePath, name, mimeType, parentId, appProperties }) {
  const drive = getDrive();
  const body = fs.createReadStream(filePath);
  const res = await drive.files.create({
    requestBody: {
      name,
      parents: [parentId],
      appProperties,
    },
    media: {
      mimeType,
      body,
    },
    fields: "id, name, size, mimeType",
    supportsAllDrives: false,
  });
  return res.data;
}

async function uploadBufferToDrive({ buffer, name, mimeType, parentId, appProperties }) {
  return withDriveRetry(async (drive) => {
    const res = await drive.files.create({
      requestBody: {
        name,
        parents: [parentId],
        appProperties,
      },
      media: {
        mimeType,
        body: Readable.from(buffer),
      },
      fields: "id, name, size, mimeType",
    });
    return res.data;
  });
}

export async function completeUpload(uploadId) {
  const session = await UploadSession.findById(uploadId);
  if (!session || session.status !== "in_progress") {
    const err = new Error("Upload session not found or not active");
    err.status = 404;
    throw err;
  }
  if (session.bytesReceived < session.totalBytes) {
    const err = new Error("Upload incomplete");
    err.status = 400;
    throw err;
  }

  emit(session.galleryId, "upload:progress", {
    uploadId: session._id,
    phase: "processing",
    bytesReceived: session.bytesReceived,
    totalBytes: session.totalBytes,
    percent: 100,
  });

  const gallery = await ensureGalleryFolders(session.galleryId);
  const folderKey = categoryFolderKey(session.category);
  const parentId = gallery.folderIds[folderKey];
  if (!parentId) {
    const err = new Error("Gallery folders not bootstrapped");
    err.status = 500;
    throw err;
  }

  // Hash original without mutating
  const hash = crypto.createHash("sha256");
  await new Promise((resolve, reject) => {
    const rs = fs.createReadStream(session.tempPath);
    rs.on("data", (d) => hash.update(d));
    rs.on("error", reject);
    rs.on("end", resolve);
  });
  const checksum = hash.digest("hex");

  // Dedupe active assets with same checksum
  const existing = await Asset.findOne({
    galleryId: session.galleryId,
    checksum,
    status: "active",
  });
  if (existing) {
    await cleanupSession(session, true);
    const asset = serializeAsset(existing);
    emit(session.galleryId, "upload:complete", { asset });
    emit(session.galleryId, "asset:added", { asset });
    return { asset, deduped: true };
  }

  const assetId = new mongoose.Types.ObjectId();
  const driveFile = await uploadFileToDrive({
    filePath: session.tempPath,
    name: session.originalName,
    mimeType: session.mimeType,
    parentId,
    appProperties: {
      galleryId: session.galleryId,
      category: session.category,
      assetId: String(assetId),
      checksum,
    },
  });

  let width = null;
  let height = null;
  let thumbnailDriveId = null;

  if (session.mimeType.startsWith("image/")) {
    emit(session.galleryId, "upload:progress", {
      uploadId: session._id,
      phase: "thumbnailing",
      bytesReceived: session.bytesReceived,
      totalBytes: session.totalBytes,
      percent: 100,
    });

    // Read a bounded slice for thumbs to avoid loading huge GIFs fully when possible.
    // For correctness of dimensions + first-frame thumb we still need the file;
    // Sharp with animated:false only decodes page 1.
    const originalBuf = await fsp.readFile(session.tempPath);
    const dims = await readImageDimensions(originalBuf);
    width = dims.width;
    height = dims.height;

    const thumb = await generateStaticThumbnail(originalBuf, session.mimeType);
    // originalBuf is independent of Drive file; we never write originalBuf back
    if (thumb.buffer && !thumb.skipped) {
      const thumbMeta = await uploadBufferToDrive({
        buffer: thumb.buffer,
        name: `thumb_${assetId}.webp`,
        mimeType: "image/webp",
        parentId: gallery.folderIds.thumbnails,
        appProperties: {
          galleryId: session.galleryId,
          category: "thumbnail",
          assetId: String(assetId),
        },
      });
      thumbnailDriveId = thumbMeta.id;
      if (thumb.width) width = thumb.width;
      if (thumb.height) height = thumb.height;
    }
  }

  const asset = await Asset.create({
    _id: assetId,
    galleryId: session.galleryId,
    driveFileId: driveFile.id,
    thumbnailDriveId,
    originalName: session.originalName,
    name: session.originalName,
    mimeType: session.mimeType,
    category: session.category,
    size: session.totalBytes,
    width,
    height,
    checksum,
    status: "active",
  });

  session.status = "completed";
  await session.save();
  await cleanupSession(session, true);

  const serialized = serializeAsset(asset);
  emit(session.galleryId, "upload:complete", { asset: serialized });
  emit(session.galleryId, "asset:added", { asset: serialized });

  return { asset: serialized, deduped: false };
}

export async function abortUpload(uploadId) {
  const session = await UploadSession.findById(uploadId);
  if (!session) {
    const err = new Error("Upload session not found");
    err.status = 404;
    throw err;
  }
  session.status = "aborted";
  await session.save();
  await cleanupSession(session, true);
  emit(session.galleryId, "upload:error", {
    uploadId: session._id,
    message: "Upload aborted",
  });
  return { ok: true };
}

async function cleanupSession(session, removeFile) {
  if (removeFile && session.tempPath) {
    try {
      await fsp.unlink(session.tempPath);
    } catch {
      /* ignore */
    }
  }
}

export async function moveDriveFile(fileId, newParentId, removeFromParents = []) {
  return withDriveRetry(async (drive) => {
    const meta = await drive.files.get({ fileId, fields: "parents" });
    const prev = meta.data.parents || [];
    const remove = removeFromParents.length ? removeFromParents : prev;
    return drive.files.update({
      fileId,
      addParents: newParentId,
      removeParents: remove.join(","),
      fields: "id, parents",
    });
  });
}

export async function deleteDriveFile(fileId) {
  if (!fileId) return;
  return withDriveRetry(async (drive) => {
    await drive.files.delete({ fileId });
  });
}

export async function downloadDriveFileStream(fileId) {
  return withDriveRetry(async (drive) => {
    const res = await drive.files.get(
      { fileId, alt: "media" },
      { responseType: "stream" }
    );
    return res.data;
  });
}
