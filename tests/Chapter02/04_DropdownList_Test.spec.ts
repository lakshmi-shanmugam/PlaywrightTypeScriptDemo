//Import playwright module
import { expect, test, Page } from "@playwright/test";

//Write a test
test('Dropdown List Test', async ({ page }) => {
    //Go to URL
    await page.goto('https://www.facebook.com/login/');
    await page.waitForTimeout(4000);
    //Click on Create New Account button
    await page.getByRole('button', { name: 'Create new account' }).click();
    //select Month from Dropdown
    //const monthDropdown = page.getByRole('combobox', { name: 'Month' });
    //await monthDropdown.selectOption('6');
    await page.getByRole('combobox', { name: 'Month' }).selectOption('6');
    //Select dropdon using Visible test
    await page.getByLabel('Month').selectOption('Oct');
    //Validate all the options
    await expect(page.locator('select[title="Month"] option')).toHaveText(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
    //Select Day from Dropdown
    const dayDropdown = page.getByRole('combobox', { name: 'Day' });
    await dayDropdown.selectOption('15');
    //Select Year from Dropdown
    const yearDropdown = page.getByRole('combobox', { name: 'Year' });
    await yearDropdown.selectOption('1990');
});