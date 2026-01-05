// Controlling your test execution:

/*

test.skip() marks the test as irrelevant. Playwright does not run such a test.

test.fail() marks the test as failing. Playwright will run this test and ensure it does indeed fail. If the test does not fail, Playwright will complain.
test.fixme() marks the test as failing. Playwright will not run this test, as opposed to the fail annotation.

test.slow() marks the test as slow and triples the test timeout.

test.only() marks the test as the only one to run. Playwright will skip all other tests in the file.

test.describe() can be used to group tests. Annotations applied to the describe block will apply to all tests within the block.  - Helpful for Report generation


*/



import { test, expect } from '@playwright/test';

test.describe.configure({timeout: 30000, mode: 'serial'});

test.describe("My First Test Suite", () => {
    test("@smoke Test1", async () => {
    console.log("Test1");
    })


    test("Test2", async () => {
    console.log("Test2");
    })
})


test("Test3", {tag: '@regression'},async () => {
   console.log("Test3");
})

test("Test4", async ({page}) => {
   // test.slow()
    await page.goto('https://practicetestautomation.com/practice-test-login/')

    await page.locator("#username").fill("student", {timeout: 60000})
})