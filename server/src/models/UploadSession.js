import mongoose from "mongoose";

const uploadSessionSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    galleryId: { type: String, required: true, index: true },
    driveResumableUri: { type: String, default: null },
    tempPath: { type: String, required: true },
    originalName: { type: String, required: true },
    mimeType: { type: String, required: true },
    category: {
      type: String,
      enum: ["image", "gif", "video", "document"],
      required: true,
    },
    totalBytes: { type: Number, required: true },
    bytesReceived: { type: Number, default: 0 },
    checksum: { type: String, default: null },
    capturedAt: { type: Date, default: null },
    status: {
      type: String,
      enum: ["in_progress", "completed", "aborted"],
      default: "in_progress",
      index: true,
    },
    expiresAt: { type: Date, required: true },
  },
  { timestamps: true }
);

uploadSessionSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

export const UploadSession =
  mongoose.models.UploadSession || mongoose.model("UploadSession", uploadSessionSchema);
