import { test, expect } from '@playwright/test';

test('has converter elements', async ({ page }) => {
  await page.goto('/');

  const inputs = await page.getByTestId('currency-input').all();
  const meta = await page.getByTestId('meta-container');

  await expect(inputs?.length).toEqual(2);
  await expect(meta.getByText('converts to')).toBeVisible();
});
