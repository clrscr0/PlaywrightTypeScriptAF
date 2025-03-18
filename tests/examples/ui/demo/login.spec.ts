import { expect } from '@playwright/test';
import { LoginPage } from '../../../../pages/examples/demo/LoginPage';
import { test } from '../../../../test-options';

test.describe('Login Functionality', () => {
    let loginPage: LoginPage;
    let testData: any;

    test.beforeEach(async ({ page, testDataDir }) => {
        testData = require(`${testDataDir}/login.json`);

        loginPage = new LoginPage(page);
        await loginPage.navigate();
    });

    test('[1] should login with valid credentials]', async ({ page }) => {
        await loginPage.validateLogin(testData.validLogin.username, testData.validLogin.password);
    });
});