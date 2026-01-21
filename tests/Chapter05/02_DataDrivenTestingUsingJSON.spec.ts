import { test, expect } from '@playwright/test';
import testData from '../../test-data/qa/testdata.json';

type TestData = {
    TestDataSet1: {
        username: string;
        password: string;
    },
    TestDataSet2: {
        username: string;
        password: string;
    },
    TestDataSet3: {
        username: string;
        password: string;
    },
    TestDataSet4: {
        username: string;
        password: string;
    },
    TestDataSet5: {
        username: string;
        password: string;
    },
    TestDataSet6: {
        username: string;
        password: string;
    }
}
const typedTestData = testData as TestData;
for (const dataSetName in typedTestData) {
    const dataSet = typedTestData[dataSetName as keyof TestData];
    test(`Login Test with ${dataSetName}`, async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.locator('[data-test="username"]').fill(dataSet.username);
        await page.locator('[data-test="password"]').fill(dataSet.password);
        await page.locator('[data-test="login-button"]').click();
        await expect(page).toHaveTitle('Swag Labs');
        await expect(page.locator('[data-test="title"]')).toHaveText('Products');
        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.locator('[data-test="logout-sidebar-link"]').click();
    })
};