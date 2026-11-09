import { Router } from "express";
import { requireSession } from "../auth/requireSession.js";
import { asyncHandler } from "../middleware/errors.js";
import { uploadLimiter } from "../middleware/rateLimit.js";
import { validateUploadMeta } from "../services/validate.js";
import { initUpload, appendChunk, completeUpload, abortUpload } from "../services/upload.js";
import { ensureGalleryFolders } from "../drive/folders.js";
import { env } from "../config/env.js";

const router = Router();

router.use(requireSession);
router.use(uploadLimiter);

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const galleryId = req.session.galleryId;
    if (galleryId !== env.GALLERY_ID && galleryId !== req.session.galleryId) {
      return res.status(403).json({ error: "Forbidden" });
    }

    const meta = validateUploadMeta({
      name: req.body?.name,
      size: req.body?.size,
      mimeType: req.body?.mimeType,
    });
    if (!meta.ok) {
      return res.status(400).json({ error: meta.errors.join("; ") });
    }

    if (env.GOOGLE_REFRESH_TOKEN) {
      await ensureGalleryFolders(galleryId);
    }

    let capturedAt = null;
    if (req.body?.capturedAt) {
      const d = new Date(req.body.capturedAt);
      if (!Number.isNaN(d.getTime())) capturedAt = d;
    }

    const { uploadId, totalBytes } = await initUpload({
      galleryId,
      name: meta.name,
      size: meta.size,
      mimeType: meta.mimeType,
      category: meta.category,
      capturedAt,
    });

    res.status(201).json({ uploadId, totalBytes, mimeType: meta.mimeType, category: meta.category });
  })
);

router.put(
  "/:uploadId",
  asyncHandler(async (req, res) => {
    const chunks = [];
    for await (const c of req) chunks.push(c);
    const buffer = Buffer.concat(chunks);
    if (!buffer.length) {
      return res.status(400).json({ error: "Empty chunk" });
    }

    const result = await appendChunk(req.params.uploadId, buffer, req.headers["content-range"]);
    res.json(result);
  })
);

router.post(
  "/:uploadId/complete",
  asyncHandler(async (req, res) => {
    try {
      const result = await completeUpload(req.params.uploadId);
      res.json(result);
    } catch (err) {
      const { emitToGallery } = await import("../sockets/progress.js");
      emitToGallery(req.session.galleryId, "upload:error", {
        uploadId: req.params.uploadId,
        message: err.message,
      });
      throw err;
    }
  })
);

router.delete(
  "/:uploadId",
  asyncHandler(async (req, res) => {
    const result = await abortUpload(req.params.uploadId);
    res.json(result);
  })
);

export default router;
