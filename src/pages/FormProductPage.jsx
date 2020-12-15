import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router-dom';
import { object } from 'prop-types';
import MainLayout from 'apps/layouts/MainLayout';
import FormContainer from 'apps/containers/ProductContainer/FormContainer';

const FormProductPage = (props) => {
  return (
    <>
      <Helmet>
        <title>Form Input Product</title>
        <meta name="description" content="Form Input Product - Hungree" />
      </Helmet>
      <MainLayout history={props.history} titleHeader="Form Input Product">
        <FormContainer />
      </MainLayout>
    </>
  );
};

FormProductPage.propTypes = {
  history: object.isRequired,
};

export default withRouter(FormProductPage);
