// Mouse Operations

// click - click()
// right click - click({button:'right'})
// double click - dblclick()
// scroll down - scrollIntoViewIfNeeded()
// Mouse Over - hover()
// Drag and drop - SourceLocator.dragTo(TargetLocator)

import {test, expect} from '@playwright/test'

test("Double click and right click operations", async ({page})=>{
    await page.goto("https://demo.guru99.com/test/simple_context_menu.html")

    // Double Click  - dblclick() - Double click on an element
    await page.getByText("Double-Click Me To See Alert", {exact: true}).dblclick()
    await page.waitForTimeout(2000)

    // Right Click - click({button: 'right'}) - Right click on an element
    await page.getByText("right click me").click({button: 'right'})
    await page.waitForTimeout(2000)

    // toBeVisible() - It validate if the element is visible on the page or not
    await expect(page.getByText("Delete", {exact: true})).toBeVisible()

    // Note : Playwright auto handles the alert/popup. Whenever there will be an alert/popup appears on the page that means there is an event gets called which is known as "dialog".
    // "popup" event refers to new tab/page or new window
})

test("Scrolling on the page", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.getByText("Download Files").scrollIntoViewIfNeeded()
    await page.getByText("Download Files").click()
    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/p/download-files_25.html")
    const url = await page.url()
    console.log(url);
})


test("Mouse Over on an element", async ({page})=>{
    await page.goto("https://www.spicejet.com/")
    // hover() - Hover over on an element
    await page.getByText("Travel Policies", {exact: true}).hover()
    await expect(page.getByTestId("test-id-Passenger Rights")).toBeVisible()
})

test("Drag and drop handling", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    
    const sourceElement  = page.locator("div#draggable")
    const targetElement = page.locator("div#droppable")

    // sourceLocator.dragTo(targetLocator)

  //  await sourceElement.dragTo(targetElement)

    await sourceElement.hover()
    await page.mouse.down()
    await targetElement.hover()
    await page.mouse.up()

    await expect(page.locator("div#droppable p")).toHaveText("Dropped!")

})