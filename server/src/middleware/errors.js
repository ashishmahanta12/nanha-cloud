export function notFound(_req, res) {
  res.status(404).json({ error: "Not found" });
}

export function errorHandler(err, _req, res, _next) {
  console.error("[nanha-cloud]", err?.message || err);
  const status = err.status || err.statusCode || 500;
  const message =
    status < 500 ? err.message || "Request failed" : "Internal server error";
  res.status(status).json({ error: message });
}

export function asyncHandler(fn) {
  return (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);
}
