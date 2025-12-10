// Alert/pop-up - "dialog" event - page.on()
// Multiple tabs/window - "popup" event - const newPage = page.waitForEvent('popup')
// File Download - "download" event

// Different types of alerts are available:
// 1. Simple alert - Will have a single button
// 2. Confirm Alert - Will have 2 buttons - Ok/Cancel
// 3. Prompt Alert - Along with 2 buttons you will have textbox as well


// dialog - Dialog - class inside Playwright
// accept() - Click on the Ok/Submit/Yes - Accepting the alert
// dismiss() - Click on the Cancel/No - Dismissing the alert
// message() - Get the text value that is displaying on the alert


import {test, expect} from '@playwright/test'


test("Alert handling", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on("dialog", (dialog) =>{
        console.log(dialog.message())
        dialog.accept("Test")
    })
    await page.locator("button#alertBtn").click()
    await page.locator("button#confirmBtn").click()

    await expect(page.locator("#demo")).toHaveText("You pressed OK!")

})
