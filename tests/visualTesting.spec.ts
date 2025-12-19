// Visual Testing

import {test, expect} from '@playwright/test'

test('Visual Testing', async ({page})=>{
    await page.goto("https://www.flightaware.com/")
    // toMatchSnapshot("options")
    await page.waitForTimeout(5000)
    await expect(await page.screenshot()).toMatchSnapshot('flight.png')

})