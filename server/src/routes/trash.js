import { Router } from "express";
import { requireSession } from "../auth/requireSession.js";
import { asyncHandler } from "../middleware/errors.js";
import { Asset, serializeAsset } from "../models/Asset.js";
import { ensureGalleryFolders, categoryFolderKey } from "../drive/folders.js";
import { moveDriveFile, deleteDriveFile } from "../services/upload.js";
import { emitToGallery } from "../sockets/progress.js";
import { env } from "../config/env.js";
import { apiLimiter } from "../middleware/rateLimit.js";

export const trashAsset = asyncHandler(async (req, res) => {
  const asset = await Asset.findOne({
    _id: req.params.id,
    galleryId: req.session.galleryId,
    status: "active",
  });
  if (!asset) return res.status(404).json({ error: "Asset not found" });

  const gallery = await ensureGalleryFolders(req.session.galleryId);
  await moveDriveFile(asset.driveFileId, gallery.folderIds.trash);
  if (asset.thumbnailDriveId) {
    try {
      await moveDriveFile(asset.thumbnailDriveId, gallery.folderIds.trash);
    } catch {
      /* thumb move best-effort */
    }
  }

  asset.status = "trashed";
  asset.trashedAt = new Date();
  await asset.save();

  emitToGallery(req.session.galleryId, "asset:trashed", { assetId: String(asset._id) });
  res.json({ asset: serializeAsset(asset) });
});

export const restoreAsset = asyncHandler(async (req, res) => {
  const asset = await Asset.findOne({
    _id: req.params.id,
    galleryId: req.session.galleryId,
    status: "trashed",
  });
  if (!asset) return res.status(404).json({ error: "Asset not found" });

  const gallery = await ensureGalleryFolders(req.session.galleryId);
  const folderKey = categoryFolderKey(asset.category);
  await moveDriveFile(asset.driveFileId, gallery.folderIds[folderKey]);
  if (asset.thumbnailDriveId) {
    try {
      await moveDriveFile(asset.thumbnailDriveId, gallery.folderIds.thumbnails);
    } catch {
      /* ignore */
    }
  }

  asset.status = "active";
  asset.trashedAt = null;
  await asset.save();

  const serialized = serializeAsset(asset);
  emitToGallery(req.session.galleryId, "asset:restored", { asset: serialized });
  res.json({ asset: serialized });
});

export const permanentDeleteAsset = asyncHandler(async (req, res) => {
  const asset = await Asset.findOne({
    _id: req.params.id,
    galleryId: req.session.galleryId,
  });
  if (!asset) return res.status(404).json({ error: "Asset not found" });

  try {
    await deleteDriveFile(asset.driveFileId);
  } catch (err) {
    console.error("Drive delete original failed", err.message);
  }
  if (asset.thumbnailDriveId) {
    try {
      await deleteDriveFile(asset.thumbnailDriveId);
    } catch {
      /* ignore */
    }
  }

  const id = String(asset._id);
  await asset.deleteOne();
  emitToGallery(req.session.galleryId, "asset:deleted", { assetId: id });
  res.json({ ok: true, assetId: id });
});

const router = Router();
router.use(requireSession);
router.use(apiLimiter);

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const items = await Asset.find({
      galleryId: req.session.galleryId,
      status: "trashed",
    }).sort({ trashedAt: -1 });
    res.json({ items: items.map(serializeAsset) });
  })
);

router.post("/:id/trash", trashAsset);
router.post("/:id/restore", restoreAsset);
router.delete("/:id", permanentDeleteAsset);

/** Permanent purge of trash older than retention */
export async function purgeExpiredTrash() {
  const cutoff = new Date(Date.now() - env.TRASH_RETENTION_DAYS * 24 * 60 * 60 * 1000);
  const expired = await Asset.find({
    status: "trashed",
    trashedAt: { $lte: cutoff },
  }).limit(50);
  for (const asset of expired) {
    try {
      await deleteDriveFile(asset.driveFileId);
      if (asset.thumbnailDriveId) await deleteDriveFile(asset.thumbnailDriveId);
    } catch (err) {
      console.error("purge failed", asset._id, err.message);
    }
    const galleryId = asset.galleryId;
    const id = String(asset._id);
    await asset.deleteOne();
    emitToGallery(galleryId, "asset:deleted", { assetId: id });
  }
  return expired.length;
}

export default router;
