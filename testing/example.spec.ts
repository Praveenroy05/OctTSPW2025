import {test, expect} from '@playwright/test'


test("Login validation",  async function({page}){

  await page.goto("https://practicetestautomation.com/practice-test-login/")
  let username = page.getByRole("textbox", {name: 'Username'})
  await username.fill("student")
  await page.getByRole("textbox", {name: 'Password'}).fill("Password123")
  await page.getByRole("button", {name: 'Submit'}).click()
  await expect(page.locator("h1.post-title")).toBeVisible()

  // page.getByRole('heading', {name :'Sign up'}).first()
  // page.getByRole('button', {name: 'Submit'}).last()
  // page.getByRole('checkbox', {name:'Subscribe'}).nth(0)
  // page.getByRole('img', {name: 'Playwright Logo'})
  // page.getByRole()

  // Locator.dragTo(Locator)


  
  

  // promise - pending, rejected, suucessful

})

// broswer and page fixture


// async - await

// JS & TS are asynchronous 
