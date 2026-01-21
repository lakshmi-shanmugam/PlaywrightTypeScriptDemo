//Import playwright module
import { expect, test, Page } from "@playwright/test";

//Write a test
test('KeyboardActions Test', async ({ page }) => {
    //Go to URL
    await page.goto('https://www.google.com/');
    await page.waitForTimeout(4000);
    /* //Enter action from Keyboard
     await page.getByLabel('Search', { exact: true }).first().click();
     await page.keyboard.type('Playwright by Testers Talk');
     await page.waitForTimeout(4000);
     //press Enter key
     await page.keyboard.press('Enter');
 
     //Selection and deleting from keyboard
     await page.waitForTimeout(4000);
     await page.getByLabel('Search', { exact: true }).first().click();
     await page.keyboard.press('Control+A');
     await page.keyboard.press('Delete');
     await page.waitForTimeout(4000);
     */
    //Press Tan and Enter
    await page.getByLabel('Search', { exact: true }).first().click();
    await page.keyboard.type('Playwright by Testers Talk');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(4000);
});