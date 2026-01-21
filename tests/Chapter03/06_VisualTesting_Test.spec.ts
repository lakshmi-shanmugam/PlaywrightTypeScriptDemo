import { test, expect } from '@playwright/test';

test('Element Visual Testing in playwirght', async ({ page }) => {
    //Go to URL
    await page.goto('https://github.com/login');
    //Take screenshot before login
    //await page.screenshot({ path: 'github-login-page.png', fullPage: true });
    await expect(page).toHaveScreenshot('github-login-page.png');
    const element = page.locator('#login_field');
    await expect(element).toHaveScreenshot('github-username-textbox.png');
    //Perform login action
    await page.fill('#login_field', 'lakshmikamal2012@gmail.com');
    await expect(element).toHaveScreenshot('github-username-textbox1.png');
});