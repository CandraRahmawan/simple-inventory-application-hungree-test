import React from 'react';
import { Card } from 'antd';
import { object } from 'prop-types';
import { Link } from 'react-router-dom';
import { Spinner } from 'apps/components';
import { Cards, Wrapper } from './style';

const { Meta } = Card;

const LatestCarousel = (props) => {
  const { products } = props;

  let latestProduct = [];
  if (Object.keys(products).length > 5) {
    for (let inc = 1; inc <= 5; inc += 1) {
      latestProduct.push(Object.values(products)[Object.keys(products).length - inc]);
    }
  } else {
    latestProduct = Object.values(products);
  }

  return (
    <Wrapper>
      <h3>Latest Product</h3>
      <Cards>
        {latestProduct.length > 0 ? (
          latestProduct.map((item) => {
            const { name, imageUrl, price, currency, id } = item;
            return (
              <Card
                hoverable
                cover={
                  <Link to={`/product-detail?id=${id}`}>
                    <img alt={name} src={imageUrl} />
                  </Link>
                }
              >
                <Meta title={name} description={`${currency}. ${price}`} />
              </Card>
            );
          })
        ) : (
          <Spinner.DynamicSpinner />
        )}
      </Cards>
    </Wrapper>
  );
};

LatestCarousel.propTypes = {
  products: object.isRequired,
};

export default LatestCarousel;
