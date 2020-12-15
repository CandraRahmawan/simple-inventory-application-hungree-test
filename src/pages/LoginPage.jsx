import React from 'react';
import Helmet from 'react-helmet';
import LoginContainer from 'apps/containers/LoginContainer';

const LoginPage = () => (
  <>
    <Helmet>
      <title>Login Page</title>
      <meta name="description" content="Login Page - Hungree" />
    </Helmet>
    <div className="background-primary" style={{ height: '100vh' }}>
      <LoginContainer />
    </div>
  </>
);

export default LoginPage;
