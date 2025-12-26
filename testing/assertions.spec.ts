// Assertions in Playwright:

// 2 types of assertions are available in Playwright:

// 1. Auto retrying assertion
// 2. Non retrying assertion

// Hard assertion and Soft assertion

// Hard assertion: If the assertion fails, the test case will be marked as failed and further execution of the test case will be stopped.

// await expect(newPage.locator("#bindings")).toContainText("WebDriver Language Bindings")

// Soft assertion: If the assertion fails, the test case will be marked as failed but further execution of the test case will continue.

// await expect.soft(newPage.locator("#bindings")).toContainText("WebDriver Language Bindings")

/*
await expect(locator).toBeChecked()
await expect(locator).toBeHidden()
await expect(locator).toBeVisible()
await expect(locator).toContainText()
await expect(locator).toHaveText()
await expect(locator).toHaveValue()
await expect(locator).toHaveValues()
await expect(page).toHaveTitle()
await expect(page).toHaveURL()
await expect(response).toBeOK()
*/