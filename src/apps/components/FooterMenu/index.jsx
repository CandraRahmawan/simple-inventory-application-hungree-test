import React from 'react';
import {
  HomeOutlined,
  UserOutlined,
  TagsOutlined,
  InboxOutlined,
  PlusCircleTwoTone,
} from '@ant-design/icons';
import { Wrapper } from './style';

const FooterMenu = () => (
  <Wrapper>
    <div>
      <HomeOutlined />
    </div>
    <div>
      <TagsOutlined />
    </div>
    <div className="add-product">
      <PlusCircleTwoTone twoToneColor="#f39c12" />
    </div>
    <div>
      <InboxOutlined />
    </div>
    <div>
      <UserOutlined />
    </div>
  </Wrapper>
);

export default FooterMenu;
