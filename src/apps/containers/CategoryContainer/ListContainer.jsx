import React from 'react';
import { array } from 'prop-types';
import { List, Skeleton, Avatar } from 'antd';
import { Spinner } from 'apps/components';
import { FormOutlined, DeleteOutlined } from '@ant-design/icons';
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
                avatar={null}
                title={<a href="https://ant.design">{item.name}</a>}
                description={item.description}
              />
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
