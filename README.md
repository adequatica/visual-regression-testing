# Visual Regression Testing with Playwright and Docker

[![Run Playwright Screenshot Tests](https://github.com/adequatica/visual-regression-testing/actions/workflows/run-playwright-screenshot-tests.yaml/badge.svg?branch=main)](https://github.com/adequatica/visual-regression-testing/actions/workflows/run-playwright-screenshot-tests.yaml)

This repository illustrates the article [Operating System Independent Screenshot Testing with Playwright and Docker](https://adequatica.medium.com/operating-system-independent-screenshot-testing-with-playwright-and-docker-6e2251a9eb32). Actually, Docker is not mandatory for visual regression testing, but the reasons why (and how) it is used here are explained in the article.

## Stack

A basic set of packages for visual regression (screenshot) testing with Playwright, Docker, and TypeScript:

- [Docker](https://www.docker.com) — containerization;
- [Playwright](https://playwright.dev) — testing framework;
- [Prettier](https://prettier.io) — code formatter;
- [ESLint](https://eslint.org) — code linter.

Example website for testing as a default `baseURL`: [CERN](https://home.cern).

## How to Use

1. Clone repository
2. Install dependencies: `npm install`
3. Install dependencies for testing framework: `npm run test:install-deps`
4. **Run Docker**
5. Build Docker image: `make init-playwright-screenshot-tests`
6. Grant permissions to run the bash script: `chmod +x ./playwright-screenshot.sh` (only for the first run)
7. Run tests: `npm run test:screenshots`

### CLI Options

- Update all screenshots:

```
npm run test:screenshots -- --update-snapshots
```

- Run a single test-file:

```
npm run test:screenshots -- --grep logo.spec.ts
```

- Run tests without Docker:

```
npm run test:local
```

---

Do not mix end-to-end tests and screenshot tests. This is why Playwright’s config has a specific name (`playwright.screenshot.config.ts`). Take a look at [UI Testing with TypeScript and Playwright](https://github.com/adequatica/ui-testing) repository for end-to-end tests examples.
