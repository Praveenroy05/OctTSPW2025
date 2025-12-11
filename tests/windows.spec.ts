// Multiple tabs or windows - "popup" event - page.waitForEvent('popup')

// Step by step process to handle multiple tabs/windows in Playwright

// 1. Launch the url
// 2. Identify and click on the element which is responsible for generation of a "popup" event
// 3. Use "page.waitForEvent('popup')" to capture the new tab/window or wait for popup event to appear on the page. This waitForEvent('popup') will return a new page object which we can use to perform further actions on the new tab/window.
// const newPage = await page.waitForEvent('popup')

// 4. Performing any action on the new tab/window, we must use the newPage object.
// 5. Come back to the main/original page and perform the action by using "page" fixture
// 6. To make the active tab/window to the new tab/window or back to the original page, we can use "bringToFront()" method.


import {test, expect} from '@playwright/test'

test("Multiple tabs or windows handling", async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Windows.html")


    const page1 = page.waitForEvent('popup') 

   // Click on the button which is responsible for generation of "popup" event
    await page.locator("#Tabbed button").click() 

   // Waiting for the popup event to appear on the page
    //const newPage = await page.waitForEvent('popup') 

    const newPage = await page1
    console.log(newPage);

    // Performing any action on the new tab/window
    await newPage.getByText("Downloads").click()
    await expect.soft(newPage.locator("#bindings")).toContainText("WebDriver Language Bindings")

    await page.bringToFront()


    // Coming back to the main/original page and performing the action
    await page.getByText("Home").click()
    await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()

})