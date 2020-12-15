import React from 'react';
import { element } from 'prop-types';

const MainLayout = (props) => <>{props.children}</>;

MainLayout.propTypes = {
  children: element.isRequired,
};

export default MainLayout;
