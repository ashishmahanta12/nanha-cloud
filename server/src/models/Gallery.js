import mongoose from "mongoose";

const folderIdsSchema = new mongoose.Schema(
  {
    root: String,
    images: String,
    gifs: String,
    videos: String,
    documents: String,
    thumbnails: String,
    trash: String,
  },
  { _id: false }
);

const gallerySchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    displayName: { type: String, default: "Nanha Gallery" },
    rootFolderId: { type: String, default: null },
    folderIds: { type: folderIdsSchema, default: () => ({}) },
  },
  { timestamps: true }
);

export const Gallery = mongoose.models.Gallery || mongoose.model("Gallery", gallerySchema);
