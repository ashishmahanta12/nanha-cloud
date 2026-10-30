/**
 * One-time OAuth helper for the central Gmail Drive account.
 * Run: npm run drive-auth
 * Signs in with access_type=offline + prompt=consent, prints refresh token.
 */
import http from "http";
import { google } from "googleapis";
import open from "open";
import { loadEnv } from "../src/config/env.js";

const SCOPES = ["https://www.googleapis.com/auth/drive.file"];

async function main() {
  const env = loadEnv({ strict: false });
  if (!env.GOOGLE_CLIENT_ID || !env.GOOGLE_CLIENT_SECRET) {
    console.error("Set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in server/.env first.");
    process.exit(1);
  }

  const oauth2 = new google.auth.OAuth2(
    env.GOOGLE_CLIENT_ID,
    env.GOOGLE_CLIENT_SECRET,
    env.GOOGLE_REDIRECT_URI
  );

  const authUrl = oauth2.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    scope: SCOPES,
  });

  console.log("\nOpening browser for Google consent…");
  console.log("If it does not open, visit:\n", authUrl, "\n");

  const code = await new Promise((resolve, reject) => {
    const server = http.createServer(async (req, res) => {
      try {
        const url = new URL(req.url, env.GOOGLE_REDIRECT_URI);
        if (url.pathname !== new URL(env.GOOGLE_REDIRECT_URI).pathname) {
          res.writeHead(404);
          res.end();
          return;
        }
        const c = url.searchParams.get("code");
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(
          "<h1>Nanha Cloud</h1><p>Auth OK — you can close this tab and return to the terminal.</p>"
        );
        server.close();
        resolve(c);
      } catch (err) {
        reject(err);
      }
    });
    const listenUrl = new URL(env.GOOGLE_REDIRECT_URI);
    server.listen(Number(listenUrl.port || 8080), listenUrl.hostname === "localhost" ? "127.0.0.1" : undefined);
    open(authUrl).catch(() => {});
  });

  if (!code) {
    console.error("No authorization code received.");
    process.exit(1);
  }

  const { tokens } = await oauth2.getToken(code);
  console.log("\n=== Add this to server/.env ===\n");
  console.log(`GOOGLE_REFRESH_TOKEN=${tokens.refresh_token || ""}`);
  if (!tokens.refresh_token) {
    console.warn(
      "\nNo refresh_token returned. Revoke app access at https://myaccount.google.com/permissions and re-run with prompt=consent.\n"
    );
  }
  console.log("\nAccess token (short-lived, do not store):", tokens.access_token?.slice(0, 12) + "…");
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
