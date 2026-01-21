// Import playwright module
import { test, expect } from '@playwright/test';

import path from 'path';
import { readExcelFile } from '../../src/utils/ExcelHelper';

const filePath = path.join(__dirname, '../../test-data/qa/TestData.xlsx');
const records = readExcelFile(filePath);

/**
 * Author Testers Talk
 */
records.forEach((record, index) => {

    test(`Data Driven Testing Using Excel file in playwright : ${record.Skill2} [${index + 1}]`, { tag: ['@DataDrivenTesting'] }, async ({ page }) => {

        console.log(`Excel file row data - 04_DataDrivenTestingUsingEXCEL.spec.ts:17`);
        console.log(`Skill 1 : ${record.Skill1} - 04_DataDrivenTestingUsingEXCEL.spec.ts:18`);
        console.log(`Skill 2 : ${record.Skill2} - 04_DataDrivenTestingUsingEXCEL.spec.ts:19`);

        // Go to URL
        await page.goto('https://www.google.com/');

        // Search with keywords
        await page.getByLabel('Search', { exact: true }).fill(record.Skill2);
        await page.getByLabel('Search', { exact: true }).press('Enter');

        // Click on playlist
        await page.getByRole('link', { name: record.Skill2 }).first().click();

        // Validate web page title 
        await expect(page).toHaveTitle(record.Skill2 + '☑️ - YouTube');
    });
});