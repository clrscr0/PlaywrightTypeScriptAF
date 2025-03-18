import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../../pages/examples/demo/LoginPage';
const loginData = require('../../../../test-data/examples/login.json');

test.describe('Login Functionality', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigate();
    });

    test('should login with valid credentials', async ({ page }) => {
        await loginPage.validateLogin(loginData.username, loginData.password);
    });
});