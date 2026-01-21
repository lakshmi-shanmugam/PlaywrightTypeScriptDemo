// Import playwright module
import { test, expect } from '@playwright/test';

/**
 * Author Testers Talk
 */
test('Get Text & Get attribute value in playwright', async ({ page }) => {
    // Go to URL
    await page.goto('https://github.com/lakshmi-shanmugam');

    // Get element text & assert
    const name = await page.locator('[itemprop="name"]').innerText();
    const finalName = name?.trim();
    console.log(`Name is : ${finalName} - 05_TextContent_GetAttribute_Test.spec.ts:14`);
    expect(finalName).toBe('Lakshmi Shanmugam');

    // Get attribute value
    const selectedLinks = page.locator('[data-selected-links]').first();
    await expect(selectedLinks).toBeVisible();
    const attributeValue = await selectedLinks.getAttribute('data-selected-links');
    console.log(`Attribute value is : ${attributeValue} - 05_TextContent_GetAttribute_Test.spec.ts:21`);
});
