import { test, expect } from "@playwright/test";

test("VOID storefront and live guide share the actual identity", async ({
  page,
}) => {
  const samples = [];
  for (const route of ["/", "/styleguide.html"]) {
    await page.goto(route);
    samples.push(
      await page.evaluate(() => {
        const root = getComputedStyle(document.documentElement);
        const logo = document.querySelector(".brand-image");
        const action = document.querySelector(".add-button");
        return {
          stylesheet: document
            .querySelector('link[rel="stylesheet"]')
            .getAttribute("href"),
          tokens: [
            "--color-paper",
            "--color-ink",
            "--color-accent",
            "--font-expression",
            "--space-4",
          ].map((token) => root.getPropertyValue(token).trim()),
          logo: logo.getAttribute("src"),
          logoWidth: logo.getBoundingClientRect().width,
          actionBackground: getComputedStyle(action).backgroundColor,
          actionShadow: getComputedStyle(action).boxShadow,
        };
      }),
    );
    expect(
      await page
        .locator("img")
        .evaluateAll((images) =>
          images.every((image) => image.complete && image.naturalWidth > 0),
        ),
    ).toBeTruthy();
    await expect(page.locator(".brand-image").first()).toHaveAttribute(
      "alt",
      "VOID",
    );
  }
  expect(samples[0]).toEqual(samples[1]);
  expect(samples[0].logoWidth).toBe(130);
});
