import { test, expect } from '@playwright/test';

test('Screenshot Record', async ({ page }) => {
    //Go to URL
    await page.goto('https://automationexercise.com/');
    //Assert Title
    await expect(page).toHaveTitle('Automation Exercise');
    //Element Screenshot
    await page.locator('//*[@alt="Website for automation practice"]').screenshot({ path: './screenshots/ElementScreenshots.png' });
    //Take Screenshot
    await page.screenshot({ path: './screenshots/homepage.png' });
    //Full page screenshot
    await page.screenshot({ path: './screenshots/fullpage.png', fullPage: true });
});