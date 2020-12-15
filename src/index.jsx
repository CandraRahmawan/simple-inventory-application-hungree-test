import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import GlobalStyle from 'styles/GlobalStyle';
import { Spinner } from 'apps/components';
import firebaseConfig from 'config/firebase.json';
import App from './apps';

import 'antd/dist/antd.css';

firebase.initializeApp(firebaseConfig);

const Entry = () => (
  <Suspense fallback={<Spinner />}>
    <GlobalStyle />
    <App />
  </Suspense>
);

ReactDOM.render(<Entry />, document.getElementById('app'));
