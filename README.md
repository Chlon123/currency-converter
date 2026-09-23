# General info

Created based on minimal template with React Router.

# Steps

1. Create local .env file in the project root directory with following variables:

```
APP_ENV=development
VITE_ENABLE_MOCKING=false // unless you want to check project on mocked server then switch to true
VITE_API_KEY_CURRENCIES={api_key} Your `API_KEY` can be found on the main dashboard once you log in under `API Token Information`
```

2. Make sure you have pnpm and at least node.js version (24.16.0) on you machine.
3. Run:

```shell
pnpm i
pnpm dev
```

# Testing

Unit and component tests:

```shell
pnpm test
```

E2E tests:*

```shell
pnpm test:playwright
```

*IMPORTANT NOTE:
There is a possibility you may need to install playwright chromium and browsers on your machine in order to run e2e tests.
If that's the case run:

```shell
pnpm exec playwright install chromium
OR
pnpm exec playwright install
```
