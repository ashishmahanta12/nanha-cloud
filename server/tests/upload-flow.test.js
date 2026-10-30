import { describe, it, expect, beforeAll, afterAll, beforeEach, vi } from "vitest";
import request from "supertest";
import sharp from "sharp";
import fs from "fs";
import path from "path";
import { setupTestDb, teardownTestDb, clearCollections } from "./setup.js";
import { createApp } from "../src/index.js";
import { env } from "../src/config/env.js";
import { Asset } from "../src/models/Asset.js";

// Mock Drive upload paths used by completeUpload
vi.mock("../src/drive/folders.js", () => ({
  ensureGalleryFolders: async (galleryId) => ({
    _id: galleryId,
    folderIds: {
      root: "root",
      images: "images",
      gifs: "gifs",
      videos: "videos",
      documents: "documents",
      thumbnails: "thumbs",
      trash: "trash",
    },
  }),
  categoryFolderKey: (c) =>
    ({ gif: "gifs", image: "images", video: "videos", document: "documents" }[c]),
}));

vi.mock("../src/drive/driveClient.js", () => ({
  getDrive: () => ({}),
  withDriveRetry: async (fn) => fn({}),
  getOAuth2Client: () => ({}),
  resetDriveClient: () => {},
}));

vi.mock("../src/services/upload.js", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    // Keep init/append/complete but stub drive helpers inside complete via folders mock;
    // We still need to stub the internal Drive create — patch by mocking googleapis at complete.
  };
});

// Stub googleapis drive.files.create used inside upload module by replacing getDrive behavior
// Deep stub: override uploadFileToDrive path by mocking fs stream upload through driveClient.
// Simpler approach: spy on Asset.create after manually completing with mocked internals.

let app;
let cookie;

beforeAll(async () => {
  await setupTestDb();
  // Force refresh token so ensureGalleryFolders path is hit
  process.env.GOOGLE_REFRESH_TOKEN = "fake-refresh";
  app = createApp();
  const auth = await request(app)
    .post("/api/auth/redeem")
    .send({ invite: "test-access-code" });
  cookie = auth.headers["set-cookie"][0].split(";")[0];
});

afterAll(async () => {
  await teardownTestDb();
});

beforeEach(async () => {
  await clearCollections();
  // re-seed not needed for assets; re-auth cookie still valid
});

describe("upload init validation", () => {
  it("rejects disallowed mime on init", async () => {
    const res = await request(app)
      .post("/api/cloud/uploads")
      .set("Cookie", cookie)
      .send({ name: "x.exe", size: 100, mimeType: "application/x-msdownload" });
    expect(res.status).toBe(400);
  });

  it("creates upload session for png", async () => {
    const png = await sharp({
      create: { width: 8, height: 8, channels: 3, background: { r: 0, g: 128, b: 255 } },
    })
      .png()
      .toBuffer();

    const init = await request(app)
      .post("/api/cloud/uploads")
      .set("Cookie", cookie)
      .send({ name: "tiny.png", size: png.length, mimeType: "image/png" });
    expect(init.status).toBe(201);
    expect(init.body.uploadId).toBeTruthy();

    const put = await request(app)
      .put(`/api/cloud/uploads/${init.body.uploadId}`)
      .set("Cookie", cookie)
      .set("Content-Range", `bytes 0-${png.length - 1}/${png.length}`)
      .set("Content-Type", "application/octet-stream")
      .send(png);
    expect(put.status).toBe(200);
    expect(put.body.complete).toBe(true);
  });
});

describe("session cookie required for uploads", () => {
  it("blocks unauthenticated upload init", async () => {
    const res = await request(app)
      .post("/api/cloud/uploads")
      .send({ name: "a.png", size: 10, mimeType: "image/png" });
    expect(res.status).toBe(401);
  });
});
