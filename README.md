# getting_banned_from_district_speedrun
getting_banned_from_district_speedrun ; 



## use these lines to make a unque search functionality in any page.

 await page.goto("https://www.district.in/");


this is for finding the search if its on the topbar. 

await page.locator('//a[@href="https://www.district.in"]/ancestor::div/descendant::button/parent::div/following-sibling::div/descendant::a[@href="/search"]').click();

