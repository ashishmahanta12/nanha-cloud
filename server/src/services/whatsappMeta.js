/**
 * Parse WhatsApp export filenames for timeline ordering.
 * Examples: IMG-20260906-WA0042.jpg, VID-20261005-WA0016(1).mp4
 */
export function parseWhatsAppTimestamp(filename) {
  const base = String(filename || "").split(/[/\\]/).pop() || "";
  const m = base.match(
    /^(?:IMG|VID|AUD|PTT|STK|GIF)-(\d{4})(\d{2})(\d{2})-WA(\d+)(?:\(\d+\))?/i
  );
  if (!m) return null;
  const year = Number(m[1]);
  const month = Number(m[2]);
  const day = Number(m[3]);
  const seq = Number(m[4]);
  if (!year || month < 1 || month > 12 || day < 1 || day > 31) return null;
  // Noon + WA sequence seconds → stable day groups and within-day order
  const d = new Date(year, month - 1, day, 12, 0, 0, 0);
  if (Number.isFinite(seq) && seq > 0) d.setSeconds(d.getSeconds() + seq);
  return d;
}

export function mediaKindLabel(category) {
  if (category === "video") return "Video";
  if (category === "gif") return "GIF";
  if (category === "document") return "File";
  return "Photo";
}
