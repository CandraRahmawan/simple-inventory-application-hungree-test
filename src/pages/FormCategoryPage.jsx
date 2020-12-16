import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router-dom';
import { object } from 'prop-types';
import firebase from 'firebase';
import MainLayout from 'apps/layouts/MainLayout';
import FormContainer from 'apps/containers/CategoryContainer/FormContainer';
import { getQueryId } from 'helpers/commonHelper';

const FormCategoryPage = (props) => {
  const { location, history } = props;
  const [loading, setLoading] = useState(false);
  const [editData, setEditData] = useState({});

  const getId = getQueryId(location);
  useEffect(() => {
    if (getId) {
      setLoading(true);
      firebase
        .database()
        .ref('/categories')
        .orderByChild('id')
        .equalTo(getId)
        .once('value')
        .then((snapshot) => {
          setEditData(snapshot.val()[getId]);
          setLoading(false);
        });
    }
  }, [getId]);

  const title = getId ? `Edit ${editData.name || '...'}` : 'Add Category';

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={`${title} - Hungree`} />
      </Helmet>
      <MainLayout history={history} titleHeader={title}>
        <FormContainer categoryId={getId} editData={editData} loading={loading} />
      </MainLayout>
    </>
  );
};

FormCategoryPage.propTypes = {
  history: object.isRequired,
  location: object.isRequired,
};

export default withRouter(FormCategoryPage);
