/* ========================================
   Nanha Surprise — App Logic
   Edit ONLY the CONFIG object below to
   customize names, quotes, memories, etc.
   ======================================== */

const CONFIG = {
  herName: "Nanhi Bacchi",
  myName: "Cocoon",

  /* Gate */
  gateQuestion: "Which was the best day of my life? 💫",
  gateOptions: [
    { label: "20 Jan", correct: false },
    { label: "21 Feb", correct: false },
    { label: "20 Mar", correct: false },
    { label: "10 Nov", correct: true },
    { label: "15 Aug", correct: false },
  ],
  birthdayDate: { month: 10, day: 10 }, // 0-indexed month → November 10

  /* Quotes & copy */
  birthdayQuote:
    "May your year bloom like soft mandalas — quiet, glowing, and full of tiny joys made just for you, nanha.",
  yearQuote:
    "Kilometres may stretch between us, but our hearts keep finding the same sky — distance never learned how to untie us.",
  babyCaption: "Look at this tiny legend 🥹",
  babyQuote:
    "From this little spark grew a whole galaxy of laughter, courage, and the softest kind of magic.",
  finalQuote:
    "Here's to choosing each other — through every challenge, every quiet night, every silly joke. A lifetime of Nanha memories starts with one brave year. Forever grateful for you.",

  letterText: `[PASTE MY HEARTFELT MESSAGE HERE]

Dear Nanhi Bacchi,

This is where your letter will live — warm, handwritten, and only for you.

Replace this text in CONFIG.letterText (script.js) with your real message.

With all my heart,
Cocoon 🐙`,

  /* Facts */
  facts: [
    {
      title: "World Science Day",
      body: "10 November is World Science Day for Peace and Development — fitting for someone who lights up every room with curiosity.",
    },
    {
      title: "Sesame Street Day",
      body: "Also celebrated around this time — a reminder that kindness, learning, and play belong together. Just like you.",
    },
    {
      title: "PERSONAL_FACT_1",
      body: "[Replace] Your laugh can turn any heavy day into something light — it's my favourite sound.",
    },
    {
      title: "PERSONAL_FACT_2",
      body: "[Replace] You remember the little things. That care is rarer than gold, nanha.",
    },
    {
      title: "PERSONAL_FACT_3",
      body: "[Replace] Even far away, you make ordinary Tuesdays feel like celebrations.",
    },
  ],

  /* Memories — chronological */
  memories: [
    {
      date: "10 Nov",
      title: "The first hello",
      caption: "A birthday wish that quietly started everything. Thank you for answering, nanha.",
      photo: "assets/memories/m1.jpg",
      icon: "🍍",
    },
    {
      date: "20 Jan",
      title: "We finally met",
      caption: "First meeting — butterflies, smiles, and a memory that still glows.",
      photo: "assets/memories/m2.jpg",
      icon: "🍦",
    },
    {
      date: "21 Feb",
      title: "Round two",
      caption: "Met again — proof that once wasn't enough (and never will be).",
      photo: "assets/memories/m3.jpg",
      icon: "🍔",
    },
    {
      date: "20 Mar",
      title: "First phone call",
      caption: "Voices across the line. Suddenly the distance felt a little smaller.",
      photo: "assets/memories/m4.jpg",
      icon: "🍫",
    },
    {
      date: "MEMORY_1_DATE",
      title: "A Nanha moment",
      caption: "[MEMORY_1_TEXT] Replace this with your memory.",
      photo: "assets/memories/m5.jpg",
      icon: "🍬",
    },
    {
      date: "MEMORY_2_DATE",
      title: "Another soft chapter",
      caption: "[MEMORY_2_TEXT] Replace this with your memory.",
      photo: "assets/memories/m6.jpg",
      icon: "🐙",
    },
    {
      date: "MEMORY_3_DATE",
      title: "Still choosing us",
      caption: "[MEMORY_3_TEXT] Replace this with your memory.",
      photo: "assets/memories/m7.jpg",
      icon: "✨",
    },
    {
      date: "Today",
      title: "One year later",
      caption: "Still here. Still us. Happy birthday & happy Nanha anniversary.",
      photo: "assets/memories/m8.jpg",
      icon: "🎉",
    },
  ],

  /* Admire reasons */
  admire: [
    {
      heading: "ADMIRE_1 — Your heart",
      line: "[Replace] The way you care without keeping score — soft, steady, real.",
    },
    {
      heading: "ADMIRE_2 — Your strength",
      line: "[Replace] Life throws storms; you still choose kindness. That is rare courage.",
    },
    {
      heading: "ADMIRE_3 — Your laugh",
      line: "[Replace] It makes ordinary minutes feel like festivals.",
    },
    {
      heading: "ADMIRE_4 — Your honesty",
      line: "[Replace] You say what matters. I always feel safe being myself with you.",
    },
    {
      heading: "ADMIRE_5 — Choosing us",
      line: "[Replace] Even with distance and challenges — we still choose us. Thank you.",
    },
  ],

  /* Quiz */
  quiz: [
    {
      q: "When did we first meet?",
      options: ["10 Nov", "20 January", "21 February", "20 March"],
      correctIndex: 1,
    },
    {
      q: "When did we first talk on the phone?",
      options: ["20 January", "21 February", "20 March", "10 November"],
      correctIndex: 2,
    },
    {
      q: "When did I first text you?",
      options: ["20 Jan", "15 Aug", "10 November", "1 Jan"],
      correctIndex: 2,
    },
    {
      q: "What's her favourite colour vibe?",
      options: ["Neon green", "White & soft pastels", "Pitch black only", "Traffic-cone orange"],
      correctIndex: 1,
    },
    {
      q: "Favourite ice cream flavour?",
      options: ["Mint chocolate", "Butterscotch", "Plain vanilla only", "Wasabi"],
      correctIndex: 1,
    },
    {
      q: "Favourite sea creature (Nanha mascot)?",
      options: ["Shark", "Octopus", "Crab accountant", "Whale in a suit"],
      correctIndex: 1,
    },
    {
      q: "A sweet she loves?",
      options: ["Kaju katli", "Spicy chips only", "Raw lemon", "Ice cubes"],
      correctIndex: 0,
    },
    {
      q: "What do we call everything special here?",
      options: ["Mega", "Nanha", "Ultra", "Basic"],
      correctIndex: 1,
    },
  ],

  /* No-button labels */
  noLabels: ["No 😢", "Nooo 🥺", "Please no… 😭", "I can't 💔", "…okay maybe? 🥹", "Fineee 🙈"],

  /* Assets */
  music: "assets/music.mp3",
  gallery: [
    "assets/gallery/g1.jpg",
    "assets/gallery/g2.jpg",
    "assets/gallery/g3.jpg",
    "assets/gallery/g4.jpg",
    "assets/gallery/g5.jpg",
    "assets/gallery/g6.jpg",
    "assets/gallery/g7.jpg",
    "assets/gallery/g8.jpg",
  ],
  cats: [
    "assets/cats/cat1.gif",
    "assets/cats/cat2.gif",
    "assets/cats/cat3.gif",
    "assets/cats/cat4.gif",
    "assets/cats/cat5.gif",
  ],
  catFallbackEmojis: ["🐱", "🐈", "😺", "😸", "😻", "🐈‍⬛"],
};

