import React from 'react';
import { element, string } from 'prop-types';
import { FooterMenu, PageHeader } from 'apps/components';
import { KEY_AUTH } from '../../config/contants';

const MainLayout = (props) => {
  const { children, titleHeader } = props;
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
        <PageHeader {...props} titleHeader={titleHeader} />
        {children}
        <FooterMenu />
      </>
    )
  );
};

MainLayout.defaultProps = {
  titleHeader: '...',
};

MainLayout.propTypes = {
  children: element.isRequired,
  titleHeader: string,
};

export default MainLayout;
