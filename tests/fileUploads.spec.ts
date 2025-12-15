// Step by step process to handle file uploads in Playwright

// 1. Launch the url
// 2. Identify the file input element on the page
// 3. Use the "setInputFiles(path of the file)" method to upload files to the file input element
// 4. Verify that the files have been uploaded successfully

import {test, expect} from '@playwright/test';
import path from 'path';

test("File uploads handling", async ({page})=>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

    // Uploading single file
    // __dirname : It will give the current directory path of the file where it is being executed
   // path.join : It will join multiple segments into a single path

   

    const filePath1 = await path.join(__dirname, '../TestData/AILLM.jpg')
    const filePath2 = await path.join(__dirname, '../TestData/AILLM1.jpg') 

    await page.locator("#filesToUpload").setInputFiles([filePath1, filePath2])

    await expect(page.locator("#fileList li").first()).toContainText("AILLM")
    await expect(page.locator("#fileList li").last()).toContainText("AILLM1")

    await page.waitForTimeout(5000)

})