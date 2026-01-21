import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export class PlaylistPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;

    }
    //Methods
    async validatePageTitle(title: string) {
        await expect(this.page).toHaveTitle(title);

    }

}