import {test, expect} from '@playwright/test';

// Note : Playwright has built-in support for Shadow DOM. You can directly access elements inside shadow roots without any special handling.
// To access the shadow element we have to use either Playwright built-in locator or css selector. Xpath will not be able to identify the shadow dom element.

test("Shadow DOM handling", async ({page})=>{

    await page.goto("https://books-pwakit.appspot.com/explore")
    await page.locator("#input").fill("Testing")
    await page.locator("div.icon").click()
    await expect(page.locator("h2.title").first()).toHaveText("Expert MySQL")
})
