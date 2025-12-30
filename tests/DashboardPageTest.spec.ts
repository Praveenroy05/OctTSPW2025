import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

const url = "https://rahulshettyacademy.com/client"
const username = "testnHNk@gmail.com"
const password = "Testing@1234"
const productName = "iphone 13 pro"

let loginPage :LoginPage
let dashboardPage : DashboardPage

test.beforeEach(async ({page})=>{
   loginPage = new LoginPage(page)
   dashboardPage = new DashboardPage(page)
   await loginPage.launchURL(url)
   await loginPage.loginIntoApplication(username, password)

})

test("Valid login test", async ()=>{
    await dashboardPage.searchAndAddProductToCart(productName)
})