import { defineConfig } from "@playwright/test"

export default defineConfig({
  outputDir: "./test-results/e2e",
  testMatch: "**/*.e2e.{spec,test}.{ts,tsx}",
  testIgnore: "**/*.unit.{test,spec).{ts,tsx}",
})
