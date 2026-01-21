import { test, expect } from '@playwright/test';

test('My First Playwright TS Test', async ({ page }) => {
  //Go to URL
  await page.goto('https://demoqa.com/automation-practice-form');
  //Assert Title
  //await expect(page).toHaveTitle('ToolsQA');
  await page.getByRole('link').click();
  await page.goto('https://demoqa.com/automation-practice-form');
  await page.getByRole('textbox', { name: 'First Name' }).fill('Prabha');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Kamal');
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('prabhakamal@email.com');
  await page.getByRole('textbox', { name: 'Mobile Number' }).fill('1111111111');
  await page.getByText('Female').click();
  await page.locator('#dateOfBirthInput').click();
  await page.getByRole('combobox').nth(1).selectOption('1995');
  await page.getByRole('option', { name: 'Choose Monday, January 23rd,' }).click();
  await page.locator('#subjectsInput').fill('test');
  await page.getByText('Sports').click();
  await page.getByRole('button', { name: 'Select picture' }).setInputFiles('C:\\Users\\laksh\\OneDrive\\Pictures\\iPhone12Mini\\IMG_1870.JPG');
  await page.getByRole('textbox', { name: 'Current Address' }).fill('test address');
  await page.locator('#state').scrollIntoViewIfNeeded();
  await page.locator('#state').click();
  await page.getByText('NCR', { exact: true }).click();
  await page.locator('#city').click();
  await page.getByText('Delhi', { exact: true }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByText('Thanks for submitting the form').click();
  await page.getByRole('button', { name: 'Close' }).click();

});
