import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

const SAMPLE_TITLE =
  "Case Study: Tackling Problem Report Burn down across a large growing ART Backlog";
const SAMPLE_DATE = "2026-08-19";
const SAMPLE_BODY = `**Disclaimer/Declaration**\n\n*This case study is based on a challenge encountered and redesigned as a Simulation to reflect real-world complexities...*`;

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

test("create blog post via admin UI and verify file written", async ({
  page,
}) => {
  // open the admin new-entry URL directly
  await page.goto("/admin/collections/blog/new");

  // wait for form to render
  await page
    .waitForSelector('input[aria-label="Title"]', { timeout: 10000 })
    .catch(() => {});

  // Fill title (try multiple selectors for robustness)
  const titleLocator = page.locator('input[aria-label="Title"]').first();
  if (await titleLocator.count()) {
    await titleLocator.fill(SAMPLE_TITLE);
  } else {
    await page.getByLabel("Title").fill(SAMPLE_TITLE);
  }

  // Fill date if present
  const dateLocator = page
    .locator('input[type="datetime-local"], input[aria-label="Date"]')
    .first();
  if (await dateLocator.count()) {
    await dateLocator.fill(SAMPLE_DATE);
  }

  // Add a Text body block via the Add body button
  const addBody = page.locator("text=Add body").first();
  await addBody.click().catch(() => {});
  // choose Text block in the menu
  await page
    .locator("text=Text")
    .first()
    .click()
    .catch(() => {});

  // Toggle to Markdown and fill textarea
  // The Markdown toggle shows a "Markdown" button; click it then fill the textarea
  const markdownToggle = page.locator("text=Markdown").first();
  await markdownToggle.click().catch(() => {});

  // Find the last textarea on the page and fill it with sample content
  const textareas = page.locator("textarea");
  await expect(textareas.first()).toBeVisible({ timeout: 5000 });
  const count = await textareas.count();
  await textareas.nth(count - 1).fill(SAMPLE_BODY);

  // Click Save
  await page
    .locator('button:has-text("Save"), button:has-text("Publish")')
    .first()
    .click();

  // Compute expected file path and wait for it to exist
  const slug = slugify(SAMPLE_TITLE);
  const expectedPath = path.join(
    process.cwd(),
    "src",
    "content",
    "blog",
    `${slug}.mdx`,
  );

  // Wait up to 5s for file to appear
  for (let i = 0; i < 10; i++) {
    if (fs.existsSync(expectedPath)) break;
    await new Promise((r) => setTimeout(r, 500));
  }

  expect(fs.existsSync(expectedPath)).toBeTruthy();

  // Simple sanity check: file contains the title
  const content = fs.readFileSync(expectedPath, "utf-8");
  expect(content).toContain('title: "' + SAMPLE_TITLE + '"');
});
