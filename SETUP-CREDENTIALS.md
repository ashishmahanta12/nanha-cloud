# Nanha Cloud — finish setup (human steps)

## Done for you
- MongoDB Atlas cluster **Nanha**, user **nanha**, IP allowlisted
- `server/.env` written with Atlas URI + strong `SESSION_SECRET`
- Google Drive API **enabled** on project `fluent-edition-513217-h7` (My First Project)
- Git repo initialized + `.gitignore` (secrets excluded)
- Code already built under `server/` + `nanha-surprise/cloud/`

## You must finish (cannot be fully automated)

### 1) Google OAuth (required for Drive uploads) — ~5 min
In Chrome (already on Google Cloud):

1. Open: https://console.cloud.google.com/auth/overview?project=fluent-edition-513217-h7  
2. Click **Get started** → fill app name `Nanha Cloud`, support email = your Gmail → continue  
3. Audience: **External** → create  
4. Add test user: `ashishmahanta12@gmail.com` (and Nanhi’s Gmail if needed)  
5. **Data Access / Scopes** → add: `https://www.googleapis.com/auth/drive.file`  
6. **Clients** → **Create client** → **Web application**  
   - Name: `Nanha Cloud Local`  
   - Authorized redirect URI: `http://localhost:8080/oauth2callback`  
7. Copy **Client ID** + **Client Secret** into `server/.env`:
   ```
   GOOGLE_CLIENT_ID=...
   GOOGLE_CLIENT_SECRET=...
   ```
8. In a terminal:
   ```bash
   cd server
   npm run drive-auth
   ```
9. Browser opens → sign in as the **central Gmail** → Allow  
10. Paste printed `GOOGLE_REFRESH_TOKEN=...` into `server/.env`  
11. `npm start` then open `http://localhost:8080/?invite=nanha-secret`

### 2) MongoDB if connection fails from your PC
Atlas Network Access → **Add IP Address** → **Allow Access from Anywhere** (`0.0.0.0/0`) for home/dev  
(Or keep only your current IP if it already works.)

If Windows DNS blocks `mongodb+srv`, keep the non-SRV URI already in `.env`.

### 3) GitHub (CLI not installed)
1. https://github.com/new → create repo e.g. `nanha-surprise` (private recommended)  
2. Then run:
   ```bash
   cd "c:\Ashish\anthropic\New folder"
   git add .
   git commit -m "Add Nanha Cloud Drive backend and gallery panel"
   git branch -M main
   git remote add origin https://github.com/YOUR_USER/nanha-surprise.git
   git push -u origin main
   ```
   Or install GitHub CLI: https://cli.github.com/ then `gh auth login`

## Invite link
`http://localhost:8080/?invite=nanha-secret`  
(`GALLERY_ACCESS_CODE` in `.env`)
