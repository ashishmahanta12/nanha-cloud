import { spawn } from "child_process";
import fs from "fs";
import fsp from "fs/promises";
import os from "os";
import path from "path";
import sharp from "sharp";

const THUMB_WIDTH = 480;

function run(cmd, args, { timeoutMs = 120000 } = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, { windowsHide: true });
    const chunks = [];
    const errChunks = [];
    const timer = setTimeout(() => {
      child.kill("SIGKILL");
      reject(new Error(`${cmd} timed out`));
    }, timeoutMs);
    child.stdout.on("data", (d) => chunks.push(d));
    child.stderr.on("data", (d) => errChunks.push(d));
    child.on("error", (err) => {
      clearTimeout(timer);
      reject(err);
    });
    child.on("close", (code) => {
      clearTimeout(timer);
      if (code === 0) resolve(Buffer.concat(chunks));
      else {
        const errText = Buffer.concat(errChunks).toString("utf8").slice(-500);
        reject(new Error(`${cmd} exited ${code}: ${errText}`));
      }
    });
  });
}

/**
 * Grab a still frame from a video file path using ffmpeg, return WebP buffer.
 */
export async function generateVideoThumbnailFromPath(videoPath) {
  const tmpDir = await fsp.mkdtemp(path.join(os.tmpdir(), "nanha-vthumb-"));
  const framePath = path.join(tmpDir, "frame.jpg");
  try {
    // Prefer ~1s in (avoids black intros); fall back to start.
    const attempts = [
      ["-y", "-ss", "1", "-i", videoPath, "-frames:v", "1", "-q:v", "2", framePath],
      ["-y", "-ss", "0", "-i", videoPath, "-frames:v", "1", "-q:v", "2", framePath],
    ];
    let lastErr = null;
    for (const args of attempts) {
      try {
        await run("ffmpeg", args, { timeoutMs: 90000 });
        if (fs.existsSync(framePath) && (await fsp.stat(framePath)).size > 0) {
          lastErr = null;
          break;
        }
      } catch (err) {
        lastErr = err;
      }
    }
    if (lastErr || !fs.existsSync(framePath)) {
      return {
        buffer: null,
        width: null,
        height: null,
        skipped: true,
        reason: lastErr?.message || "no frame",
      };
    }

    const frame = await fsp.readFile(framePath);
    const thumb = await sharp(frame)
      .rotate()
      .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toBuffer({ resolveWithObject: true });
    const meta = await sharp(frame).metadata();

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
  } finally {
    await fsp.rm(tmpDir, { recursive: true, force: true }).catch(() => {});
  }
}
