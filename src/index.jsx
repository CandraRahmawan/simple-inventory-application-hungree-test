import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './apps';
import GlobalStyle from 'styles/GlobalStyle';
import { Spinner } from 'apps/components';

import 'antd/dist/antd.css';

const Entry = () => (
  <Suspense fallback={<Spinner />}>
    <GlobalStyle />
    <App />
  </Suspense>
);

ReactDOM.render(<Entry />, document.getElementById('app'));
