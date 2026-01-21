import { expect, test, Page } from "@playwright/test";

async function acceptGoogleConsent(page: Page) {
    const consentFrame = page.frameLocator('iframe[name="callout"]');
    const acceptButton = consentFrame.getByRole('button', { name: /I agree|Accept all|Agree|Accept all cookies/i });
    try {
        await acceptButton.click({ timeout: 2000 });
    } catch {
        // Consent dialog not shown for this locale/session.
    }
}
test.beforeAll(async () => {
    console.log("This is before all hook... - 03_Hooks_test.spec.ts:13");
});

test.afterAll(async () => {
    console.log("This is after all hook - 03_Hooks_test.spec.ts:17");
});
test("Hooks Test1", async ({ page }) => {
    // Before Each Hook
    await page.goto("https://www.google.com/");
    await acceptGoogleConsent(page);
    //Search with Keywords
    await page.locator('input[name="q"]').waitFor();
    await page.locator('input[name="q"]').fill("Playwright by");
    await page.keyboard.press("Enter");
    //click on playlist
    await page.getByRole('link', { name: "Playwright by testes talk" }).first().click();
    //validate web page title
    await expect(page).toHaveTitle('Playwright by Testers Talk - YouTube');
});
//write a test using before each and after each hooks
test("Hooks Test2", async ({ page }) => {
    await page.goto("https://www.google.com/");
    await acceptGoogleConsent(page);
    //Search with Keywords
    await page.locator('input[name="q"]').waitFor();
    await page.locator('input[name="q"]').fill("Playwright by");
    await page.keyboard.press("Enter");
    //click on playlist
    await page.getByRole('link', { name: "Playwright by testes talk" }).first().click();
    //validate web page title
    await expect(page).toHaveTitle('Playwright by Testers Talk - YouTube');
});
