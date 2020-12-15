import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import firebaseConfig from 'config/firebase.json';

firebase.initializeApp(firebaseConfig);

const DashboardContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    firebase
      .database()
      .ref('/')
      .once('value')
      .then((snapshot) => {
        setData(snapshot.val());
      });
  }, [])
  return <>{JSON.stringify(data)}</>;
};

export default DashboardContainer;
