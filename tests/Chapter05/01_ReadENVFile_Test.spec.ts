import { test, expect } from '@playwright/test';

test('Read ENV file in Playwright', async ({ page, browser }) => {
    test.setTimeout(60000);
    //Go to URL
    await page.goto("`${process.env.OrangeURL}`");
    // await page.getByRole('textbox', { name: 'Username' }).waitFor();
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForTimeout(7000);
    await page.waitForURL(/dashboard/);
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
});