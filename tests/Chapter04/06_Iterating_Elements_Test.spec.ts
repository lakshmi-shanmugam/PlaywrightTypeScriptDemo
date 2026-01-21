// Import playwright module
import { test, expect } from '@playwright/test';

/**
 * Author Testers Talk
 */
test('Get Text & Get attribute value in playwright', async ({ page }) => {
    // Go to URL
    await page.goto('https://github.com/lakshmi-shanmugam');
    const repoCount = await page.locator('.repo').count();
    console.log(`Total repositories are : ${repoCount} - 06_Iterating_Elements_Test.spec.ts:11`);
    for (let i = 0; i < repoCount; i++) {
        const repoName = await page.locator('.repo').nth(i).innerText();
        console.log(`Repository ${i + 1} : ${repoName} - 06_Iterating_Elements_Test.spec.ts:14`);
    }
    console.log('============ - 06_Iterating_Elements_Test.spec.ts:16');
    const repositoryLinks = await page.$$('.repo');
    for (const repoLink of repositoryLinks) {
        const text = await repoLink.textContent();
        console.log(`Text from 1st loop: ${text}); - 06_Iterating_Elements_Test.spec.ts:20`);
    }
    console.log('============ - 06_Iterating_Elements_Test.spec.ts:22');
    for (let index = 0; index < repositoryLinks.length; index++) {
        const text1 = await repositoryLinks[index].textContent();
        console.log(`Text from 2nd loop: ${text1} - 06_Iterating_Elements_Test.spec.ts:25`);
    }
    console.log('============ - 06_Iterating_Elements_Test.spec.ts:27');
    const repositoryLinks2 = await page.locator('.repo');
    const count2 = await repositoryLinks2.count();
    for (let index2 = 0; index2 < count2; index2++) {
        const text2 = await repositoryLinks2.nth(index2).textContent();
        console.log(`Text from 3rd loop: ${text2} - 06_Iterating_Elements_Test.spec.ts:32`);
    }

});
