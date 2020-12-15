import React, { useState } from 'react';
import { List, Modal } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import { KEY_AUTH } from 'config/contants';
import { getAuth } from 'helpers/authHelper';
import { Wrapper } from './style';

const ProfileContainer = () => {
  const [confirmVisible, setConfirmVisible] = useState(false);

  return (
    <Wrapper>
      <h4>{getAuth().name}</h4>
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
          <List.Item onClick={() => setConfirmVisible(!confirmVisible)}>
            <div>
              {item.icon}
              <span className="label">{item.label}</span>
            </div>
          </List.Item>
        )}
      />
      <Modal
        title="Confirmation"
        visible={confirmVisible}
        onOk={() => {
          localStorage.removeItem(KEY_AUTH);
          window.location.reload();
        }}
        onCancel={() => setConfirmVisible(!confirmVisible)}
      >
        <p>Are you sure to Logout ?</p>
      </Modal>
    </Wrapper>
  );
};

export default ProfileContainer;
