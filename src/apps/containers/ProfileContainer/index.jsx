import React from 'react';
import { List } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import { Wrapper } from './style';

const ProfileContainer = () => {
  return (
    <Wrapper>
      <h4>Administrator</h4>
      <List
        size="large"
        header={null}
        footer={null}
        bordered
        dataSource={[
          {
            label: 'Logout',
            icon: <PoweroffOutlined />,
          },
        ]}
        renderItem={(item) => (
          <List.Item>
            <div>
              {item.icon}
              <span className="label">{item.label}</span>
            </div>
          </List.Item>
        )}
      />
    </Wrapper>
  );
};

export default ProfileContainer;
