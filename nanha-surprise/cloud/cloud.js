/**
 * Nanha Cloud — Gallery panel client (Drive-backed via server API)
 */
(function () {
  const state = {
    authenticated: false,
    galleryId: null,
    assets: [],
    trash: [],
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
  };

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

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

  async function api(path, options = {}) {
    const res = await fetch(path, {
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

  async function ensureAuth() {
    try {
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
    state.socket = io("/cloud", {
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
        label.textContent = `${p.phase || "uploading"} · ${p.percent || 0}% (${formatBytes(p.bytesReceived)} / ${formatBytes(p.totalBytes)})`;
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

  function applyStorage(quota) {
    const fill = $("#cloud-storage-fill");
    const meta = $("#cloud-storage-meta");
    if (!quota || quota.used == null || quota.total == null) {
      if (meta) {
        meta.textContent =
          quota?.usedByApp != null
            ? `App files: ${formatBytes(quota.usedByApp)} · ${quota.fileCount || 0} files (Drive quota unavailable)`
            : "Storage info unavailable";
      }
      return;
    }
    const pct = quota.total > 0 ? Math.min(100, (quota.used / quota.total) * 100) : 0;
    if (fill) fill.style.width = `${pct}%`;
    if (meta) {
      meta.innerHTML = `
        <span>Used ${formatBytes(quota.used)} / ${formatBytes(quota.total)}</span>
        <span>Available ${formatBytes(quota.available)}</span>
        <span>Nanha files ${formatBytes(quota.usedByApp)} (${quota.fileCount || 0})</span>
      `;
    }
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
    const params = new URLSearchParams({
      status: "active",
      sort: state.sort,
      order: state.order,
      limit: "100",
    });
    if (category) params.set("category", category);
    if (state.q) params.set("q", state.q);
    const data = await api(`/api/cloud/assets?${params}`);
    state.assets = data.items || [];
    return state.assets;
  }

  async function loadTrash() {
    const data = await api("/api/cloud/trash");
    state.trash = data.items || [];
    return state.trash;
  }

  function filteredList() {
    const list = state.mode === "trash" ? state.trash : state.assets;
    return list;
  }

  function renderFiles() {
    const host = $("#cloud-files");
    const empty = $("#cloud-empty");
    if (!host) return;
    const items = filteredList();
    host.classList.toggle("is-list", state.view === "list");
    host.innerHTML = "";

    if (!items.length) {
      if (empty) {
        empty.hidden = false;
        empty.textContent =
          state.mode === "trash"
            ? "Trash is empty ✨"
            : state.online
              ? "No files yet — drop photos, GIFs, videos or documents here"
              : "Nanha Cloud is resting 😴";
      }
      return;
    }
    if (empty) empty.hidden = true;

    for (const asset of items) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "cloud-item" + (state.selected.has(asset.id) ? " is-selected" : "");
      btn.dataset.id = asset.id;

      const check = document.createElement("span");
      check.className = "cloud-item-check";
      check.textContent = state.selected.has(asset.id) ? "✓" : "";
      check.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleSelect(asset.id);
      });

      const img = document.createElement("img");
      img.loading = "lazy";
      img.alt = asset.name;
      img.src = asset.thumbnailUrl;
      img.onerror = () => {
        img.replaceWith(Object.assign(document.createElement("div"), {
          className: "cloud-thumb-ph",
          textContent: asset.category,
        }));
      };

      const meta = document.createElement("div");
      meta.className = "cloud-item-meta";
      meta.innerHTML = `<div class="cloud-item-name"></div><div class="cloud-item-sub"></div>`;
      meta.querySelector(".cloud-item-name").textContent = asset.name;
      const dims =
        asset.width && asset.height ? `${asset.width}×${asset.height} · ` : "";
      meta.querySelector(".cloud-item-sub").textContent =
        `${dims}${formatBytes(asset.size)} · ${asset.category}${asset.animated ? " · animated" : ""}`;

      btn.appendChild(check);
      btn.appendChild(img);
      if (asset.category === "gif") {
        const badge = document.createElement("span");
        badge.className = "cloud-badge-gif";
        badge.textContent = "GIF";
        btn.appendChild(badge);
      }
      btn.appendChild(meta);

      btn.addEventListener("click", () => openPreview(asset));
      btn.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        showContextMenu(e.clientX, e.clientY, asset);
      });

      host.appendChild(btn);
    }
    updateBulkBar();
  }

  function toggleSelect(id) {
    if (state.selected.has(id)) state.selected.delete(id);
    else state.selected.add(id);
    renderFiles();
  }

  function updateBulkBar() {
    const bar = $("#cloud-bulk-bar");
    if (!bar) return;
    bar.classList.toggle("is-visible", state.selected.size > 0);
    const count = $("#cloud-sel-count");
    if (count) count.textContent = `${state.selected.size} selected`;
  }

  function showContextMenu(x, y, asset) {
    hideContextMenu();
    const menu = document.createElement("div");
    menu.className = "cloud-ctx";
    menu.id = "cloud-ctx";
    menu.style.left = `${Math.min(x, window.innerWidth - 180)}px`;
    menu.style.top = `${Math.min(y, window.innerHeight - 160)}px`;

    const actions =
      state.mode === "trash"
        ? [
            ["Restore", () => restoreAsset(asset.id)],
            ["Delete forever", () => permanentDelete(asset.id)],
          ]
        : [
            ["Open", () => openPreview(asset)],
            ["Download", () => downloadAsset(asset)],
            ["Move to trash", () => trashAsset(asset.id)],
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

    if (asset.category === "video") {
      const v = document.createElement("video");
      v.controls = true;
      v.src = asset.contentUrl;
      v.className = "";
      media.appendChild(v);
    } else if (asset.category === "document") {
      const a = document.createElement("a");
      a.href = `${asset.contentUrl}?download=1`;
      a.textContent = `Download ${asset.name}`;
      a.style.color = "#fff";
      media.appendChild(a);
    } else {
      // GIF / image — use content URL so animated GIFs play
      const img = document.createElement("img");
      img.src = asset.contentUrl;
      img.alt = asset.name;
      media.appendChild(img);
    }

    if (info) {
      const anim =
        asset.category === "gif"
          ? ` · animated GIF${asset.width ? ` · ${asset.width}×${asset.height}` : ""}`
          : asset.width
            ? ` · ${asset.width}×${asset.height}`
            : "";
      info.textContent = `${asset.name} · ${formatBytes(asset.size)}${anim}`;
    }
    panel.hidden = false;
    panel.dataset.assetId = asset.id;
  }

  function closePreview() {
    const panel = $("#cloud-preview");
    if (panel) {
      panel.hidden = true;
      $("#cloud-preview-media").innerHTML = "";
    }
  }

  function downloadAsset(asset) {
    const a = document.createElement("a");
    a.href = `${asset.contentUrl}?download=1`;
    a.download = asset.name;
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  async function trashAsset(id) {
    await api(`/api/cloud/assets/${id}/trash`, { method: "POST" });
    state.assets = state.assets.filter((a) => a.id !== id);
    state.selected.delete(id);
    renderFiles();
    window.dispatchEvent(new CustomEvent("nanha-cloud:assets-changed"));
    refreshStorage();
  }

  async function restoreAsset(id) {
    await api(`/api/cloud/assets/${id}/restore`, { method: "POST" });
    await loadTrash();
    await loadAssets();
    renderFiles();
    window.dispatchEvent(new CustomEvent("nanha-cloud:assets-changed"));
  }

  async function permanentDelete(id) {
    if (!confirm("Permanently delete this file? This cannot be undone.")) return;
    await api(`/api/cloud/assets/${id}`, { method: "DELETE" });
    state.trash = state.trash.filter((a) => a.id !== id);
    state.assets = state.assets.filter((a) => a.id !== id);
    state.selected.delete(id);
    closePreview();
    renderFiles();
    window.dispatchEvent(new CustomEvent("nanha-cloud:assets-changed"));
    refreshStorage();
  }

  async function bulkTrash() {
    const ids = [...state.selected];
    for (const id of ids) {
      try {
        if (state.mode === "trash") await permanentDelete(id);
        else await trashAsset(id);
      } catch (err) {
        console.error(err);
      }
    }
    state.selected.clear();
    updateBulkBar();
  }

  function addProgressRow(uploadId, name) {
    const list = $("#cloud-progress-list");
    if (!list) return;
    const row = document.createElement("div");
    row.className = "cloud-progress-item";
    row.dataset.uploadId = uploadId;
    row.innerHTML = `<div class="label">Starting ${name}…</div><div class="bar"><span></span></div>`;
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
          label.textContent = `uploading · ${result.percent}% (${formatBytes(result.bytesReceived)} / ${formatBytes(result.totalBytes)})`;
        }
      }
    }

    const done = await api(`/api/cloud/uploads/${uploadId}/complete`, { method: "POST" });
    const el = $(`[data-upload-id="${uploadId}"]`);
    if (el) {
      setTimeout(() => el.remove(), 1200);
    }
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

  async function openPanel() {
    const panel = $("#cloud-panel");
    if (!panel) return;
    panel.hidden = false;
    requestAnimationFrame(() => panel.classList.add("is-open"));

    const status = $("#cloud-status");
    try {
      const ok = await ensureAuth();
      if (!ok) {
        state.online = true;
        if (status) {
          status.hidden = false;
          status.classList.remove("error");
          status.textContent =
            "Enter the invite from your gift link (?invite=…) to unlock Nanha Cloud.";
        }
        $("#cloud-files").innerHTML = "";
        $("#cloud-empty").hidden = false;
        $("#cloud-empty").textContent = "Private vault locked 🔒";
        return;
      }
      if (status) status.hidden = true;
      connectSocket();
      await loadAssets();
      renderFiles();
      refreshStorage();
    } catch (err) {
      state.online = false;
      if (status) {
        status.hidden = false;
        status.classList.add("error");
        status.textContent = "Nanha Cloud is resting 😴 — start the server to sync.";
      }
      $("#cloud-empty").hidden = false;
      $("#cloud-empty").textContent = "Nanha Cloud is resting 😴";
    }
  }

  function closePanel() {
    const panel = $("#cloud-panel");
    if (!panel) return;
    panel.classList.remove("is-open");
    closePreview();
    hideContextMenu();
    setTimeout(() => {
      panel.hidden = true;
    }, 380);
  }

  function wirePanel() {
    $("#cloud-panel-close")?.addEventListener("click", closePanel);
    $("#cloud-open-picker")?.addEventListener("click", () => $("#cloud-input")?.click());

    const drop = $("#cloud-dropzone");
    drop?.addEventListener("dragover", (e) => {
      e.preventDefault();
      drop.classList.add("is-dragover");
    });
    drop?.addEventListener("dragleave", () => drop.classList.remove("is-dragover"));
    drop?.addEventListener("drop", (e) => {
      e.preventDefault();
      drop.classList.remove("is-dragover");
      if (e.dataTransfer?.files?.length) handleFiles(e.dataTransfer.files);
    });

    $("#cloud-input")?.addEventListener("change", (e) => {
      if (e.target.files?.length) handleFiles(e.target.files);
      e.target.value = "";
    });

    $$(".cloud-chip[data-filter]").forEach((chip) => {
      chip.addEventListener("click", async () => {
        $$(".cloud-chip[data-filter]").forEach((c) => c.classList.remove("is-active"));
        chip.classList.add("is-active");
        const f = chip.dataset.filter;
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
        renderFiles();
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
      state.view = state.view === "grid" ? "list" : "grid";
      $("#cloud-view-toggle").textContent = state.view === "grid" ? "List" : "Grid";
      renderFiles();
    });

    $("#cloud-bulk-trash")?.addEventListener("click", () => bulkTrash());
    $("#cloud-preview-close")?.addEventListener("click", closePreview);
    $("#cloud-preview-download")?.addEventListener("click", () => {
      const id = $("#cloud-preview")?.dataset.assetId;
      const asset = [...state.assets, ...state.trash].find((a) => a.id === id);
      if (asset) downloadAsset(asset);
    });
    $("#cloud-preview-trash")?.addEventListener("click", async () => {
      const id = $("#cloud-preview")?.dataset.assetId;
      if (!id) return;
      if (state.mode === "trash") await permanentDelete(id);
      else await trashAsset(id);
      closePreview();
    });
  }

  /** Public API for script.js gallery merge */
  window.NanhaCloud = {
    open: openPanel,
    close: closePanel,
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
    // Silent auth if invite in URL
    ensureAuth().then((ok) => {
      if (ok) connectSocket();
    }).catch(() => {});
  });
})();
