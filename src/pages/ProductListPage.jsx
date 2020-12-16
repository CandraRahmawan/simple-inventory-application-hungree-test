import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router-dom';
import firebase from 'firebase';
import { object } from 'prop-types';
import MainLayout from 'apps/layouts/MainLayout';
import ListContainer from 'apps/containers/ProductContainer/ListContainer';

const ProductListPage = (props) => {
  const [data, setData] = useState([]);
  const { history } = props;

  useEffect(() => {
    firebase
      .database()
      .ref('/products')
      .once('value')
      .then((snapshot) => {
        setData(snapshot.val());
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>Product List</title>
        <meta name="description" content="Product List - Hungree" />
      </Helmet>
      <MainLayout history={history} titleHeader="Product List">
        <ListContainer items={Object.values(data)} history={history} />
      </MainLayout>
    </>
  );
};

ProductListPage.propTypes = {
  history: object.isRequired,
};

export default withRouter(ProductListPage);
