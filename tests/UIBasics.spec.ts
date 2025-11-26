import {test, expect} from '@playwright/test'


test("Handling input field and clicking on an element", {tag: '@smoke'},async function({page}){

    // Launch the browser
    // goto url
    // fill the username
    // Expect the username field should have value as "enterred value"
    // fill the password
    // Expect the password field should have value as "enterred value"
    // click on submit button
    // Expect there should be an element which have text as "Logged In Successfully"

    // goto("URL") - It will help us in launching the URL on the browser.
    // Note: The url should have http/https

    // fill("value") - set the value to the input field
    // locator("selector") - to identify the element on the webpage by using css selector or xpath
    // click() - Click on an element

    // toHaveValue("value") - This is an assertion method which helps us in validating if an "input" field have value as "value"

    // toHaveText("text") - This is an assertion method which helps us in validating if an element have a text as "text"

    // toContainText("contain text") - This is an assertion method which helps us in validating if an element contains a text as "contain text"


    await page.goto('https://practicetestautomation.com/practice-test-login/')

    await page.locator("#username").fill("student")
    await expect(page.locator("#username")).toHaveValue("student")

    await page.getByLabel('Password').fill("Password123")
    await expect(page.getByLabel("Password")).toHaveValue("Password123")

    await page.getByRole('button', {name: 'Submit'}).click()

    await expect(page.locator("h1.post-title")).toHaveText("Logged In Successfully", {timeout : 300000})
    await expect(page.locator("h1.post-title")).toContainText("Successfully")

})
