import React from 'react';
import { element } from 'prop-types';
import styled from 'styled-components';
import { FooterMenu, PageHeader } from 'apps/components';

const Content = styled.div`
  height: calc(100vh - 130px);
  overflow: auto;
`;

const MainLayout = (props) => {
  const { children } = props;
  return (
    <>
      <PageHeader {...props} />
      <Content>{children}</Content>
      <FooterMenu />
    </>
  );
};

MainLayout.propTypes = {
  children: element.isRequired,
};

export default MainLayout;
