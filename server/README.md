# Nanha Cloud Server

Backend for **Nanha Cloud** inside Nanha Gallery. Stores media on a **central Google Drive** account (`drive.file` scope). Refresh tokens never leave the server.

## Stack

- Express + Socket.IO
- MongoDB (Mongoose)
- Google Drive API v3
- Sharp (static thumbnails only — animated GIFs stored byte-for-byte)

## Quick start

```bash
cd server
cp .env.example .env
# edit .env — at minimum SESSION_SECRET, MONGODB_URI, GALLERY_ACCESS_CODE
npm install
npm start
```

Open `http://localhost:8080` for the gift site. Unlock cloud with:

`http://localhost:8080/?invite=YOUR_GALLERY_ACCESS_CODE`

## Google Cloud setup

1. Create a GCP project and enable **Google Drive API**.
2. Configure OAuth consent (External). Add your **central Gmail** as a test user.
3. Create an **OAuth 2.0 Web client**. Redirect URI: `http://localhost:8080/oauth2callback`.
4. Put `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` in `.env`.
5. Run one-time auth (sign in as the central Gmail):

```bash
npm run drive-auth
```

6. Paste the printed `GOOGLE_REFRESH_TOKEN` into `.env`.
7. Restart the server — it creates `NanhaCloud/galleries/<galleryId>/…` folders automatically.

**Scope used:** `https://www.googleapis.com/auth/drive.file` only.

## Environment variables

See [`.env.example`](.env.example). Important:

| Variable | Purpose |
|----------|---------|
| `MONGODB_URI` | Mongo connection string |
| `SESSION_SECRET` | ≥32 chars, signs gallery session cookies |
| `GALLERY_ACCESS_CODE` | Shared invite / `?invite=` value |
| `GOOGLE_*` | OAuth client + offline refresh token |
| `MAX_UPLOAD_BYTES` | Upload size cap |

## API (session cookie required for `/api/cloud/*`)

- `POST /api/auth/redeem` `{ invite }`
- `GET /api/auth/me`
- `POST /api/auth/logout`
- `GET /api/cloud/assets`
- `GET /api/cloud/assets/:id/content` — original (GIFs stay animated)
- `GET /api/cloud/assets/:id/thumbnail` — static thumb
- `POST /api/cloud/uploads` → `PUT …/:id` chunks → `POST …/:id/complete`
- `POST /api/cloud/assets/:id/trash` · `restore` · `DELETE` permanent
- `GET /api/cloud/trash`
- `GET /api/cloud/storage` — real Drive `storageQuota`

Socket.IO namespace: `/cloud` (auth via `auth.galleryId` after redeem).

## Tests

```bash
npm test
```

## Deploy

1. Host Node (Railway / Render / Fly / VPS) with MongoDB Atlas.
2. Set env vars; use HTTPS so `secure` cookies work in production.
3. Update OAuth redirect / `PUBLIC_BASE_URL` for production.
4. Share `https://your-host/?invite=CODE` privately.

Static-only hosts (Netlify Drop of `nanha-surprise` alone) still show the gift story; Nanha Cloud panel shows “resting” without this server.
