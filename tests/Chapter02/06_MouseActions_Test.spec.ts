//Import playwright module
import { expect, test, Page } from "@playwright/test";

//Write a test
test('MouseActions Test', async ({ page }) => {
    //Go to URL
    await page.goto('https://www.google.com/search?q=playwright+by+testers+talk');
    await page.waitForTimeout(4000);
    //await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click({ button: 'left' });
    //await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click({ button: 'right' });
    //await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click({ button: 'middle' });
    //mouse hover
    await page.getByLabel('Search by voice').hover();
    await page.waitForTimeout(4000);
    //mouse double click
    await page.getByLabel('Search by voice').dblclick();
    await page.waitForTimeout(4000);

});
