// Import playwright module
import { test, expect } from '@playwright/test';

test('Record at cursor test', async ({ page }) => {


    // Go to URL
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    // Search with keywords
    await page.locator('.oxd-main-menu-search').click();
    await page.getByRole('textbox', { name: 'Search' }).fill('PIM');
    await page.getByRole('link', { name: 'PIM' }).click();
    await page.getByRole('textbox').nth(2).fill('10000');
    await page.getByRole('textbox', { name: 'Type for hints...' }).first().fill('Lakshmi');
    await page.getByRole('button', { name: 'Search' }).click();

    // Click on playlist
    await page.getByText('Lakshmi').click();

    // Validate web page title 
    await page.getByRole('heading', { name: 'Lakshmi Shan' }).click();
    await page.getByRole('listitem').filter({ hasText: 'quattera_John_92847 Smith' }).locator('i').click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
});