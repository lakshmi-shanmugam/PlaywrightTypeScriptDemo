//Import playwright module
import { expect, test, Page } from "@playwright/test";

//Write a test
test('Assertion Hard and Soft Test', async ({ page }) => {
    //Go to URL
    await page.goto('https://www.youtube.com/');
    //visible, editable, enabled,empty
    await expect(page.getByPlaceholder('Search', { exact: true }).first()).toBeVisible();
    await expect(page.getByPlaceholder('Search', { exact: true }).first()).toBeEditable();
    await expect(page.getByPlaceholder('Search', { exact: true }).first()).toBeEnabled();
    await expect(page.getByPlaceholder('Search', { exact: true }).first()).toBeEmpty();
    //Verify URL,title,text, count
    await page.getByPlaceholder('Search', { exact: true }).first().click();
    await page.getByPlaceholder('Search', { exact: true }).first().fill('Playwright by Testers Talk');
    await page.getByPlaceholder('Search', { exact: true }).first().press('Enter');
    await expect(page).toHaveURL('https://www.youtube.com/results?search_query=Playwright+by+Testers+Talk');
    await expect(page).toHaveTitle(/.*Playwright by Testers Talk.*/);
    await expect(page.locator('yt-formatted-string', { hasText: 'Testers Talk' }).first()).toContainText('Testers Talk');
    await expect(page.locator('yt-formatted-string')).toHaveCount(107);
});



