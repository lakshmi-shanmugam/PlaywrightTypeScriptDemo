//Import playwright module
import { expect, test } from "@playwright/test";

test('Timeouts in Playwirght', { tag: ['@SmokeTesting'] }, async ({ page }) => {
    test.setTimeout(1 * 60 * 1000); // 2 minutes
    //Go to URL
    await page.goto('https://www.youtube.com/');
    //Check page title
    await expect(page).toHaveTitle(/.*YouTube.*/), { timeout: 5000 }; // 5 seconds
    //await page.waitForTimeout(6000); // 60 seconds
})