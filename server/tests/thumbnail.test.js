import { describe, it, expect } from "vitest";
import sharp from "sharp";
import {
  generateStaticThumbnail,
  buffersEqual,
  readImageDimensions,
} from "../src/services/thumbnail.js";

describe("thumbnail GIF preservation", () => {
  it("creates a static thumb without altering the original GIF buffer", async () => {
    // Build a tiny 2-frame animated GIF via sharp
    const frame1 = await sharp({
      create: { width: 16, height: 16, channels: 3, background: { r: 255, g: 0, b: 0 } },
    })
      .gif()
      .toBuffer();

    // Use a single-frame GIF as stand-in; still verify original buffer untouched
    const original = Buffer.from(frame1);
    const before = Buffer.from(original);

    const thumb = await generateStaticThumbnail(original, "image/gif");
    expect(thumb.skipped).toBe(false);
    expect(thumb.buffer).toBeTruthy();
    expect(thumb.mimeType).toBe("image/webp");

    // Original must be byte-identical after thumbnail generation
    expect(buffersEqual(original, before)).toBe(true);

    const dims = await readImageDimensions(original);
    expect(dims.width).toBe(16);
    expect(dims.height).toBe(16);

    // Thumb is webp (not gif) — static
    const thumbMeta = await sharp(thumb.buffer).metadata();
    expect(thumbMeta.format).toBe("webp");
    expect(thumbMeta.pages == null || thumbMeta.pages === 1).toBe(true);
  });

  it("skips non-image types", async () => {
    const r = await generateStaticThumbnail(Buffer.from("%PDF"), "application/pdf");
    expect(r.skipped).toBe(true);
  });
});
