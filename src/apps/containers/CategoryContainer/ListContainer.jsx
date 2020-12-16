import React, { useState } from 'react';
import { array, object } from 'prop-types';
import { List, message, Skeleton } from 'antd';
import { ModalConfirm, Spinner } from 'apps/components';
import { FormOutlined, DeleteOutlined } from '@ant-design/icons';
import firebase from 'firebase';
import { Content } from './style';
import { Link } from 'react-router-dom';

const ListContainer = (props) => {
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const { items, history } = props;

  function removeDataCategory() {
    const updates = {};
    updates[`/categories/${selectedItem?.id}`] = null;
    return firebase
      .database()
      .ref()
      .update(updates, (error) => {
        if (error) {
          message.error('failed remove category');
        } else {
          message.success('success');
          setTimeout(() => {
            history.push('/category-list');
          }, 500);
        }
      });
  }

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
          <List.Item
            actions={[
              <FormOutlined onClick={() => history.push(`/category-form?id=${item.id}`)} />,
              <DeleteOutlined
                onClick={() => {
                  setConfirmVisible(!confirmVisible);
                  setSelectedItem(item);
                }}
              />,
            ]}
          >
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={null}
                title={<Link to={`/category-detail?id=${item.id}`}>{item.name}</Link>}
                description={item.description}
              />
            </Skeleton>
          </List.Item>
        )}
      />
      <ModalConfirm
        description={`are you sure to delete ${selectedItem?.name} ? `}
        onOk={() => {
          setConfirmVisible(!confirmVisible);
          removeDataCategory();
        }}
        visible={confirmVisible}
        setVisible={setConfirmVisible}
      />
    </Content>
  );
};

ListContainer.propTypes = {
  items: array.isRequired,
  history: object.isRequired,
};

export default ListContainer;
