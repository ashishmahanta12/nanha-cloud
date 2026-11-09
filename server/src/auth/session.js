import jwt from "jsonwebtoken";
import { env } from "../config/env.js";

export function signSession({ galleryId }) {
  return jwt.sign({ galleryId, typ: "nanha-cloud" }, env.SESSION_SECRET, {
    expiresIn: `${env.COOKIE_MAX_AGE_DAYS}d`,
  });
}

export function verifySession(token) {
  const payload = jwt.verify(token, env.SESSION_SECRET);
  if (payload.typ !== "nanha-cloud" || !payload.galleryId) {
    throw new Error("Invalid session");
  }
  return { galleryId: payload.galleryId };
}

export function sessionCookieOptions() {
  const maxAge = env.COOKIE_MAX_AGE_DAYS * 24 * 60 * 60 * 1000;
  const sameSite = env.COOKIE_SAMESITE === "none" ? "none" : "lax";
  return {
    httpOnly: true,
    sameSite,
    // SameSite=None requires Secure; always secure in production
    secure: env.NODE_ENV === "production" || sameSite === "none",
    maxAge,
    path: "/",
  };
}
