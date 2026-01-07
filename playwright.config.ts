import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
 import dotenv from 'dotenv';
 import path from 'path';

 // dotenv - is to load the data from the .env file
 // process.env - will read the data from .env file


 const ENV_NAME = process.env.ENV || 'qa'
 
 dotenv.config(
  { path: path.resolve(__dirname, 'TestData',`${ENV_NAME}.env`) }
);
// console.log(process.env);
// console.log(process.env.BASE_URL)
// console.log(process.env.EMAIL)
// console.log(process.env.PASSWORD)


/**
 * See https://playwright.dev/docs/test-configuration.
 * 
 */

/*

1. fullyParallel = true and workers = 1  // sequencial
2. fullyParallel = false and workers = 1  // sequencial
3. fullyParallel = false and workers > 1  // Test file will run in a parallel mode
4. fullyParallel = true and workers > 1 // Test case inside the files will run in parallel mode

// fileName.spec.ts - 1 - 99%
// fileName.test.ts - 2 - 1%
*/

export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html'],['line'], ['allure-playwright']],
  timeout : 10000,
  expect:{
    timeout: 15000
  },
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
    screenshot :'on',
    video :'on',
    headless : true
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});


// export - import


 