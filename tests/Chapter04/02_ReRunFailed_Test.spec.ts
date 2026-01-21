// Import playwright module
import { test, expect } from '@playwright/test';

/**
 * Author Testers Talk
 */
test('Test 1', async ({ page }) => {
    // Go to URL
    await page.goto('https://www.youtube.com/');

    // Search with keywords
    await page.getByPlaceholder('Search', { exact: true }).first().fill('playwright by testers talk');
    await page.getByPlaceholder('Search', { exact: true }).first().press('Enter');

});

/**
 * Author Testers Talk
 */
test('Test 2', async ({ page }) => {
    expect(true).toBe(true);
});

/**
 * Author Testers Talk
 */
test('Test 3', async ({ page }) => {
    expect(true).toBe(true);
});
