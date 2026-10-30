import { Router } from "express";
import { requireSession } from "../auth/requireSession.js";
import { asyncHandler } from "../middleware/errors.js";
import { Asset, serializeAsset } from "../models/Asset.js";
import { downloadDriveFileStream } from "../services/upload.js";
import { sanitizeSvg } from "../services/thumbnail.js";
import { apiLimiter } from "../middleware/rateLimit.js";

const router = Router();
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
    const limit = Math.min(100, Math.max(1, Number(req.query.limit) || 48));

    const filter = { galleryId, status };
    if (category && ["image", "gif", "video", "document"].includes(category)) {
      filter.category = category;
    }
    if (q) {
      filter.name = { $regex: q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), $options: "i" };
    }

    let sortSpec = { createdAt: order };
    if (sort === "name") sortSpec = { name: order };
    else if (sort === "size") sortSpec = { size: order };
    else if (sort === "type") sortSpec = { mimeType: order, createdAt: -1 };

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
      res.setHeader("Content-Disposition", `inline; filename="${encodeURIComponent(asset.name)}"`);
      res.setHeader("Cache-Control", "private, max-age=3600");
      return res.send(clean);
    }

    res.setHeader("Content-Type", asset.mimeType);
    res.setHeader(
      "Content-Disposition",
      `${req.query.download === "1" ? "attachment" : "inline"}; filename="${encodeURIComponent(asset.name)}"`
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
      const stream = await downloadDriveFileStream(asset.thumbnailDriveId);
      stream.on("error", () => {
        if (!res.headersSent) res.status(502).end();
      });
      return stream.pipe(res);
    }

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
