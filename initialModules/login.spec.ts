import {test,expect} from "@playwright/test"
test("validate sauce demo login page", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.district.in/")
    await page.getByRole("button", { name: "User Avatar" }).click()
    await page.getByPlaceholder("Enter mobile number").fill("9778337889")
    await page.getByRole("button", { name: "continue" }).click()
    await page.waitForTimeout(20000)
    await page.goto("https://www.district.in/events/")
    await context.storageState({ path: 'authState.json' });
})

