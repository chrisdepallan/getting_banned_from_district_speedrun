import {Page,expect} from '@playwright/test';
export class locationPage{
    readonly page:Page;
    readonly locationbutton;
    readonly locationInput;
    // readonly passwordInput;
    readonly loginButton;
    readonly pageLogo;

    constructor(page:Page){
        this.page = page;
        this.locationbutton =page.locator("//img[@alt['app-store']]/parent::a/parent::div/following-sibling::button")
        this.locationInput = page.locator("//input")
        // this.passwordInput = page.locator("#password");

        this.loginButton = page.getByRole("button", { name: "continue" });
        this.pageLogo = page.locator(".logo");
    }
    async clickonlocationbutton(){
        await this.locationbutton.click();
    }
    async performlocationfill(location:string){
        await this.locationInput.fill(location);
        // await this.passwordInput.fill(pass);
    }
    async clickonfirstresult(location1:string,location2:string){
         await this.page.locator(`//h5[text()='Select Location']/parent::div/following-sibling::div/div/descendant::span[text()='${location1}']/following-sibling::span[text()='${location2}']/ancestor::button`).click();
    
        }
    async validateLoginPageTitle(){
        // await this.page.locator("/html/body/div[1]/div/div[1]/div/div[1]/div[1]/button/div/div[2]/span[1]")
        // await expect(this.page).toHaveTitle("Swag Labs")
        await this.page.waitForTimeout(2000)
    }

}