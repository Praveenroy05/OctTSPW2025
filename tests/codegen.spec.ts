// Codegen - Built in tool in playwright - Which help us in generating the test script by recording the actions performed on the browser

// How to open the codegen tool:
// npx playwright codegen <website url>
// Ex: npx playwright codegen "https://demo.automationtesting.in/Windows.html"

import { test, expect } from '@playwright/test';

test('Multiple windows using codegen', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Windows.html');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'click' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('link', { name: 'Downloads' }).click();
  await expect(page1.locator('#bindings')).toContainText('WebDriver Language Bindings');
  await page.getByRole('link', { name: 'Home' }).click();
  await expect(page.getByRole('textbox', { name: 'Email id for Sign Up' })).toBeVisible();
});


test('Frames handling using codegen', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Frames.html');

  
  const frameLocator = page.locator('iframe[name="SingleFrame"]').contentFrame()

  await frameLocator.getByRole('textbox').click();
  await page.locator('iframe[name="SingleFrame"]').contentFrame().getByRole('textbox').fill('Testing');
  await expect(page.locator('iframe[name="SingleFrame"]').contentFrame().getByRole('textbox')).toHaveValue('Testing');

  await page.getByRole('link', { name: 'Iframe with in an Iframe' }).click();

  await page.locator('#Multiple').getByText('<p>Your browser does not').contentFrame().getByText('<p>Your browser does not').contentFrame().getByRole('textbox').click();
  await page.locator('#Multiple').getByText('<p>Your browser does not').contentFrame().getByText('<p>Your browser does not').contentFrame().getByRole('textbox').fill('Nested Iframe');
  await expect(page.locator('#Multiple').getByText('<p>Your browser does not').contentFrame().getByText('<p>Your browser does not').contentFrame().getByRole('textbox')).toHaveValue('Nested Iframe');
});


// frames - frameLocator
// File upload - setInputFiles()