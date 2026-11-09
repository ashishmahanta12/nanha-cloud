import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { Router } from "express";
import { requireSession } from "../auth/requireSession.js";
import { asyncHandler } from "../middleware/errors.js";
import { Asset, serializeAsset } from "../models/Asset.js";
import { downloadDriveFileStream, backfillAssetThumbnail } from "../services/upload.js";
import { sanitizeSvg } from "../services/thumbnail.js";
import { apiLimiter } from "../middleware/rateLimit.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LOCAL_UPLOAD_DIR = path.resolve(__dirname, "../../../upload");

const router = Router();
// #region agent log
const AGENT_DEBUG_LOG = path.resolve(__dirname, "../../../.cursor/debug-3cf3ad.log");
let thumbInflight = 0;
function agentLog(payload) {
  try {
    fs.appendFileSync(
      AGENT_DEBUG_LOG,
      JSON.stringify({ sessionId: "3cf3ad", timestamp: Date.now(), ...payload }) + "\n"
    );
  } catch {
    /* ignore debug log failures */
  }
}
router.use((req, res, next) => {
  const isThumb = /\/[^/]+\/thumbnail\/?$/.test(req.path);
  if (!isThumb) return next();
  const started = Date.now();
  thumbInflight += 1;
  const peak = thumbInflight;
  agentLog({
    hypothesisId: "A-B-C",
    location: "assets.js:thumb-enter",
    message: "thumbnail request enter",
    data: { path: req.path, method: req.method, inflight: peak },
  });
  res.on("finish", () => {
    thumbInflight = Math.max(0, thumbInflight - 1);
    agentLog({
      hypothesisId: "A-B-C",
      location: "assets.js:thumb-finish",
      message: "thumbnail response finish",
      data: {
        path: req.path,
        status: res.statusCode,
        ms: Date.now() - started,
        inflightAfter: thumbInflight,
        peakInflight: peak,
      },
    });
  });
  next();
});
// #endregion
router.use(requireSession);
router.use(apiLimiter);

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const galleryId = req.session.galleryId;
    const status = req.query.status === "trashed" ? "trashed" : "active";
    const category = req.query.category;
    const q = (req.query.q || "").toString().trim();
    const sort = (req.query.sort || "date").toString();
    const order = req.query.order === "asc" ? 1 : -1;
    const page = Math.max(1, Number(req.query.page) || 1);
    const limit = Math.min(1000, Math.max(1, Number(req.query.limit) || 48));

    const filter = { galleryId, status };
    if (category && ["image", "gif", "video", "document"].includes(category)) {
      filter.category = category;
    }
    if (q) {
      filter.caption = { $regex: q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), $options: "i" };
    }

    // Timeline uses WhatsApp/captured time; fall back to createdAt for older rows
    let sortSpec = { capturedAt: order, createdAt: order };
    if (sort === "name") sortSpec = { caption: order, createdAt: -1 };
    else if (sort === "size") sortSpec = { size: order };
    else if (sort === "type") sortSpec = { mimeType: order, capturedAt: -1, createdAt: -1 };

    const [items, total] = await Promise.all([
      Asset.find(filter)
        .sort(sortSpec)
        .skip((page - 1) * limit)
        .limit(limit),
      Asset.countDocuments(filter),
    ]);

    res.json({
      items: items.map(serializeAsset),
      page,
      limit,
      total,
      pages: Math.ceil(total / limit) || 1,
    });
  })
);

/** Backfill missing thumbnails (esp. videos that only had SVG placeholders). */
router.post(
  "/backfill-thumbs",
  asyncHandler(async (req, res) => {
    const galleryId = req.session.galleryId;
    const category = req.body?.category; // optional: "video" | "image" | "gif"
    const filter = {
      galleryId,
      status: "active",
      $or: [{ thumbnailDriveId: null }, { thumbnailDriveId: { $exists: false } }],
    };
    if (category && ["image", "gif", "video"].includes(category)) {
      filter.category = category;
    } else {
      filter.category = { $in: ["image", "gif", "video"] };
    }

    const assets = await Asset.find(filter).sort({ capturedAt: 1 });
    const results = { total: assets.length, filled: 0, skipped: 0, failed: 0, errors: [] };

    for (const asset of assets) {
      try {
        const localCandidate = asset.originalName
          ? path.join(LOCAL_UPLOAD_DIR, asset.originalName)
          : null;
        const sourcePath =
          localCandidate && fs.existsSync(localCandidate) ? localCandidate : null;
        const out = await backfillAssetThumbnail(asset, { sourcePath });
        if (out.skipped) results.skipped += 1;
        else results.filled += 1;
      } catch (err) {
        results.failed += 1;
        results.errors.push({
          id: String(asset._id),
          name: asset.originalName,
          error: err.message,
        });
      }
    }

    res.json(results);
  })
);

