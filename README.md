## Simple Inventory Application
![](https://img.shields.io/badge/coverage-54%25-yellow)
> Build using ECMAScript 6 (2015) - 9 (2018)

### Requirement

- Node >=12.16.x
- Yarn
- ReactJS

### Technology Stack

- Test ([Jest](https://jestjs.io/) + [Enzyme](https://enzymejs.github.io))
- ReactJS Framework ([NextJS](https://nextjs.org))
- Styles ([Styled components](https://www.styled-components.com))
- Auth ([NextAuth](https://next-auth.js.org))
- Translation ([next-i18next](https://github.com/isaachinman/next-i18next))
- State Management ([redux toolkit](https://redux-toolkit.js.org))
- CSS Framework ([antd](https://ant.design))

### Structure Directories

```
|- public
|  └── static
|      |-- font (font + css)
|      |-- images (all images public)
|      └── locale (translation)
|- server (custom server + environtment options)
|- src
|  |-- assets (all assets necessary)
|  |-- components
|  |   |── core (core component standalone)
|  |   |-- shared (core component shared)
|  |   └── ui (ui component shared)
|  |-- config (all config necessary, api config inside as well)
|  |-- containers (containers of page)
|  |-- helpers (all helper necessary)
|  |-- hooks (all hooks state)
|  |-- middleware (all middleware necessary, used by server only)
|  |-- pages (all pages web)
|  |-- redux (state management)
|  └── styles (global style, themes)
└─ test (test setup, config, mocks & test for pages "src/pages")
```

### Run Server
default listen port `8080`
- `yarn start` for development
- `yarn build` then `run index.html on dist directory` for production usage

### Test

- `yarn test:watch` for running test watching
- `yarn test` for running test with coverage
