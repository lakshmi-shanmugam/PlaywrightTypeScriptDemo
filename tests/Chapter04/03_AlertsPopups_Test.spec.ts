// Import playwright module
import { test, expect } from '@playwright/test';
import { Dialog } from '@playwright/test';

test('Handling Alert popups in Playwright ', async ({ page }) => {
    // Go to URL
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');
    // Click on Alert button
    page.once('dialog', async dialog => {
        await dialog.accept();
        console.log(`Alert Dialog message: ${dialog.message()} - 03_AlertsPopups_Test.spec.ts:11`);
        console.log(`Dialog type is: ${dialog.type()} - 03_AlertsPopups_Test.spec.ts:12`);
    });
    await page.waitForTimeout(3000);
    await page.getByText('See an example alert', { exact: true }).click();
});
test('Confirmpopups in Playwright ', async ({ page }) => {
    // Go to URL
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');
    // Click on Alert button
    page.once('dialog', async dialog => {
        //await dialog.accept();
        await dialog.dismiss();
        console.log(`Confirm message: ${dialog.message()} - 03_AlertsPopups_Test.spec.ts:24`);
        console.log(`Dialog type is: ${dialog.type()} - 03_AlertsPopups_Test.spec.ts:25`);
    });

    await page.waitForTimeout(3000);
    await page.getByText('See a sample confirm', { exact: true }).click();
});
test('Handling prompt in Playwright ', async ({ page }) => {
    // Go to URL
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');
    // Click on Alert button
    page.once('dialog', async dialog => {
        await dialog.accept('playwright');
        //await dialog.dismiss();
        console.log(`POPUP message: ${dialog.message()} - 03_AlertsPopups_Test.spec.ts:38`);
        console.log(`Dialog type is: ${dialog.type()} - 03_AlertsPopups_Test.spec.ts:39`);

    });
    await page.waitForTimeout(3000);
    await page.getByText('See a sample prompt', { exact: true }).click();
});
