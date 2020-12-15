import React from 'react';
import Helmet from 'react-helmet';
import MainLayout from 'apps/layouts/MainLayout';
import DashboardContainer from 'apps/containers/DashboardContainer';

const DashboardPage = () => (
  <>
    <Helmet>
      <title>Dashboard Page</title>
      <meta name="description" content="Dashboard Admin - Hungree" />
    </Helmet>
    <MainLayout>
      <DashboardContainer />
    </MainLayout>
  </>
);

export default DashboardPage;
