import React from 'react';
import {
  HomeOutlined,
  UserOutlined,
  TagsOutlined,
  InboxOutlined,
  PlusCircleTwoTone,
} from '@ant-design/icons';
import { Popover, List } from 'antd';
import { Link } from 'react-router-dom';
import { Wrapper } from './style';

const addContent = () => (
  <List
    header={null}
    footer={null}
    dataSource={[
      {
        link: '/category-add',
        label: 'Add Category',
      },
      {
        link: '/product-add',
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

const FooterMenu = () => (
  <Wrapper>
    <Link to="/">
      <HomeOutlined />
    </Link>
    <Link to="/category-list">
      <TagsOutlined />
    </Link>
    <Popover placement="top" content={addContent} title={null} trigger="click">
      <PlusCircleTwoTone twoToneColor="#f39c12" />
    </Popover>
    <Link to="/product-list">
      <InboxOutlined />
    </Link>
    <Link to="/profile">
      <UserOutlined />
    </Link>
  </Wrapper>
);

export default FooterMenu;
