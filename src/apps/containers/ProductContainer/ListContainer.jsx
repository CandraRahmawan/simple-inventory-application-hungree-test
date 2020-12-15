import React from 'react';
import { array } from 'prop-types';
import { Avatar, List, Skeleton } from 'antd';
import { DeleteOutlined, FormOutlined } from '@ant-design/icons';
import { Spinner } from 'apps/components';
import { Content } from './style';

const ListContainer = (props) => {
  const { items } = props;
  return (
    <Content>
      <List
        loading={{
          indicator: <Spinner.DynamicSpinner />,
          spinning: items.length === 0,
        }}
        itemLayout="horizontal"
        dataSource={items}
        renderItem={(item) => (
          <List.Item actions={[<FormOutlined />, <DeleteOutlined />]}>
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={<Avatar src={item.imageUrl} />}
                title={<a href="https://ant.design">{item.name}</a>}
                description={item.description}
              />
              <div>{`${item.currency}. ${item.price}`}</div>
            </Skeleton>
          </List.Item>
        )}
      />
    </Content>
  );
};

ListContainer.propTypes = {
  items: array.isRequired,
};

export default ListContainer;
