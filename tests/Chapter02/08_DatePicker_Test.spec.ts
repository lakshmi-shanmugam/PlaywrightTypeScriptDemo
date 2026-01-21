//Import playwright module
import { expect, test, Page } from "@playwright/test";

//Write a test
test('Date Picker test', async ({ page }) => {
    //Go to URL
    await page.goto('https://jqueryui.com/datepicker/');
    await page.waitForTimeout(4000);
    //Handle Iframe
    const frame = page.frameLocator('.demo-frame');

    //Hardcoded date selection
    //await frame.locator('#datepicker').fill('01/25/2025');
    //await page.waitForTimeout(4000);
    //selecting dynamic date
    //await frame.locator('#datepicker').click();
    //await frame.locator('.ui-datepicker-today').click();
    //await page.waitForTimeout(2000);

    //Select past date
    //await frame.locator('#datepicker').click();
    //await frame.locator('.ui-datepicker-prev').click();
    //await frame.getByRole('link', { name: '15' }).click();
    //await page.waitForTimeout(2000);
    //select future date
    await frame.locator('#datepicker').click();
    await frame.locator('.ui-datepicker-next').click();
    await frame.locator('.ui-datepicker-next').click();
    await frame.getByRole('link', { name: '20' }).click();
    await page.waitForTimeout(2000);

});