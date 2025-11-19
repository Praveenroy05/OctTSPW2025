import {test, expect} from '@playwright/test'


test("Login validation",  async function({page}){

  await page.goto("https://practicetestautomation.com/practice-test-login/")
  let username = page.locator("#username")
  await username.fill("student")
  await page.locator("#password").fill("Password123")
  await page.locator("#submit").click()
  await expect(page.locator("h1.post-title")).toBeVisible()

  
  

  // promise - pending, rejected, suucessful

})

// broswer and page fixture


// async - await

// JS & TS are asynchronous 
