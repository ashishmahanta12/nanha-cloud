import { describe, it, expect, beforeAll, afterAll, beforeEach } from "vitest";
import request from "supertest";
import { setupTestDb, teardownTestDb, clearCollections } from "./setup.js";
import { createApp } from "../src/index.js";
import { env } from "../src/config/env.js";

let app;

beforeAll(async () => {
  await setupTestDb();
  app = createApp();
});

afterAll(async () => {
  await teardownTestDb();
});

beforeEach(async () => {
  await clearCollections();
});

describe("auth", () => {
  it("rejects cloud routes without session", async () => {
    const res = await request(app).get("/api/cloud/assets");
    expect(res.status).toBe(401);
  });

  it("redeems access code and sets cookie", async () => {
    const res = await request(app)
      .post("/api/auth/redeem")
      .send({ invite: env.GALLERY_ACCESS_CODE || "test-access-code" });
    expect(res.status).toBe(200);
    expect(res.body.authenticated).toBe(true);
    expect(res.headers["set-cookie"]).toBeTruthy();

    const cookie = res.headers["set-cookie"][0].split(";")[0];
    const me = await request(app).get("/api/auth/me").set("Cookie", cookie);
    expect(me.body.authenticated).toBe(true);
  });

  it("rejects bad invite", async () => {
    const res = await request(app).post("/api/auth/redeem").send({ invite: "nope" });
    expect(res.status).toBe(401);
  });
});
