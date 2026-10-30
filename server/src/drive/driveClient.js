import { google } from "googleapis";
import { env } from "../config/env.js";

let driveSingleton = null;
let authSingleton = null;

export function getOAuth2Client() {
  if (authSingleton) return authSingleton;
  const auth = new google.auth.OAuth2(
    env.GOOGLE_CLIENT_ID,
    env.GOOGLE_CLIENT_SECRET,
    env.GOOGLE_REDIRECT_URI
  );
  if (env.GOOGLE_REFRESH_TOKEN) {
    auth.setCredentials({ refresh_token: env.GOOGLE_REFRESH_TOKEN });
  }
  authSingleton = auth;
  return auth;
}

export function getDrive() {
  if (driveSingleton) return driveSingleton;
  const auth = getOAuth2Client();
  driveSingleton = google.drive({ version: "v3", auth });
  return driveSingleton;
}

/** Reset singletons (tests) */
export function resetDriveClient() {
  driveSingleton = null;
  authSingleton = null;
}

export async function withDriveRetry(fn, { retries = 3, baseDelayMs = 400 } = {}) {
  let lastErr;
  for (let i = 0; i < retries; i++) {
    try {
      return await fn(getDrive());
    } catch (err) {
      lastErr = err;
      const status = err?.code || err?.response?.status;
      const retryable =
        status === 429 ||
        status === 500 ||
        status === 502 ||
        status === 503 ||
        status === 504 ||
        err?.message?.includes("ECONNRESET") ||
        err?.message?.includes("ETIMEDOUT");
      if (!retryable || i === retries - 1) throw err;
      const delay = baseDelayMs * Math.pow(2, i) + Math.random() * 100;
      await new Promise((r) => setTimeout(r, delay));
    }
  }
  throw lastErr;
}
