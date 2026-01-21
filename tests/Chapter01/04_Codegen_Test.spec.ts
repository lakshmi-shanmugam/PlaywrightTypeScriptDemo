import { test, expect } from '@playwright/test';

/**
 * Author Testers Talk
 */
test('Codegen test case', { tag: ['@PlaywrightWithJenkins'] }, async ({ page }) => {
    await page.goto('https://www.youtube.com/');
    await page.getByPlaceholder('Search').first().click();
    await page.getByPlaceholder('Search').first().fill('playwright by testers talk ');
    await page.getByRole('button', { name: 'Search', exact: true }).click();
    const videoLink = page.getByRole('link', { name: /Playwright by Testers Talk/i }).first();
    await expect(videoLink).toBeVisible();
    await videoLink.click();
    await page.waitForTimeout(5000);
    await expect(page).toHaveURL(/watch/);
    await expect(page.locator('video')).toBeVisible();
});

test('Test 2 will fail', { tag: ['@PlaywrightWithJenkins'] }, async ({ page }) => {
    await page.waitForTimeout(5000);
    await page.goto('https://www.youtube.com/@testerstalk');
    expect(true).toBe(true);
});
