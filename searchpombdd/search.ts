
import { readExcelFile } from "../utils/excelReader";
import { SearchEvents } from "../pages/searchPOM";
import {test,expect,Browser, Page } from '@playwright/test';
import { createBdd} from 'playwright-bdd';
import { LoginPage } from '../pages/loginPOM';

const { Given, When, Then, Before } = createBdd();
// // let browserBrowser:Browser;

// // page
// let page:Page;
// let loginpage:LoginPage;
// let searchevent:SearchEvents;

// Before( async ({browser}) => {
// const context = await browser.newContext();
// const page = await context.newPage();
// loginpage=new LoginPage(page);
// searchevent=new SearchEvents(page);

// });
// interface SearchData {
//     SearchTerm: string;
// }

// const searchTerms: SearchData[] = readExcelFile("login.xlsx", "test1");

// test.use({ storageState: 'authState.json' });

// // test.beforeEach(async ({ page }) => {
// //     await page.goto("https://www.district.in/search/");
// // });

// // searchTerms.forEach(data => {
// //     test(`validate search for term ${data.SearchTerm}`, async ({ page }) => {

// //         const search = new SearchEvents(page);

// //         const resultsLocator = await search.performSearchAction(data.SearchTerm);

// //         // ✅ Wait for results
// //         await expect(resultsLocator.first()).toBeVisible();

// //         // ✅ Extract actual text
// //         const results = await resultsLocator.allTextContents();

// //         console.log(`Results for ${data.SearchTerm}:`);
// //         console.log(results);
// //     });
// // });
// // //----------------------------------------------------------------------------------------
// // // test("validate sauce demo login page", async ({ page }) => {
// // //     await page.goto("https://www.district.in/search/")
// // //     await page.locator("//span[text()='Events']/parent::button").click()
// // //     await page.locator("//span[text()='Events']/parent::button/parent::div/parent::div/descendant::input").fill("socialcon")

// // // })


// Then('load the login state', async ({}) => {
//   // Step: Then load the login state
//   // From: tests\features\events.feature:4:5
// });
// Given('I am on the search page', async ({}) => {
//   // Step: Given I am on the search page
//   // From: tests\features\events.feature:9:6
// });
// When('i search for the event {string}', async ({}, arg: string) => {
//   // Step: When i search for the event "Music Concert"
//   // From: tests\features\events.feature:10:6
// });
// Then('I should see search results related to it', async ({}) => {
//   // Step: Then I should see search results related to it
//   // From: tests\features\events.feature:11:6
// // });
// import { Given, When, Then } from '@playwright/test';
// import { expect } from '@playwright/test';
// import { SearchEvents } from '../pages/searchPOM';

let search: SearchEvents;
let resultsLocator: any;

Given('load the login state', async ({ page }) => {
  // directly from your code
  await page.context().storageState({ path: 'authState.json' });
});

Given('I am on the search page', async ({ page }) => {
  await page.goto("https://www.district.in/z/");
  search = new SearchEvents(page);
});

When('i search for the event {string}', async ({ page }, searchTerm: string) => {
  // same as your test logic
  resultsLocator = await search.performSearchAction(searchTerm);
});

Then('I should see search results related to it', async ({}) => {
  // same assertions
  await expect(resultsLocator.first()).toBeVisible();

  const results = await resultsLocator.allTextContents();
  console.log("Results:", results);
});