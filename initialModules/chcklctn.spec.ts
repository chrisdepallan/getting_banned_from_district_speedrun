import {test,expect} from "@playwright/test"
test.use({ storageState: 'authState.json' });
test("validate sauce demo login page", async ({ page }) => {
    await page.goto("https://www.district.in/")
    // await page.waitForTimeout(20000)
    await expect( await page.locator("//button[@aria-label='Gurugram']")).toBeVisible()
    
    // await page.locator("//button[@aria-label='Events']/child::span[text()='Events']").click()
    // await expect(page.locator("//h5[text()='Socialcon']/parent::div/parent::a")).toBeEnabled()
    // let arr=["english", "spanish"]
    // for(let i=0; i<arr.length; i++){
    //     await page.locator("mssd").click()
    //     await page.locator(".ui-corner-all").locator('a',{hasText:arr[i ]}).click();}

    })
