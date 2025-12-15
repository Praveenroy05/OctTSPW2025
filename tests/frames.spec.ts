import {test, expect} from '@playwright/test';

test("Handling Frames", async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Frames.html")

    // frameLocator("selector") - returns FrameLocator object which helps us to enter into the frame and perform the actions on the elements inside the frame.
    const framePage = page.frameLocator("#singleframe")
   // page.locator('iframe[name="SingleFrame"]').contentFrame()


    await framePage.locator("[type='text']").first().fill("Single frame")
    await expect(framePage.locator("[type='text']").first()).toHaveValue("Single frame")


    // Nested frames handling

    await page.getByText("Iframe with in an Iframe").click()

    const outerFrame = page.frameLocator("#Multiple iframe")
    const innerFrame = outerFrame.frameLocator(".iframe-container iframe")
    await innerFrame.locator("[type='text']").first().fill("Nested Frames")

    await page.getByText("Home").click()
    await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()
})