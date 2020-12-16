## Simple Inventory Application

> Build using ECMAScript 6 (2015) - 9 (2018)

### Requirement

- Node >=12.16.x
- Yarn
- ReactJS

### Technology Stack

- Styles ([Styled components](https://www.styled-components.com))
- CSS Framework ([antd](https://ant.design))
- React Router ([react-router](https://reactrouter.com))

### Login Administrator Dashboard

> user: admin, pass: admin

### Run Server

default listen port `8080`

- `yarn start` for development
- `yarn build` will generate `dist` folder for production usage

```
for using production usage can use static server :
  > yarn global add serve
  serve -s dist

  OR

  put dist folder under web server (nginx/apache)
```

### Test

- `yarn test:watch` for running test watching
- `yarn test` for running test with coverage
