import React from 'react';
import Helmet from 'react-helmet';
import LoginContainer from 'apps/containers/LoginContainer';
import { KEY_AUTH } from 'config/contants';

const LoginPage = () => {
  const getAuth = localStorage.getItem(KEY_AUTH);
  if (getAuth) {
    const auth = JSON.parse(getAuth);
    if (auth.isLoggedIn) {
      window.location.replace('/');
    }
  }
  return (
    !getAuth && (
      <>
        <Helmet>
          <title>Login Page</title>
          <meta name="description" content="Login Page - Hungree" />
        </Helmet>
        <div className="background-primary" style={{ height: `${window.innerHeight}px` }}>
          <LoginContainer />
        </div>
      </>
    )
  );
};

export default LoginPage;