const SCREENS = [
  "gate",
  "birthday",
  "year",
  "baby",
  "dive",
  "memories",
  "admire",
  "letter",
  "quiz",
  "gift",
  "final",
  "gallery",
];

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isTouch = matchMedia("(hover: none), (pointer: coarse)").matches;

/* ---------- State ---------- */
const state = {
  screen: "gate",
  musicOn: true,
  musicStarted: false,
  quizIndex: 0,
  admireOpened: new Set(),
  letterDone: false,
  giftOpened: false,
  noClicks: 0,
  yesScale: 1,
  galleryItems: [],
  lbIndex: 0,
  fed: false,
  cakeCut: false,
};

/* ---------- DOM helpers ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

function haptic(ms = 12) {
  try {
    navigator.vibrate?.(ms);
  } catch (_) {}
}

function heartBurst(x, y) {
  for (let i = 0; i < 6; i++) {
    const h = document.createElement("span");
    h.className = "heart-burst";
    h.textContent = ["💗", "✨", "💖", "🌸"][i % 4];
    h.style.left = x + "px";
    h.style.top = y + "px";
    h.style.setProperty("--dx", (Math.random() - 0.5) * 80 + "px");
    h.style.setProperty("--dy", -40 - Math.random() * 60 + "px");
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 900);
  }
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn, .pill, .quiz-opt, .lantern-btn");
  if (btn) {
    haptic();
    heartBurst(e.clientX, e.clientY);
  }
});

/* ---------- Ambient ---------- */
function spawnAmbient() {
  const bubbles = $("#bubbles");
  const sparkles = $("#sparkles");
  const petals = $("#petals");
  if (!bubbles) return;
  for (let i = 0; i < (reduceMotion ? 4 : 14); i++) {
    const b = document.createElement("span");
    b.className = "bubble";
    const size = 8 + Math.random() * 28;
    b.style.width = size + "px";
    b.style.height = size + "px";
    b.style.left = Math.random() * 100 + "%";
    b.style.bottom = -20 + "px";
    b.style.animationDuration = 12 + Math.random() * 18 + "s";
    b.style.animationDelay = Math.random() * 10 + "s";
    bubbles.appendChild(b);
  }
  for (let i = 0; i < (reduceMotion ? 3 : 18); i++) {
    const s = document.createElement("span");
    s.className = "sparkle";
    s.style.left = Math.random() * 100 + "%";
    s.style.top = Math.random() * 100 + "%";
    s.style.animationDuration = 2 + Math.random() * 3 + "s";
    s.style.animationDelay = Math.random() * 2 + "s";
    sparkles.appendChild(s);
  }
  for (let i = 0; i < (reduceMotion ? 2 : 8); i++) {
    const p = document.createElement("span");
    p.className = "petal";
    p.style.left = Math.random() * 100 + "%";
    p.style.top = -20 + "px";
    p.style.animationDuration = 14 + Math.random() * 16 + "s";
    p.style.animationDelay = Math.random() * 8 + "s";
    p.style.background = ["var(--blush)", "var(--lavender)", "var(--peach)", "var(--mint)"][i % 4];
    petals.appendChild(p);
  }
}

