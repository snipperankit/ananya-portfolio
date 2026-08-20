import { test } from "@playwright/test";

test("screenshot btn-accent", async ({ page }) => {
  await page.goto("/about");
  const btn = page.locator("a.btn-accent").first();
  await btn.scrollIntoViewIfNeeded();
  await btn.screenshot({ path: "btn_accent.png" });
});
