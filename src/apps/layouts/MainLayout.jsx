import React from 'react';
import { element } from 'prop-types';
import { FooterMenu, PageHeader } from 'apps/components';
import { KEY_AUTH } from '../../config/contants';

const MainLayout = (props) => {
  const { children } = props;
  const getAuth = localStorage.getItem(KEY_AUTH);

  if (!getAuth) {
    window.location.replace('/login');
  }

  if (getAuth) {
    const auth = JSON.parse(getAuth);
    if (!auth.isLoggedIn) {
      window.location.replace('/login');
    }
  }

  return (
    getAuth && (
      <>
        <PageHeader {...props} />
        {children}
        <FooterMenu />
      </>
    )
  );
};

MainLayout.propTypes = {
  children: element.isRequired,
};

export default MainLayout;
