import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage';

const url = "https://rahulshettyacademy.com/client"
const username = "testnHNk@gmail.com"
const password = "Testing@1234"
const incorrectPassword = "test"

test("Valid login test", async ({page})=>{
    const loginPage = new LoginPage(page)
    await loginPage.launchURL(url)
    await loginPage.loginIntoApplication(username, password)
    await expect(loginPage.homePageIdentifier).toBeVisible()
})

test("Invalid login test", async ({page})=>{
    const loginPage = new LoginPage(page)
    await loginPage.launchURL(url)
    await loginPage.loginIntoApplication(username, incorrectPassword)
    await expect(loginPage.errorMsg).toHaveText("Incorrect email or password.")
})
