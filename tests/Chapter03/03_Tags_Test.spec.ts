//Import playwright module
import { expect, test, Page } from "@playwright/test";

test('Test 1', { tag: ['@SmokeTesting'] }, async ({ page }) => {
    //Go to URL
    await page.goto('https://www.youtube.com/');
    //Check page title
    await expect(page).toHaveTitle(/.*YouTube.*/);

})

test('Test 2', { tag: ['@SmokeTesting', '@RegressionTesting'] }, async ({ page }) => {
    //Go to URL
    await page.goto('https://www.youtube.com/');
    //Check page title
    await expect(page).toHaveTitle(/.*YouTube.*/);

})

test('Test 3', { tag: ['@RegressionTesting'] }, async ({ page }) => {
    //Go to URL
    await page.goto('https://www.youtube.com/');
    //Check page title
    await expect(page).toHaveTitle(/.*YouTube.*/);
});