/* Parallax */
function initParallax() {
  if (reduceMotion) return;
  const mandalas = $$(".mandala");
  window.addEventListener(
    "pointermove",
    (e) => {
      const x = (e.clientX / innerWidth - 0.5) * 16;
      const y = (e.clientY / innerHeight - 0.5) * 12;
      mandalas.forEach((m, i) => {
        const d = (i + 1) * 0.4;
        m.style.translate = `${x * d}px ${y * d}px`;
      });
    },
    { passive: true }
  );
}

/* Custom cursor */
function initCursor() {
  if (isTouch || reduceMotion) return;
  document.body.classList.add("has-custom-cursor");
  const trail = $("#cursor-trail");
  trail.textContent = "🍍";
  window.addEventListener(
    "pointermove",
    (e) => {
      trail.style.left = e.clientX + "px";
      trail.style.top = e.clientY + "px";
    },
    { passive: true }
  );
}

/* ---------- Image fallbacks ---------- */
function bindImgFallback(img, label = "Nanha pic ✨") {
  const apply = () => {
    if (img.dataset.fallback) return;
    img.dataset.fallback = "1";
    const wrap = document.createElement("div");
    wrap.className = "img-fallback";
    wrap.textContent = label;
    wrap.style.aspectRatio = img.style.aspectRatio || "1";
    img.replaceWith(wrap);
  };
  if (img.complete && img.naturalWidth === 0 && img.getAttribute("src")) {
    apply();
  }
  img.addEventListener("error", apply);
}

function hydrateImages(root = document) {
  $$("img[data-src]", root).forEach((img) => {
    if (!img.src || img.src.endsWith(location.pathname)) {
      img.src = img.dataset.src;
    }
    bindImgFallback(img);
  });
}

/* ---------- Music ---------- */
const audio = () => $("#bg-music");

function startMusic() {
  const a = audio();
  if (!a) return;
  a.src = CONFIG.music;
  a.volume = 0;
  const play = a.play();
  if (play) {
    play
      .then(() => {
        state.musicStarted = true;
        fadeVolume(0.55, 2000);
        updateMusicUI();
      })
      .catch(() => {});
  }
}

