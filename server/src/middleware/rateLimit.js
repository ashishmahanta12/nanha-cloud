import rateLimit from "express-rate-limit";

export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 30,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many auth attempts" },
});

export const uploadLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  // Private gift gallery — allow large WhatsApp import batches
  max: 5000,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many upload requests" },
});

export const apiLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 180,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests" },
});
