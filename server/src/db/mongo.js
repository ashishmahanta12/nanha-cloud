import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LOCAL_DB_PATH = path.resolve(__dirname, "../../data/mongo");

let memoryServer = null;

/**
 * Connect to MongoDB. If Atlas/remote is unreachable, fall back to a
 * persistent local mongod (on-disk) so uploads survive server restarts.
 */
export async function connectMongo(uri, { allowMemoryFallback = true } = {}) {
  mongoose.set("strictQuery", true);
  const opts = { serverSelectionTimeoutMS: 8000 };

  try {
    await mongoose.connect(uri, opts);
    console.log(`[nanha-cloud] MongoDB connected (${mongoose.connection.host})`);
    return mongoose.connection;
  } catch (err) {
    const isProd = process.env.NODE_ENV === "production";
    if (isProd || !allowMemoryFallback || uri === "memory") {
      throw err;
    }

    console.warn(
      "[nanha-cloud] MongoDB unreachable — starting local persistent DB.\n" +
        `  Reason: ${err.message}\n` +
        "  Fix Atlas: Network Access → allow your current IP (or 0.0.0.0/0 for home/dev)."
    );

    fs.mkdirSync(LOCAL_DB_PATH, { recursive: true });
    const { MongoMemoryServer } = await import("mongodb-memory-server");
    memoryServer = await MongoMemoryServer.create({
      instance: {
        dbName: "nanha-cloud",
        dbPath: LOCAL_DB_PATH,
        storageEngine: "wiredTiger",
      },
    });
    const memUri = memoryServer.getUri();
    await mongoose.connect(memUri, opts);
    console.log(`[nanha-cloud] Using local MongoDB at ${LOCAL_DB_PATH}`);
    return mongoose.connection;
  }
}

export async function disconnectMongo() {
  await mongoose.disconnect();
  if (memoryServer) {
    // Keep files on disk — do not wipe dbPath
    await memoryServer.stop({ doCleanup: false, force: true });
    memoryServer = null;
  }
}
