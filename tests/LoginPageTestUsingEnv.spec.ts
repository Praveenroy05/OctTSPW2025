import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage';

import {ENV} from '../utils/Env'

let loginPage :LoginPage

test.beforeEach(async ({page})=>{
   loginPage = new LoginPage(page)
   await loginPage.launchURL(ENV.baseUrl)
})

test("Valid login test @smoke", async ()=>{
    await loginPage.loginIntoApplication(ENV.username, ENV.password)
    await expect(loginPage.homePageIdentifier).toBeVisible()
})

test("Invalid login test", async ()=>{
    await loginPage.loginIntoApplication(ENV.username, ENV.incorrectPassword)
    await expect(loginPage.errorMsg).toHaveText("Incorrect email or password.")
})
