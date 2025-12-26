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

    await page.keyboard.press('Tab')
    await page.keyboard.type('abcd@gmail.con')
    await page.keyboard.press('Backspace')
    await page.keyboard.type('m')
    await expect(page.locator("#password")).toHaveValue('abcd@gmail.com')

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.getByPlaceholder('Enter Name').fill("Testing")
    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Control+V')
    await expect(page.getByPlaceholder("Enter EMail")).toHaveValue('Testing')
    await page.keyboard.press('Control+A')
    await page.keyboard.press('Delete')
    await expect(page.getByPlaceholder("Enter EMail")).not.toHaveValue('Testing')

    // Type user case letter
    await page.keyboard.press('Tab')

    await page.keyboard.down('Shift')
    await page.keyboard.press('KeyA')
    await page.keyboard.press('KeyB')
    await page.keyboard.up('Shift')

    // Control  = Meta in Mac OS
    



    await page.waitForTimeout(3000)






})