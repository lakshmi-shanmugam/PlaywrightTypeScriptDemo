import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  await page.locator('.oxd-main-menu-search').click();
  await page.getByRole('textbox', { name: 'Search' }).fill('PIM');
  await page.getByRole('link', { name: 'PIM' }).click();
    await page.getByRole('textbox').nth(2).fill('10000'); 
  await page.getByRole('textbox', { name: 'Type for hints...' }).first().fill('Lakshmi');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByText('Lakshmi').click();
  await page.getByRole('heading', { name: 'Lakshmi Shan' }).click();
  await page.getByRole('listitem').filter({ hasText: 'quattera_John_92847 Smith' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});