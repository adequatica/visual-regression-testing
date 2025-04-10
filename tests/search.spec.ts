import { expect, test } from '@playwright/test';

test('Search', async ({ page }) => {
  await page.goto('/');

  const selector = page.locator('[class*=cern-menu-search]');
  await selector.waitFor({ state: 'visible' });

  const screenshot = await selector.screenshot();
  expect(screenshot).toMatchSnapshot();
});
