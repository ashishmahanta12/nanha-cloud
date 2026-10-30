import { withDriveRetry } from "../drive/driveClient.js";
import { Asset } from "../models/Asset.js";

/**
 * Real Google Drive storageQuota — never fabricate numbers.
 */
export async function getStorageQuota(galleryId) {
  const about = await withDriveRetry((drive) =>
    drive.about.get({ fields: "storageQuota,user" })
  );

  const q = about.data.storageQuota || {};
  const limit = q.limit != null ? Number(q.limit) : null;
  const usage = q.usage != null ? Number(q.usage) : null;
  const usageInDrive = q.usageInDrive != null ? Number(q.usageInDrive) : null;

  const usedByAppAgg = await Asset.aggregate([
    { $match: { galleryId, status: { $in: ["active", "trashed"] } } },
    { $group: { _id: "$category", total: { $sum: "$size" }, count: { $sum: 1 } } },
  ]);

  const breakdown = { image: 0, gif: 0, video: 0, document: 0 };
  let usedByApp = 0;
  let fileCount = 0;
  for (const row of usedByAppAgg) {
    if (breakdown[row._id] != null) breakdown[row._id] = row.total;
    usedByApp += row.total;
    fileCount += row.count;
  }

  return {
    used: usage,
    total: limit,
    available: limit != null && usage != null ? Math.max(0, limit - usage) : null,
    usageInDrive,
    usedByApp,
    fileCount,
    breakdown,
    source: "google-drive-about",
  };
}
