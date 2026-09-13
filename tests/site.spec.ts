import { test, expect } from "@playwright/test";

test("home page loads", async ({ page }) => {
  const res = await page.goto("/");
  expect(res?.status()).toBe(200);
  await expect(page.locator("header")).toBeVisible();
  await expect(page.locator("footer")).toBeVisible();
});

test("about page loads", async ({ page }) => {
  const res = await page.goto("/about");
  expect(res?.status()).toBe(200);
  await expect(page.locator("body")).not.toContainText("500");
});

test("blog index loads", async ({ page }) => {
  const res = await page.goto("/blog");
  expect(res?.status()).toBe(200);
  const languageButtons = page.locator(
    'button[aria-label="Translation to DE unavailable"]',
  );
  await expect(languageButtons).toHaveCount(2);
  await languageButtons.first().click();
  await expect(page.locator("#language-notice")).toBeVisible();
  await expect(page).toHaveURL(/\/blog\/?$/);
});

test("localized pages keep the language switch", async ({ page }) => {
  await page.goto("/about");
  await expect(page.locator('a[aria-label="Zu Deutsch wechseln"]')).toHaveCount(
    2,
  );
  await expect(
    page.locator('a[aria-label="Zu Deutsch wechseln"]').first(),
  ).toHaveAttribute("href", "/de/about");
});

test("blog post loads", async ({ page }) => {
  const res = await page.goto("/blog/launch-agile");
  expect(res?.status()).toBe(200);
});

test("resume page loads", async ({ page }) => {
  const res = await page.goto("/resume");
  expect(res?.status()).toBe(200);
});

test("admin CMS loads without config error", async ({ page }) => {
  await page.goto("/admin/");
  // wait for CMS to attempt loading
  await page.waitForTimeout(5000);
  const body = await page.locator("body").innerText();
  expect(body).not.toContain("Failed to load config.yml");
  expect(body).not.toContain("Error");
});

test("no console errors on home", async ({ page }) => {
  const errors: string[] = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  await page.goto("/");
  await page.waitForTimeout(1000);
  expect(errors).toEqual([]);
});

test("no console errors on about", async ({ page }) => {
  const errors: string[] = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  await page.goto("/about");
  await page.waitForTimeout(1000);
  expect(errors).toEqual([]);
});

test("no console errors on blog", async ({ page }) => {
  const errors: string[] = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  await page.goto("/blog");
  await page.waitForTimeout(1000);
  expect(errors).toEqual([]);
});
