import { Router } from "express";
import { requireSession } from "../auth/requireSession.js";
import { asyncHandler } from "../middleware/errors.js";
import { Asset, serializeAsset } from "../models/Asset.js";
import { ensureGalleryFolders, categoryFolderKey } from "../drive/folders.js";
import { moveDriveFile } from "../services/upload.js";
import { emitToGallery } from "../sockets/progress.js";
import { apiLimiter } from "../middleware/rateLimit.js";

/**
 * Soft-trash: move the Drive file into the gallery's "Trash" folder.
 * Never uses Google Drive system trash and never permanently deletes.
 */
export const trashAsset = asyncHandler(async (req, res) => {
  const asset = await Asset.findOne({
    _id: req.params.id,
    galleryId: req.session.galleryId,
    status: "active",
  });
  if (!asset) return res.status(404).json({ error: "Asset not found" });

  const gallery = await ensureGalleryFolders(req.session.galleryId);
  const previousFolderKey = categoryFolderKey(asset.category);

  await moveDriveFile(asset.driveFileId, gallery.folderIds.trash);
  // Thumbnails stay in thumbnails/ so restore only moves the original

  asset.status = "trashed";
  asset.trashedAt = new Date();
  asset.previousFolderKey = previousFolderKey;
  asset.deletedAt = null;
  await asset.save();

  emitToGallery(req.session.galleryId, "asset:trashed", { assetId: String(asset._id) });
  res.json({ asset: serializeAsset(asset) });
});

/**
 * Restore: move the file back into Nanha Cloud's original category folder.
 */
export const restoreAsset = asyncHandler(async (req, res) => {
  const asset = await Asset.findOne({
    _id: req.params.id,
    galleryId: req.session.galleryId,
    status: "trashed",
  });
  if (!asset) return res.status(404).json({ error: "Asset not found" });

  const gallery = await ensureGalleryFolders(req.session.galleryId);
  const folderKey =
    asset.previousFolderKey && gallery.folderIds[asset.previousFolderKey]
      ? asset.previousFolderKey
      : categoryFolderKey(asset.category);

  await moveDriveFile(asset.driveFileId, gallery.folderIds[folderKey]);

  asset.status = "active";
  asset.trashedAt = null;
  asset.previousFolderKey = null;
  asset.deletedAt = null;
  await asset.save();

  const serialized = serializeAsset(asset);
  emitToGallery(req.session.galleryId, "asset:restored", { asset: serialized });
  res.json({ asset: serialized });
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

/** No-op kept for any old callers — files are never permanently deleted. */
export async function purgeExpiredTrash() {
  return 0;
}

export default router;
