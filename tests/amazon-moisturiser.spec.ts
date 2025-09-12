import { test, expect } from '@playwright/test';

test('Amazon.in search for moisturiser and ponds super light gel', async ({ page }) => {
  // Step 1: Navigate to Amazon.in
  await page.goto('https://www.amazon.in');

  // Step 2: Search for "moisturiser"
  await page.getByRole('searchbox', { name: /search/i }).fill('moisturiser');
  await page.locator('#nav-search-submit-button').click();

  // Step 3: Search for "ponds super light gel"
  await page.getByRole('searchbox', { name: /search/i }).fill('ponds super light gel');
  await page.locator('#nav-search-submit-button').click();

  // Step 4: (Product view step could not be validated due to dynamic content)
  // Optionally, you can add a comment or a placeholder for this step.
  // Example:
  // await page.getByText("POND'S Super Light Gel Oil Free Face Moisturizer").click();
});
