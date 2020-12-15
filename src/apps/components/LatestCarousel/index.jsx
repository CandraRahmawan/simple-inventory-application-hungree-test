import React from 'react';
import { Card } from 'antd';
import { array } from 'prop-types';
import { Spinner } from 'apps/components';
import { Cards, Wrapper } from './style';

const { Meta } = Card;

const LatestCarousel = (props) => {
  const { products } = props;

  let latestProduct = [];
  if (products.length > 5) {
    for (let inc = 1; inc <= 5; inc += 1) {
      latestProduct.push(products[products.length - inc]);
    }
  } else {
    latestProduct = products;
  }

  return (
    <Wrapper>
      <h3>Latest Product</h3>
      <Cards>
        {latestProduct.length > 0 ? (
          latestProduct.map((item) => {
            const { name, imageUrl, price, currency } = item;
            return (
              <Card hoverable cover={<img alt={name} src={imageUrl} />}>
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
  products: array.isRequired,
};

export default LatestCarousel;
