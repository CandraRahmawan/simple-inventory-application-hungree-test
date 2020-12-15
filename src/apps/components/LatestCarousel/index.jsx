import React from 'react';
import { Card } from 'antd';
import { Cards, Wrapper } from './style';

const { Meta } = Card;

const LatestCarousel = () => (
  <Wrapper>
    <h3>Latest Product</h3>
    <Cards>
      <Card
        hoverable
        cover={
          <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      <Card
        hoverable
        cover={
          <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      <Card
        hoverable
        cover={
          <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      <Card
        hoverable
        cover={
          <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      <Card
        hoverable
        cover={
          <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </Cards>
  </Wrapper>
);

export default LatestCarousel;
