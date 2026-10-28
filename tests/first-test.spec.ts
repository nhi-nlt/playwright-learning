import { test } from "@playwright/test";
test.beforeEach(async ({ page }) => {
  await page.goto("https://playground.bondaracademy.com/");
});
test.describe("1st test suite", () => {
  test.beforeEach(async ({ page }) => {
    await page.getByText("Forms").click();
  });
  test("this is the 1st test", async ({ page }) => {
    await page.getByText("Form Layouts").click();
  });
  test("this is the 1st datepicker", async ({ page }) => {
    await page.getByText("Datepicker").click();
  });
});
test.describe("2nd test suite", () => {
  test.beforeEach(async ({ page }) => {
    await page.getByText("Charts", { exact: true }).click();
  });
  test("this is the 1st test", async ({ page }) => {
    await page.getByText("Echarts").click();
  });
});
