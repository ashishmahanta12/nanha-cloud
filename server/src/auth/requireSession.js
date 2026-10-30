import { env } from "../config/env.js";
import { verifySession } from "./session.js";

export function requireSession(req, res, next) {
  try {
    const token = req.cookies?.[env.COOKIE_NAME];
    if (!token) {
      return res.status(401).json({ error: "Authentication required" });
    }
    const session = verifySession(token);
    req.session = session;
    next();
  } catch {
    return res.status(401).json({ error: "Invalid or expired session" });
  }
}

export function optionalSession(req, _res, next) {
  try {
    const token = req.cookies?.[env.COOKIE_NAME];
    if (token) {
      req.session = verifySession(token);
    }
  } catch {
    req.session = null;
  }
  next();
}
