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
})