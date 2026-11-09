/* Nanha Surprise — audio playlist popover (chrome music button).
   Custom player UI + hidden YT IFrame API for high-quality audio streams.
   No visible video. No MP3 ripping.
*/
(function () {
  "use strict";

  const ENDPOINT = () => {
    const base = String(window.NANHA_API_BASE || "").replace(/\/$/, "");
    return `${base}/api/youtube/playlist`;
  };
  const YT_API_SRC = "https://www.youtube.com/iframe_api";

  let trackList = [];
  let currentIndex = -1;
  let isLoading = false;
  let loaded = false;
  let open = false;
  let ytPlayer = null;
  let ytReady = false;
  let playerReadyPromise = null;
  let pendingPlayId = null;
  let pendingAutoplay = false;
  let isPlaying = false;
  let progressTimer = null;
  let seeking = false;
  let apiLoading = false;
  let loadGen = 0;
  let ignoreEndedUntil = 0;
  let startIndexLocked = false;

  const $ = (sel, root = document) => root.querySelector(sel);

  function els() {
    return {
      btn: $("#btn-music"),
      panel: $("#nanha-playlist-panel"),
      status: $("#playlist-status"),
      layout: $("#playlist-layout"),
      list: $("#playlist-tracks"),
      now: $("#playlist-now"),
      art: $("#playlist-art"),
      close: $("#playlist-close"),
      muteBtn: $("#playlist-mute"),
      sfxMuteBtn: $("#playlist-sfx-mute"),
      play: $("#playlist-play"),
      prev: $("#playlist-prev"),
      next: $("#playlist-next"),
      seek: $("#playlist-seek"),
      timeCur: $("#playlist-time-cur"),
      timeDur: $("#playlist-time-dur"),
      host: $("#playlist-yt-host"),
    };
  }

  function fmt(sec) {
    sec = Math.max(0, Math.floor(Number(sec) || 0));
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return m + ":" + String(s).padStart(2, "0");
  }

  function setStatus(msg, { error = false, hide = false } = {}) {
    const { status } = els();
    if (!status) return;
    if (hide) {
      status.hidden = true;
      return;
    }
    status.hidden = false;
    status.textContent = msg;
    status.classList.toggle("is-error", !!error);
  }

  let playlistMuted = false;
  let ducked = false;
  let preDuckVolume = 100;
  let duckRestoreTimer = 0;

  function syncMuteChip() {
    const { muteBtn } = els();
    if (!muteBtn) return;
    muteBtn.setAttribute("aria-pressed", playlistMuted ? "true" : "false");
    muteBtn.textContent = playlistMuted ? "Unmute music" : "Mute music";
  }

  function syncSfxMuteChip() {
    const { sfxMuteBtn } = els();
    if (!sfxMuteBtn) return;
    const muted = !!(typeof Sound !== "undefined" && Sound.sfxMuted);
    sfxMuteBtn.setAttribute("aria-pressed", muted ? "true" : "false");
    sfxMuteBtn.textContent = muted ? "Unmute sounds" : "Mute sounds";
  }

  function applyMute() {
    try {
      if (ytPlayer && ytReady) {
        if (playlistMuted) ytPlayer.mute();
        else ytPlayer.unMute();
      }
    } catch (_) {}
    syncMuteChip();
  }

  /** Softly lower playlist volume without pausing/stopping — never reloads tracks. */
  function softDuck(level = 38) {
    if (!ytPlayer || !ytReady || playlistMuted) return;
    try {
      if (duckRestoreTimer) {
        clearTimeout(duckRestoreTimer);
        duckRestoreTimer = 0;
      }
      if (!ducked && typeof ytPlayer.getVolume === "function") {
        const v = ytPlayer.getVolume();
        if (typeof v === "number" && !Number.isNaN(v)) preDuckVolume = v;
      }
      if (typeof ytPlayer.setVolume === "function") {
        ytPlayer.setVolume(Math.max(8, Math.min(100, level)));
        ducked = true;
      }
    } catch (_) {}
  }

  function softRestore({ delayMs = 0 } = {}) {
    const run = () => {
      duckRestoreTimer = 0;
      if (!ducked || !ytPlayer || !ytReady) return;
      try {
        if (playlistMuted) {
          ytPlayer.mute();
        } else if (typeof ytPlayer.setVolume === "function") {
          ytPlayer.setVolume(Math.max(0, Math.min(100, preDuckVolume)));
          ytPlayer.unMute();
        } else {
          ytPlayer.unMute();
        }
      } catch (_) {}
      ducked = false;
    };
    if (duckRestoreTimer) clearTimeout(duckRestoreTimer);
    if (delayMs > 0) duckRestoreTimer = setTimeout(run, delayMs);
    else run();
  }

  function playUiTap() {
    try {
      if (typeof Sound !== "undefined") Sound.play("tap");
    } catch (_) {}
  }

  function getPlayerState() {
    try {
      if (ytPlayer && ytReady && window.YT?.PlayerState) {
        return ytPlayer.getPlayerState();
      }
    } catch (_) {}
    return null;
  }

  function isActivelyPlaying() {
    const S = window.YT?.PlayerState;
    if (!S) return !!isPlaying;
    const state = getPlayerState();
    return state === S.PLAYING || state === S.BUFFERING;
  }

  function currentVideoId() {
    try {
      return ytPlayer?.getVideoData?.()?.video_id || trackList[currentIndex]?.videoId || "";
    } catch (_) {
      return trackList[currentIndex]?.videoId || "";
    }
  }

  function syncPlayButton() {
    refreshPlayingFromPlayer();
    const { play, btn } = els();
    if (play) {
      play.classList.toggle("is-playing", !!isPlaying);
      play.setAttribute("aria-label", isPlaying ? "Pause" : "Play");
    }
    if (btn) {
      btn.classList.toggle("is-playing", !!isPlaying);
      btn.setAttribute("aria-pressed", isPlaying ? "true" : "false");
      btn.title = isPlaying ? "Music playing — open Nanha music" : "Nanha music";
      if (!btn.classList.contains("is-open")) {
        btn.setAttribute(
          "aria-label",
          isPlaying ? "Music playing — open Nanha music" : "Open Nanha music"
        );
      }
    }
  }

  function updateNowPlaying(track) {
    const { now, art } = els();
    if (now) now.textContent = track?.title || "Pick a song";
    if (art) {
      if (track?.thumbnail) {
        art.src = track.thumbnail;
        art.hidden = false;
      } else {
        art.removeAttribute("src");
        art.hidden = true;
      }
    }
    const { timeDur } = els();
    if (timeDur && track?.durationSec) timeDur.textContent = fmt(track.durationSec);
  }

  function highlightActive() {
    const { list } = els();
    if (!list) return;
    const id = trackList[currentIndex]?.videoId;
    list.querySelectorAll(".nanha-playlist-track").forEach((btn) => {
      const active = btn.dataset.videoId === id;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-selected", active ? "true" : "false");
      if (active) btn.scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
  }

  function tickProgress() {
    if (seeking || !ytPlayer || typeof ytPlayer.getCurrentTime !== "function") return;
    try {
      const cur = ytPlayer.getCurrentTime() || 0;
      const dur = ytPlayer.getDuration() || trackList[currentIndex]?.durationSec || 0;
      const { seek, timeCur, timeDur } = els();
      if (timeCur) timeCur.textContent = fmt(cur);
      if (timeDur && dur) timeDur.textContent = fmt(dur);
      if (seek && dur > 0) seek.value = String(Math.round((cur / dur) * 1000));
    } catch (_) {}
  }

  function startProgress() {
    stopProgress();
    progressTimer = setInterval(tickProgress, 400);
  }

  function stopProgress() {
    if (progressTimer) {
      clearInterval(progressTimer);
      progressTimer = null;
    }
  }

  function ensureYtApi() {
    return new Promise((resolve) => {
      if (window.YT && window.YT.Player) {
        resolve();
        return;
      }
      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = function () {
        try {
          if (typeof prev === "function") prev();
        } catch (_) {}
        resolve();
      };
      if (!apiLoading && !document.querySelector(`script[src="${YT_API_SRC}"]`)) {
        apiLoading = true;
        const s = document.createElement("script");
        s.src = YT_API_SRC;
        s.async = true;
        document.head.appendChild(s);
      }
    });
  }

  function refreshPlayingFromPlayer() {
    try {
      if (ytPlayer && ytReady && window.YT?.PlayerState) {
        const state = ytPlayer.getPlayerState();
        isPlaying =
          state === window.YT.PlayerState.PLAYING ||
          state === window.YT.PlayerState.BUFFERING;
      }
    } catch (_) {}
  }

  async function ensurePlayer() {
    await ensureYtApi();
    if (ytPlayer && ytReady) return ytPlayer;
    if (playerReadyPromise) return playerReadyPromise;

    const { host } = els();
    if (!host) return null;

    playerReadyPromise = new Promise((resolve) => {
      // Non-zero size required — 0×0 players often error and skip the first track
      ytPlayer = new window.YT.Player("playlist-yt-host", {
        width: 320,
        height: 180,
        host: "https://www.youtube-nocookie.com",
        playerVars: {
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          fs: 0,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
          iv_load_policy: 3,
          origin: window.location.origin,
        },
        events: {
          onReady(e) {
            ytReady = true;
            if (pendingPlayId) {
              const id = pendingPlayId;
              const shouldPlay = pendingAutoplay;
              pendingPlayId = null;
              pendingAutoplay = false;
              ignoreEndedUntil = Date.now() + 1200;
              loadGen += 1;
              if (shouldPlay) {
                e.target.loadVideoById({ videoId: id });
                try {
                  e.target.playVideo();
                } catch (_) {}
              } else {
                e.target.cueVideoById({ videoId: id });
              }
            }
            resolve(ytPlayer);
          },
          onStateChange(e) {
            const S = window.YT.PlayerState;
            if (e.data === S.PLAYING || e.data === S.BUFFERING) {
              isPlaying = true;
              syncPlayButton();
              if (e.data === S.PLAYING) {
                startProgress();
                applyMute();
              }
            } else if (e.data === S.PAUSED) {
              isPlaying = false;
              syncPlayButton();
              stopProgress();
            } else if (e.data === S.ENDED) {
              // Ignore aborted loads / rapid reload races (was skipping song 1 → song 2)
              if (Date.now() < ignoreEndedUntil) return;
              isPlaying = false;
              syncPlayButton();
              stopProgress();
              playNext({ auto: true });
            }
          },
          onError() {
            // One soft retry on the same track before skipping
            if (Date.now() < ignoreEndedUntil) {
              try {
                const id = trackList[currentIndex]?.videoId;
                if (id && ytPlayer) {
                  ignoreEndedUntil = Date.now() + 1200;
                  ytPlayer.loadVideoById({ videoId: id });
                  ytPlayer.playVideo();
                  return;
                }
              } catch (_) {}
            }
            isPlaying = false;
            syncPlayButton();
            playNext({ auto: true });
          },
        },
      });
    });

    return playerReadyPromise;
  }

  async function loadAndPlay(videoId, { autoplay = true, forceReload = false } = {}) {
    if (!videoId) return;
    await ensurePlayer();
    if (!ytReady) {
      pendingPlayId = autoplay ? videoId : null;
      return;
    }
    try {
      const same = currentVideoId() === videoId;
      if (autoplay) {
        if (!same || forceReload) {
          ytPlayer.loadVideoById({ videoId, suggestedQuality: "highres" });
        }
        try {
          ytPlayer.setPlaybackQuality("highres");
        } catch (_) {}
        ytPlayer.playVideo();
        isPlaying = true;
        applyMute();
      } else if (!same || forceReload) {
        ytPlayer.cueVideoById({ videoId, suggestedQuality: "highres" });
        isPlaying = false;
      }
      syncPlayButton();
    } catch (_) {}
  }

  function setTrackByIndex(index, { autoplay = true, forceReload = false } = {}) {
    if (!trackList.length) return;
    const i = ((index % trackList.length) + trackList.length) % trackList.length;
    currentIndex = i;
    const track = trackList[i];
    updateNowPlaying(track);
    highlightActive();
    const { seek, timeCur } = els();
    if (seek) seek.value = "0";
    if (timeCur) timeCur.textContent = "0:00";
    loadAndPlay(track.videoId, { autoplay, forceReload });
  }

  function togglePlay() {
    if (currentIndex < 0 && trackList.length) {
      setTrackByIndex(0, { autoplay: true });
      return;
    }
    if (!ytPlayer || !ytReady) {
      if (trackList[currentIndex]) loadAndPlay(trackList[currentIndex].videoId, { autoplay: true });
      return;
    }
    try {
      const state = ytPlayer.getPlayerState();
      if (state === window.YT.PlayerState.PLAYING) {
        ytPlayer.pauseVideo();
      } else {
        ytPlayer.playVideo();
        applyMute();
      }
    } catch (_) {}
  }

  function playPrev() {
    if (!trackList.length) return;
    setTrackByIndex(currentIndex <= 0 ? trackList.length - 1 : currentIndex - 1, {
      autoplay: true,
      forceReload: true,
    });
  }

  function playNext({ auto = false } = {}) {
    if (!trackList.length) return;
    if (currentIndex < 0) {
      setTrackByIndex(0, { autoplay: true, forceReload: true });
      return;
    }
    if (auto && currentIndex >= trackList.length - 1) {
      isPlaying = false;
      syncPlayButton();
      return;
    }
    setTrackByIndex(currentIndex + 1, { autoplay: true, forceReload: true });
  }

  function renderTracklist() {
    const { list, layout } = els();
    if (!list) return;
    list.innerHTML = "";

    trackList.forEach((track, i) => {
      const li = document.createElement("li");
      li.setAttribute("role", "option");

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "nanha-playlist-track";
      btn.dataset.videoId = track.videoId;
      btn.setAttribute("aria-selected", "false");
      btn.title = track.title;

      if (track.thumbnail) {
        const img = document.createElement("img");
        img.className = "nanha-playlist-thumb";
        img.src = track.thumbnail;
        img.alt = "";
        img.loading = "lazy";
        btn.appendChild(img);
      } else {
        const ph = document.createElement("span");
        ph.className = "nanha-playlist-thumb nanha-playlist-thumb-fallback";
        ph.setAttribute("aria-hidden", "true");
        ph.textContent = "♪";
        btn.appendChild(ph);
      }

      const meta = document.createElement("span");
      meta.className = "nanha-playlist-track-meta";

      const title = document.createElement("span");
      title.className = "nanha-playlist-track-title";
      title.textContent = track.title || `Song ${i + 1}`;
      meta.appendChild(title);

      if (track.durationSec) {
        const dur = document.createElement("span");
        dur.className = "nanha-playlist-track-dur";
        dur.textContent = fmt(track.durationSec);
        meta.appendChild(dur);
      }

      btn.appendChild(meta);

      btn.addEventListener("click", () => {
        setTrackByIndex(i, { autoplay: true, forceReload: true });
        playUiTap();
      });

      li.appendChild(btn);
      list.appendChild(li);
    });

    if (layout) layout.hidden = trackList.length === 0;
  }

  let loadPromise = null;

  async function loadPlaylist() {
    if (loaded) return true;
    if (loadPromise) return loadPromise;

    isLoading = true;
    setStatus("Loading songs…");
    const { layout } = els();
    if (layout) layout.hidden = true;

    loadPromise = (async () => {
      try {
        const res = await fetch(ENDPOINT(), { credentials: "include" });
        const data = await res.json().catch(() => ({}));

        if (!res.ok) {
          const code = data.code || "";
          let msg = data.error || "Could not load the playlist.";
          if (res.status === 503 || code === "NOT_CONFIGURED") {
            msg = "Music isn’t set up yet — add the playlist settings on the server.";
          } else if (code === "QUOTA" || res.status === 429) {
            msg = "Music limit reached for today. Try again later.";
          }
          setStatus(msg, { error: true });
          return false;
        }

        trackList = Array.isArray(data.tracks) ? data.tracks : [];
        if (!trackList.length) {
          setStatus("No songs in this playlist yet.", { error: true });
          return false;
        }

        loaded = true;
        setStatus("", { hide: true });
        renderTracklist();
        updateNowPlaying(trackList[0]);
        currentIndex = 0;
        highlightActive();
        return true;
      } catch (_) {
        setStatus("Couldn’t reach the music server. Open the site through Nanha Cloud.", {
          error: true,
        });
        return false;
      } finally {
        isLoading = false;
        if (!loaded) loadPromise = null;
      }
    })();

    return loadPromise;
  }

  /** Warm playlist + YT engine during loader so Open is instant. */
  async function warmEngine() {
    try {
      ensureYtApi();
      const ok = await loadPlaylist();
      if (!ok) return false;
      await ensurePlayer();
      return !!(ytPlayer && ytReady);
    } catch (_) {
      return false;
    }
  }

  /**
   * Start playlist if idle. Always begins at track 0 on first start.
   * Never restarts/stops a song that is already playing.
   * Manual pause by the user is respected (will not auto-resume).
   */
  async function ensurePlaying() {
    const ok = loaded || (await loadPlaylist());
    if (!ok || !trackList.length) return false;
    await ensurePlayer();

    const S = window.YT?.PlayerState;
    const state = getPlayerState();

    // Already playing/buffering — leave it alone
    if (isActivelyPlaying()) {
      startIndexLocked = true;
      syncPlayButton();
      return true;
    }

    // User manually paused after start — do not force resume
    if (startIndexLocked && S && state === S.PAUSED) {
      syncPlayButton();
      return true;
    }

    // First start only: always song 1 (index 0), once
    if (!startIndexLocked) {
      startIndexLocked = true;
      currentIndex = 0;
      setTrackByIndex(0, { autoplay: true, forceReload: true });
      return true;
    }

    // Soft resume of current track if stalled (not a restart from song 2)
    const idx = currentIndex >= 0 ? currentIndex : 0;
    setTrackByIndex(idx, { autoplay: true, forceReload: false });
    return true;
  }
  /** Alias used by enter gesture — same non-interruptive behavior. */
  async function beginPlayback() {
    return ensurePlaying();
  }


  function stopPlayback() {
    stopProgress();
    try {
      if (ytPlayer && ytReady) ytPlayer.stopVideo();
    } catch (_) {}
    isPlaying = false;
    syncPlayButton();
  }

  function openPanel() {
    const { panel, btn } = els();
    if (!panel) return;
    panel.hidden = false;
    open = true;
    if (btn) {
      btn.setAttribute("aria-expanded", "true");
      btn.classList.add("is-open");
    }
    syncMuteChip();
    syncSfxMuteChip();
    syncPlayButton();
    loadPlaylist();
  }

  function closePanel({ stop = false } = {}) {
    const { panel, btn } = els();
    if (!panel) return;
    panel.hidden = true;
    open = false;
    if (btn) {
      btn.setAttribute("aria-expanded", "false");
      btn.classList.remove("is-open");
    }
    if (stop) stopPlayback();
  }

  function togglePanel() {
    if (open) closePanel({ stop: false });
    else openPanel();
  }

  function onDocumentClick(e) {
    if (!open) return;
    const { panel, btn } = els();
    const t = e.target;
    if (panel && panel.contains(t)) return;
    if (btn && (btn === t || btn.contains(t))) return;
    closePanel({ stop: false });
  }

  function onKey(e) {
    if (!open) return;
    if (e.key === "Escape") closePanel({ stop: false });
    if (e.key === " " && e.target === document.body) {
      e.preventDefault();
      togglePlay();
    }
  }

  function wireSeek() {
    const { seek } = els();
    if (!seek) return;
    seek.addEventListener("pointerdown", () => {
      seeking = true;
    });
    seek.addEventListener("pointerup", () => {
      seeking = false;
      commitSeek();
    });
    seek.addEventListener("change", commitSeek);
  function commitSeek() {
      if (!ytPlayer || !ytReady) return;
      try {
        const dur = ytPlayer.getDuration() || trackList[currentIndex]?.durationSec || 0;
        if (dur <= 0) return;
        const t = (Number(seek.value) / 1000) * dur;
        ytPlayer.seekTo(t, true);
        const { timeCur } = els();
        if (timeCur) timeCur.textContent = fmt(t);
      } catch (_) {}
    }
  }

  function init() {
    const { btn, close, muteBtn, sfxMuteBtn, panel, play, prev, next } = els();
    if (!panel || !btn) return;

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      togglePanel();
      playUiTap();
    });

    close?.addEventListener("click", () => {
      closePanel({ stop: false });
      playUiTap();
    });
    play?.addEventListener("click", () => {
      togglePlay();
      playUiTap();
    });
    prev?.addEventListener("click", () => {
      playPrev();
      playUiTap();
    });
    next?.addEventListener("click", () => {
      playNext();
      playUiTap();
    });

    muteBtn?.addEventListener("click", () => {
      playlistMuted = !playlistMuted;
      applyMute();
      // Do not play SFX when muting music if SFX muted — Sound.play already respects that
      playUiTap();
    });

    sfxMuteBtn?.addEventListener("click", () => {
      try {
        if (typeof Sound !== "undefined") Sound.toggleSfxMute();
      } catch (_) {}
      syncSfxMuteChip();
    });

    wireSeek();
    document.addEventListener("click", onDocumentClick);
    document.addEventListener("keydown", onKey);
    syncSfxMuteChip();
  }

  window.NanhaPlaylist = {
    init,
    open: openPanel,
    close: closePanel,
    toggle: togglePanel,
    loadPlaylist,
    warmEngine,
    beginPlayback,
    ensurePlaying,
    softDuck,
    softRestore,
    syncSfxMuteChip,
    get currentTrackId() {
      return trackList[currentIndex]?.videoId || "";
    },
    get trackList() {
      return trackList.slice();
    },
    get isOpen() {
      return open;
    },
    get isPlaying() {
      return isPlaying;
    },
    get isReady() {
      return !!(loaded && trackList.length && ytPlayer && ytReady);
    },
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
