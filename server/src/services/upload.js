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
import { generateVideoThumbnailFromPath } from "./videoThumb.js";
import { getIo } from "../sockets/progress.js";
import { parseWhatsAppTimestamp } from "./whatsappMeta.js";

function emit(galleryId, event, payload) {
  try {
    const io = getIo();
    if (io) io.of("/cloud").to(`gallery:${galleryId}`).emit(event, payload);
  } catch {
    /* sockets optional during tests */
  }
}

export async function initUpload({ galleryId, name, size, mimeType, category, capturedAt }) {
  await fsp.mkdir(env.TMP_DIR, { recursive: true });
  const uploadId = uuidv4();
  const tempPath = path.join(env.TMP_DIR, `${uploadId}.part`);
  await fsp.writeFile(tempPath, Buffer.alloc(0));

  const fromName = parseWhatsAppTimestamp(name);
  const captured =
    capturedAt instanceof Date && !Number.isNaN(capturedAt.getTime())
      ? capturedAt
      : fromName;

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
    capturedAt: captured || null,
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

  const needsThumb =
    session.mimeType.startsWith("image/") || session.mimeType.startsWith("video/");
  if (needsThumb) {
    emit(session.galleryId, "upload:progress", {
      uploadId: session._id,
      phase: "thumbnailing",
      bytesReceived: session.bytesReceived,
      totalBytes: session.totalBytes,
      percent: 100,
    });
  }

  if (session.mimeType.startsWith("image/")) {
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
  } else if (session.mimeType.startsWith("video/")) {
    const thumb = await generateVideoThumbnailFromPath(session.tempPath);
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

  const capturedAt =
    session.capturedAt ||
    parseWhatsAppTimestamp(session.originalName) ||
    new Date();

  const asset = await Asset.create({
    _id: assetId,
    galleryId: session.galleryId,
    driveFileId: driveFile.id,
    thumbnailDriveId,
    originalName: session.originalName,
    name: "",
    caption: "",
    mimeType: session.mimeType,
    category: session.category,
    size: session.totalBytes,
    width,
    height,
    checksum,
    capturedAt,
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

async function downloadDriveFileToPath(fileId, destPath) {
  const stream = await downloadDriveFileStream(fileId);
  await new Promise((resolve, reject) => {
    const ws = fs.createWriteStream(destPath);
    stream.on("error", reject);
    ws.on("error", reject);
    ws.on("finish", resolve);
    stream.pipe(ws);
  });
}

/**
 * Generate + attach a missing thumbnail for an existing asset (images & videos).
 * Prefers a local sourcePath when provided (faster than Drive download).
 */
export async function backfillAssetThumbnail(asset, { sourcePath = null } = {}) {
  if (!asset) throw new Error("Asset required");
  if (asset.thumbnailDriveId) {
    return { asset: serializeAsset(asset), skipped: true, reason: "already-has-thumb" };
  }

  const gallery = await ensureGalleryFolders(asset.galleryId);
  const parentId = gallery.folderIds.thumbnails;
  if (!parentId) throw new Error("Thumbnails folder missing");

  await fsp.mkdir(env.TMP_DIR, { recursive: true });
  const tmpDir = await fsp.mkdtemp(path.join(env.TMP_DIR, "rethumb-"));
  const safeName = path.basename(asset.originalName || "media.bin") || "media.bin";
  const localPath = sourcePath || path.join(tmpDir, safeName);
  let cleanupLocal = !sourcePath;

  try {
    if (!sourcePath) {
      await downloadDriveFileToPath(asset.driveFileId, localPath);
    }

    let thumb;
    if (asset.mimeType?.startsWith("image/") || asset.category === "image" || asset.category === "gif") {
      const buf = await fsp.readFile(localPath);
      thumb = await generateStaticThumbnail(buf, asset.mimeType);
      if (thumb.width) asset.width = thumb.width;
      if (thumb.height) asset.height = thumb.height;
    } else if (asset.mimeType?.startsWith("video/") || asset.category === "video") {
      thumb = await generateVideoThumbnailFromPath(localPath);
      if (thumb.width) asset.width = thumb.width;
      if (thumb.height) asset.height = thumb.height;
    } else {
      return { asset: serializeAsset(asset), skipped: true, reason: "unsupported" };
    }

    if (!thumb?.buffer || thumb.skipped) {
      return {
        asset: serializeAsset(asset),
        skipped: true,
        reason: thumb?.reason || "thumb-failed",
      };
    }

    const thumbMeta = await uploadBufferToDrive({
      buffer: thumb.buffer,
      name: `thumb_${asset._id}.webp`,
      mimeType: "image/webp",
      parentId,
      appProperties: {
        galleryId: asset.galleryId,
        category: "thumbnail",
        assetId: String(asset._id),
      },
    });
    asset.thumbnailDriveId = thumbMeta.id;
    await asset.save();
    return { asset: serializeAsset(asset), skipped: false };
  } finally {
    if (cleanupLocal) {
      await fsp.rm(tmpDir, { recursive: true, force: true }).catch(() => {});
    }
  }
}