function fadeVolume(target, ms = 800) {
  const a = audio();
  if (!a) return;
  const start = a.volume;
  const t0 = performance.now();
  function step(now) {
    const p = Math.min(1, (now - t0) / ms);
    a.volume = start + (target - start) * p;
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function toggleMusic() {
  const a = audio();
  state.musicOn = !state.musicOn;
  if (!state.musicStarted) {
    startMusic();
    state.musicOn = true;
  } else {
    a.muted = !state.musicOn;
  }
  updateMusicUI();
  haptic();
}

function updateMusicUI() {
  const btn = $("#music-toggle");
  if (!btn) return;
  btn.classList.toggle("muted", !state.musicOn || audio().muted);
  btn.setAttribute("aria-label", state.musicOn ? "Mute Nanha music" : "Unmute Nanha music");
}

/* ---------- Screen manager ---------- */
function screenEl(id) {
  return $(`.screen[data-screen="${id}"]`);
}

function updateProgress(id) {
  const idx = Math.max(0, SCREENS.indexOf(id));
  const pct = (idx / (SCREENS.length - 1)) * 100;
  const fill = $("#progress-fill");
  const octo = $("#progress-octopus");
  if (fill) fill.style.width = pct + "%";
  if (octo) octo.style.left = pct + "%";
  $$("#progress-dots span").forEach((d, i) => d.classList.toggle("on", i <= idx));
}

function goTo(id, { history = true, transition } = {}) {
  const prev = state.screen;
  const from = screenEl(prev);
  const to = screenEl(id);
  if (!to) return;

  // Volume for letter
  if (id === "letter" && state.musicStarted) fadeVolume(0.3, 600);
  else if (prev === "letter" && state.musicStarted && state.musicOn) fadeVolume(0.55, 600);

  if (from) {
    from.classList.remove("active");
    setTimeout(() => {
      from.hidden = true;
    }, 500);
  }

  to.hidden = false;
  requestAnimationFrame(() => {
    to.classList.add("active");
    to.scrollTop = 0;
  });

  state.screen = id;
  updateProgress(id);
  if (history) {
    try {
      window.history.pushState({ screen: id }, "", "#" + id);
    } catch (_) {}
  }

  onEnterScreen(id);
}

function onEnterScreen(id) {
  if (id === "birthday") initBirthday();
  if (id === "year") {
    ensureYearQuote();
    celebrateSoft();
  }
  if (id === "baby") initBaby();
  if (id === "dive") runDive();
  if (id === "memories") initMemories();
  if (id === "admire") initAdmire();
  if (id === "letter") initLetter();
  if (id === "quiz") initQuiz();
  if (id === "gift") initGift();
  if (id === "gallery") initGallery();
  if (id === "final") celebrateSoft();
}

/* ---------- Loader ---------- */
async function preload() {
  const urls = [
    CONFIG.music,
    "assets/baby.jpg",
    "assets/hand-gift.jpg",
    "assets/char1.png",
    "assets/char2.png",
    "assets/char3.png",
    ...CONFIG.memories.map((m) => m.photo).filter(Boolean),
    ...CONFIG.gallery.slice(0, 4),
  ];
  let done = 0;
  const total = urls.length;
  const fill = $("#loader-fill");
  const pct = $("#loader-pct");

  await Promise.all(
    urls.map(
      (url) =>
        new Promise((resolve) => {
          const isAudio = url.endsWith(".mp3");
          const el = isAudio ? new Audio() : new Image();
          const tick = () => {
            done++;
            const p = Math.round((done / total) * 100);
            if (fill) fill.style.width = p + "%";
            if (pct) pct.textContent = String(p);
            resolve();
          };
          el.onload = tick;
          el.onerror = tick;
          el.oncanplaythrough = tick;
          el.src = url;
        })
    )
  );

  await new Promise((r) => setTimeout(r, reduceMotion ? 100 : 400));
  $("#loader")?.classList.add("done");
  $("#chrome").hidden = false;
  const gate = screenEl("gate");
  if (gate) {
    gate.hidden = false;
    gate.classList.add("active");
  }
  try {
    history.replaceState({ screen: "gate" }, "", "#gate");
  } catch (_) {}
}

/* ---------- Gate ---------- */
function initGate() {
  const grid = $("#gate-options");
  const hint = $("#gate-hint");
  const cont = $("#gate-continue");
  const card = $(".gate-card");
  const octo = $(".octopus-svg");

  grid.innerHTML = "";
  CONFIG.gateOptions.forEach((opt) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "pill";
    btn.textContent = opt.label;
    btn.addEventListener("click", () => {
      if (opt.correct) {
        btn.classList.add("correct");
        $$(".pill", grid).forEach((p) => (p.disabled = true));
        hint.hidden = true;
        cont.hidden = false;
        celebrateSoft();
        if (window.confetti && !reduceMotion) {
          confetti({ particleCount: 60, spread: 55, origin: { y: 0.7 }, colors: ["#F8C8DC", "#E8D5F2", "#FFE9A8"] });
        }
      } else {
        card?.classList.remove("shake");
        void card?.offsetWidth;
        card?.classList.add("shake");
        octo?.classList.add("silly");
        hint.hidden = false;
        haptic(20);
        setTimeout(() => octo?.classList.remove("silly"), 800);
      }
    });
    grid.appendChild(btn);
  });

  cont.onclick = () => {
    startMusic();
    goTo("birthday");
  };

  // Countdown (non-blocking)
  const cd = $("#gate-countdown");
  const now = new Date();
  const year = now.getFullYear();
  let target = new Date(year, CONFIG.birthdayDate.month, CONFIG.birthdayDate.day);
  if (now > target) target = new Date(year + 1, CONFIG.birthdayDate.month, CONFIG.birthdayDate.day);
  const sameDay =
    now.getMonth() === CONFIG.birthdayDate.month && now.getDate() === CONFIG.birthdayDate.day;
  if (!sameDay && now < target) {
    const days = Math.ceil((target - now) / 86400000);
    cd.hidden = false;
    cd.textContent = `Countdown to 10 Nov — ${days} day${days === 1 ? "" : "s"} ✨ (you can still enter!)`;
  } else {
    cd.hidden = true;
  }
}

/* ---------- Birthday ---------- */
function initBirthday() {
  const title = $("#bday-title");
  if (title && !title.dataset.done) {
    title.dataset.done = "1";
    const text = `Happy Birthday, ${CONFIG.herName}!`;
    title.innerHTML = "";
    [...text].forEach((ch, i) => {
      const span = document.createElement("span");
      span.textContent = ch === " " ? "\u00A0" : ch;
      title.appendChild(span);
      if (!reduceMotion && window.gsap) {
        gsap.to(span, { opacity: 1, y: 0, delay: 0.04 * i, duration: 0.35, ease: "back.out(1.6)" });
      } else {
        span.style.opacity = 1;
        span.style.transform = "none";
      }
    });
  }
  $("#bday-quote").textContent = CONFIG.birthdayQuote;

  if (!reduceMotion) {
    const host = $("#balloons");
    if (host && !host.dataset.done) {
      host.dataset.done = "1";
      for (let i = 0; i < 10; i++) {
        const b = document.createElement("span");
        b.className = "balloon";
        b.textContent = ["🎈", "🎀", "💕", "✨"][i % 4];
        b.style.left = Math.random() * 100 + "%";
        b.style.animationDuration = 6 + Math.random() * 5 + "s";
        b.style.animationDelay = Math.random() * 2 + "s";
        host.appendChild(b);
      }
    }
    if (window.confetti) {
      confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 }, colors: ["#F8C8DC", "#C8EDE0", "#FFE9A8", "#D4E8F8"] });
    }
  }

  hydrateImages(screenEl("birthday"));
  setupKatli();
  setupCake();
}

