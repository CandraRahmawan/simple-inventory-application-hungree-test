import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router-dom';
import { object } from 'prop-types';
import MainLayout from 'apps/layouts/MainLayout';
import FormContainer from 'apps/containers/CategoryContainer/FormContainer';

const FormCategoryPage = (props) => {
  return (
    <>
      <Helmet>
        <title>Form Input Category</title>
        <meta name="description" content="Form Input Category - Hungree" />
      </Helmet>
      <MainLayout history={props.history} titleHeader="Form Input Category">
        <FormContainer />
      </MainLayout>
    </>
  );
};

FormCategoryPage.propTypes = {
  history: object.isRequired,
};

export default withRouter(FormCategoryPage);
