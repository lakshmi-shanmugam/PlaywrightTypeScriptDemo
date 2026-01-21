//Import playwright module
import { expect, test, Page } from "@playwright/test";

//Write a test
test('Test 1', async ({ page }) => {
    //Go to URL
    await page.goto('https://www.youtube.com/');
    //Check page title
    await expect(page).toHaveTitle(/.*YouTube.*/);

})
//test.skip('Test 2', async ({ page }) => {
test('Test 2', async ({ page }) => {
    //Go to URL
    await page.goto('https://www.google.com/');
    //Check page title
    await expect(page).toHaveTitle(/.*Google.*/);
})
test.only('Test 3 - Automation Exercise', async ({ page }) => {
    //Go to URL
    await page.goto('https://automationexercise.com/');
    //Check page title
    await expect(page).toHaveTitle(/.*Automation Exercise.*/);
});