import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

const url = "https://rahulshettyacademy.com/client"
const username = "testnHNk@gmail.com"
const password = "Testing@1234"
const productName = "ZARA COAT 3"
const cartSuccessMsg = "Product Added To Cart"

let loginPage :LoginPage
let dashboardPage : DashboardPage

test.beforeEach(async ({page})=>{
   loginPage = new LoginPage(page)
   dashboardPage = new DashboardPage(page)
   await loginPage.launchURL(url)
   await loginPage.loginIntoApplication(username, password)
})

test("Add the product to the cart", async ()=>{
    await dashboardPage.searchAndAddProductToCart(productName)
    await expect(dashboardPage.addToCartSuccessMsg).toHaveText(cartSuccessMsg)
})

test("Validate the product details", async()=>{
   await dashboardPage.searchAndValidateProductDetails(productName)
   await expect(dashboardPage.viewProductName).toHaveText(productName)
})


// json - Java script OBJECT notation - data = {name : value}
// excel - 

/*

JSON - OBJECT

{"key" : value}.json - {key : value}.js/ts

*/

const obj = {
 url : "https://rahulshettyacademy.com/client",
 username : "testnHNk@gmail.com",
 password : "Testing@1234",
 productName : "ZARA COAT 3",
 cartSuccessMsg : "Product Added To Cart"
}