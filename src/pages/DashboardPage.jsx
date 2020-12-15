import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router-dom';
import { object } from 'prop-types';
import MainLayout from 'apps/layouts/MainLayout';
import DashboardContainer from 'apps/containers/DashboardContainer';

const DashboardPage = (props) => (
  <>
    <Helmet>
      <title>Dashboard Page</title>
      <meta name="description" content="Dashboard Admin - Hungree" />
    </Helmet>
    <MainLayout history={props.history} hideHeaderPage>
      <DashboardContainer />
    </MainLayout>
  </>
);

DashboardPage.propTypes = {
  history: object.isRequired,
};

export default withRouter(DashboardPage);
