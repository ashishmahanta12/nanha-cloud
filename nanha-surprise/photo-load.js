/**
 * Lightweight pastel photo loader.
 * - No skeleton DOM nodes (CSS ::before / ::after only)
 * - Animates only while on-screen (IntersectionObserver)
 * - GPU-friendly: opacity + transform only
 * - Cached images skip the loader entirely (zero flash)
 */
(function (global) {
  if (global.NanhaPhotoLoad) return;

  const reduceMotion = !!global.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

  const PARENT_HOSTS = new Set([
    "photo-load-host",
    "polaroid-img",
    "baby-photo",
    "tl-photo",
    "lb-slide",
    "cloud-preview-media",
  ]);

  /** Soft cap so a dense grid never runs dozens of shimmer layers at once */
  const MAX_ANIM = 8;
  const animating = new Set();

  let io = null;
  function getIO() {
    if (io || typeof IntersectionObserver === "undefined") return io;
    io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const host = entry.target;
          if (!host.classList.contains("is-loading")) continue;
          if (entry.isIntersecting) startAnim(host);
          else stopAnim(host);
        }
      },
      { root: null, rootMargin: "80px 0px", threshold: 0.01 }
    );
    return io;
  }

  function startAnim(host) {
    if (reduceMotion) return;
    if (host.classList.contains("is-loading-anim")) return;
    if (animating.size >= MAX_ANIM) return;
    host.classList.add("is-loading-anim");
    animating.add(host);
  }

  function stopAnim(host) {
    if (!host.classList.contains("is-loading-anim")) return;
    host.classList.remove("is-loading-anim");
    animating.delete(host);
  }

  function watch(host) {
    const obs = getIO();
    if (!obs) {
      startAnim(host);
      return;
    }
    obs.observe(host);
    /* If already in view, IO may fire async — kick a cheap sync check */
    const rect = host.getBoundingClientRect();
    const vh = global.innerHeight || 0;
    if (rect.bottom >= -80 && rect.top <= vh + 80) startAnim(host);
  }

  function unwatch(host) {
    stopAnim(host);
    io?.unobserve(host);
  }

  function canUseParent(parent) {
    if (!parent || parent.nodeType !== 1) return false;
    for (const cls of PARENT_HOSTS) {
      if (parent.classList.contains(cls)) return true;
    }
    return false;
  }

  function ensureHost(img, opts) {
    let host = img.parentElement;
    if (host?.classList.contains("photo-load-host")) return host;

    if (opts.useParent || canUseParent(host)) {
      host.classList.add("photo-load-host");
      return host;
    }

    host = document.createElement("div");
    host.className = "photo-load-host";
    if (opts.hostClass) host.classList.add(opts.hostClass);
    img.replaceWith(host);
    host.appendChild(img);
    return host;
  }

  /**
   * @param {HTMLImageElement} img
   * @param {{ useParent?: boolean, hostClass?: string, onError?: () => void, onLoad?: () => void }} [opts]
   */
  function enhance(img, opts = {}) {
    if (!img || img.dataset.photoLoad === "1") return img;
    img.dataset.photoLoad = "1";

    /* Fast path BEFORE any hide/fade classes — avoids one-frame blank flash */
    if (img.complete && img.naturalWidth > 0) {
      img.classList.add("photo-ready");
      const parent = img.parentElement;
      if (parent) parent.classList.add("is-ready");
      if (typeof opts.onLoad === "function") opts.onLoad();
      return img;
    }

    if (img.complete && img.getAttribute("src") && img.naturalWidth === 0) {
      if (typeof opts.onError === "function") opts.onError();
      return img;
    }

    img.decoding = img.decoding || "async";
    const host = ensureHost(img, opts);
    img.classList.add("photo-pending");
    host.classList.add("is-loading");
    host.classList.remove("is-ready");

    let settled = false;
    const finish = (ok) => {
      if (settled) return;
      settled = true;
      unwatch(host);
      host.classList.remove("is-loading", "is-loading-anim");
      host.classList.add("is-ready");
      img.classList.remove("photo-pending");
      if (ok) {
        /* Double-rAF: apply opacity after browser has painted the bitmap */
        const reveal = () => img.classList.add("photo-ready");
        if (reduceMotion) reveal();
        else global.requestAnimationFrame(() => global.requestAnimationFrame(reveal));
        if (typeof opts.onLoad === "function") opts.onLoad();
      } else if (typeof opts.onError === "function") {
        opts.onError();
      }
    };

    img.addEventListener("load", () => finish(true), { once: true });
    img.addEventListener("error", () => finish(false), { once: true });
    watch(host);
    return img;
  }

  global.NanhaPhotoLoad = { enhance };
})(typeof window !== "undefined" ? window : globalThis);
