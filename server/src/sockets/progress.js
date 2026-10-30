let ioRef = null;

export function setIo(io) {
  ioRef = io;
}

export function getIo() {
  return ioRef;
}

export function initCloudNamespace(io) {
  setIo(io);
  const nsp = io.of("/cloud");

  nsp.use((socket, next) => {
    try {
      // Cookie is parsed from handshake headers by the HTTP layer;
      // we accept galleryId from auth after cookie validation in a lightweight way.
      const galleryId = socket.handshake.auth?.galleryId;
      if (!galleryId) {
        return next(new Error("Unauthorized"));
      }
      socket.data.galleryId = galleryId;
      next();
    } catch (err) {
      next(err);
    }
  });

  nsp.on("connection", (socket) => {
    const room = `gallery:${socket.data.galleryId}`;
    socket.join(room);
    socket.emit("connected", { galleryId: socket.data.galleryId });
  });

  return nsp;
}

export function emitToGallery(galleryId, event, payload) {
  if (!ioRef) return;
  ioRef.of("/cloud").to(`gallery:${galleryId}`).emit(event, payload);
}
