import { devices, PlaywrightTestConfig } from '@playwright/test';

const baseURL = process.env.BASE_URL || 'https://home.cern';

const CI = Boolean(process.env.CI);

/**
 * See https://playwright.dev/docs/test-configuration
 */
const config: PlaywrightTestConfig = {
  testDir: './tests',
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 10000,
    toMatchSnapshot: {
      /**
       * An acceptable amount of pixels that could be different.
       * See https://playwright.dev/docs/api/class-testconfig#test-config-expect.
       */
      maxDiffPixelRatio: 0.01,
    },
  },
  forbidOnly: CI,
  /* Retry on CI only. */
  retries: CI ? 1 : 0,
  /* Opt out of parallel tests on CI. */
  workers: CI ? undefined : 2,
  /**
   * The maximum number of test failures for the whole test suite run.
   * See https://playwright.dev/docs/api/class-testconfig#test-config-max-failures.
   */
  maxFailures: CI ? 10 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    [CI ? 'github' : 'list'],
    [
      'html',
      {
        open: CI ? 'never' : 'on-failure',
        host: '0.0.0.0',
        port: 9323,
      },
    ],
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    acceptDownloads: true,
    ignoreHTTPSErrors: true,
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL,
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 10 * 1000,
    navigationTimeout: 30 * 1000,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  /* Configure projects for major browsers. */
  projects: [
    {
      /* Extra field in case of a single project. */
      // name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1280, height: 720 },
      },
      testMatch: /.*.spec.ts/,
    },
  ],
  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  outputDir: './test-results',
};

export { baseURL };
export default config;
