import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import LoginContainer from 'apps/containers/LoginContainer';

const Container = styled.div`
  background: linear-gradient(118deg, #ffeaa7, #fdcb6e);
  height: 100vh;
`;

const LoginPage = () => (
  <>
    <Helmet>
      <title>Login Page</title>
      <meta name="description" content="Login Page - Hungree" />
    </Helmet>
    <Container>
      <LoginContainer />
    </Container>
  </>
);

export default LoginPage;
