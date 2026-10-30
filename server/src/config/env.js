import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const DEFAULT_MIME = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "image/bmp",
  "image/svg+xml",
  "image/heic",
  "image/heif",
  "video/mp4",
  "video/webm",
  "video/quicktime",
  "video/x-matroska",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.ms-powerpoint",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "text/plain",
];

export function loadEnv({ strict = true } = {}) {
  const NODE_ENV = process.env.NODE_ENV || "development";
  const isTest = NODE_ENV === "test";

  const SESSION_SECRET =
    process.env.SESSION_SECRET ||
    (isTest || !strict ? "test-session-secret-at-least-32-chars!!" : null);

  if (strict && !isTest) {
    if (!SESSION_SECRET || SESSION_SECRET.length < 32) {
      throw new Error("SESSION_SECRET must be set and at least 32 characters");
    }
  }

  const allowedMime = (process.env.ALLOWED_MIME || DEFAULT_MIME.join(","))
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  return {
    PORT: Number(process.env.PORT || 8080),
    NODE_ENV,
    PUBLIC_BASE_URL: process.env.PUBLIC_BASE_URL || `http://localhost:${process.env.PORT || 8080}`,
    MONGODB_URI: process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/nanha-cloud",
    SESSION_SECRET: SESSION_SECRET || "dev-session-secret-at-least-32-chars!",
    GALLERY_ID: process.env.GALLERY_ID || "nanhi-bacchi",
    GALLERY_ACCESS_CODE: process.env.GALLERY_ACCESS_CODE || "",
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || "",
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET || "",
    GOOGLE_REDIRECT_URI:
      process.env.GOOGLE_REDIRECT_URI || "http://localhost:8080/oauth2callback",
    GOOGLE_REFRESH_TOKEN: process.env.GOOGLE_REFRESH_TOKEN || "",
    MAX_UPLOAD_BYTES: Number(process.env.MAX_UPLOAD_BYTES || 524288000),
    ALLOWED_MIME: allowedMime,
    COOKIE_NAME: process.env.COOKIE_NAME || "nanha_session",
    COOKIE_MAX_AGE_DAYS: Number(process.env.COOKIE_MAX_AGE_DAYS || 30),
    TRASH_RETENTION_DAYS: Number(process.env.TRASH_RETENTION_DAYS || 30),
    STATIC_DIR: path.resolve(__dirname, "../../../nanha-surprise"),
    TMP_DIR: path.resolve(__dirname, "../../uploads/tmp"),
  };
}

/** Mutable env snapshot — call reloadEnv() after changing process.env in tests */
export const env = loadEnv({ strict: false });

export function reloadEnv() {
  Object.assign(env, loadEnv({ strict: false }));
  return env;
}
