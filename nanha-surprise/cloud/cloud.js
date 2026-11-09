/**
 * Nanha Photos — unified gallery + cloud timeline (Drive-backed via server API)
 * Google Photos–style day groups; local gift photos + cloud uploads in one feed.
 */
(function () {
  const state = {
    authenticated: false,
    galleryId: null,
    assets: [],
    trash: [],
    localItems: [], // static gift photos from CONFIG.gallery
    view: "grid",
    filter: "all",
    sort: "date",
    order: "desc",
    q: "",
    selected: new Set(),
    mode: "files", // files | trash
    online: true,
    uploads: new Map(),
    socket: null,
    flatTimeline: [], // ordered items for lightbox
  };

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  function playSfx(name) {
    try {
      if (typeof Sound !== "undefined") Sound.play?.(name);
    } catch (_) {}
  }

  function formatBytes(n) {
    if (n == null || Number.isNaN(n)) return "—";
    const u = ["B", "KB", "MB", "GB", "TB"];
    let i = 0;
    let v = Number(n);
    while (v >= 1024 && i < u.length - 1) {
      v /= 1024;
      i++;
    }
    return `${v.toFixed(v >= 10 || i === 0 ? 0 : 1)} ${u[i]}`;
  }

  function apiUrl(path) {
    const base = String(window.NANHA_API_BASE || "").replace(/\/$/, "");
    if (!path) return path;
    if (/^https?:\/\//i.test(path)) return path;
    return `${base}${path.startsWith("/") ? path : `/${path}`}`;
  }

  async function api(path, options = {}) {
    const res = await fetch(apiUrl(path), {
      credentials: "include",
      ...options,
      headers: {
        ...(options.body && !(options.body instanceof FormData) && !(options.body instanceof Blob)
          ? { "Content-Type": "application/json" }
          : {}),
        ...options.headers,
      },
    });
    const ct = res.headers.get("content-type") || "";
    const data = ct.includes("application/json") ? await res.json() : null;
    if (!res.ok) {
      const err = new Error(data?.error || res.statusText || "Request failed");
      err.status = res.status;
      err.data = data;
      throw err;
    }
    return data;
  }

  function getInviteFromUrl() {
    const params = new URLSearchParams(location.search);
    return params.get("invite") || params.get("code") || "";
  }

  async function loadClientConfig() {
    if (window.NANHA_CLOUD_ACCESS_CODE) return;
    try {
      const cfg = await api("/api/cloud/client-config");
      if (cfg?.accessCode) window.NANHA_CLOUD_ACCESS_CODE = cfg.accessCode;
    } catch {
      /* server offline or route missing */
    }
  }

  async function ensureAuth() {
    try {
      await loadClientConfig();
      const me = await api("/api/auth/me");
      if (me.authenticated) {
        state.authenticated = true;
        state.galleryId = me.galleryId;
        state.online = true;
        return true;
      }
      const invite = getInviteFromUrl() || window.NANHA_CLOUD_ACCESS_CODE || "";
      if (!invite) {
        state.authenticated = false;
        return false;
      }
      const redeemed = await api("/api/auth/redeem", {
        method: "POST",
        body: JSON.stringify({ invite }),
      });
      state.authenticated = true;
      state.galleryId = redeemed.galleryId;
      return true;
    } catch (err) {
      if (err.status === 401) {
        state.authenticated = false;
        return false;
      }
      state.online = false;
      throw err;
    }
  }

  function connectSocket() {
    if (!state.authenticated || !state.galleryId || typeof io === "undefined") return;
    if (state.socket) {
      state.socket.disconnect();
    }
    const socketBase = String(window.NANHA_API_BASE || "").replace(/\/$/, "") || undefined;
    state.socket = io(socketBase ? `${socketBase}/cloud` : "/cloud", {
      ...(socketBase ? { path: "/socket.io" } : {}),
      withCredentials: true,
      auth: { galleryId: state.galleryId },
    });
    state.socket.on("upload:progress", (p) => {
      const el = $(`[data-upload-id="${p.uploadId}"]`);
      if (!el) return;
      const fill = el.querySelector(".bar > span");
      const label = el.querySelector(".label");
      if (fill) fill.style.width = `${p.percent || 0}%`;
      if (label) {
        label.textContent = `🐙 ${p.phase || "uploading"} · ${p.percent || 0}% (${formatBytes(p.bytesReceived)} / ${formatBytes(p.totalBytes)})`;
      }
    });
    state.socket.on("upload:complete", ({ asset }) => {
      if (asset) {
        state.assets = [asset, ...state.assets.filter((a) => a.id !== asset.id)];
        renderFiles();
        window.dispatchEvent(new CustomEvent("nanha-cloud:assets-changed"));
      }
      refreshStorage();
    });
    state.socket.on("upload:error", (p) => {
      const el = $(`[data-upload-id="${p.uploadId}"]`);
      if (el) {
        el.classList.add("error");
        const label = el.querySelector(".label");
        if (label) label.textContent = p.message || "Upload failed";
      }
    });
    state.socket.on("asset:trashed", ({ assetId }) => {
      state.assets = state.assets.filter((a) => a.id !== assetId);
      state.selected.delete(assetId);
      renderFiles();
      window.dispatchEvent(new CustomEvent("nanha-cloud:assets-changed"));
    });
    state.socket.on("asset:restored", ({ asset }) => {
      if (asset) {
        state.assets = [asset, ...state.assets.filter((a) => a.id !== asset.id)];
        state.trash = state.trash.filter((a) => a.id !== asset.id);
      }
      renderFiles();
      window.dispatchEvent(new CustomEvent("nanha-cloud:assets-changed"));
    });
    state.socket.on("asset:deleted", ({ assetId }) => {
      state.assets = state.assets.filter((a) => a.id !== assetId);
      state.trash = state.trash.filter((a) => a.id !== assetId);
      state.selected.delete(assetId);
      renderFiles();
      window.dispatchEvent(new CustomEvent("nanha-cloud:assets-changed"));
    });
    state.socket.on("storage:updated", applyStorage);
  }

  /** Drive omits `limit` when storage is unlimited — treat as ∞, never as a warning. */
  function isUnlimitedQuota(quota) {
    if (!quota) return true;
    if (quota.unlimited === true) return true;
    return quota.total == null || quota.total <= 0;
  }

  function applyStorage(quota) {
    const root = $("#cloud-storage");
    const meta = $("#cloud-storage-meta");
    if (!meta) return;

    const unlimited = isUnlimitedQuota(quota);
    if (root) {
      root.classList.add("is-infinite");
      root.classList.toggle("is-unlimited", unlimited);
      root.title = "Infinite Memories";
      root.setAttribute("aria-label", "Infinite Memories — Unlimited");
    }

    // Visual capacity is always ∞ — never show a fill bar, % used, or low-memory alerts.
    const filesHint =
      quota?.usedByApp != null
        ? `<span class="cloud-storage-files">${quota.fileCount || 0} kept · ${formatBytes(quota.usedByApp)}</span>`
        : "";

    meta.innerHTML = `
      <span class="cloud-storage-label">Our Memories, Forever</span>
      <span class="cloud-storage-cap">Unlimited (∞)</span>
      ${filesHint}
    `;
  }

  async function refreshStorage() {
    try {
      const quota = await api("/api/cloud/storage");
      applyStorage(quota);
    } catch {
      /* ignore */
    }
  }

  async function loadAssets() {
    const category = state.filter === "all" || state.filter === "trash" ? "" : state.filter;
    const all = [];
    let page = 1;
    let pages = 1;
    do {
      const params = new URLSearchParams({
        status: "active",
        sort: state.sort,
        order: state.order,
        limit: "500",
        page: String(page),
      });
      if (category) params.set("category", category);
      if (state.q) params.set("q", state.q);
      const data = await api(`/api/cloud/assets?${params}`);
      all.push(...(data.items || []));
      pages = data.pages || 1;
      page += 1;
    } while (page <= pages);
    state.assets = all;
    return state.assets;
  }

  async function loadTrash() {
    const data = await api("/api/cloud/trash");
    state.trash = data.items || [];
    return state.trash;
  }

  function hashId(id) {
    const s = String(id || "");
    let h = 0;
    for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
    return h;
  }

  function mediaLabel(item) {
    if (item?.category === "video") return "Video";
    if (item?.category === "gif") return "GIF";
    if (item?.category === "document") return "File";
    return "Photo";
  }

  function startOfDay(d) {
    const x = new Date(d);
    x.setHours(0, 0, 0, 0);
    return x;
  }

  function dayKey(date) {
    const d = startOfDay(date);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  }

  function formatDayLabel(date) {
    const d = startOfDay(date);
    const today = startOfDay(new Date());
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const opts = { weekday: "short", month: "short", day: "numeric" };
    if (d.getTime() === today.getTime()) return { title: "Today", year: "" };
    if (d.getTime() === yesterday.getTime()) return { title: "Yesterday", year: "" };
    const title = d.toLocaleDateString(undefined, opts);
    const year = d.getFullYear() !== today.getFullYear() ? String(d.getFullYear()) : "";
    return { title, year };
  }

  /** Normalize cloud + local items into a shared timeline shape */
  function toTimelineItem(asset) {
    const created = asset.capturedAt
      ? new Date(asset.capturedAt)
      : asset.createdAt
        ? new Date(asset.createdAt)
        : new Date();
    return {
      id: asset.id,
      name: "",
      caption: asset.caption || "",
      downloadName: asset.downloadName || "",
      category: asset.category || "image",
      mimeType: asset.mimeType || "image/jpeg",
      size: asset.size || 0,
      width: asset.width,
      height: asset.height,
      createdAt: created,
      contentUrl: apiUrl(asset.contentUrl),
      thumbnailUrl: apiUrl(asset.thumbnailUrl || asset.contentUrl),
      animated: asset.animated || asset.category === "gif",
      local: !!asset.local,
      cloud: !asset.local,
      raw: asset,
    };
  }

  function filteredList() {
    if (state.mode === "trash") return state.trash.map(toTimelineItem);

    const cloud = state.assets.map(toTimelineItem);
    const local = state.localItems.map(toTimelineItem);
    let list = [...cloud, ...local];

    if (state.filter === "image") {
      list = list.filter((a) => a.category === "image");
    } else if (state.filter === "gif") {
      list = list.filter((a) => a.category === "gif");
    } else if (state.filter === "video") {
      list = list.filter((a) => a.category === "video");
    } else if (state.filter === "document") {
      list = list.filter((a) => a.category === "document");
    } else {
      // "all" — prefer media; still show docs if present
      list = list.filter((a) =>
        ["image", "gif", "video", "document"].includes(a.category)
      );
    }

    if (state.q) {
      const q = state.q.toLowerCase();
      list = list.filter((a) => (a.caption || "").toLowerCase().includes(q));
    }

    list.sort((a, b) => {
      const av = a.createdAt.getTime();
      const bv = b.createdAt.getTime();
      return state.order === "asc" ? av - bv : bv - av;
    });
    return list;
  }

  function groupByDay(items) {
    const map = new Map();
    for (const item of items) {
      const key = dayKey(item.createdAt);
      if (!map.has(key)) map.set(key, { date: startOfDay(item.createdAt), items: [] });
      map.get(key).items.push(item);
    }
    const groups = [...map.values()];
    groups.sort((a, b) =>
      state.order === "asc"
        ? a.date - b.date
        : b.date - a.date
    );
    return groups;
  }

  function renderFiles() {
    const host = $("#gallery-timeline") || $("#cloud-files");
    const empty = $("#cloud-empty");
    if (!host) return;

    const items = filteredList();
    // Lightbox: photos, GIFs, and videos (docs still use the preview sheet)
    state.flatTimeline = items.filter(
      (a) => a.category === "image" || a.category === "gif" || a.category === "video"
    );
    host.innerHTML = "";

    if (!items.length) {
      if (empty) {
        empty.hidden = false;
        empty.textContent =
          state.mode === "trash"
            ? "Trash is empty ✨"
            : state.online
              ? "No memories yet — tap ＋ or drop photos here"
              : "Cloud resting 😴 — gift photos still show when you refresh with the server";
      }
      updateBulkBar();
      window.dispatchEvent(
        new CustomEvent("nanha-cloud:timeline", { detail: { items: state.flatTimeline } })
      );
      return;
    }
    if (empty) empty.hidden = true;

    const groups = groupByDay(items);

    for (const group of groups) {
      const section = document.createElement("section");
      section.className = "photos-day";
      section.setAttribute("aria-label", formatDayLabel(group.date).title);

      const sticky = document.createElement("h3");
      sticky.className = "photos-day-sticky";
      const label = formatDayLabel(group.date);
      const titleSpan = document.createElement("span");
      titleSpan.textContent = label.title;
      sticky.appendChild(titleSpan);
      if (label.year) {
        const y = document.createElement("span");
        y.className = "photos-day-year";
        y.textContent = label.year;
        sticky.appendChild(y);
      }

      const grid = document.createElement("div");
      grid.className = "photos-day-grid";

      const phEmojis = ["🌸", "🐙", "💕", "✨", "🦋", "☁️", "🎀", "🌙"];

      for (const item of group.items) {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className =
          "photos-tile" + (state.selected.has(item.id) ? " is-selected" : "");
        btn.dataset.id = item.id;
        btn.setAttribute("aria-label", mediaLabel(item));

        if (!item.local) {
          const check = document.createElement("span");
          check.className = "photos-tile-check";
          check.textContent = state.selected.has(item.id) ? "✓" : "";
          check.addEventListener("click", (e) => {
            e.stopPropagation();
            toggleSelect(item.id);
          });
          btn.appendChild(check);
        }

        const makePlaceholder = (emoji, labelText) => {
          const ph = document.createElement("div");
          ph.className = "photos-tile-ph";
          ph.innerHTML = `<span class="ph-emoji">${emoji}</span>`;
          const t = document.createElement("span");
          t.textContent = labelText;
          ph.appendChild(t);
          return ph;
        };

        if (item.category === "document") {
          const ph = document.createElement("div");
          ph.className = "photos-tile-doc";
          ph.innerHTML = `<span>📄</span>`;
          const nm = document.createElement("div");
          nm.textContent = "File";
          ph.appendChild(nm);
          btn.appendChild(ph);
        } else if (item.category === "video") {
          const host = document.createElement("div");
          host.className = "photo-load-host";
          const img = document.createElement("img");
          img.loading = "lazy";
          img.decoding = "async";
          img.alt = "Video";
          host.appendChild(img);
          btn.appendChild(host);
          const swapBroken = () => {
            if (host.parentNode) host.replaceWith(makePlaceholder("🎬", "Video"));
          };
          if (window.NanhaPhotoLoad?.enhance) {
            window.NanhaPhotoLoad.enhance(img, { useParent: true, onError: swapBroken });
          } else {
            img.addEventListener("error", swapBroken, { once: true });
          }
          img.src = item.thumbnailUrl;
          const badge = document.createElement("span");
          badge.className = "photos-tile-badge";
          badge.textContent = "▶";
          btn.appendChild(badge);
        } else {
          const host = document.createElement("div");
          host.className = "photo-load-host";
          const img = document.createElement("img");
          img.loading = "lazy";
          img.decoding = "async";
          img.alt = mediaLabel(item);
          const emoji = phEmojis[Math.abs(hashId(item.id)) % phEmojis.length];
          host.appendChild(img);
          btn.appendChild(host);
          const swapBroken = () => {
            if (host.parentNode) host.replaceWith(makePlaceholder(emoji, "soon ✨"));
          };
          if (window.NanhaPhotoLoad?.enhance) {
            window.NanhaPhotoLoad.enhance(img, { useParent: true, onError: swapBroken });
          } else {
            img.addEventListener("error", swapBroken, { once: true });
          }
          img.src = item.thumbnailUrl;
          if (item.category === "gif" || item.animated) {
            const badge = document.createElement("span");
            badge.className = "photos-tile-badge";
            badge.textContent = "GIF";
            btn.appendChild(badge);
          }
        }

        const caption = document.createElement("span");
        caption.className = "photos-tile-caption";
        caption.contentEditable = item.local ? "false" : "true";
        caption.spellcheck = true;
        caption.setAttribute("role", "textbox");
        caption.setAttribute("aria-label", "Caption");
        caption.dataset.placeholder = "Add a caption…";
        caption.textContent = item.caption || "";
        if (!item.caption) caption.classList.add("is-empty");
        caption.addEventListener("click", (e) => e.stopPropagation());
        caption.addEventListener("keydown", (e) => {
          e.stopPropagation();
          if (e.key === "Enter") {
            e.preventDefault();
            caption.blur();
          }
        });
        caption.addEventListener("input", () => {
          caption.classList.toggle("is-empty", !caption.textContent.trim());
        });
        caption.addEventListener("blur", async () => {
          if (item.local) return;
          const next = caption.innerText.replace(/\u00a0/g, " ").replace(/\n+/g, " ").trim();
          caption.textContent = next;
          caption.classList.toggle("is-empty", !next);
          if (next === (item.caption || "")) return;
          try {
            const data = await api(`/api/cloud/assets/${item.id}`, {
              method: "PATCH",
              body: JSON.stringify({ caption: next }),
            });
            item.caption = data.asset?.caption ?? next;
            if (item.raw) item.raw.caption = item.caption;
            const idx = state.assets.findIndex((a) => a.id === item.id);
            if (idx >= 0) state.assets[idx] = { ...state.assets[idx], caption: item.caption };
          } catch (err) {
            console.error(err);
            caption.textContent = item.caption || "";
            caption.classList.toggle("is-empty", !(item.caption || "").trim());
          }
        });
        btn.appendChild(caption);

        const mediaIndex = state.flatTimeline.findIndex((t) => t.id === item.id);

        btn.addEventListener("click", () => {
          if (item.category === "document") {
            openPreview(item.raw || item);
            return;
          }
          window.dispatchEvent(
            new CustomEvent("nanha-photos:open", {
              detail: { index: mediaIndex >= 0 ? mediaIndex : 0, item },
            })
          );
        });
        btn.addEventListener("contextmenu", (e) => {
          if (item.local) return;
          e.preventDefault();
          showContextMenu(e.clientX, e.clientY, item.raw || item);
        });

        grid.appendChild(btn);
      }

      section.appendChild(sticky);
      section.appendChild(grid);
      host.appendChild(section);
    }

    updateBulkBar();
    window.dispatchEvent(
      new CustomEvent("nanha-cloud:timeline", { detail: { items: state.flatTimeline } })
    );
  }

  let busyDepth = 0;
  const BUSY_LINES = [
    "Nanha is tidying…",
    "Octopus on it…",
    "Wrapping memories…",
    "Soft paws at work…",
    "Almost there, cutie…",
  ];

  function showBusy(message) {
    busyDepth += 1;
    const el = $("#cloud-busy");
    const msg = $("#cloud-busy-msg");
    if (msg) {
      msg.textContent =
        message || BUSY_LINES[Math.floor(Math.random() * BUSY_LINES.length)];
    }
    if (el) el.hidden = false;
  }

  function hideBusy() {
    busyDepth = Math.max(0, busyDepth - 1);
    if (busyDepth > 0) return;
    const el = $("#cloud-busy");
    if (el) el.hidden = true;
  }

  async function withBusy(fn, message) {
    showBusy(message);
    try {
      return await fn();
    } finally {
      hideBusy();
    }
  }

  function toggleSelect(id) {
    if (state.selected.has(id)) state.selected.delete(id);
    else state.selected.add(id);

    // Patch the tile in place — avoid renderFiles() which rebuilds the
    // whole grid and feels like a full refresh on every select/unselect.
    const host = $("#gallery-timeline") || $("#cloud-files");
    const tile = host?.querySelector(`.photos-tile[data-id="${CSS.escape(id)}"]`);
    if (tile) {
      const on = state.selected.has(id);
      tile.classList.toggle("is-selected", on);
      const check = tile.querySelector(".photos-tile-check");
      if (check) {
        check.textContent = on ? "✓" : "";
        check.classList.remove("pop");
        // restart pop animation
        void check.offsetWidth;
        check.classList.add("pop");
      }
      tile.classList.remove("select-bounce");
      void tile.offsetWidth;
      tile.classList.add("select-bounce");
    }
    playSfx("tap");
    updateBulkBar();
  }

  function updateActionLabels() {
    const bulk = $("#cloud-bulk-trash");
    if (bulk) {
      bulk.textContent = state.mode === "trash" ? "Restore" : "Move to Trash";
    }
    const preview = $("#cloud-preview-trash");
    if (preview) {
      preview.textContent = state.mode === "trash" ? "Restore" : "Move to Trash";
    }
  }

  function updateBulkBar() {
    const bar = $("#cloud-bulk-bar");
    if (!bar) return;
    bar.classList.toggle("is-visible", state.selected.size > 0);
    const count = $("#cloud-sel-count");
    if (count) count.textContent = `${state.selected.size} selected`;
    updateActionLabels();
  }

  function showContextMenu(x, y, asset) {
    hideContextMenu();
    const menu = document.createElement("div");
    menu.className = "cloud-ctx";
    menu.id = "cloud-ctx";
    menu.style.left = `${Math.min(x, window.innerWidth - 180)}px`;
    menu.style.top = `${Math.min(y, window.innerHeight - 160)}px`;

    const openInLightbox = () => {
      const idx = state.flatTimeline.findIndex((t) => t.id === asset.id);
      if (idx < 0 || asset.category === "document") {
        openPreview(asset);
        return;
      }
      window.dispatchEvent(
        new CustomEvent("nanha-photos:open", { detail: { index: idx, item: asset } })
      );
    };

    const actions =
      state.mode === "trash"
        ? [["Restore", () => restoreAsset(asset.id)]]
        : [
            ["Open", openInLightbox],
            ["Download", () => downloadAsset(asset)],
            ["Move to Trash", () => trashAsset(asset.id)],
          ];

    for (const [label, fn] of actions) {
      const b = document.createElement("button");
      b.type = "button";
      b.textContent = label;
      b.addEventListener("click", () => {
        hideContextMenu();
        fn();
      });
      menu.appendChild(b);
    }
    document.body.appendChild(menu);
    setTimeout(() => {
      document.addEventListener("click", hideContextMenu, { once: true });
    }, 0);
  }

  function hideContextMenu() {
    $("#cloud-ctx")?.remove();
  }

  function openPreview(asset) {
    const panel = $("#cloud-preview");
    const media = $("#cloud-preview-media");
    const info = $("#cloud-preview-info");
    if (!panel || !media) return;
    media.innerHTML = "";

    const kind = mediaLabel(asset);
    if (asset.category === "video") {
      const v = document.createElement("video");
      v.controls = true;
      v.src = asset.contentUrl;
      v.className = "";
      media.appendChild(v);
    } else if (asset.category === "document") {
      const a = document.createElement("a");
      a.href = `${asset.contentUrl}?download=1`;
      a.textContent = "Download file";
      a.style.color = "#fff";
      media.appendChild(a);
    } else {
      // GIF / image — use content URL so animated GIFs play
      const img = document.createElement("img");
      img.alt = kind;
      media.appendChild(img);
      if (window.NanhaPhotoLoad?.enhance) {
        window.NanhaPhotoLoad.enhance(img, { useParent: true });
      }
      img.src = asset.contentUrl;
    }

    if (info) {
      const anim =
        asset.category === "gif"
          ? ` · animated GIF${asset.width ? ` · ${asset.width}×${asset.height}` : ""}`
          : asset.width
            ? ` · ${asset.width}×${asset.height}`
            : "";
      const cap = (asset.caption || "").trim();
      info.textContent = `${kind}${cap ? ` · ${cap}` : ""} · ${formatBytes(asset.size)}${anim}`;
    }
    panel.hidden = false;
    panel.dataset.assetId = asset.id;
    updateActionLabels();
  }

  function closePreview() {
    const panel = $("#cloud-preview");
    if (panel) {
      panel.hidden = true;
      $("#cloud-preview-media").innerHTML = "";
    }
  }

  function downloadAsset(asset) {
    if (!asset?.contentUrl) return;
    const a = document.createElement("a");
    a.href = `${asset.contentUrl}?download=1`;
    a.download = asset.downloadName || asset.name || "memory";
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  async function trashAsset(id, { quiet } = {}) {
    const run = async () => {
      await api(`/api/cloud/assets/${id}/trash`, { method: "POST" });
      state.assets = state.assets.filter((a) => a.id !== id);
      state.selected.delete(id);
      renderFiles();
      window.dispatchEvent(new CustomEvent("nanha-cloud:assets-changed"));
      refreshStorage();
    };
    if (quiet) return run();
    return withBusy(run, "Tucking into trash…");
  }

  async function restoreAsset(id, { quiet } = {}) {
    const run = async () => {
      await api(`/api/cloud/assets/${id}/restore`, { method: "POST" });
      state.trash = state.trash.filter((a) => a.id !== id);
      state.selected.delete(id);
      try {
        await Promise.all([loadTrash(), loadAssets()]);
      } catch {
        /* offline / ignore */
      }
      renderFiles();
      window.dispatchEvent(new CustomEvent("nanha-cloud:assets-changed"));
    };
    if (quiet) return run();
    return withBusy(run, "Bringing it back…");
  }

  async function bulkTrash() {
    const ids = [...state.selected];
    if (!ids.length) return;
    const restoring = state.mode === "trash";
    await withBusy(async () => {
      for (const id of ids) {
        try {
          if (restoring) await restoreAsset(id, { quiet: true });
          else await trashAsset(id, { quiet: true });
        } catch (err) {
          console.error(err);
        }
      }
      state.selected.clear();
      updateBulkBar();
    }, restoring ? "Restoring sweeties…" : "Tucking into trash…");
  }

  function addProgressRow(uploadId, name) {
    const list = $("#cloud-progress-list");
    if (!list) return;
    const row = document.createElement("div");
    row.className = "cloud-progress-item";
    row.dataset.uploadId = uploadId;
    row.innerHTML = `<div class="label">🐙 tucking away ${name}…</div><div class="bar"><span></span></div>`;
    list.appendChild(row);
  }

  async function uploadFile(file) {
    const meta = await api("/api/cloud/uploads", {
      method: "POST",
      body: JSON.stringify({
        name: file.name,
        size: file.size,
        mimeType: file.type || "application/octet-stream",
      }),
    });
    const { uploadId, totalBytes } = meta;
    addProgressRow(uploadId, file.name);

    const CHUNK = 256 * 1024;
    let offset = 0;
    while (offset < file.size) {
      const end = Math.min(offset + CHUNK, file.size);
      const blob = file.slice(offset, end);
      const contentRange = `bytes ${offset}-${end - 1}/${totalBytes}`;
      const result = await api(`/api/cloud/uploads/${uploadId}`, {
        method: "PUT",
        headers: {
          "Content-Range": contentRange,
          "Content-Type": "application/octet-stream",
        },
        body: blob,
      });
      offset = result.bytesReceived;
      const el = $(`[data-upload-id="${uploadId}"]`);
      if (el) {
        const fill = el.querySelector(".bar > span");
        const label = el.querySelector(".label");
        if (fill) fill.style.width = `${result.percent}%`;
        if (label) {
          label.textContent = `🐙 uploading · ${result.percent}% (${formatBytes(result.bytesReceived)} / ${formatBytes(result.totalBytes)})`;
        }
      }
    }

    const done = await api(`/api/cloud/uploads/${uploadId}/complete`, { method: "POST" });
    const el = $(`[data-upload-id="${uploadId}"]`);
    if (el) {
      const label = el.querySelector(".label");
      if (label) label.textContent = "✨ saved!";
      setTimeout(() => el.remove(), 1200);
    }
    playSfx("sparkle");
    if (done.asset) {
      state.assets = [done.asset, ...state.assets.filter((a) => a.id !== done.asset.id)];
      renderFiles();
      window.dispatchEvent(new CustomEvent("nanha-cloud:assets-changed"));
    }
    refreshStorage();
    return done;
  }

  async function handleFiles(fileList) {
    const files = [...fileList];
    const status = $("#cloud-status");
    for (const file of files) {
      try {
        await uploadFile(file);
      } catch (err) {
        console.error(err);
        if (status) {
          status.hidden = false;
          status.classList.add("error");
          status.textContent = err.message || "Upload failed";
        }
      }
    }
  }

  async function refreshTimeline() {
    const status = $("#cloud-status");
    await withBusy(async () => {
      try {
        const ok = await ensureAuth();
        if (!ok) {
          state.online = true;
          state.assets = [];
          if (status) {
            status.hidden = false;
            status.classList.remove("error");
            status.textContent =
              "Gift photos below · add ?invite=… to unlock cloud uploads.";
          }
          renderFiles();
          return;
        }
        if (status) status.hidden = true;
        connectSocket();
        if (state.mode === "trash") await loadTrash();
        else await loadAssets();
        renderFiles();
        refreshStorage();
      } catch (err) {
        state.online = false;
        if (status) {
          status.hidden = false;
          status.classList.add("error");
          status.textContent =
            "Cloud offline — the API server is unreachable. If you are developing locally, run `cd server && npm start` and open the site through that server.";
        }
        renderFiles();
      }
    }, "Gathering memories…");
  }

  /** @deprecated panel removed — kept as alias for refresh */
  async function openPanel() {
    return refreshTimeline();
  }

  function closePanel() {
    closePreview();
    hideContextMenu();
  }

  function wirePanel() {
    $("#cloud-panel-close")?.addEventListener("click", () => {
      playSfx("tap");
      closePanel();
    });
    $("#cloud-open-picker")?.addEventListener("click", () => {
      playSfx("tap");
      $("#cloud-input")?.click();
    });

    const drop = $("#cloud-dropzone");
    drop?.addEventListener("dragover", (e) => {
      e.preventDefault();
      drop.classList.add("is-dragover");
    });
    drop?.addEventListener("dragleave", () => drop.classList.remove("is-dragover"));
    drop?.addEventListener("drop", (e) => {
      e.preventDefault();
      drop.classList.remove("is-dragover");
      if (e.dataTransfer?.files?.length) {
        playSfx("pop");
        handleFiles(e.dataTransfer.files);
      }
    });
    drop?.addEventListener("click", (e) => {
      if (e.target.closest("#cloud-input")) return;
      playSfx("tap");
      $("#cloud-input")?.click();
    });
    drop?.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        $("#cloud-input")?.click();
      }
    });

    $("#cloud-input")?.addEventListener("change", (e) => {
      if (e.target.files?.length) handleFiles(e.target.files);
      e.target.value = "";
    });

    $$(".cloud-chip[data-filter]").forEach((chip) => {
      chip.addEventListener("click", async () => {
        playSfx("tap");
        $$(".cloud-chip[data-filter]").forEach((c) => {
          c.classList.remove("is-active");
          c.setAttribute("aria-selected", "false");
        });
        chip.classList.add("is-active");
        chip.setAttribute("aria-selected", "true");
        const f = chip.dataset.filter;
        await withBusy(async () => {
          if (f === "trash") {
            state.mode = "trash";
            state.filter = "trash";
            try {
              await loadTrash();
            } catch {
              /* */
            }
          } else {
            state.mode = "files";
            state.filter = f;
            try {
              await loadAssets();
            } catch {
              /* */
            }
          }
          state.selected.clear();
          const drop = $("#cloud-dropzone");
          if (drop) drop.hidden = state.mode === "trash";
          updateActionLabels();
          renderFiles();
        }, f === "trash" ? "Peeking in trash…" : "Sorting memories…");
      });
    });

    $("#cloud-search")?.addEventListener("input", async (e) => {
      state.q = e.target.value.trim();
      if (state.mode === "files") {
        try {
          await loadAssets();
          renderFiles();
        } catch {
          /* */
        }
      }
    });

    $("#cloud-sort")?.addEventListener("change", async (e) => {
      const [sort, order] = e.target.value.split(":");
      state.sort = sort;
      state.order = order || "desc";
      if (state.mode === "files") {
        await loadAssets();
        renderFiles();
      }
    });

    $("#cloud-view-toggle")?.addEventListener("click", () => {
      playSfx("tap");
      state.view = state.view === "grid" ? "list" : "grid";
      $("#cloud-view-toggle").textContent = state.view === "grid" ? "List" : "Grid";
      renderFiles();
    });

    $("#cloud-bulk-trash")?.addEventListener("click", () => {
      playSfx("pop");
      bulkTrash();
    });
    $("#cloud-preview-close")?.addEventListener("click", () => {
      playSfx("tap");
      closePreview();
    });
    $("#cloud-preview-download")?.addEventListener("click", () => {
      const id = $("#cloud-preview")?.dataset.assetId;
      const asset = [...state.assets, ...state.trash].find((a) => a.id === id);
      if (asset) downloadAsset(asset);
    });
    $("#cloud-preview-trash")?.addEventListener("click", async () => {
      const id = $("#cloud-preview")?.dataset.assetId;
      if (!id) return;
      if (state.mode === "trash") await restoreAsset(id);
      else await trashAsset(id);
      closePreview();
    });
    updateActionLabels();
  }

  /** Public API for script.js */
  window.NanhaCloud = {
    open: openPanel,
    close: closePanel,
    refresh: refreshTimeline,
    setLocalItems(items) {
      state.localItems = Array.isArray(items) ? items : [];
      renderFiles();
    },
    getTimeline() {
      return state.flatTimeline.slice();
    },
    async listActiveAssets() {
      try {
        const ok = await ensureAuth();
        if (!ok) return [];
        await loadAssets();
        return state.assets;
      } catch {
        return [];
      }
    },
    async trySilentAuth() {
      try {
        return await ensureAuth();
      } catch {
        return false;
      }
    },
  };

  document.addEventListener("DOMContentLoaded", () => {
    wirePanel();
    ensureAuth()
      .then((ok) => {
        if (ok) connectSocket();
      })
      .catch(() => {});
  });
})();
