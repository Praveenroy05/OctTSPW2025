// Download - "donwload" event - page.waitForEvent('download')

// Step by step process to handle file download in Playwright

// 1. Launch the url
// 2. We have to wait for "download" event to appear on the page without using await - const download = page.waitForEvent('download')
// 3. Identify and click on the element that is responsible for generation of download event
// 4. Wait for completion of the download of a file - const fd = await download; - fd refers to Download class from the playwright
// 5. By using the "path" module we can generate the path to sotre the downloaded file inside the download folder - const filepath = path.join(__dirname, '../download')
// 6. Download - fd.suggestedFilename()- return the filename for the downloaded file
// 7. Save the file using fd.saveAs(filepath)
// 8. Verify the file name is available inside the download folder or not using "fs" module - fs.existsSync(filePath)

import {test, expect} from '@playwright/test';
import path from 'path';
import fs from 'fs';

test("File download handling", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html")
    await page.locator("button#generatePdf").click()
    // Step 2: We have to wait for "download" event to appear on the page without using await
    const downloadResult = page.waitForEvent('download')
    // Step 3: Identify and click on the element that is responsible for generation of download event
    await page.locator("a#pdfDownloadLink").click()
    // Step 4: Wait for completion of the download
    const download = await downloadResult
    // Step 5: By using the "path" module we can generate the path to sotre the downloaded file inside the download folder

    // const filePath = path.join(__dirname, '../download', download.suggestedFilename())
    const downloadDir = path.join(__dirname, '../download')

    // Step 6: Download - fd.suggestedFilename()- return the filename for the downloaded file
    const fileName = download.suggestedFilename()
    const filePath = path.join(downloadDir, fileName)
    // Step 7: Save the file using download.saveAs(filepath)
    await download.saveAs(filePath)
    //await download.delete()

    // Step 8: Verify the file name is available inside the download folder or not using "fs" module

    await expect(filePath).toContain(fileName)
    await expect(fs.existsSync(filePath)).toBeTruthy()

    // Clean up - delete the downloaded file after verification
    await fs.promises.unlink(filePath)
    await expect(fs.existsSync(filePath)).toBeFalsy()
})