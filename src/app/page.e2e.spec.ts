import { test, expect } from "@playwright/test"

test("should navigate through various page sections", async ({ page }) => {
  await page.goto("http://localhost:3000/")

  await page.getByRole("link", { name: "Get started" }).click()
  await expect(page).toHaveURL("http://localhost:3000/#plans")

  await page.getByRole("link", { name: "Discover more" }).click()
  await expect(page).toHaveURL("http://localhost:3000/#vision")
})
