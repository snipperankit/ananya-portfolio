import { test, expect } from "@playwright/test";

test("case study renders on blog page", async ({ page }) => {
  await page.goto("/blog");
  await page.waitForTimeout(500);
  // find link to the case study post by title
  const title =
    "Case Study #1: Tackling Problem Report Burndown across a large growing overall project backlog";
  const link = page.getByRole("link", { name: title }).first();
  if (await link.count()) {
    await link.click();
    await page.waitForLoadState("networkidle");
    await expect(page.locator("body")).toContainText("Primary Skill");
  } else {
    // fallback: navigate directly to slug URL
    await page.goto(
      "/blog/case-study-1-tackling-problem-report-burndown-across-a-large-growing-overall-project-backlog",
    );
    await page.waitForLoadState("networkidle");
    await expect(page.locator("body")).toContainText("Primary Skill");
  }
});
