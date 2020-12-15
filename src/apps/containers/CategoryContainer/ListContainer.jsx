import React from 'react';
import { array } from 'prop-types';
import { Card } from 'antd';
import { Spinner } from 'apps/components';

const ListContainer = (props) => {
  const { items } = props;
  return items.length > 0 ? (
    items.map((item) => {
      const { name, description, id } = item;
      return (
        <Card title={name} bordered={false} style={{ width: 300 }}>
          <p>{id}</p>
          <p>{description}</p>
        </Card>
      );
    })
  ) : (
    <Spinner />
  );
};

ListContainer.propTypes = {
  items: array.isRequired,
};

export default ListContainer;
