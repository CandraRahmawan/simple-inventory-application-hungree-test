import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router-dom';
import { object } from 'prop-types';
import firebase from 'firebase';
import MainLayout from 'apps/layouts/MainLayout';
import DetailContainer from 'apps/containers/ProductContainer/DetailContainer';
import { getQueryId } from 'helpers/commonHelper';

const ProductDetailPage = (props) => {
  const { history, location } = props;
  const [loading, setLoading] = useState(false);
  const [detail, setDetail] = useState({});

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
          setDetail(snapshot.val()[getId]);
          setLoading(false);
        });
    }
  }, [getId]);

  return (
    <>
      <Helmet>
        <title>Product Detail</title>
        <meta name="description" content="Product Detail - Hungree" />
      </Helmet>
      <MainLayout history={history} titleHeader={detail?.name}>
        <DetailContainer loading={loading} detail={detail} />
      </MainLayout>
    </>
  );
};

ProductDetailPage.propTypes = {
  history: object.isRequired,
  location: object.isRequired,
};

export default withRouter(ProductDetailPage);
