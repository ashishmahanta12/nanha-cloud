import http from "http";
import path from "path";
import { pathToFileURL } from "url";
import express from "express";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import cors from "cors";
import { Server } from "socket.io";
import { loadEnv } from "./config/env.js";
import { connectMongo } from "./db/mongo.js";
import { ensureGalleryFolders } from "./drive/folders.js";
import { ensureSeedInvite } from "./auth/invite.js";
import { resyncGalleryFromDrive } from "./services/resync.js";
import { initCloudNamespace } from "./sockets/progress.js";
import { errorHandler, notFound } from "./middleware/errors.js";

import authRoutes from "./routes/auth.js";
import assetsRoutes from "./routes/assets.js";
import uploadsRoutes from "./routes/uploads.js";
import trashRoutes, { trashAsset, restoreAsset } from "./routes/trash.js";
import storageRoutes from "./routes/storage.js";
import youtubeRoutes from "./routes/youtube.js";
import quizRoutes from "./routes/quiz.js";
import { requireSession } from "./auth/requireSession.js";

export function createApp(envOverrides = {}) {
  // Re-read env for tests
  const env = { ...loadEnv({ strict: false }), ...envOverrides };
  const app = express();

  app.set("envConfig", env);
  app.set("trust proxy", 1);

  app.use(
    helmet({
      contentSecurityPolicy: false,
      crossOriginEmbedderPolicy: false,
    })
  );
  const corsAllowList = [
    env.PUBLIC_BASE_URL,
    ...(env.CORS_ORIGINS || []),
  ]
    .filter(Boolean)
    .map((o) => o.replace(/\/$/, ""));

  app.use(
    cors({
      origin(origin, cb) {
        // Non-browser or same-origin tools may omit Origin
        if (!origin) return cb(null, true);
        if (corsAllowList.length === 0) return cb(null, true);
        const normalized = origin.replace(/\/$/, "");
        if (corsAllowList.includes(normalized)) return cb(null, true);
        return cb(null, false);
      },
      credentials: true,
    })
  );
  app.use(cookieParser());
  app.use(express.json({ limit: "1mb" }));

  app.get("/api/health", (_req, res) => {
    res.json({ ok: true, service: "nanha-cloud" });
  });

  // Private gift site: expose access code to same-origin client so Cloud unlocks without ?invite=
  app.get("/api/cloud/client-config", (_req, res) => {
    res.json({
      galleryId: env.GALLERY_ID || null,
      accessCode: env.GALLERY_ACCESS_CODE || null,
    });
  });

  app.use("/api/auth", authRoutes);
  app.use("/api/cloud/uploads", uploadsRoutes);
  app.use("/api/cloud/assets", assetsRoutes);
  // Soft-trash only — never permanently delete assets
  app.use("/api/cloud/trash", trashRoutes);
  app.post("/api/cloud/assets/:id/trash", requireSession, trashAsset);
  app.post("/api/cloud/assets/:id/restore", requireSession, restoreAsset);
  app.use("/api/cloud/storage", storageRoutes);
  app.use("/api/youtube", youtubeRoutes);
  app.use("/api/quiz", quizRoutes);

  // Static gift site — no-cache HTML/JS/CSS so UI edits show on refresh
  app.use(
    express.static(env.STATIC_DIR, {
      index: "index.html",
      extensions: ["html"],
      setHeaders(res, filePath) {
        if (/\.(html|js|css)$/i.test(filePath)) {
          res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
        }
      },
    })
  );

  // Hidden quiz results page — exact URL only; not linked from the site
  app.get(["/Answer", "/Answer.html"], (_req, res) => {
    res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
    res.sendFile(path.join(env.STATIC_DIR, "Answer.html"));
  });

  app.get("*", (req, res, next) => {
    if (req.path.startsWith("/api/")) return next();
    res.sendFile(path.join(env.STATIC_DIR, "index.html"));
  });

  app.use(notFound);
  app.use(errorHandler);

  return app;
}

export async function startServer() {
  const env = loadEnv({ strict: true });
  await connectMongo(env.MONGODB_URI);

  if (env.GALLERY_ACCESS_CODE) {
    await ensureSeedInvite(env.GALLERY_ACCESS_CODE, env.GALLERY_ID);
  }

  if (env.GOOGLE_REFRESH_TOKEN && env.GOOGLE_CLIENT_ID) {
    try {
      await ensureGalleryFolders(env.GALLERY_ID);
      console.log("[nanha-cloud] Drive folder taxonomy ready");
      const sync = await resyncGalleryFromDrive(env.GALLERY_ID);
      console.log(
        `[nanha-cloud] Drive resync: ${sync.created} restored, ${sync.updated} updated, ${sync.skipped} skipped`
      );
    } catch (err) {
      console.warn("[nanha-cloud] Drive bootstrap deferred:", err.message);
    }
  } else {
    console.warn("[nanha-cloud] Google Drive not configured — cloud uploads will fail until tokens are set");
  }

  const app = createApp(env);
  const server = http.createServer(app);
  const socketOrigins = [env.PUBLIC_BASE_URL, ...(env.CORS_ORIGINS || [])]
    .filter(Boolean)
    .map((o) => o.replace(/\/$/, ""));
  const io = new Server(server, {
    cors: {
      origin: socketOrigins.length ? socketOrigins : true,
      credentials: true,
    },
  });
  initCloudNamespace(io);

  server.listen(env.PORT, () => {
    console.log(`[nanha-cloud] listening on ${env.PUBLIC_BASE_URL || `http://localhost:${env.PORT}`}`);
  });

  return { app, server, io };
}

const entry = process.argv[1] ? pathToFileURL(path.resolve(process.argv[1])).href : "";
if (import.meta.url === entry && process.env.NODE_ENV !== "test") {
  startServer().catch((err) => {
    console.error("Fatal:", err);
    process.exit(1);
  });
}