function setupKatli() {
  const katli = $("#katli");
  const target = $("#feed-target");
  const bubble = $("#yum-bubble");
  const feedBtn = $("#feed-btn");
  if (!katli || katli.dataset.bound) return;
  katli.dataset.bound = "1";

  const feed = () => {
    if (state.fed) return;
    state.fed = true;
    katli.classList.add("fed");
    target.classList.add("hungry");
    bubble.hidden = false;
    haptic(15);
    setTimeout(() => {
      bubble.hidden = true;
      target.classList.remove("hungry");
    }, 2000);
  };

  feedBtn?.addEventListener("click", feed);

  let dragging = false;
  katli.addEventListener("pointerdown", (e) => {
    if (state.fed) return;
    dragging = true;
    katli.setPointerCapture(e.pointerId);
  });
  katli.addEventListener("pointermove", (e) => {
    if (!dragging) return;
    katli.style.position = "fixed";
    katli.style.left = e.clientX - 32 + "px";
    katli.style.top = e.clientY - 32 + "px";
    katli.style.zIndex = "100";
  });
  const endDrag = (e) => {
    if (!dragging) return;
    dragging = false;
    const rect = target.getBoundingClientRect();
    if (
      e.clientX > rect.left - 20 &&
      e.clientX < rect.right + 20 &&
      e.clientY > rect.top - 20 &&
      e.clientY < rect.bottom + 20
    ) {
      feed();
    }
    katli.style.position = "";
    katli.style.left = "";
    katli.style.top = "";
    katli.style.zIndex = "";
  };
  katli.addEventListener("pointerup", endDrag);
  katli.addEventListener("pointercancel", endDrag);
}

function setupCake() {
  const btn = $("#cut-cake-btn");
  const cake = $("#cake");
  if (!btn || btn.dataset.bound) return;
  btn.dataset.bound = "1";
  btn.addEventListener("click", () => {
    if (state.cakeCut) return;
    state.cakeCut = true;
    cake.classList.add("cut");
    $$(".char").forEach((c) => c.classList.add("cheer"));
    haptic(25);
    if (window.confetti) {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.65 } });
    }
    btn.textContent = "Yay, cake cut! 🎂";
    btn.disabled = true;
  });
}

function celebrateSoft() {
  if (reduceMotion || !window.confetti) return;
  confetti({ particleCount: 40, spread: 50, origin: { y: 0.7 }, colors: ["#F8C8DC", "#E8D5F2", "#FFE9A8"] });
}

/* ---------- Baby ---------- */
function initBaby() {
  $("#baby-caption").textContent = CONFIG.babyCaption;
  $("#baby-quote").textContent = CONFIG.babyQuote;
  $("#year-quote") && ($("#year-quote").textContent = CONFIG.yearQuote);
  hydrateImages(screenEl("baby"));

  const curtain = $("#baby-curtain");
  setTimeout(() => curtain?.classList.add("open"), reduceMotion ? 0 : 400);

  const facts = $("#facts");
  if (facts && !facts.dataset.done) {
    facts.dataset.done = "1";
    facts.innerHTML = "";
    CONFIG.facts.forEach((f, i) => {
      const card = document.createElement("article");
      card.className = "fact-card";
      card.innerHTML = `<h4>${f.title}</h4><p>${f.body}</p>`;
      facts.appendChild(card);
      setTimeout(() => card.classList.add("show"), (reduceMotion ? 0 : 200) + i * 180);
    });
  }
}

/* ensure year quote on year screen */
function ensureYearQuote() {
  const q = $("#year-quote");
  if (q) q.textContent = CONFIG.yearQuote;
}

/* ---------- Dive ---------- */
function runDive() {
  const water = $("#water-overlay");
  const text = $("#dive-text");
  water.classList.remove("recede", "flood");
  text.classList.remove("show");
  void water.offsetWidth;
  water.classList.add("flood");
  setTimeout(() => text.classList.add("show"), reduceMotion ? 200 : 900);
  setTimeout(() => {
    water.classList.remove("flood");
    water.classList.add("recede");
  }, reduceMotion ? 800 : 2800);
  setTimeout(() => goTo("memories"), reduceMotion ? 1200 : 4200);
}

