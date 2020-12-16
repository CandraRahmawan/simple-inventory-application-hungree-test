import React from 'react';
import {
  HomeOutlined,
  UserOutlined,
  TagsOutlined,
  AppstoreAddOutlined,
  PlusCircleTwoTone,
} from '@ant-design/icons';
import { Popover, List } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { Wrapper } from './style';

const addContent = () => (
  <List
    header={null}
    footer={null}
    dataSource={[
      {
        link: '/category-form',
        label: 'Add Category',
      },
      {
        link: '/product-form',
        label: 'Add Product',
      },
    ]}
    renderItem={(item) => (
      <List.Item>
        <Link to={item.link}>{item.label}</Link>
      </List.Item>
    )}
  />
);

const FooterMenu = () => {
  const { pathname } = useLocation();
  return (
    <Wrapper className="background-primary">
      <Link to="/" className={pathname === '/' ? 'active' : ''}>
        <HomeOutlined />
      </Link>
      <Link
        to="/category-list"
        className={
          pathname === '/category-list' ||
          pathname === '/category-form' ||
          pathname === '/category-detail'
            ? 'active'
            : ''
        }
      >
        <TagsOutlined />
      </Link>
      <Popover placement="top" content={addContent} title={null} trigger="click">
        <PlusCircleTwoTone twoToneColor="#f39c12" />
      </Popover>
      <Link
        to="/product-list"
        className={
          pathname === '/product-list' ||
          pathname === '/product-form' ||
          pathname === '/product-detail'
            ? 'active'
            : ''
        }
      >
        <AppstoreAddOutlined />
      </Link>
      <Link to="/profile" className={pathname === '/profile' ? 'active' : ''}>
        <UserOutlined />
      </Link>
    </Wrapper>
  );
};

export default FooterMenu;
