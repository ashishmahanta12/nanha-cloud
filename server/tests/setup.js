import { beforeAll, afterAll, beforeEach } from "vitest";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import { connectMongo, disconnectMongo } from "../src/db/mongo.js";

process.env.NODE_ENV = "test";
process.env.SESSION_SECRET = "test-session-secret-at-least-32-chars!!";
process.env.GALLERY_ID = "nanhi-bacchi";
process.env.GALLERY_ACCESS_CODE = "test-access-code";
process.env.GOOGLE_CLIENT_ID = "test-client-id";
process.env.GOOGLE_CLIENT_SECRET = "test-client-secret";
process.env.GOOGLE_REFRESH_TOKEN = "";
process.env.MONGODB_URI = process.env.MONGODB_URI || "memory";

let mongoServer;

export async function setupTestDb() {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  process.env.MONGODB_URI = uri;
  await connectMongo(uri);
  return uri;
}

export async function teardownTestDb() {
  await mongoose.connection.dropDatabase().catch(() => {});
  await disconnectMongo();
  if (mongoServer) await mongoServer.stop();
}

export async function clearCollections() {
  const cols = mongoose.connection.collections;
  for (const key of Object.keys(cols)) {
    await cols[key].deleteMany({});
  }
}
