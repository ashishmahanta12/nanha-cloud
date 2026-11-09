# Nanha Surprise 🐙

A private, interactive birthday + 1-year-friendship gift site for **Nanhi Bacchi**, from **Cocoon**.

Open `index.html` in a browser (or host it — see below). Best experienced on a phone.

---

## Quick start

1. Drop your photos, music, and GIFs into `assets/` (paths below).
2. Edit text in the `CONFIG` object at the top of [`script.js`](script.js).
3. For the **story only**, open `index.html` (or `npx serve .`).
4. For **Nanha Cloud** (Drive-backed uploads), run the sibling server — see below.

---

## (a) Where to put photos, characters & GIFs

| File | Purpose |
|------|---------|
| `assets/baby.jpg` | Baby photo (Screen 4) |
| `assets/gallery/gift.webp` | Hand holding gift (Screen 10) |
| `assets/char1.png` | Cake character 1 |
| `assets/char2.png` | Cake character 2 |
| `assets/char3.png` | Cake character 3 |
| `assets/memories/m1.jpg` … `m10.jpg` | Timeline photos (match `CONFIG.memories[].photo`) |
| `assets/gallery/g1.jpg` … `gN.jpg` | Gallery photos (list them in `CONFIG.gallery`) |
| `assets/cats/cat1.gif` … `cat5.gif` | Dancing cats after she taps Yes |

Missing images show a cute pastel placeholder automatically — the site never looks “broken.”

---

## (b) How to change the text

Open **`script.js`** and edit only the **`CONFIG`** block at the top:

- `herName` / `myName`
- Quotes: `birthdayQuote`, `yearQuote`, `babyQuote`, `finalQuote`
- `letterText` — your full Nanha Letter
- `facts[]` — beautiful facts + personal lines
- `memories[]` — date, title, caption, photo, icon
- `admire[]` — lantern reasons
- `quiz[]` — questions, options, `correctIndex` (0-based)
- `gallery[]` / `cats[]` — asset paths
- `gateOptions` — Nanha Gate dates (`correct: true` on 10 Nov)

No rebuild step — save and refresh.

---

## (c) Free hosting (private-feeling link)

### Netlify Drop (fastest)

1. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the entire `nanha-surprise` folder
3. Copy the URL and send it only to her

### GitHub Pages

1. Create a new GitHub repo, upload this folder
2. Settings → Pages → deploy from `main` / root
3. Share `https://YOUR_USER.github.io/REPO_NAME/`

### Vercel (static story only)

1. [vercel.com](https://vercel.com) → New Project → import folder/repo
2. Framework: Other / static
3. Deploy and share the URL

Static hosts serve the romantic gift site. **Nanha Cloud** needs the Node server (next section).

---

## Nanha Cloud (Google Drive)

Gallery → **Open Nanha Cloud** opens an in-gallery panel for upload, preview (animated GIFs stay animated), trash, and real Drive storage quota.

### Run with cloud

```bash
cd ../server
cp .env.example .env   # set SESSION_SECRET, MONGODB_URI, GALLERY_ACCESS_CODE, Google OAuth
npm install
npm run drive-auth     # one-time: central Gmail → GOOGLE_REFRESH_TOKEN
npm start              # serves this folder + API on :8080
```

Share: `http://localhost:8080/?invite=YOUR_GALLERY_ACCESS_CODE`

Full Google Cloud setup, API list, and deploy notes: [`../server/README.md`](../server/README.md).

Privacy: files live in **your central Google Drive vault**, gated by the invite cookie — not world-writable, and credentials never ship to the browser.

---

## Screen flow

1. Nanha Gate → 2. Happy Birthday → 3. 1 Year → 4. Baby Photo → 5. Dive →  
6. Memories → 7. Admire → 8. Letter → 9. Quiz → 10. Gift → 11. Final → 12. Gallery

---

## Nanha Music playlist (chrome note button)

The circular music button in the top bar opens a Nanha Music panel (track list + player).

1. In `server/.env`, set:
   - `YOUTUBE_API_KEY=` your Google Cloud API key (Data API enabled)
   - `YOUTUBE_PLAYLIST_ID=` the `list=` value from your playlist URL (Public or Unlisted)
2. Run the Express server (`cd ../server && npm start`) — static-only hosts cannot load the playlist.
3. Restrict the API key to your site’s domain in Google Cloud Console.

Songs start when she taps **Open Nanha Surprise**. Mute from the panel chip.

## Tech notes

- Vanilla HTML / CSS / JS (+ `cloud/cloud.js` panel, `music/playlist-player.js`)
- GSAP + canvas-confetti + Socket.IO client via CDN
- Backend: Express, MongoDB, Google Drive API, Sharp (static thumbs only)
- Playlist music starts on first open gesture (browser autoplay rules)
- `prefers-reduced-motion` softens animations
- Mobile-first with safe-area padding

Made with soft mandalas, pastels, and a lot of nanha love.
