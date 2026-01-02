import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { ExcelUtils } from '../utils/ExcelUtils';
import path from 'path';

const filePath  = path.join(__dirname, "../TestData/excel.xlsx")
const sheetName = "Login"

let products
try{
    products = ExcelUtils.getExcelData(filePath, sheetName)
}
catch(error){
  console.log(error);
}

let loginPage :LoginPage
let dashboardPage : DashboardPage

test.beforeEach(async ({page})=>{
   loginPage = new LoginPage(page)
   dashboardPage = new DashboardPage(page)
})

// Parameterization of test case - title

for(let data of products){
   test(`Validate the product details for ${data.productName}`, async()=>{
      await loginPage.launchURL(data.url)
      await loginPage.loginIntoApplication(data.username, data.password)
      await dashboardPage.searchAndValidateProductDetails(data.productName)
      await expect(dashboardPage.viewProductName).toHaveText(data.productName)
   })
}

/*

const products = 
[
  {
    url: 'https://rahulshettyacademy.com/client',
    username: 'testnHNk@gmail.com',
    password: 'Testing@1234',
    productName: 'ZARA COAT 3',
    cartSuccessMsg: 'Product Added To Cart'
  },
  {
    url: 'https://rahulshettyacademy.com/client',
    username: 'testnHNk@gmail.com',
    password: 'Testing@1234',
    productName: 'ADIDAS ORIGINAL',
    cartSuccessMsg: 'Product Added To Cart'
  },
  {
    url: 'https://rahulshettyacademy.com/client',
    username: 'testnHNk@gmail.com',
    password: 'Testing@1234',
    productName: 'iphone 13 pro',
    cartSuccessMsg: 'Product Added To Cart'
  }
]

//console.log(array[0].productName);

for(let product of products){
   console.log(product.productName);
}

*/




