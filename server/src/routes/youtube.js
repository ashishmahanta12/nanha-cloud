import { Router } from "express";
import { asyncHandler } from "../middleware/errors.js";
import { apiLimiter } from "../middleware/rateLimit.js";
import { fetchPlaylistTracks } from "../services/youtube.js";

const router = Router();
router.use(apiLimiter);

router.get(
  "/playlist",
  asyncHandler(async (_req, res) => {
    try {
      const { tracks, playlistId } = await fetchPlaylistTracks();
      res.json({ tracks, playlistId });
    } catch (e) {
      const status = e.status || 500;
      return res.status(status).json({
        error: e.message || "YouTube playlist error",
        code: e.code || null,
        tracks: [],
      });
    }
  })
);

export default router;
