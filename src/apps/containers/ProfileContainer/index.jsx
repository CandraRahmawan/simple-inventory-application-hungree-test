import React, { useState } from 'react';
import { List } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import { ModalConfirm } from 'apps/components';
import { KEY_AUTH } from 'config/contants';
import { getAuth } from 'helpers/commonHelper';
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
      <ModalConfirm
        description="Are you sure to Logout ?"
        onOk={() => {
          localStorage.removeItem(KEY_AUTH);
          window.location.reload();
        }}
        visible={confirmVisible}
        setVisible={setConfirmVisible}
      />
    </Wrapper>
  );
};

export default ProfileContainer;
