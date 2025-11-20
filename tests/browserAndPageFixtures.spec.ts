// Fixtures - setup and tear down process auto

// page, browser - 

// Page - 

import {test, expect} from '@playwright/test'



test("Browser Fixture", async function({browser}){

    // browser - It will not auto launch the broswer
    // We need to create browser context/instance
    // We also need to create a page as well
    const context = await browser.newContext() // create a browser instance
    const page  = await context.newPage() // create a page on the context
    await page.goto("https://google.com")

    const newPage = await context.newPage()
    await newPage.goto("https://facebook.com")

    const page2 = await context.newPage()
    await page2.goto("https://linkedin.com")

    await page.waitForTimeout(2000)





    // 1. Same work flow testing
    // dahboard - add the product to the cart
    // view the details of the product

    // 2. Multiple page on the same browser context

})

test("Page Fixture", async ({page})=>{

    

})
