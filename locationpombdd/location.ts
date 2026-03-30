import {test,expect,Browser, Page } from '@playwright/test';
import { createBdd} from 'playwright-bdd';
import { LoginPage } from '../pages/loginPOM';
import { SearchEvents } from '../pages/searchPOM';
import { locationPage } from '../pages/locationPOM';
const { Given, When, Then, Before } = createBdd();
// let browserBrowser:Browser;

// page
let page:Page;
let loginpage:LoginPage;
let searchevent:SearchEvents;
let locationpage:locationPage;

Before( async ({browser}) => {
const context = await browser.newContext();
const page = await context.newPage();
loginpage=new LoginPage(page);
locationpage=new locationPage(page);
searchevent=new SearchEvents(page);


});

When('i select for the event {string}:{string}', async ({page}, arg: string, arg1: string) => {
  locationpage=new locationPage(page);

  await locationpage.clickonlocationbutton();
  await locationpage.performlocationfill(arg);
  await locationpage.clickonfirstresult(arg,arg1);

  // Step: When i select for the event "Goa":"Goa, Goa"
  // From: tests\features\events.feature:24:6
});

Then('I should see i am on that location page', async ({page}) => {
  locationpage=new locationPage(page);

  await locationpage.validateLoginPageTitle();
  // Step: Then I should see i am on that location page
  // From: tests\features\events.feature:25:6
});