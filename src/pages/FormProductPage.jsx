import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router-dom';
import { object } from 'prop-types';
import firebase from 'firebase';
import MainLayout from 'apps/layouts/MainLayout';
import FormContainer from 'apps/containers/ProductContainer/FormContainer';
import { getQueryId } from 'helpers/commonHelper';

const FormProductPage = (props) => {
  const { history, location } = props;
  const [loading, setLoading] = useState(false);
  const [editData, setEditData] = useState({});

  const getId = getQueryId(location);
  useEffect(() => {
    if (getId) {
      setLoading(true);
      firebase
        .database()
        .ref('/products')
        .orderByChild('id')
        .equalTo(getId)
        .once('value')
        .then((snapshot) => {
          setEditData(snapshot.val()[getId]);
          setLoading(false);
        });
    }
  }, [getId]);

  const title = getId ? `Edit ${editData.name || '...'}` : 'Add Product';

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={`${title} - Hungree`} />
      </Helmet>
      <MainLayout history={history} titleHeader={title}>
        <FormContainer productId={getId} editData={editData} loading={loading} history={history} />
      </MainLayout>
    </>
  );
};

FormProductPage.propTypes = {
  history: object.isRequired,
  location: object.isRequired,
};

export default withRouter(FormProductPage);
