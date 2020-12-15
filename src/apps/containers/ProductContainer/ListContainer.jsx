import React from 'react';
import { array } from 'prop-types';
import { Card } from 'antd';
import styled from 'styled-components';
import { Spinner } from 'apps/components';

const Content = styled.div`
  height: calc(100vh - 130px);
  overflow: auto;
`;

const ListContainer = (props) => {
  const { items } = props;
  return (
    <Content>
      {items.length > 0 ? (
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
      )}
    </Content>
  );
};

ListContainer.propTypes = {
  items: array.isRequired,
};

export default ListContainer;