router.patch(
  "/:id",
  asyncHandler(async (req, res) => {
    const asset = await Asset.findOne({
      _id: req.params.id,
      galleryId: req.session.galleryId,
    });
    if (!asset) return res.status(404).json({ error: "Asset not found" });

    if (typeof req.body?.caption === "string") {
      asset.caption = req.body.caption.slice(0, 2000);
    }
    if (typeof req.body?.name === "string") {
      // Display labels stay blank unless explicitly set; never required in gallery UI
      asset.name = req.body.name.slice(0, 200);
    }
    if (req.body?.capturedAt) {
      const d = new Date(req.body.capturedAt);
      if (!Number.isNaN(d.getTime())) asset.capturedAt = d;
    }
    await asset.save();
    res.json({ asset: serializeAsset(asset) });
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const asset = await Asset.findOne({
      _id: req.params.id,
      galleryId: req.session.galleryId,
    });
    if (!asset) return res.status(404).json({ error: "Asset not found" });
    res.json({ asset: serializeAsset(asset) });
  })
);

router.get(
  "/:id/content",
  asyncHandler(async (req, res) => {
    const asset = await Asset.findOne({
      _id: req.params.id,
      galleryId: req.session.galleryId,
    });
    if (!asset) return res.status(404).json({ error: "Asset not found" });

    if (asset.mimeType === "image/svg+xml") {
      const chunks = [];
      const stream = await downloadDriveFileStream(asset.driveFileId);
      await new Promise((resolve, reject) => {
        stream.on("data", (c) => chunks.push(c));
        stream.on("end", resolve);
        stream.on("error", reject);
      });
      const raw = Buffer.concat(chunks).toString("utf8");
      const clean = sanitizeSvg(raw);
      res.setHeader("Content-Type", "image/svg+xml; charset=utf-8");
      const dlName = asset.originalName || `${asset.category || "file"}.svg`;
      res.setHeader("Content-Disposition", `inline; filename="${encodeURIComponent(dlName)}"`);
      res.setHeader("Cache-Control", "private, max-age=3600");
      return res.send(clean);
    }

    const dlName = asset.originalName || `${asset.category || "file"}`;
    res.setHeader("Content-Type", asset.mimeType);
    res.setHeader(
      "Content-Disposition",
      `${req.query.download === "1" ? "attachment" : "inline"}; filename="${encodeURIComponent(dlName)}"`
    );
    res.setHeader("Cache-Control", "private, max-age=3600");
    if (asset.size) res.setHeader("Content-Length", String(asset.size));

    const stream = await downloadDriveFileStream(asset.driveFileId);
    stream.on("error", (err) => {
      console.error("Drive stream error", err.message);
      if (!res.headersSent) res.status(502).end();
      else res.destroy(err);
    });
    stream.pipe(res);
  })
);

router.get(
  "/:id/thumbnail",
  asyncHandler(async (req, res) => {
    const asset = await Asset.findOne({
      _id: req.params.id,
      galleryId: req.session.galleryId,
    });
    if (!asset) return res.status(404).json({ error: "Asset not found" });

    if (asset.thumbnailDriveId) {
      res.setHeader("Content-Type", "image/webp");
      res.setHeader("Cache-Control", "private, max-age=86400");
      // #region agent log
      const driveStarted = Date.now();
      let stream;
      try {
        stream = await downloadDriveFileStream(asset.thumbnailDriveId);
        agentLog({
          hypothesisId: "B",
          location: "assets.js:thumb-drive-ok",
          message: "drive thumb stream opened",
          data: {
            id: String(asset._id),
            thumbnailDriveId: asset.thumbnailDriveId,
            ms: Date.now() - driveStarted,
            inflight: thumbInflight,
          },
        });
      } catch (err) {
        agentLog({
          hypothesisId: "B",
          location: "assets.js:thumb-drive-fail",
          message: "drive thumb stream failed",
          data: {
            id: String(asset._id),
            thumbnailDriveId: asset.thumbnailDriveId,
            ms: Date.now() - driveStarted,
            err: err?.message || String(err),
            code: err?.code || err?.response?.status || null,
            inflight: thumbInflight,
          },
        });
        throw err;
      }
      // #endregion
      stream.on("error", (err) => {
        // #region agent log
        agentLog({
          hypothesisId: "B",
          location: "assets.js:thumb-stream-error",
          message: "drive thumb mid-stream error",
          data: {
            id: String(asset._id),
            err: err?.message || String(err),
            headersSent: res.headersSent,
          },
        });
        // #endregion
        if (!res.headersSent) res.status(502).end();
      });
      return stream.pipe(res);
    }

    // #region agent log
    agentLog({
      hypothesisId: "E",
      location: "assets.js:thumb-svg-fallback",
      message: "serving svg placeholder (no thumbnailDriveId)",
      data: { id: String(asset._id), category: asset.category },
    });
    // #endregion

    // Placeholder SVG for videos/docs / missing thumbs
    const label = asset.category === "gif" ? "GIF" : asset.category.toUpperCase().slice(0, 3);
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="480" height="360" viewBox="0 0 480 360">
      <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#F8C8DC"/><stop offset="100%" stop-color="#D4E8F8"/>
      </linearGradient></defs>
      <rect width="480" height="360" fill="url(#g)" rx="24"/>
      <text x="240" y="180" text-anchor="middle" font-family="Quicksand,sans-serif" font-size="28" fill="#5C4033">${label}</text>
    </svg>`;
    res.setHeader("Content-Type", "image/svg+xml");
    res.setHeader("Cache-Control", "private, max-age=300");
    res.send(svg);
  })
);

export default router;
