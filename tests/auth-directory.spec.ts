import { expect, test } from '@playwright/test';

test('Auth-directory', async ({ page }) => {
  await page.goto('/');

  const selector = page.locator('#cern-toolbar ul');
  await selector.waitFor({ state: 'visible' });

  const screenshot = await selector.screenshot();
  expect(screenshot).toMatchSnapshot();
});
