## Info + steps to run

I started by creating the appropriate environment for the project. I spent some time updating my already somewhat outdated template that I found, adding the necessary libraries and updating the basic ones.

To better understand what I needed to do, I checked how Google’s currency converter looks, behaves, and works, took a look at the styling, and noted down the basic parameters.

As you can see, I separated several things in the project:

- shadcn components

- my base components or layouts

- features, which contain the actual implementations with business logic

- views, which are more like wrappers and components grouping one or more features, used in pages

- I added a separate layer with services, with the goal of making them easier to replace and manage

- there is also a separate area for things related to test configuration, especially utilities for MSW

Before moving on to using the API, I created mocked data and ran the project with mocks, so I could focus smoothly on the visual part / initial verification and logic.

Once I was reasonably satisfied with how everything was functioning with the mocks, I replaced them with the real API. I additionally had to look for a solution to a problem with Vite, because the requests were going through Vite’s proxy, which was causing CORS issues. To get rid of them, I added the appropriate proxy configuration and also changed the endpoints in the service layer.

At the end, I added some simple tests. I didn’t want to spend any more time on them; my goal was to create different types of tests and run them locally. I could have gone with TDD, but I chose a different approach. Moreover I've not followed separate branches for it but I did it on purpose for the sake of simplicity.

> I believe the most time (except configuring everything) I spent on handling bi-directional conversion along with displaying values properly + this API proxy issue.

I hope the project will start without any problems :)

Basic info::

# tech stack

- msw
- playwright
- react query
- vitest
- vite
- react router
- husky
- tailwindcss
- shadcn

# Future improvements

General:

- more tests
- better tests
- add virtualization to avoid problems with running locally
- use Decimal library
- add storybook
- provide base CI/CD
- auto release notes
- improve shared styling
  Converter:
- improve styling to match google one more adequately
- provide much better mocks
- add some skeletons/small loaders to improve UX
- introduce better handling of money value in Meta component (sometimes ratio is very small and it doesn't dynamically adjust length)
- Zustand could be an overkill however for more robust converter (with shared values/data) I would use selectors to decrease coupling and re-renders but with clear separation between server data/state, shared/global state and local state

## How to run:

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
