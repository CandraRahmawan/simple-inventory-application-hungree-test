import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router-dom';
import firebase from 'firebase';
import { object } from 'prop-types';
import MainLayout from 'apps/layouts/MainLayout';
import ListContainer from 'apps/containers/CategoryContainer/ListContainer';

const CategoryListPage = (props) => {
  const [data, setData] = useState([]);
  const { history } = props;

  useEffect(() => {
    firebase
      .database()
      .ref('/categories')
      .once('value')
      .then((snapshot) => {
        setData(snapshot.val());
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>Category List</title>
        <meta name="description" content="Category List - Hungree" />
      </Helmet>
      <MainLayout history={history} titleHeader="Category List">
        <ListContainer items={Object.values(data)} history={history} />
      </MainLayout>
    </>
  );
};

CategoryListPage.propTypes = {
  history: object.isRequired,
};

export default withRouter(CategoryListPage);
