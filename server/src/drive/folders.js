import { Gallery } from "../models/Gallery.js";
import { withDriveRetry } from "./driveClient.js";
import { env } from "../config/env.js";

async function findOrCreateFolder(drive, name, parentId) {
  const qParts = [
    `name = '${name.replace(/'/g, "\\'")}'`,
    "mimeType = 'application/vnd.google-apps.folder'",
    "trashed = false",
  ];
  if (parentId) qParts.push(`'${parentId}' in parents`);
  const list = await drive.files.list({
    q: qParts.join(" and "),
    fields: "files(id, name)",
    spaces: "drive",
    pageSize: 5,
  });
  if (list.data.files?.length) {
    return list.data.files[0].id;
  }
  const created = await drive.files.create({
    requestBody: {
      name,
      mimeType: "application/vnd.google-apps.folder",
      parents: parentId ? [parentId] : undefined,
    },
    fields: "id",
  });
  return created.data.id;
}

/**
 * Ensure a folder named "Trash" under the gallery root.
 * Migrates an older ".trash" folder by renaming it in place when present.
 * This is a normal Drive folder — never Google's system trash.
 */
async function ensureTrashFolder(drive, galleryRootId, existingTrashId) {
  if (existingTrashId) {
    try {
      const meta = await drive.files.get({
        fileId: existingTrashId,
        fields: "id, name, trashed",
      });
      if (meta.data?.id && !meta.data.trashed) {
        if (meta.data.name !== "Trash") {
          await drive.files.update({
            fileId: existingTrashId,
            requestBody: { name: "Trash" },
            fields: "id, name",
          });
        }
        return existingTrashId;
      }
    } catch {
      /* recreate below */
    }
  }

  const legacy = await drive.files.list({
    q: [
      "name = '.trash'",
      "mimeType = 'application/vnd.google-apps.folder'",
      "trashed = false",
      `'${galleryRootId}' in parents`,
    ].join(" and "),
    fields: "files(id, name)",
    spaces: "drive",
    pageSize: 1,
  });
  if (legacy.data.files?.[0]?.id) {
    const id = legacy.data.files[0].id;
    await drive.files.update({
      fileId: id,
      requestBody: { name: "Trash" },
      fields: "id, name",
    });
    return id;
  }

  return findOrCreateFolder(drive, "Trash", galleryRootId);
}

/**
 * Ensure NanhaCloud/galleries/<galleryId>/{images,gifs,videos,documents,thumbnails,Trash}
 */
export async function ensureGalleryFolders(galleryId = env.GALLERY_ID) {
  let gallery = await Gallery.findById(galleryId);

  return withDriveRetry(async (drive) => {
    const rootId = await findOrCreateFolder(drive, "NanhaCloud", null);
    const galleriesId = await findOrCreateFolder(drive, "galleries", rootId);
    const galleryRootId =
      gallery?.rootFolderId ||
      (await findOrCreateFolder(drive, galleryId, galleriesId));

    const folderIds = {
      root: galleryRootId,
      images:
        gallery?.folderIds?.images ||
        (await findOrCreateFolder(drive, "images", galleryRootId)),
      gifs:
        gallery?.folderIds?.gifs ||
        (await findOrCreateFolder(drive, "gifs", galleryRootId)),
      videos:
        gallery?.folderIds?.videos ||
        (await findOrCreateFolder(drive, "videos", galleryRootId)),
      documents:
        gallery?.folderIds?.documents ||
        (await findOrCreateFolder(drive, "documents", galleryRootId)),
      thumbnails:
        gallery?.folderIds?.thumbnails ||
        (await findOrCreateFolder(drive, "thumbnails", galleryRootId)),
      trash: await ensureTrashFolder(drive, galleryRootId, gallery?.folderIds?.trash),
    };

    gallery = await Gallery.findByIdAndUpdate(
      galleryId,
      {
        _id: galleryId,
        displayName: "Nanha Gallery",
        rootFolderId: galleryRootId,
        folderIds,
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
    return gallery;
  });
}

export function categoryFolderKey(category) {
  switch (category) {
    case "gif":
      return "gifs";
    case "image":
      return "images";
    case "video":
      return "videos";
    case "document":
      return "documents";
    default:
      return "documents";
  }
}
