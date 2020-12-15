import React from 'react';
import {
  HomeOutlined,
  UserOutlined,
  TagsOutlined,
  InboxOutlined,
  PlusCircleTwoTone,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Wrapper } from './style';

const FooterMenu = () => {
  return (
    <Wrapper>
      <Link to="/">
        <HomeOutlined />
      </Link>
      <Link to="/category-list">
        <TagsOutlined />
      </Link>
      <Link to="" className="add-product">
        <PlusCircleTwoTone twoToneColor="#f39c12" />
      </Link>
      <Link to="/product-list">
        <InboxOutlined />
      </Link>
      <Link to="/profile">
        <UserOutlined />
      </Link>
    </Wrapper>
  );
};

export default FooterMenu;
