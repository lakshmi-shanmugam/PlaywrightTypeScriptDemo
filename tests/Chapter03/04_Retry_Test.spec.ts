import { test, expect } from '@playwright/test';

test('Screenshot Record', async ({ page }) => {
    //Go to URL
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');

    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('textbox', { name: 'Search' }).fill('Admin');
    await page.getByRole('link', { name: 'Admin' }).click();
    await page.locator('div').filter({ hasText: /^System Users$/ }).first().click();
    await page.getByRole('listitem').filter({ hasText: 'Peter Thomson' }).locator('i').click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});