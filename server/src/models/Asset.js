import mongoose from "mongoose";

const assetSchema = new mongoose.Schema(
  {
    galleryId: { type: String, required: true, index: true },
    driveFileId: { type: String, required: true, unique: true },
    thumbnailDriveId: { type: String, default: null },
    originalName: { type: String, required: true },
    /** Display label — kept blank; captions live in `caption` */
    name: { type: String, default: "" },
    /** User-editable description shown under the media (starts blank) */
    caption: { type: String, default: "" },
    mimeType: { type: String, required: true },
    category: {
      type: String,
      enum: ["image", "gif", "video", "document"],
      required: true,
      index: true,
    },
    size: { type: Number, required: true },
    width: { type: Number, default: null },
    height: { type: Number, default: null },
    checksum: { type: String, default: null, index: true },
    /** Media capture / WhatsApp filename timestamp — used for timeline order */
    capturedAt: { type: Date, default: null, index: true },
    status: {
      type: String,
      enum: ["active", "trashed"],
      default: "active",
      index: true,
    },
    trashedAt: { type: Date, default: null },
    /** Category folder key before trash (images|gifs|videos|documents) for restore */
    previousFolderKey: { type: String, default: null },
    deletedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

assetSchema.index({ galleryId: 1, status: 1, createdAt: -1 });
assetSchema.index({ galleryId: 1, status: 1, capturedAt: -1 });
assetSchema.index({ galleryId: 1, category: 1, status: 1 });

export const Asset = mongoose.models.Asset || mongoose.model("Asset", assetSchema);

function downloadNameFor(a) {
  const original = (a.originalName || "").trim();
  if (original) return original;
  const ext =
    a.mimeType === "image/jpeg"
      ? ".jpg"
      : a.mimeType === "image/png"
        ? ".png"
        : a.mimeType === "image/gif"
          ? ".gif"
          : a.mimeType === "image/webp"
            ? ".webp"
            : a.mimeType === "video/mp4"
              ? ".mp4"
              : a.mimeType === "video/webm"
                ? ".webm"
                : a.category === "video"
                  ? ".mp4"
                  : a.category === "gif"
                    ? ".gif"
                    : ".bin";
  return `${a.category || "file"}-${String(a._id).slice(-8)}${ext}`;
}

export function serializeAsset(doc) {
  if (!doc) return null;
  const a = doc.toObject ? doc.toObject() : doc;
  const capturedAt = a.capturedAt || a.createdAt || null;
  return {
    id: String(a._id),
    galleryId: a.galleryId,
    name: a.name || "",
    caption: a.caption || "",
    // For Save As only — never shown in gallery/timeline captions
    downloadName: downloadNameFor(a),
    mimeType: a.mimeType,
    category: a.category,
    size: a.size,
    width: a.width,
    height: a.height,
    status: a.status,
    capturedAt,
    createdAt: capturedAt || a.createdAt,
    updatedAt: a.updatedAt,
    trashedAt: a.trashedAt,
    previousFolderKey: a.previousFolderKey || null,
    contentUrl: `/api/cloud/assets/${a._id}/content`,
    thumbnailUrl: `/api/cloud/assets/${a._id}/thumbnail`,
    animated: a.category === "gif",
  };
}
