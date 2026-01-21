import { Locator, Page } from "playwright";

export class HomePage {
    readonly page: Page;
    readonly searchTextbox: Locator;
    readonly searchBoxSelector: string;
    constructor(page: Page) {
        this.page = page;
        //element
        this.searchBoxSelector = process.env.GoogleSearchBoxSelector?.trim() || 'input[name="q"]';
        this.searchTextbox = page.locator(this.searchBoxSelector);

    }
    //Methods
    async goToURL() {
        const url = process.env.GoogleURL?.trim();
        if (!url) {
            throw new Error('GoogleURL is not set in .env');
        }
        await this.page.goto(url, { waitUntil: 'domcontentloaded' });
        await this.searchTextbox.waitFor({ state: 'visible' });
        await this.searchTextbox.fill('Playwright');
        await this.searchTextbox.press('Enter');

    }
    async searchKeyword(keyword: string) {
        await this.searchTextbox.waitFor({ state: 'visible' });
        await this.searchTextbox.fill(keyword);
        await this.searchTextbox.press('Enter');
    }
}
