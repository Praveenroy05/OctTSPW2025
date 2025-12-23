// Visual Testing

import {test, expect} from '@playwright/test'
import { Employee } from '../Typescript/Employee'

test('Visual Testing', async ({page})=>{
    await page.goto("https://www.flightaware.com/")
    // toMatchSnapshot("options")
    await page.waitForTimeout(5000)
    await expect(await page.screenshot()).toMatchSnapshot('flight.png')

})


// Objects - A collection of key:value pair - {key:value}
// Class - Create an object for a class to access the properties and methods


const obj1 = new Employee(1,"esfdsf", 34, 3245435, 345)