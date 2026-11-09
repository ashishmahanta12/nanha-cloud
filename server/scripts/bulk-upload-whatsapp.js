/**
 * Bulk-import WhatsApp media from ../upload into Nanha Cloud.
 * Orders by filename timestamps (IMG/VID-YYYYMMDD-WAxxxx).
 * Captions stay blank; original names are stored only server-side.
 *
 * Usage: node scripts/bulk-upload-whatsapp.js
 */
import fs from "fs";
import fsp from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { loadEnv } from "../src/config/env.js";
import { connectMongo } from "../src/db/mongo.js";
import { ensureGalleryFolders } from "../src/drive/folders.js";
import { ensureSeedInvite } from "../src/auth/invite.js";
import { Asset } from "../src/models/Asset.js";
import { initUpload, appendChunk, completeUpload } from "../src/services/upload.js";
import { validateUploadMeta, mimeFromExtension } from "../src/services/validate.js";
import { parseWhatsAppTimestamp } from "../src/services/whatsappMeta.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const UPLOAD_DIR = path.resolve(
  process.argv[2] ? path.resolve(process.cwd(), process.argv[2]) : path.resolve(__dirname, "../../upload")
);
const CONCURRENCY = 2;
const MEDIA_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".bmp", ".mp4", ".webm", ".mov"]);

function sortKey(filename) {
  const ts = parseWhatsAppTimestamp(filename);
  if (ts) return ts.getTime();
  return Number.MAX_SAFE_INTEGER;
}

async function listMediaFiles() {
  const entries = await fsp.readdir(UPLOAD_DIR);
  const files = entries.filter((name) => {
    const ext = path.extname(name).toLowerCase();
    return MEDIA_EXT.has(ext) && !name.startsWith(".");
  });
  files.sort((a, b) => {
    const da = sortKey(a) - sortKey(b);
    if (da !== 0) return da;
    return a.localeCompare(b, undefined, { numeric: true });
  });
  return files;
}

async function uploadOne(galleryId, filePath, originalName) {
  const stat = await fsp.stat(filePath);
  const mimeGuess = mimeFromExtension(originalName) || "application/octet-stream";
  const meta = validateUploadMeta({
    name: originalName,
    size: stat.size,
    mimeType: mimeGuess,
  });
  if (!meta.ok) {
    throw new Error(meta.errors.join("; "));
  }

  const capturedAt = parseWhatsAppTimestamp(originalName) || new Date(stat.mtimeMs);
  const { uploadId, totalBytes } = await initUpload({
    galleryId,
    name: meta.name,
    size: meta.size,
    mimeType: meta.mimeType,
    category: meta.category,
    capturedAt,
  });

  const CHUNK = 512 * 1024;
  const fh = await fsp.open(filePath, "r");
  try {
    let offset = 0;
    const buf = Buffer.alloc(CHUNK);
    while (offset < totalBytes) {
      const { bytesRead } = await fh.read(buf, 0, Math.min(CHUNK, totalBytes - offset), offset);
      if (!bytesRead) break;
      const chunk = buf.subarray(0, bytesRead);
      const contentRange = `bytes ${offset}-${offset + bytesRead - 1}/${totalBytes}`;
      const result = await appendChunk(uploadId, Buffer.from(chunk), contentRange);
      offset = result.bytesReceived;
    }
  } finally {
    await fh.close();
  }

  return completeUpload(uploadId);
}

async function alreadyImported(galleryId, originalName) {
  const hit = await Asset.findOne({
    galleryId,
    originalName,
    status: { $in: ["active", "trashed"] },
  }).select("_id");
  return !!hit;
}

async function runPool(items, worker, concurrency) {
  let i = 0;
  let ok = 0;
  let skipped = 0;
  let failed = 0;
  const errors = [];

  async function next() {
    while (i < items.length) {
      const idx = i++;
      const item = items[idx];
      try {
        const result = await worker(item, idx);
        if (result === "skipped") skipped += 1;
        else ok += 1;
      } catch (err) {
        failed += 1;
        errors.push({ file: item, error: err.message || String(err) });
        console.error(`[fail] ${item}: ${err.message || err}`);
      }
      if ((idx + 1) % 10 === 0 || idx + 1 === items.length) {
        console.log(
          `[progress] ${idx + 1}/${items.length} · ok=${ok} skip=${skipped} fail=${failed}`
        );
      }
    }
  }

  await Promise.all(Array.from({ length: concurrency }, () => next()));
  return { ok, skipped, failed, errors };
}

async function main() {
  const env = loadEnv({ strict: true });
  if (!fs.existsSync(UPLOAD_DIR)) {
    throw new Error(`Upload folder not found: ${UPLOAD_DIR}`);
  }

  await connectMongo(env.MONGODB_URI);
  if (env.GALLERY_ACCESS_CODE) {
    await ensureSeedInvite(env.GALLERY_ACCESS_CODE, env.GALLERY_ID);
  }
  await ensureGalleryFolders(env.GALLERY_ID);

  const files = await listMediaFiles();
  console.log(`[bulk] ${files.length} media files in ${UPLOAD_DIR}`);
  console.log(`[bulk] gallery=${env.GALLERY_ID} concurrency=${CONCURRENCY}`);

  const result = await runPool(
    files,
    async (name) => {
      if (await alreadyImported(env.GALLERY_ID, name)) {
        return "skipped";
      }
      const full = path.join(UPLOAD_DIR, name);
      const done = await uploadOne(env.GALLERY_ID, full, name);
      if (done.deduped) return "skipped";
      return "ok";
    },
    CONCURRENCY
  );

  console.log(
    `[bulk] done · uploaded=${result.ok} skipped=${result.skipped} failed=${result.failed}`
  );
  if (result.errors.length) {
    const logPath = path.join(__dirname, "bulk-upload-errors.json");
    await fsp.writeFile(logPath, JSON.stringify(result.errors, null, 2));
    console.log(`[bulk] errors written to ${logPath}`);
  }

  process.exit(result.failed ? 1 : 0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
