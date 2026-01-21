// Import playwright module
import { test, expect } from '@playwright/test';
test('Basic saucedemo test in Playwright', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveTitle('Swag Labs');
    await expect(page.locator('[data-test="title"]')).toHaveText('Products');
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.locator('[data-test="logout-sidebar-link"]').click();
});