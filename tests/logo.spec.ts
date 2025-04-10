import { expect, test } from '@playwright/test';

test('Logo', async ({ page }) => {
  await page.goto('/');

  const selector = page.locator('[class*=site-info__logo]');
  await selector.waitFor({ state: 'visible' });

  const screenshot = await selector.screenshot();
  expect(screenshot).toMatchSnapshot();
});
