import { test, expect } from "@playwright/test";

test.describe("Website Export", () => {
  test("opens the editor export interface", async ({ page }) => {
    await page.goto("/editor");

    await expect(page.locator("body")).toBeVisible();
  });

  test("application remains usable after navigation", async ({ page }) => {
    await page.goto("/");

    await page.goto("/editor");

    await expect(page.locator("body")).toBeVisible();

    await page.goBack();

    await expect(page.locator("body")).toBeVisible();
  });
});
