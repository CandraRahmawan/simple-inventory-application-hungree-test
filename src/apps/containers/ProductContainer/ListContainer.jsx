import React, { useState } from 'react';
import { array, object } from 'prop-types';
import { Avatar, List, message, Skeleton } from 'antd';
import { DeleteOutlined, FormOutlined } from '@ant-design/icons';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import { ModalConfirm, Spinner } from 'apps/components';
import { Content } from './style';

const ListContainer = (props) => {
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const { items, history } = props;

  function removeDataProduct() {
    const updates = {};
    updates[`/products/${selectedItem?.id}`] = null;
    return firebase
      .database()
      .ref()
      .update(updates, (error) => {
        if (error) {
          message.error('failed remove product');
        } else {
          message.success('success');
          setTimeout(() => {
            history.push('/product-list');
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
              <FormOutlined onClick={() => history.push(`/product-form?id=${item.id}`)} />,
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
                avatar={
                  <Link to={`/product-detail?id=${item.id}`}>
                    <Avatar src={item.imageUrl} />
                  </Link>
                }
                title={<Link to={`/product-detail?id=${item.id}`}>{item.name}</Link>}
                description={item.description}
              />
              <div>{`${item.currency}. ${item.price}`}</div>
            </Skeleton>
          </List.Item>
        )}
      />
      <ModalConfirm
        description={`are you sure to delete ${selectedItem?.name} ? `}
        onOk={() => {
          setConfirmVisible(!confirmVisible);
          removeDataProduct();
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