/* ---------- Memories ---------- */
function initMemories() {
  ensureYearQuote();
  const tl = $("#timeline");
  if (!tl.dataset.done) {
    tl.dataset.done = "1";
    CONFIG.memories.forEach((m) => {
      const card = document.createElement("article");
      card.className = "memory-card glass";
      card.dataset.icon = m.icon || "✨";
      card.innerHTML = `
        <span class="date-badge">${m.date}</span>
        <h3>${m.title}</h3>
        <p>${m.caption}</p>
        ${m.photo ? `<img data-src="${m.photo}" alt="${m.title}" loading="lazy" />` : ""}
      `;
      tl.appendChild(card);
    });
    hydrateImages(tl);
  }
  requestAnimationFrame(() => tl.classList.add("drawn"));
  const cards = $$(".memory-card", tl);
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) en.target.classList.add("show");
      });
    },
    { threshold: 0.2 }
  );
  cards.forEach((c, i) => {
    if (reduceMotion) c.classList.add("show");
    else {
      io.observe(c);
      setTimeout(() => c.classList.add("show"), 300 + i * 120);
    }
  });
}

/* ---------- Admire ---------- */
function initAdmire() {
  const host = $("#lanterns");
  const reveal = $("#admire-reveal");
  const next = $("#admire-next");
  if (host.dataset.done) {
    if (state.admireOpened.size >= CONFIG.admire.length) next.hidden = false;
    return;
  }
  host.dataset.done = "1";
  CONFIG.admire.forEach((item, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "lantern-btn";
    btn.setAttribute("aria-label", `Open lantern ${i + 1}`);
    btn.textContent = "🏮";
    btn.addEventListener("click", () => {
      if (state.admireOpened.has(i)) return;
      state.admireOpened.add(i);
      btn.classList.add("lit");
      const card = document.createElement("div");
      card.className = "admire-card";
      card.innerHTML = `<h4>${item.heading}</h4><p>${item.line}</p>`;
      reveal.appendChild(card);
      haptic();
      if (state.admireOpened.size >= CONFIG.admire.length) {
        next.hidden = false;
        celebrateSoft();
      }
    });
    host.appendChild(btn);
  });
}

/* ---------- Letter ---------- */
function initLetter() {
  const seal = $("#wax-seal");
  const envelope = $("#envelope");
  const paper = $("#letter-paper");
  const body = $("#letter-body");
  const skip = $("#skip-typing");
  const next = $("#letter-next");

  if (state.letterDone) {
    paper.hidden = false;
    body.textContent = CONFIG.letterText;
    next.hidden = false;
    envelope.classList.add("open");
    seal.classList.add("broken");
    return;
  }

  let typing = false;
  let typed = "";
  let timer;

  const finish = () => {
    clearInterval(timer);
    body.textContent = CONFIG.letterText;
    skip.hidden = true;
    next.hidden = false;
    state.letterDone = true;
  };

  const startType = () => {
    if (typing || state.letterDone) return;
    typing = true;
    paper.hidden = false;
    skip.hidden = false;
    const full = CONFIG.letterText;
    let i = 0;
    timer = setInterval(() => {
      i++;
      typed = full.slice(0, i);
      body.textContent = typed;
      if (i >= full.length) finish();
    }, reduceMotion ? 0 : 28);
    if (reduceMotion) finish();
  };

  seal.onclick = () => {
    seal.classList.add("broken");
    envelope.classList.add("open");
    haptic(18);
    setTimeout(startType, reduceMotion ? 0 : 500);
  };

  skip.onclick = finish;
}

/* ---------- Quiz ---------- */
function initQuiz() {
  state.quizIndex = 0;
  renderQuizQ();
}

function renderQuizQ() {
  const q = CONFIG.quiz[state.quizIndex];
  const qEl = $("#quiz-q");
  const opts = $("#quiz-opts");
  const hint = $("#quiz-hint");
  const bar = $("#quiz-bar");
  const gift = $("#quiz-gift");
  hint.hidden = true;
  qEl.textContent = q.q;
  opts.innerHTML = "";
  const progress = (state.quizIndex / CONFIG.quiz.length) * 100;
  bar.style.width = progress + "%";
  const glowLevel = Math.min(3, Math.floor((state.quizIndex / CONFIG.quiz.length) * 3) + 1);
  gift.className = "quiz-box-glow glow-" + glowLevel;

  q.options.forEach((label, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "quiz-opt";
    btn.textContent = label;
    btn.addEventListener("click", () => {
      if (i === q.correctIndex) {
        btn.classList.add("right");
        haptic(15);
        $$(".quiz-opt", opts).forEach((o) => (o.disabled = true));
        setTimeout(() => {
          state.quizIndex++;
          if (state.quizIndex >= CONFIG.quiz.length) {
            bar.style.width = "100%";
            gift.classList.add("unlocked");
            if (window.confetti) confetti({ particleCount: 120, spread: 70, origin: { y: 0.6 } });
            setTimeout(() => goTo("gift"), 900);
          } else {
            renderQuizQ();
          }
        }, 450);
      } else {
        btn.classList.add("wrong");
        hint.hidden = false;
        haptic(25);
        setTimeout(() => btn.classList.remove("wrong"), 400);
      }
    });
    opts.appendChild(btn);
  });
}

