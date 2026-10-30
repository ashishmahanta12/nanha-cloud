import mongoose from "mongoose";

const assetSchema = new mongoose.Schema(
  {
    galleryId: { type: String, required: true, index: true },
    driveFileId: { type: String, required: true, unique: true },
    thumbnailDriveId: { type: String, default: null },
    originalName: { type: String, required: true },
    name: { type: String, required: true },
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
    status: {
      type: String,
      enum: ["active", "trashed"],
      default: "active",
      index: true,
    },
    trashedAt: { type: Date, default: null },
    deletedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

assetSchema.index({ galleryId: 1, status: 1, createdAt: -1 });
assetSchema.index({ galleryId: 1, category: 1, status: 1 });

export const Asset = mongoose.models.Asset || mongoose.model("Asset", assetSchema);

export function serializeAsset(doc) {
  if (!doc) return null;
  const a = doc.toObject ? doc.toObject() : doc;
  return {
    id: String(a._id),
    galleryId: a.galleryId,
    name: a.name,
    originalName: a.originalName,
    mimeType: a.mimeType,
    category: a.category,
    size: a.size,
    width: a.width,
    height: a.height,
    status: a.status,
    createdAt: a.createdAt,
    updatedAt: a.updatedAt,
    trashedAt: a.trashedAt,
    contentUrl: `/api/cloud/assets/${a._id}/content`,
    thumbnailUrl: `/api/cloud/assets/${a._id}/thumbnail`,
    animated: a.category === "gif",
  };
}
