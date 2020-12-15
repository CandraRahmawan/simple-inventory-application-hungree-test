import React from 'react';
import { any } from 'prop-types';
import { FooterMenu } from 'apps/components';

const MainLayout = (props) => (
  <>
    {props.children}
    <FooterMenu />
  </>
);

MainLayout.propTypes = {
  children: any.isRequired,
};

export default MainLayout;
