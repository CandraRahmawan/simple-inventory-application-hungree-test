import React from 'react';
import { element } from 'prop-types';
import { FooterMenu, PageHeader } from 'apps/components';

const MainLayout = (props) => {
  const { children } = props;
  return (
    <>
      <PageHeader {...props} />
      {children}
      <FooterMenu />
    </>
  );
};

MainLayout.propTypes = {
  children: element.isRequired,
};

export default MainLayout;
