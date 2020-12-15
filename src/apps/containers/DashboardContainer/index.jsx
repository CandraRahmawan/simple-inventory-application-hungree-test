import React, { useEffect, useState } from 'react';
import { Avatar, Statistic, Card, Row, Col, Typography } from 'antd';
import firebase from 'firebase';
import { LatestCarousel } from 'apps/components';
import { getAuth } from 'helpers/commonHelper';
import { ContentHeader, ContentBody } from './style';

const DashboardContainer = () => {
  const [data, setData] = useState({
    categories: [],
    products: [],
  });

  useEffect(() => {
    firebase
      .database()
      .ref('/')
      .once('value')
      .then((snapshot) => {
        setData(snapshot.val());
      });
  }, []);

  return (
    <>
      <ContentHeader className="background-primary">
        <div className="greeting-profile">
          <Avatar size="large">SA</Avatar>
          <span>{getAuth().name}</span>
        </div>
        <div className="dashboard">
          <h1>Dashboard</h1>
          <p>overview, inventory application system</p>
        </div>
      </ContentHeader>
      <ContentBody>
        <Row gutter={16}>
          <Col span={12}>
            <Card>
              <Statistic title="Total Product" value={Object.keys(data.products).length} />
            </Card>
          </Col>
          <Col span={12}>
            <Card>
              <Statistic title="Total Category" value={Object.keys(data.categories).length} />
            </Card>
          </Col>
        </Row>
        <LatestCarousel products={data.products} />
      </ContentBody>
    </>
  );
};

export default DashboardContainer;
