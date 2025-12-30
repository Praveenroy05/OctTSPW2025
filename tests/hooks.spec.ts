// Hooks - It is a special type of function which perform certain logic. setup/teradown before and after execution of the test cases.

// test.beforeAll() - It will be execute once before executing any of the test cases.  initiate the report, log. DB connection, get all the test data from excel.

// test.beforeEach() - It will run once before running each and every test case. Pre-condition to execute the test case or common steps of all the test cases which is working as a precondition.
// test() 
// test.afterEach() - It will run once after running each and every test case. NOT NEEDED - after every test execution you also want to logout.

// test.afterAll() - It will be execute once after executing all the test cases. // Generate the report, log file, Close DB connect, close excel file.


import {test} from '@playwright/test'

test.beforeAll(async ()=>{
    console.log("Before All");
})

test("Title1", async ()=>{
    console.log("Test1");
})

test("Title2", async ()=>{
    console.log("Test2");
})

test("Title3", async ()=>{
    console.log("Test3");
})

test.beforeEach(async ()=>{
    console.log("Before Each");
})

test.afterEach(async ()=>{
    console.log("After Each");
})

test.afterAll(async ()=>{
    console.log("After All");
})