import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const directions = ["modernist", "postmodernist"];

test("hero comparison holds the product, headline, supporting copy and action constant", async ({
  page,
}) => {
  const content = [];
  for (const direction of directions) {
    await page.goto(`/explorations/${direction}.html`);
    content.push({
      headline: await page.locator("h1").innerText(),
      support: await page.locator(".support").innerText(),
      image: await page.locator(".shirt-image").getAttribute("src"),
      alt: await page.locator(".shirt-image").getAttribute("alt"),
      form: await page.locator("#product-form").innerText(),
      productNote: await page.locator(".product-note").innerText(),
    });
  }
  expect(content[0]).toEqual(content[1]);
});

for (const direction of directions) {
  test(`${direction}: missing size, keyboard selection, add, clear and reload`, async ({
    page,
  }) => {
    await page.goto(`/explorations/${direction}.html`);
    await page.getByRole("button", { name: "Add to demo bag" }).click();
    await expect(page.locator("#size-error")).toBeVisible();
    await expect(page.locator("#bag-count")).toHaveText("0");
    await expect(
      page.getByRole("radio", { name: "S", exact: true }),
    ).toBeFocused();
    await page.keyboard.press("ArrowRight");
    await expect(
      page.getByRole("radio", { name: "M", exact: true }),
    ).toBeChecked();
    await page.keyboard.press("Tab");
    await expect(
      page.getByRole("button", { name: "Add to demo bag" }),
    ).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page.locator("#bag-count")).toHaveText("1");
    await expect(page.locator("#bag-items")).toContainText("Size M");
    await page.getByRole("button", { name: "Empty demo bag" }).click();
    await expect(page.locator("#bag-count")).toHaveText("0");
    await page.getByRole("button", { name: "Add to demo bag" }).click();
    await page.reload();
    await expect(page.locator("#bag-count")).toHaveText("0");
  });
  for (const width of [1440, 375]) {
    test(`${direction}: integrity and accessibility at ${width}px`, async ({
      page,
    }) => {
      const errors = [];
      page.on("pageerror", (error) => errors.push(error.message));
      page.on("response", (response) => {
        if (response.status() >= 400)
          errors.push(`${response.status()} ${response.url()}`);
      });
      await page.setViewportSize({ width, height: 960 });
      await page.goto(`/explorations/${direction}.html`);
      await expect(page.locator(".shirt-image")).toBeVisible();
      expect(
        await page
          .locator(".shirt-image")
          .evaluate((image) => image.complete && image.naturalWidth > 0),
      ).toBeTruthy();
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBeTruthy();
      expect(
        await page
          .locator("h1")
          .evaluate((element) => getComputedStyle(element).fontFamily),
      ).toContain("Arial");
      if (direction === "postmodernist") {
        expect(
          await page
            .locator("h1 em")
            .evaluate((element) => getComputedStyle(element).fontFamily),
        ).toContain("Georgia");
      }
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze();
      expect(results.violations).toEqual([]);
      expect(errors).toEqual([]);
    });
  }
}

test("comparison links and equal-size frames load both live previews", async ({
  page,
}) => {
  await page.goto("/explorations/");
  for (const direction of directions) {
    const link = page.getByRole("link", {
      name: `Open full ${direction} preview ↗`,
    });
    expect(
      (
        await page.request.get(
          new URL(await link.getAttribute("href"), page.url()).href,
        )
      ).ok(),
    ).toBeTruthy();
    await expect(
      page.frameLocator(`iframe[src="${direction}.html"]`).locator("h1"),
    ).toBeVisible();
  }
});
