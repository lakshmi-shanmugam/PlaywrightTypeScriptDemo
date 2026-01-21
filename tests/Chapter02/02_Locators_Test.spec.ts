import { test, expect } from '@playwright/test';

test('Screenshot Record', async ({ page }) => {
    //Go to URL
    await page.goto('https://automationexercise.com/');
    //By Alt Attribute- for Images
    await page.getByAltText('Website for automation practice').screenshot({ path: './screenshots/ElementScreenshots.png' });
    //ByRole
    await page.getByRole('link', { name: ' Products' }).click();
    await page.getByRole('heading', { name: 'All Products' }).waitFor();
    //ByLabel
    await page.getByPlaceholder('Search Product').fill('top');
    //By TestId Attribute
    await page.locator('#submit_search').click();
    //ByText
    await page.getByText('Searched Products').screenshot({ path: './screenshots/TextLocator.png' });
    //By Placeholder
    await page.getByPlaceholder('Search Product').fill('denim');
    await page.locator("#submit_search").click();
    //xpath
    await page.locator('//*[@class="features_items"]').screenshot({ path: './screenshots/XpathLocator.png' });
    //CSS Selector
    await page.locator('.features_items').screenshot({ path: './screenshots/CSSLocator.png' });
    //By title
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.locator('#scrollUp').waitFor({ state: 'attached' });
    await page.locator('#scrollUp').click({ force: true });
    const closeButton = page.getByRole('button', { name: 'Close' });
    if (await closeButton.isVisible({ timeout: 2000 })) {
        await closeButton.click();
    }

});