/* ---------- Gift ---------- */
function initGift() {
  const box = $("#gift-box");
  const reveal = $("#gift-reveal");
  const celeb = $("#celebration");
  const yes = $("#yes-btn");
  const no = $("#no-btn");
  const sad = $("#sad-emoji");
  const area = $("#meet-area");

  celeb.hidden = true;
  if (!state.giftOpened) {
    reveal.hidden = true;
    box.hidden = false;
    box.classList.remove("opened");
  } else {
    box.hidden = true;
    reveal.hidden = false;
  }

  hydrateImages(screenEl("gift"));

  if (!box.dataset.bound) {
    box.dataset.bound = "1";
    box.addEventListener("click", () => {
      state.giftOpened = true;
      box.classList.add("opened");
      haptic(20);
      setTimeout(() => {
        box.hidden = true;
        reveal.hidden = false;
        placeNoButton();
      }, 600);
    });
  }

  function placeNoButton() {
    const ar = area.getBoundingClientRect();
    const maxL = Math.max(20, ar.width - 100);
    const maxT = Math.max(40, ar.height - 50);
    no.style.left = 10 + Math.random() * maxL + "px";
    no.style.top = 40 + Math.random() * maxT + "px";
  }

  if (!no.dataset.bound) {
    no.dataset.bound = "1";
    no.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      state.noClicks++;
      const scale = Math.max(0.35, 1 - state.noClicks * 0.12);
      no.style.transform = `scale(${scale})`;
      no.textContent = CONFIG.noLabels[Math.min(state.noClicks, CONFIG.noLabels.length - 1)];
      state.yesScale = Math.min(1.55, 1 + state.noClicks * 0.08);
      yes.style.transform = `scale(${state.yesScale})`;
      sad.style.fontSize = 1.2 + state.noClicks * 0.25 + "rem";
      placeNoButton();
      haptic(18);
    });
  }

  if (!yes.dataset.bound) {
    yes.dataset.bound = "1";
    yes.addEventListener("click", () => {
      reveal.hidden = true;
      celeb.hidden = false;
      runCelebration();
    });
  }
}

