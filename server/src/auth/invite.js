import crypto from "crypto";
import { Invite } from "../models/Invite.js";
import { env } from "../config/env.js";

export function hashToken(token) {
  return crypto.createHash("sha256").update(String(token), "utf8").digest("hex");
}

export async function validateInvite(rawToken) {
  if (!rawToken || typeof rawToken !== "string") {
    return { ok: false, reason: "missing" };
  }
  const token = rawToken.trim();
  if (!token) return { ok: false, reason: "missing" };

  // Shared access code (convenience for private gift links)
  if (env.GALLERY_ACCESS_CODE && token === env.GALLERY_ACCESS_CODE) {
    return { ok: true, galleryId: env.GALLERY_ID, via: "access_code" };
  }

  const tokenHash = hashToken(token);
  const invite = await Invite.findOne({ tokenHash });
  if (!invite || invite.revoked) {
    return { ok: false, reason: "invalid" };
  }
  if (invite.expiresAt && invite.expiresAt.getTime() < Date.now()) {
    return { ok: false, reason: "expired" };
  }

  invite.lastUsedAt = new Date();
  await invite.save();

  return { ok: true, galleryId: invite.galleryId, via: "invite" };
}

export async function ensureSeedInvite(plainToken, galleryId) {
  if (!plainToken) return null;
  const tokenHash = hashToken(plainToken);
  let invite = await Invite.findOne({ tokenHash });
  if (!invite) {
    invite = await Invite.create({
      tokenHash,
      galleryId,
      label: "seed",
    });
  }
  return invite;
}
