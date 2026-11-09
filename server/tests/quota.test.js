import { describe, it, expect, vi, beforeAll, afterAll, beforeEach } from "vitest";
import { setupTestDb, teardownTestDb, clearCollections } from "./setup.js";
import { Asset } from "../src/models/Asset.js";

vi.mock("../src/drive/driveClient.js", () => ({
  withDriveRetry: async (fn) =>
    fn({
      about: {
        get: async () => ({
          data: {
            storageQuota: {
              limit: "16106127360",
              usage: "1073741824",
              usageInDrive: "536870912",
            },
          },
        }),
      },
    }),
}));

import { getStorageQuota } from "../src/services/quota.js";

beforeAll(async () => {
  await setupTestDb();
});
afterAll(async () => {
  await teardownTestDb();
});
beforeEach(async () => {
  await clearCollections();
});

describe("quota", () => {
  it("returns real Drive about figures plus app breakdown", async () => {
    await Asset.create({
      galleryId: "nanhi-bacchi",
      driveFileId: "f1",
      originalName: "a.gif",
      name: "a.gif",
      mimeType: "image/gif",
      category: "gif",
      size: 1000,
      status: "active",
    });
    const q = await getStorageQuota("nanhi-bacchi");
    expect(q.source).toBe("google-drive-about");
    expect(q.total).toBe(16106127360);
    expect(q.used).toBe(1073741824);
    expect(q.available).toBe(16106127360 - 1073741824);
    expect(q.unlimited).toBe(false);
    expect(q.usedByApp).toBe(1000);
    expect(q.breakdown.gif).toBe(1000);
  });
});
