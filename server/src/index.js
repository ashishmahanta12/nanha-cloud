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
import { initCloudNamespace } from "./sockets/progress.js";
import { errorHandler, notFound } from "./middleware/errors.js";
import { purgeExpiredTrash } from "./routes/trash.js";

import authRoutes from "./routes/auth.js";
import assetsRoutes from "./routes/assets.js";
import uploadsRoutes from "./routes/uploads.js";
import trashRoutes, {
  trashAsset,
  restoreAsset,
  permanentDeleteAsset,
} from "./routes/trash.js";
import storageRoutes from "./routes/storage.js";
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
  app.use(
    cors({
      origin: env.PUBLIC_BASE_URL || true,
      credentials: true,
    })
  );
  app.use(cookieParser());
  app.use(express.json({ limit: "1mb" }));

  app.get("/api/health", (_req, res) => {
    res.json({ ok: true, service: "nanha-cloud" });
  });

  app.use("/api/auth", authRoutes);
  app.use("/api/cloud/uploads", uploadsRoutes);
  app.use("/api/cloud/assets", assetsRoutes);
  // Plan paths: trash list + actions also under trash router aliases
  app.use("/api/cloud/trash", trashRoutes);
  app.post("/api/cloud/assets/:id/trash", requireSession, trashAsset);
  app.post("/api/cloud/assets/:id/restore", requireSession, restoreAsset);
  app.delete("/api/cloud/assets/:id", requireSession, permanentDeleteAsset);
  app.use("/api/cloud/storage", storageRoutes);

  // Static gift site
  app.use(
    express.static(env.STATIC_DIR, {
      index: "index.html",
      extensions: ["html"],
    })
  );

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
    } catch (err) {
      console.warn("[nanha-cloud] Drive bootstrap deferred:", err.message);
    }
  } else {
    console.warn("[nanha-cloud] Google Drive not configured — cloud uploads will fail until tokens are set");
  }

  const app = createApp(env);
  const server = http.createServer(app);
  const io = new Server(server, {
    cors: { origin: env.PUBLIC_BASE_URL || true, credentials: true },
  });
  initCloudNamespace(io);

  // Trash retention purge hourly
  setInterval(() => {
    purgeExpiredTrash().catch((e) => console.error("purge error", e.message));
  }, 60 * 60 * 1000);

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
