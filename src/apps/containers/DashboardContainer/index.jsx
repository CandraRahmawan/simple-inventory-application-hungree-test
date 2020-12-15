import React, { useEffect, useState } from 'react';
import { Avatar, Statistic, Card, Row, Col } from 'antd';
import firebase from 'firebase';
import { LatestCarousel } from 'apps/components';
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
          <Avatar size="large">AD</Avatar>
          <span>Administrator</span>
        </div>
      </ContentHeader>
      <ContentBody>
        <Row gutter={16}>
          <Col span={12}>
            <Card>
              <Statistic title="Total Product" value={data.products.length} />
            </Card>
          </Col>
          <Col span={12}>
            <Card>
              <Statistic title="Total Category" value={data.categories.length} />
            </Card>
          </Col>
        </Row>
        <LatestCarousel products={data.products} />
      </ContentBody>
    </>
  );
};

export default DashboardContainer;
