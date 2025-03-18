// @ts-check
import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly loginbtn: Locator;
    readonly emailField: Locator;
    readonly password: Locator;
    readonly clickLogin: Locator;
    readonly loginUserName: Locator;
    readonly logoutbtn: Locator;
    readonly logo: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginbtn = page.locator("//a[contains(text(),'Signup / Login')]");
        this.emailField = page.locator("input[data-qa='login-email']");
        this.password = page.locator("input[type='password']");
        this.clickLogin = page.locator("button[data-qa='login-button']");
        this.loginUserName = page.locator("//ul[@class='nav navbar-nav']//b[1]");
        this.logoutbtn = page.getByRole('link', { name: ' Logout' });
        this.logo = page.locator("img[alt='Website for automation practice']");

    }

    async navigate(): Promise<void> {
        await this.page.goto('/login');
      }

    async validateLogin(username: string, password: string) {
        await this.loginbtn.click()
        await this.emailField.fill(username)
        await this.password.fill(password)
        await this.clickLogin.click()
    }

    async logOut() { await this.logoutbtn.click(); }

    async validateLogo() { expect(await this.logo.screenshot()).toMatchSnapshot('test_practice_logo.png'); }
}