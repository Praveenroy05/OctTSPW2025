import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

import data from '../TestData/product.json'


let loginPage :LoginPage
let dashboardPage : DashboardPage

test.beforeEach(async ({page})=>{
   loginPage = new LoginPage(page)
   dashboardPage = new DashboardPage(page)
   await loginPage.launchURL(data.url)
   await loginPage.loginIntoApplication(data.username, data.password)
})

test("Add the product to the cart", async ()=>{
    await dashboardPage.searchAndAddProductToCart(data.productName)
    await expect(dashboardPage.addToCartSuccessMsg).toHaveText(data.cartSuccessMsg)
})

test("Validate the product details", async()=>{
   await dashboardPage.searchAndValidateProductDetails(data.productName)
   await expect(dashboardPage.viewProductName).toHaveText(data.productName)
})


// json - Java script OBJECT notation - data = {name : value}
// excel - 

/*

JSON - OBJECT

{"key" : value}.json - {key : value}.js/ts

*/

// const obj = {
//  url : "https://rahulshettyacademy.com/client",
//  username : "testnHNk@gmail.com",
//  password : "Testing@1234",
//  productName : "ZARA COAT 3",
//  cartSuccessMsg : "Product Added To Cart"
// }

// const data1 = {
//   url: 'https://rahulshettyacademy.com/client',
//   username: 'testnHNk@gmail.com',
//   password: 'Testing@1234',
//   productName: 'ZARA COAT 3',
//   cartSuccessMsg: 'Product Added To Cart'
// }

// console.log(data1.url);

//const data1 = [10,20,30]


// excel - 
// .env - 
// Annotations - 

// GitHub
// Allure report generation
// Jenkins
// AI - MCP, Agent
// API testing
// Table validation
// Locators - 
// E2E validation - 
// Doubt clarification after a week