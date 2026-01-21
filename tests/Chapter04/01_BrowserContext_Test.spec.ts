import { test, expect } from '@playwright/test';

test('Multiple Browser/tabs in Playwright Typescripts', async ({ page, browser }) => {
    test.setTimeout(60000);
    //Go to URL
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    // await page.getByRole('textbox', { name: 'Username' }).waitFor();
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForTimeout(7000);
    await page.waitForURL(/dashboard/);
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

    const Context2 = await browser.newContext();
    const newTab = await Context2.newPage();
    await newTab.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    // await newTab.getByRole('textbox', { name: 'Username' }).waitFor();
    await newTab.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await newTab.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await newTab.getByRole('button', { name: 'Login' }).click();
    await newTab.waitForTimeout(7000);
    await newTab.waitForURL(/dashboard/);
    await expect(newTab).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

    //Create new Tab (reuse logged-in session)
    const newTab2 = await Context2.newPage();
    await newTab2.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await newTab2.waitForURL(/dashboard/);
    await expect(newTab2).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    //await Context2.close();
});
