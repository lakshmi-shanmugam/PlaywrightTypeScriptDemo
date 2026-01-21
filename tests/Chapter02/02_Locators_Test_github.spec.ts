import { test, expect } from '@playwright/test';

test('Screenshot Record', async ({ page }) => {
    //Go to URL
    await page.goto('https://github.com/BakkappaN/');
    //getByRole
    await page.getByRole('link', { name: 'Sign in' }).click();
    //getByLabel
    await page.getByLabel('Username or email address').fill('lakshmikamal2012@gmail.com');
    await page.getByLabel('Password').fill('Happy@day2026');
    await page.locator('input[name="commit"]').click();
    await page.waitForTimeout(5000);
});
