// Step by step process to work with excel

// 1. install 'xlsx' library - (npm install --save-dev xlsx)
// 2. Create and store the excel file inside the TestData
// 3. Create a reusable function which helps us in terms of reading the excel file
// 4. Convert the excel data into JSON format and return the data from the function
// 5. Call the function inside the test file to use the data as a part of DD. 



// QA, staging , Prod - 

// Steps to work with env file

// 1. Install 'dotenv' library - npm install --save-dev dotenv
// dotenv package is used to load environment variables from a .env file into process.env(Global Object in nodejs)
// 2. Create .env file (data.env.qa/prod/stg) file in your project inside TestData folder
// 3. Inside the playwright.config.ts file and we can call dotenv.config({path: "path of the .env"}), loads the environment variable from the .env into process.env

// 4. We can create an ENV object as a util and store all the data from the .env file - Optional step
// 5. Import the ENV object in a test file where you want to use the env variables
// 6. We can access the environmenr variable using the ENV object like ENV.url, ENV.username, ....