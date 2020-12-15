import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { Avatar, Statistic, Card, Row, Col } from 'antd';
import { LatestCarousel } from 'apps/components';
import { ContentHeader, ContentBody } from './style';

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
  }, []);

  return (
    <>
      <ContentHeader>
        <div className="greeting-profile">
          <Avatar style={{ backgroundColor: '#e74c3c', verticalAlign: 'middle' }} size="large">
            AD
          </Avatar>
          <span>Administrator</span>
        </div>
      </ContentHeader>
      <ContentBody>
        <Row gutter={16}>
          <Col span={12}>
            <Card>
              <Statistic title="Total Product" value={100} />
            </Card>
          </Col>
          <Col span={12}>
            <Card>
              <Statistic title="Total Category" value={5} />
            </Card>
          </Col>
        </Row>
        <LatestCarousel />
      </ContentBody>
      {JSON.stringify(data)}
    </>
  );
};

export default DashboardContainer;
