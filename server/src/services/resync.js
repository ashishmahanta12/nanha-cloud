import mongoose from "mongoose";
import { Asset } from "../models/Asset.js";
import { ensureGalleryFolders } from "../drive/folders.js";
import { withDriveRetry } from "../drive/driveClient.js";
import { categoryFromMime, mimeFromExtension } from "./validate.js";
import { parseWhatsAppTimestamp } from "./whatsappMeta.js";

const FOLDER_CATEGORY = {
  images: "image",
  gifs: "gif",
  videos: "video",
  documents: "document",
};

async function listChildren(drive, folderId) {
  const files = [];
  let pageToken;
  do {
    const res = await drive.files.list({
      q: [
        `'${folderId}' in parents`,
        "trashed = false",
        "mimeType != 'application/vnd.google-apps.folder'",
      ].join(" and "),
      fields:
        "nextPageToken, files(id, name, mimeType, size, createdTime, modifiedTime, appProperties, imageMediaMetadata)",
      pageSize: 100,
      pageToken,
      spaces: "drive",
    });
    files.push(...(res.data.files || []));
    pageToken = res.data.nextPageToken;
  } while (pageToken);
  return files;
}

function resolveCategory(file, folderKey) {
  if (FOLDER_CATEGORY[folderKey]) return FOLDER_CATEGORY[folderKey];
  const mime = (file.mimeType || mimeFromExtension(file.name) || "").toLowerCase();
  return categoryFromMime(mime || "application/octet-stream");
}

function resolveAssetId(file) {
  const fromProps = file.appProperties?.assetId;
  if (fromProps && mongoose.Types.ObjectId.isValid(fromProps)) {
    return new mongoose.Types.ObjectId(fromProps);
  }
  return new mongoose.Types.ObjectId();
}

/**
 * Rebuild Mongo asset index from Drive gallery folders.
 * Recovers uploads after an in-memory DB wipe / restart.
 */
export async function resyncGalleryFromDrive(galleryId) {
  const gallery = await ensureGalleryFolders(galleryId);
  const folderIds = gallery.folderIds || {};

  return withDriveRetry(async (drive) => {
    const thumbFiles = folderIds.thumbnails
      ? await listChildren(drive, folderIds.thumbnails)
      : [];
    const thumbsByAssetId = new Map();
    for (const t of thumbFiles) {
      const aid = t.appProperties?.assetId || t.name?.match(/^thumb_([a-f0-9]{24})\./i)?.[1];
      if (aid) thumbsByAssetId.set(aid, t.id);
    }

    let created = 0;
    let updated = 0;
    let skipped = 0;

    const sources = [
      ["images", folderIds.images, "active"],
      ["gifs", folderIds.gifs, "active"],
      ["videos", folderIds.videos, "active"],
      ["documents", folderIds.documents, "active"],
      ["trash", folderIds.trash, "trashed"],
    ];

    for (const [folderKey, folderId, status] of sources) {
      if (!folderId) continue;
      const files = await listChildren(drive, folderId);
      for (const file of files) {
        // Skip thumbnail binaries that ended up in Trash from older builds
        if (file.name?.startsWith("thumb_") && file.mimeType === "image/webp") {
          skipped += 1;
          continue;
        }

        const existing = await Asset.findOne({ driveFileId: file.id });
        const category = resolveCategory(file, folderKey);
        const mime =
          file.mimeType ||
          mimeFromExtension(file.name) ||
          "application/octet-stream";
        const size = Number(file.size) || 0;
        const width = file.imageMediaMetadata?.width ?? null;
        const height = file.imageMediaMetadata?.height ?? null;
        const assetId = existing?._id || resolveAssetId(file);
        const thumbnailDriveId =
          existing?.thumbnailDriveId ||
          thumbsByAssetId.get(String(assetId)) ||
          null;

        const fromWa = parseWhatsAppTimestamp(file.name);
        const payload = {
          galleryId,
          driveFileId: file.id,
          thumbnailDriveId,
          originalName: file.name || "file",
          // Display name stays blank — captions are user-edited separately.
          // Never copy Drive/WhatsApp filenames into the gallery label.
          name: "",
          caption: existing?.caption ?? "",
          mimeType: mime,
          category,
          size,
          width: existing?.width ?? width,
          height: existing?.height ?? height,
          checksum: file.appProperties?.checksum || existing?.checksum || null,
          capturedAt:
            existing?.capturedAt ||
            fromWa ||
            (file.createdTime ? new Date(file.createdTime) : new Date()),
          status,
          trashedAt:
            status === "trashed"
              ? existing?.trashedAt || (file.modifiedTime ? new Date(file.modifiedTime) : new Date())
              : null,
          previousFolderKey:
            status === "trashed"
              ? existing?.previousFolderKey ||
                (category === "gif"
                  ? "gifs"
                  : category === "image"
                    ? "images"
                    : category === "video"
                      ? "videos"
                      : "documents")
              : null,
        };

        if (existing) {
          Object.assign(existing, payload);
          await existing.save();
          updated += 1;
        } else {
          await Asset.create({
            _id: assetId,
            ...payload,
            createdAt: file.createdTime ? new Date(file.createdTime) : undefined,
          });
          created += 1;
        }
      }
    }

    return { created, updated, skipped };
  });
}
