import { Router } from "express";
import { env } from "../config/env.js";
import { validateInvite, ensureSeedInvite } from "../auth/invite.js";
import { signSession, sessionCookieOptions } from "../auth/session.js";
import { optionalSession } from "../auth/requireSession.js";
import { asyncHandler } from "../middleware/errors.js";
import { authLimiter } from "../middleware/rateLimit.js";

const router = Router();

router.post(
  "/redeem",
  authLimiter,
  asyncHandler(async (req, res) => {
    const invite = req.body?.invite || req.body?.code || req.body?.accessCode;
    const result = await validateInvite(invite);
    if (!result.ok) {
      return res.status(401).json({ error: "Invalid invite or access code" });
    }

    // Ensure access code is also represented as an Invite for audit if desired
    if (result.via === "access_code" && env.GALLERY_ACCESS_CODE) {
      await ensureSeedInvite(env.GALLERY_ACCESS_CODE, result.galleryId);
    }

    const token = signSession({ galleryId: result.galleryId });
    res.cookie(env.COOKIE_NAME, token, sessionCookieOptions());
    res.json({ authenticated: true, galleryId: result.galleryId });
  })
);

router.get(
  "/me",
  optionalSession,
  asyncHandler(async (req, res) => {
    if (!req.session) {
      return res.json({ authenticated: false, galleryId: null });
    }
    res.json({ authenticated: true, galleryId: req.session.galleryId });
  })
);

router.post("/logout", (_req, res) => {
  res.clearCookie(env.COOKIE_NAME, { path: "/" });
  res.json({ ok: true });
});

export default router;
