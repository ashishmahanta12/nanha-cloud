import { describe, it, expect } from "vitest";
import {
  sanitizeFilename,
  validateUploadMeta,
  validateFileBuffer,
  categoryFromMime,
} from "../src/services/validate.js";

describe("validate", () => {
  it("sanitizes dangerous filenames", () => {
    expect(sanitizeFilename("../../etc/passwd")).toBe("passwd");
    expect(sanitizeFilename("my photo!.PNG")).toBe("my photo!.PNG");
  });

  it("categorizes mime types", () => {
    expect(categoryFromMime("image/gif")).toBe("gif");
    expect(categoryFromMime("image/png")).toBe("image");
    expect(categoryFromMime("video/mp4")).toBe("video");
    expect(categoryFromMime("application/pdf")).toBe("document");
  });

  it("rejects oversized uploads", () => {
    const r = validateUploadMeta({
      name: "big.png",
      size: Number.MAX_SAFE_INTEGER,
      mimeType: "image/png",
    });
    expect(r.ok).toBe(false);
  });

  it("accepts png meta", () => {
    const r = validateUploadMeta({
      name: "shot.png",
      size: 1024,
      mimeType: "image/png",
    });
    expect(r.ok).toBe(true);
    expect(r.category).toBe("image");
  });

  it("detects png magic bytes", async () => {
    // Minimal PNG header
    const png = Buffer.from([
      0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0x00, 0x00, 0x00, 0x0d, 0x49, 0x48, 0x44, 0x52,
    ]);
    const r = await validateFileBuffer(png, { expectedMime: "image/png", filename: "a.png" });
    expect(r.ok).toBe(true);
  });

  it("rejects mime mismatch", async () => {
    const png = Buffer.from([
      0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0x00, 0x00, 0x00, 0x0d, 0x49, 0x48, 0x44, 0x52,
    ]);
    const r = await validateFileBuffer(png, { expectedMime: "image/jpeg", filename: "a.jpg" });
    expect(r.ok).toBe(false);
  });
});
