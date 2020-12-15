import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router-dom';
import { object } from 'prop-types';
import MainLayout from 'apps/layouts/MainLayout';
import ProfileContainer from 'apps/containers/ProfileContainer';

const ProfilePage = (props) => {
  return (
    <>
      <Helmet>
        <title>Profile</title>
        <meta name="description" content="Profile - Hungree" />
      </Helmet>
      <MainLayout history={props.history} titleHeader="Profile">
        <ProfileContainer />
      </MainLayout>
    </>
  );
};

ProfilePage.propTypes = {
  history: object.isRequired,
};

export default withRouter(ProfilePage);
