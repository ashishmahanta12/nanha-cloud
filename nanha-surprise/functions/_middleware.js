/**
 * Proxy /api/* and /socket.io* to the Render backend so the browser stays
 * same-origin (cookies, <img> auth, Socket.IO polling all keep working).
 *
 * Set Pages env var NANHA_API_ORIGIN = https://your-service.onrender.com
 * (no trailing slash).
 */
function backendOrigin(env) {
  const raw = (env.NANHA_API_ORIGIN || env.API_ORIGIN || "").trim().replace(/\/$/, "");
  return raw || null;
}

async function proxyToBackend(context, origin) {
  const incoming = new URL(context.request.url);
  const target = new URL(incoming.pathname + incoming.search, `${origin}/`);

  const headers = new Headers(context.request.headers);
  headers.delete("host");
  headers.set("X-Forwarded-Host", incoming.host);
  headers.set("X-Forwarded-Proto", incoming.protocol.replace(":", ""));

  const init = {
    method: context.request.method,
    headers,
    redirect: "manual",
  };

  if (context.request.method !== "GET" && context.request.method !== "HEAD") {
    init.body = context.request.body;
    // Required for streaming request bodies in the Workers runtime
    init.duplex = "half";
  }

  const upstream = await fetch(target.toString(), init);
  const outHeaders = new Headers(upstream.headers);
  // Ensure browser associates Set-Cookie with the Pages host, not Render
  if (outHeaders.has("set-cookie")) {
    const raw = outHeaders.getSetCookie?.() || [outHeaders.get("set-cookie")].filter(Boolean);
    outHeaders.delete("set-cookie");
    for (const cookie of raw) {
      outHeaders.append(
        "set-cookie",
        cookie.replace(/;\s*Domain=[^;]*/gi, "")
      );
    }
  }

  return new Response(upstream.body, {
    status: upstream.status,
    statusText: upstream.statusText,
    headers: outHeaders,
  });
}

export async function onRequest(context) {
  const { pathname } = new URL(context.request.url);
  const needsProxy = pathname.startsWith("/api/") || pathname.startsWith("/socket.io");

  if (!needsProxy) {
    return context.next();
  }

  const origin = backendOrigin(context.env);
  if (!origin) {
    return new Response(
      JSON.stringify({
        error: "NANHA_API_ORIGIN is not configured on Cloudflare Pages",
      }),
      {
        status: 503,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  try {
    return await proxyToBackend(context, origin);
  } catch (err) {
    return new Response(
      JSON.stringify({
        error: "Backend proxy failed",
        detail: String(err?.message || err),
      }),
      {
        status: 502,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
