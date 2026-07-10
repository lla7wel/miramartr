import { expect, test } from "@playwright/test";

const routes = ["/", "/about", "/services", "/sectors", "/equipment", "/contact"];

test.describe("Miramar production site", () => {
  for (const route of routes) {
    test(`renders ${route}`, async ({ page }) => {
      await page.goto(route);
      await expect(page.getByRole("banner")).toBeVisible();
      await expect(page.getByRole("contentinfo")).toBeVisible();
      await expect(page.locator("main")).toBeVisible();
    });
  }

  test("mobile navigation opens and navigates", async ({ page, isMobile }) => {
    test.skip(!isMobile, "mobile-only coverage");
    await page.goto("/");
    await page.getByRole("button", { name: /menu/i }).click();
    await page
      .getByLabel("Mobile navigation")
      .getByRole("link", { name: /services|hizmetler/i })
      .click();
    await expect(page).toHaveURL(/\/services$/);
  });

  test("language switch updates visible labels", async ({ page, isMobile }) => {
    await page.goto("/");
    if (isMobile) {
      await page.getByRole("button", { name: /menu/i }).click();
    }
    await page.getByRole("button", { name: /^tr$/i }).first().click();
    await expect(page.getByRole("link", { name: /Hizmetler/i }).first()).toBeVisible();
  });

  test("equipment filter narrows results", async ({ page }) => {
    await page.goto("/equipment");
    await page.getByRole("tab", { name: /Pumps|Pompalar/i }).click();
    await expect(
      page.getByRole("heading", { name: /Pump packages|Pompa paketleri/i })
    ).toBeVisible();
  });

  test("contact validation blocks empty enquiry", async ({ page }) => {
    await page.goto("/contact");
    await page
      .getByRole("button", { name: /Prepare email enquiry|E-posta talebi hazirla/i })
      .click();
    await expect(page.getByText(/Name is required/i)).toBeVisible();
  });
});
