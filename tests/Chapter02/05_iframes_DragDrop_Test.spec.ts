//Import playwright module
import { expect, test, Page } from "@playwright/test";

//Write a test
test('Handling Iframes, Drag and Drop elements in playwright', async ({ page }) => {
    //Go to URL
    await page.goto('https://jqueryui.com/droppable/');
    await page.waitForTimeout(4000);
    //Drag and Drop inside iframe
    const frame = page.frameLocator('.demo-frame');
    const source = frame.locator('#draggable');
    const target = frame.locator('#droppable');
    await source.dragTo(target);
    //Validate the Drag and Drop
    await expect(target).toHaveText('Dropped!');
});