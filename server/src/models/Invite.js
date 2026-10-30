import mongoose from "mongoose";

const inviteSchema = new mongoose.Schema(
  {
    tokenHash: { type: String, required: true, unique: true },
    galleryId: { type: String, required: true, index: true },
    label: { type: String, default: "default" },
    revoked: { type: Boolean, default: false },
    expiresAt: { type: Date, default: null },
    lastUsedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

export const Invite = mongoose.models.Invite || mongoose.model("Invite", inviteSchema);
