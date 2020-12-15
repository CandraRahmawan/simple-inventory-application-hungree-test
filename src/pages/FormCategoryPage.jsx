import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router-dom';
import { object } from 'prop-types';
import MainLayout from 'apps/layouts/MainLayout';
import FormContainer from 'apps/containers/CategoryContainer/FormContainer';

const FormCategoryPage = (props) => {
  const { location, history } = props;
  return (
    <>
      <Helmet>
        <title>Form Input Category</title>
        <meta name="description" content="Form Input Category - Hungree" />
      </Helmet>
      <MainLayout history={history} titleHeader="Form Input Category">
        <FormContainer location={location} />
      </MainLayout>
    </>
  );
};

FormCategoryPage.propTypes = {
  history: object.isRequired,
  location: object.isRequired,
};

export default withRouter(FormCategoryPage);
