import { fileTypeFromBuffer } from "file-type";
import path from "path";
import { env } from "../config/env.js";

const EXT_TO_MIME = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".bmp": "image/bmp",
  ".svg": "image/svg+xml",
  ".heic": "image/heic",
  ".heif": "image/heif",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".mov": "video/quicktime",
  ".mkv": "video/x-matroska",
  ".pdf": "application/pdf",
  ".doc": "application/msword",
  ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ".xls": "application/vnd.ms-excel",
  ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ".ppt": "application/vnd.ms-powerpoint",
  ".pptx": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  ".txt": "text/plain",
};

const OFFICE_ZIP_MIMES = new Set([
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
]);

export function sanitizeFilename(name) {
  const base = path.basename(String(name || "file")).replace(/[\u0000-\u001f]/g, "");
  const cleaned = base.replace(/[<>:"/\\|?*\x00-\x1f]/g, "_").trim() || "file";
  // Prevent path traversal leftovers
  return cleaned.replace(/^\.+/, "") || "file";
}

export function categoryFromMime(mime) {
  if (mime === "image/gif") return "gif";
  if (mime.startsWith("image/")) return "image";
  if (mime.startsWith("video/")) return "video";
  return "document";
}

export function mimeFromExtension(filename) {
  const ext = path.extname(filename || "").toLowerCase();
  return EXT_TO_MIME[ext] || null;
}

/**
 * Validate declared size/name before bytes arrive.
 */
export function validateUploadMeta({ name, size, mimeType }) {
  const errors = [];
  const safeName = sanitizeFilename(name);
  if (!safeName) errors.push("Invalid filename");
  const nSize = Number(size);
  if (!Number.isFinite(nSize) || nSize <= 0) errors.push("Invalid size");
  if (nSize > env.MAX_UPLOAD_BYTES) {
    errors.push(`File exceeds max size of ${env.MAX_UPLOAD_BYTES} bytes`);
  }

  const extMime = mimeFromExtension(safeName);
  let declared = (mimeType || "").toLowerCase().trim();
  if (!declared || declared === "application/octet-stream") {
    declared = extMime || declared;
  }

  if (!declared || !env.ALLOWED_MIME.includes(declared)) {
    // Allow if extension maps to allowed mime
    if (!extMime || !env.ALLOWED_MIME.includes(extMime)) {
      errors.push(`MIME type not allowed: ${declared || "unknown"}`);
    } else {
      declared = extMime;
    }
  }

  return {
    ok: errors.length === 0,
    errors,
    name: safeName,
    size: nSize,
    mimeType: declared,
    category: declared ? categoryFromMime(declared) : null,
  };
}

/**
 * Sniff magic bytes from a buffer (first chunk). Reject mismatches.
 * SVG/TXT/HEIC may lack reliable magic — fall back to extension carefully.
 */
export async function validateFileBuffer(buffer, { expectedMime, filename }) {
  const detected = await fileTypeFromBuffer(buffer);
  const extMime = mimeFromExtension(filename);

  if (detected) {
    let mime = detected.mime;
    // file-type often reports zip for docx/xlsx/pptx
    if (mime === "application/zip" && extMime && OFFICE_ZIP_MIMES.has(extMime)) {
      mime = extMime;
    }
    if (expectedMime && mime !== expectedMime) {
      // jpeg aliases
      if (!(mime === "image/jpeg" && expectedMime === "image/jpeg")) {
        // Allow heic variants
        const heicFamily = new Set(["image/heic", "image/heif"]);
        if (!(heicFamily.has(mime) && heicFamily.has(expectedMime))) {
          return {
            ok: false,
            error: `File signature (${mime}) does not match declared type (${expectedMime})`,
            detectedMime: mime,
          };
        }
      }
    }
    if (!env.ALLOWED_MIME.includes(mime) && !(mime === "application/zip" && OFFICE_ZIP_MIMES.has(expectedMime))) {
      return { ok: false, error: `Detected MIME not allowed: ${mime}`, detectedMime: mime };
    }
    return { ok: true, mimeType: expectedMime || mime, detectedMime: mime };
  }

  // No magic: SVG, TXT, some HEIC
  const fallback = expectedMime || extMime;
  const textLike = new Set(["image/svg+xml", "text/plain"]);
  const soft = new Set(["image/heic", "image/heif", "image/bmp"]);
  if (fallback && (textLike.has(fallback) || soft.has(fallback)) && env.ALLOWED_MIME.includes(fallback)) {
    // Basic SVG sanity
    if (fallback === "image/svg+xml") {
      const head = buffer.slice(0, Math.min(buffer.length, 2048)).toString("utf8");
      if (!/<svg[\s>]/i.test(head) && !head.trimStart().startsWith("<?xml")) {
        return { ok: false, error: "SVG content does not look like SVG" };
      }
    }
    return { ok: true, mimeType: fallback, detectedMime: null };
  }

  return { ok: false, error: "Unable to verify file type from content" };
}
