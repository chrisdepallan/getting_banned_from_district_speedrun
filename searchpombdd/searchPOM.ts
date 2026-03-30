import {Page} from '@playwright/test';
export class SearchEvents{
    readonly page:Page
    readonly searchInput;
    constructor(page:Page){
        this.page=page;
        this.searchInput=page.locator("//span[text()='Events']/parent::button/parent::div/parent::div/descendant::input")
    }
      async performSearchAction(searchTerm: string) {
        await this.searchInput.fill(searchTerm);

        // Wait for results to load (better than timeout)
        await this.page.waitForLoadState('networkidle');

        // 🔍 Check if "Top results" exists
        const topResultsSection = this.page.locator('span:has-text("Top results")');

        let items;

        if (await topResultsSection.count() > 0) {
            // CASE 1: Top results present
            items = topResultsSection
                .locator('xpath=following-sibling::div')
                .locator('h5');
        } else {
            // CASE 2: Normal results
            items = this.page.locator('div >> h5'); // refine selector
        }

        return items;
    }
}
