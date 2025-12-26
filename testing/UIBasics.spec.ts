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

    // toHaveText("text") - This is an assertion method which helps us in validating if an element have exact the same text as "text"

    // toContainText("contain text") - This is an assertion method which helps us in validating if an element contains a text as "contain text"


    await page.goto('https://practicetestautomation.com/practice-test-login/')

    await page.locator("#username").fill("student")
    await expect(page.locator("#username")).toHaveValue("student")

    await page.getByLabel('Password').fill("Password123")
    await expect(page.getByLabel("Password")).toHaveValue("Password123")

    await page.getByRole('button', {name: 'Submit'}).click()

    await expect(page.locator("h1.post-title")).toHaveText("Logged In Successfully", {timeout : 300000})
    await expect(page.locator("h1.post-title")).toContainText("Successfully")

    // allTextContents()
    // allInnerTexts()

})


test("Handling radio button and checkbox", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const radioBtn = page.getByRole('radio', {name : 'Female'})

    // click() - Click on an element
    // check() - It will first validate if the radio button or checkbox is already checked. If it is not already checked then it will click on the element.

    // toBeChecked() - It help us in validating if the radio button or checkbox is selected/checked or not
    await expect(radioBtn).not.toBeChecked()

    await radioBtn.check({timeout: 60000})
    await expect(radioBtn).toBeChecked()

    const checkbox = page.getByRole('checkbox', {name: 'Thursday'})

    await checkbox.check()
    await checkbox.uncheck()

    await expect(checkbox).not.toBeChecked()
})


test("Getting text from any element and from multiple elements", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    // textContent() - Get the text value from an element even if the element is disabled
    // innerText() - Get the text value ONLY from Visible element on the webpage

    const singleText = await page.locator("h3.post-title").innerText()
    console.log(singleText);

    //allInnerTexts() / allTextContents()

    const elements = page.locator("h2.title")
    const multipleTexts = await elements.allInnerTexts()
    console.log(multipleTexts);
})