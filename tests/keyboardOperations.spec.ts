// Enter button
// Typing
// TAB
// Delete/backspace/escape
// Copy paste
// Spacebar
// Arrow Keys - up/down/left/right
// Page up/down
// Shift keyword - 
// digit 0-9
// keyA-Z

import { test, expect } from '@playwright/test';

// press()
// type()
// down()
// up()

test('Keyboard Operations', async ({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator("#username").fill("Test Usr")
    await page.keyboard.press('ArrowLeft')
    await page.keyboard.type('e')
    await page.keyboard.press('ArrowRight')
    await page.keyboard.type('s')
    await expect(page.locator("#username")).toHaveValue("Test Users")

})