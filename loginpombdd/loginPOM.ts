import {Page,expect} from '@playwright/test';
export class LoginPage{
    readonly page:Page;
    readonly profilebutton;
    readonly PhoneNumberInput;
    // readonly passwordInput;
    readonly loginButton;
    readonly pageLogo;

    constructor(page:Page){
        this.page = page;
        this.profilebutton =page.locator("//div[@aria-label='User Avatar']/div")
        this.PhoneNumberInput = page.getByPlaceholder("Enter mobile number");
        // this.passwordInput = page.locator("#password");

        this.loginButton = page.getByRole("button", { name: "continue" });
        this.pageLogo = page.locator(".logo");
    }
    async clickonprofilebutton(){
        await this.profilebutton.click();
    }
    async performphonenumberfill(uname:string){
        await this.PhoneNumberInput.fill(uname);
        // await this.passwordInput.fill(pass);
    }
    async clickonLoginButton(){
         await this.loginButton.click();
        }
    async validateLoginPageTitle(){
        await expect(this.page).toHaveTitle("Swag Labs")
    }

}