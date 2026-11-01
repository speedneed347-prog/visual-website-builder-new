import { test, expect } from "@playwright/test";

test.describe("Website Builder Editor", () => {
  test("opens the application", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator("body")).toBeVisible();
  });

  test("opens the editor route", async ({ page }) => {
    await page.goto("/editor");

    await expect(page.locator("body")).toBeVisible();
  });

  test("does not display a browser error page", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator("body")).not.toContainText(
      "This site can't be reached"
    );
  });
});
