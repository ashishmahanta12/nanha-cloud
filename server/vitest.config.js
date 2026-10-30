import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    globals: false,
    setupFiles: ["./tests/env-preload.js"],
    testTimeout: 60000,
    hookTimeout: 60000,
    fileParallelism: false,
    sequence: { concurrent: false },
  },
});
