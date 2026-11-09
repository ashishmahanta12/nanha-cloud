/**
 * Frontend runtime config.
 * Leave NANHA_API_BASE empty when served behind the Cloudflare Pages proxy
 * (or when Express serves the site same-origin). Set it only for direct
 * cross-origin calls to Render during local debugging.
 */
window.NANHA_API_BASE = window.NANHA_API_BASE || "";
