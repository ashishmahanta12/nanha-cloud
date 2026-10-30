import sharp from "sharp";
import sanitizeHtml from "sanitize-html";

const THUMB_WIDTH = 480;

/**
 * Generate a static thumbnail buffer.
 * For GIFs: pages:1 / animated:false so only the first frame is used —
 * the original animated GIF is never modified by this function.
 */
export async function generateStaticThumbnail(inputBuffer, mimeType) {
  if (mimeType === "image/svg+xml") {
    return { buffer: null, width: null, height: null, skipped: true, reason: "svg" };
  }
  if (!mimeType?.startsWith("image/")) {
    return { buffer: null, width: null, height: null, skipped: true, reason: "non-image" };
  }

  try {
    // animated: false forces first-frame decode for GIF/WebP animations
    const pipeline = sharp(inputBuffer, {
      animated: false,
      pages: 1,
      failOn: "none",
    });
    const meta = await pipeline.metadata();
    const thumb = await sharp(inputBuffer, { animated: false, pages: 1, failOn: "none" })
      .rotate()
      .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toBuffer({ resolveWithObject: true });

    return {
      buffer: thumb.data,
      width: meta.width || null,
      height: meta.height || null,
      skipped: false,
      mimeType: "image/webp",
    };
  } catch (err) {
    return {
      buffer: null,
      width: null,
      height: null,
      skipped: true,
      reason: err.message,
    };
  }
}

/** Read dimensions without mutating / without decoding all GIF frames when possible */
export async function readImageDimensions(inputBuffer) {
  try {
    const meta = await sharp(inputBuffer, { animated: false, pages: 1, failOn: "none" }).metadata();
    return { width: meta.width || null, height: meta.height || null, pages: meta.pages || 1 };
  } catch {
    return { width: null, height: null, pages: null };
  }
}

export function sanitizeSvg(svgText) {
  return sanitizeHtml(svgText, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
      "svg",
      "g",
      "path",
      "circle",
      "rect",
      "ellipse",
      "line",
      "polyline",
      "polygon",
      "text",
      "tspan",
      "defs",
      "linearGradient",
      "radialGradient",
      "stop",
      "clipPath",
      "mask",
      "use",
      "symbol",
      "title",
      "desc",
    ]),
    allowedAttributes: false,
    allowVulnerableTags: false,
    disallowedTagsMode: "discard",
  });
}

/** Assert original buffer is unchanged after thumbnail generation (for tests) */
export function buffersEqual(a, b) {
  if (!a || !b || a.length !== b.length) return false;
  return Buffer.compare(a, b) === 0;
}
