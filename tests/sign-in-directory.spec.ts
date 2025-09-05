import { expect, test } from '@playwright/test';

test('Sign-in-directory', async ({ page }) => {
  await page.goto('/');

  const selector = page.getByText('Sign in Directory');
  await selector.waitFor({ state: 'visible' });

  const screenshot = await selector.screenshot();
  expect(screenshot).toMatchSnapshot();
});