function runCelebration() {
  const cats = $("#cats");
  cats.innerHTML = "";
  CONFIG.cats.forEach((src, i) => {
    const img = document.createElement("img");
    img.className = "cat-dance";
    img.alt = "Dancing cat";
    img.src = src;
    img.onerror = () => {
      const span = document.createElement("span");
      span.className = "cat-dance";
      span.textContent = CONFIG.catFallbackEmojis[i % CONFIG.catFallbackEmojis.length];
      img.replaceWith(span);
    };
    cats.appendChild(img);
  });
  // Extra emoji dancers
  CONFIG.catFallbackEmojis.forEach((em) => {
    const span = document.createElement("span");
    span.className = "cat-dance";
    span.textContent = em;
    cats.appendChild(span);
  });

  if (window.confetti && !reduceMotion) {
    const end = Date.now() + 2500;
    (function frame() {
      confetti({ particleCount: 4, angle: 60, spread: 55, origin: { x: 0, y: 0.7 } });
      confetti({ particleCount: 4, angle: 120, spread: 55, origin: { x: 1, y: 0.7 } });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  }
  haptic(40);
}

/* ---------- Gallery + Nanha Cloud (Drive-backed) ---------- */
async function initGallery() {
  const grid = $("#gallery-grid");
  let cloudItems = [];
  try {
    if (window.NanhaCloud?.listActiveAssets) {
      const assets = await window.NanhaCloud.listActiveAssets();
      cloudItems = (assets || [])
        .filter((a) => a.category === "image" || a.category === "gif")
        .map((a) => ({
          src: a.contentUrl,
          thumb: a.thumbnailUrl || a.contentUrl,
          local: false,
          cloud: true,
          animated: a.category === "gif",
          name: a.name,
        }));
    }
  } catch {
    cloudItems = [];
  }

  state.galleryItems = [
    ...CONFIG.gallery.map((src) => ({ src, thumb: src, local: false, cloud: false })),
    ...cloudItems,
  ];
  grid.innerHTML = "";
  state.galleryItems.forEach((item, i) => {
    const fig = document.createElement("button");
    fig.type = "button";
    fig.className = "gal-item";
    fig.style.setProperty("--rot", (i % 2 === 0 ? -2 : 2) + "deg");
    fig.setAttribute("aria-label", `Open photo ${i + 1}`);
    const img = document.createElement("img");
    img.loading = "lazy";
    img.alt = item.name || `Nanha gallery photo ${i + 1}`;
    // Grid shows static thumb when available; lightbox uses full (animated) src
    img.src = item.thumb || item.src;
    bindImgFallback(img, "Nanha photo 🌸");
    fig.appendChild(img);
    fig.addEventListener("click", () => openLightbox(i));
    grid.appendChild(fig);
  });
}

function openLightbox(i) {
  state.lbIndex = i;
  const lb = $("#lightbox");
  const img = $("#lb-img");
  const item = state.galleryItems[i];
  // Prefer content URL so animated GIFs play in the lightbox
  img.src = item?.src || "";
  img.alt = item?.name || `Photo ${i + 1}`;
  lb.hidden = false;
}

function closeLightbox() {
  $("#lightbox").hidden = true;
}

function lbNav(dir) {
  if (!state.galleryItems.length) return;
  state.lbIndex = (state.lbIndex + dir + state.galleryItems.length) % state.galleryItems.length;
  const item = state.galleryItems[state.lbIndex];
  $("#lb-img").src = item?.src || "";
  $("#lb-img").alt = item?.name || `Photo ${state.lbIndex + 1}`;
}

/* ---------- Progress dots ---------- */
function buildDots() {
  const host = $("#progress-dots");
  host.innerHTML = "";
  SCREENS.forEach(() => {
    const s = document.createElement("span");
    host.appendChild(s);
  });
}

/* ---------- Wire UI ---------- */
function wireUI() {
  $("#music-toggle")?.addEventListener("click", toggleMusic);

  $$(".next-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const next = btn.dataset.next;
      if (next) goTo(next);
    });
  });

  $("#to-gallery")?.addEventListener("click", () => goTo("gallery"));
  $("#back-final")?.addEventListener("click", () => goTo("final"));
  $("#replay")?.addEventListener("click", () => {
    state.fed = false;
    state.cakeCut = false;
    state.quizIndex = 0;
    state.admireOpened = new Set();
    state.letterDone = false;
    state.giftOpened = false;
    state.noClicks = 0;
    state.yesScale = 1;
    $("#katli")?.classList.remove("fed");
    $("#cake")?.classList.remove("cut");
    const cutBtn = $("#cut-cake-btn");
    if (cutBtn) {
      cutBtn.disabled = false;
      cutBtn.textContent = "Cut the cake 🔪";
    }
    const lanterns = $("#lanterns");
    if (lanterns) {
      delete lanterns.dataset.done;
      lanterns.innerHTML = "";
      $("#admire-reveal").innerHTML = "";
    }
    const tl = $("#timeline");
    if (tl) {
      delete tl.dataset.done;
      tl.classList.remove("drawn");
      $$(".memory-card", tl).forEach((c) => c.remove());
    }
    const facts = $("#facts");
    if (facts) {
      delete facts.dataset.done;
      facts.innerHTML = "";
    }
    const bdayTitle = $("#bday-title");
    if (bdayTitle) delete bdayTitle.dataset.done;
    const balloons = $("#balloons");
    if (balloons) {
      delete balloons.dataset.done;
      balloons.innerHTML = "";
    }
    $("#envelope")?.classList.remove("open");
    $("#wax-seal")?.classList.remove("broken");
    $("#letter-paper").hidden = true;
    $("#letter-body").textContent = "";
    $("#letter-next").hidden = true;
    $("#skip-typing").hidden = true;
    $("#admire-next").hidden = true;
    $("#gift-reveal").hidden = true;
    $("#celebration").hidden = true;
    const gbox = $("#gift-box");
    if (gbox) {
      gbox.hidden = false;
      gbox.classList.remove("opened");
    }
    const yes = $("#yes-btn");
    const no = $("#no-btn");
    if (yes) yes.style.transform = "";
    if (no) {
      no.style.transform = "";
      no.textContent = CONFIG.noLabels[0];
    }
    $("#gate-continue").hidden = true;
    $("#gate-hint").hidden = true;
    initGate();
    goTo("gate");
  });

  $("#cloud-card")?.addEventListener("click", () => {
    if (window.NanhaCloud?.open) window.NanhaCloud.open();
    else $("#cloud-input")?.click();
    haptic(15);
  });

  window.addEventListener("nanha-cloud:assets-changed", () => {
    initGallery();
  });

  $("#lb-close")?.addEventListener("click", closeLightbox);
  $("#lb-prev")?.addEventListener("click", () => lbNav(-1));
  $("#lb-next")?.addEventListener("click", () => lbNav(1));
  document.addEventListener("keydown", (e) => {
    if ($("#lightbox").hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") lbNav(-1);
    if (e.key === "ArrowRight") lbNav(1);
  });

  // swipe lightbox
  let touchX = 0;
  $("#lightbox")?.addEventListener(
    "touchstart",
    (e) => {
      touchX = e.changedTouches[0].screenX;
    },
    { passive: true }
  );
  $("#lightbox")?.addEventListener(
    "touchend",
    (e) => {
      const dx = e.changedTouches[0].screenX - touchX;
      if (Math.abs(dx) > 40) lbNav(dx < 0 ? 1 : -1);
    },
    { passive: true }
  );

  window.addEventListener("popstate", (e) => {
    const id = e.state?.screen || location.hash.replace("#", "") || "gate";
    if (SCREENS.includes(id)) goTo(id, { history: false });
  });

  $("#final-quote").textContent = CONFIG.finalQuote;
  ensureYearQuote();
}

/* ---------- Boot ---------- */
async function boot() {
  buildDots();
  spawnAmbient();
  initParallax();
  initCursor();
  initGate();
  wireUI();
  updateProgress("gate");
  await preload();
}

boot();
