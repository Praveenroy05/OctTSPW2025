// Drop down  - 

// 2 Types of DD

// 1. Static drop down - The value will never change - Gender/country
    // a. Single select drop down
    // b. Multi select drop down

// 2. Dynamic drop down - The value will be changable - electronics
    // a. Single select drop down
    // b. Multi select drop down


// Developement of a drop down 
// 1. <select> tag
// 2. NON <select>, div, li, ul,.....


// 1. DD developed using <select> tag
// Step by step procedure to select the value from the DD

// 1. launch the url
// 2. Locate the drop down element by writing the locator
// 3. Get the value from the drop down by using - selectOption("AS", or {label or value or index}) 
// Example - page.locator("#dd").selectOption("AS"or {label:'Afganistan} or {index:10})
// 4. If the drop down is multi select  - selectOption(["AS", "BS", "AF"])// 
// selectOption(["AS", {label:"India"}, {index: 24}])

//******************************************************** */

// 1. DD developed using NON <select> tag
// Step by step procedure to select the value from the DD

// 1. launch the url
// 2. Locate the drop down element by writing the locator
// 3. Click on  the drop down element identified in the step #2
// 4. Identify and click on the element that you want to select from the drop down

import {test, expect} from '@playwright/test'


test("Drop down developed using SELECT tag handling", async ({page})=>{
    await page.goto("https://practice.expandtesting.com/dropdown")
    const countryDD = page.locator("#country")
    await countryDD.selectOption("DZ")
    await countryDD.selectOption({value: 'AR'})
    await countryDD.selectOption({label : 'Belarus'})
    await countryDD.selectOption({index: 12})

    await page.goto("https://demoqa.com/select-menu")
    await page.locator("#cars").selectOption(["volvo", 'opel'])
    await page.waitForTimeout(2000)
    await page.locator("#cars").selectOption([{label:'Saab'}, {index: 3}])
    await page.waitForTimeout(2000)

})


test("Drop down developed using non SELECT tag handling", async ({page})=>{
    await page.goto("https://demoqa.com/select-menu")
    await page.locator("#withOptGroup").click()
    await page.locator("#react-select-2-option-2").click()
    await page.locator("div.css-1hwfws3").last().click()
    await page.locator("#react-select-4-option-0").click()
    await page.locator("#react-select-4-option-2").click()
    await page.waitForTimeout(2000)

})