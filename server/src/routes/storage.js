import { Router } from "express";
import { requireSession } from "../auth/requireSession.js";
import { asyncHandler } from "../middleware/errors.js";
import { getStorageQuota } from "../services/quota.js";
import { emitToGallery } from "../sockets/progress.js";
import { apiLimiter } from "../middleware/rateLimit.js";
import { env } from "../config/env.js";

const router = Router();
router.use(requireSession);
router.use(apiLimiter);

router.get(
  "/",
  asyncHandler(async (req, res) => {
    if (!env.GOOGLE_REFRESH_TOKEN) {
      return res.status(503).json({
        error: "Google Drive is not configured",
        source: null,
      });
    }
    const quota = await getStorageQuota(req.session.galleryId);
    emitToGallery(req.session.galleryId, "storage:updated", quota);
    res.json(quota);
  })
);

export default router;
