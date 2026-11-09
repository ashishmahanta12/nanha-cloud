import { env } from "../config/env.js";

const YT_PLAYLIST_URL = "https://www.googleapis.com/youtube/v3/playlistItems";
const YT_VIDEOS_URL = "https://www.googleapis.com/youtube/v3/videos";

function parseIsoDuration(iso) {
  if (!iso || typeof iso !== "string") return 0;
  const m = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!m) return 0;
  return (Number(m[1] || 0) * 3600) + (Number(m[2] || 0) * 60) + Number(m[3] || 0);
}

function pickThumbnail(thumbs = {}) {
  const t = thumbs.maxres || thumbs.standard || thumbs.high || thumbs.medium || thumbs.default;
  return t?.url || null;
}

/**
 * Fetch playlist tracks from YouTube Data API v3.
 * Returns { tracks } or throws with { status, code, message }.
 */
export async function fetchPlaylistTracks() {
  const key = env.YOUTUBE_API_KEY;
  const playlistId = env.YOUTUBE_PLAYLIST_ID;

  if (!key || !playlistId) {
    const err = new Error("YouTube playlist is not configured");
    err.status = 503;
    err.code = "NOT_CONFIGURED";
    throw err;
  }

  const url = new URL(YT_PLAYLIST_URL);
  url.searchParams.set("part", "snippet,contentDetails");
  url.searchParams.set("maxResults", "50");
  url.searchParams.set("playlistId", playlistId);
  url.searchParams.set("key", key);

  let res;
  try {
    res = await fetch(url);
  } catch (e) {
    const err = new Error("Failed to reach YouTube API");
    err.status = 502;
    err.code = "NETWORK";
    err.cause = e;
    throw err;
  }

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    const ytError = data?.error;
    const reason = ytError?.errors?.[0]?.reason || "";
    const message =
      ytError?.message ||
      (res.status === 403 ? "YouTube API quota or permission error" : "YouTube API request failed");
    const err = new Error(message);
    err.status = res.status === 403 || reason.includes("quota") ? 429 : res.status >= 400 ? res.status : 502;
    err.code =
      reason === "quotaExceeded" || reason === "dailyLimitExceeded" || /quota/i.test(message)
        ? "QUOTA"
        : reason || "YOUTUBE_API";
    throw err;
  }

  let tracks = (data.items || [])
    .map((item) => {
      const videoId = item?.contentDetails?.videoId || item?.snippet?.resourceId?.videoId;
      if (!videoId) return null;
      const title = item?.snippet?.title || "Untitled";
      if (title === "Deleted video" || title === "Private video") return null;
      return {
        videoId,
        title,
        thumbnail: pickThumbnail(item?.snippet?.thumbnails),
        durationSec: 0,
      };
    })
    .filter(Boolean);

  // Enrich with durations + higher-res thumbs from videos.list
  if (tracks.length) {
    try {
      const ids = tracks.map((t) => t.videoId).join(",");
      const vUrl = new URL(YT_VIDEOS_URL);
      vUrl.searchParams.set("part", "contentDetails,snippet");
      vUrl.searchParams.set("id", ids);
      vUrl.searchParams.set("key", key);
      const vRes = await fetch(vUrl);
      const vData = await vRes.json().catch(() => ({}));
      if (vRes.ok && Array.isArray(vData.items)) {
        const byId = new Map(vData.items.map((it) => [it.id, it]));
        tracks = tracks.map((t) => {
          const info = byId.get(t.videoId);
          if (!info) return t;
          const better = pickThumbnail(info?.snippet?.thumbnails) || t.thumbnail;
          return {
            ...t,
            thumbnail: better,
            durationSec: parseIsoDuration(info?.contentDetails?.duration),
          };
        });
      }
    } catch (_) {
      // durations optional — keep playlist tracks
    }
  }

  return { tracks, playlistId };
}
