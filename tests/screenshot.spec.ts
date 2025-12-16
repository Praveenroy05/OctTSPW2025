// Playwright by default supports screenshot capture functionality.
// We can capture screenshot of the entire page, specific element or viewport.


// 1. Capture the screenshot for displayed page
// 2. Capture the screenshot for specific element
// 3. Capture the screenshot for entire page

import {test, expect} from '@playwright/test';

test("Screenshot handling", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    // Capture screenshot of displayed page
    await page.screenshot({path:'screenshots/page.png'})

    // Capture screenshot of specific element
    await page.getByPlaceholder("Enter Name").screenshot({path:'screenshots/element.png'})

    // Capture screenshot of entire page
    await page.screenshot({path:'screenshots/fullPage.png', fullPage:true})

})
