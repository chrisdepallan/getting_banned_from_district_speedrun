import {test,expect,Browser, Page } from '@playwright/test';
import { createBdd} from 'playwright-bdd';
import { LoginPage } from '../pages/loginPOM';
import { SearchEvents } from '../pages/searchPOM';
const { Given, When, Then, Before } = createBdd();
// let browserBrowser:Browser;

// page
let page:Page;
let loginpage:LoginPage;
let searchevent:SearchEvents;

Before( async ({browser}) => {
const context = await browser.newContext();
const page = await context.newPage();
loginpage=new LoginPage(page);
searchevent=new SearchEvents(page);

});


Given('I am on the Home page', async ({page}) => {

  await page.goto('https://www.district.in/')
});

When('I click on the profile button', async ({page}) => {
    const loginpage = new LoginPage(page);

  await loginpage.clickonprofilebutton();
  // await page.locator("//div[@aria-label='User Avatar']/div").click();

});

When('I enter  the phone number', async ({page}) => {
  const loginpage = new LoginPage(page);
  await loginpage.performphonenumberfill("9778337889");

});

When('I click on the Submit button', async ({page}) => {
    const loginpage = new LoginPage(page);
    await loginpage.clickonLoginButton();
});

When('i wait for OTP', async ({page}) => {
  await page.waitForTimeout(20000)
});

When('I click on the submit button', async ({page}) => {

  // Step: And I click on the submit button
  // From: tests\features\login.feature:9:5
});

Then('I should be redirected to the Home page', async ({}) => {
  // Step: Then I should be redirected to the Home page
  // From: tests\features\login.feature:10:5
});

Then('save the login state for future tests', async ({context}) => {
     await context.storageState({ path: 'authState.json' });

    // Step: Then save the login state for future tests
  // From: tests\features\login.feature:11:5
});