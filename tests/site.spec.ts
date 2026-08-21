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
