import React, { useEffect, useState } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Wrapper } from './style';

const LoginContainer = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState();

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values) => {
    console.log('Finish:', values);
  };

  return (
    <Wrapper height={window.innerHeight}>
      <div className="logo-wrapper">
        <img src="/public/images/hungree_logo.png" alt="hungree logo" />
      </div>
      <Form form={form} layout="horizontal" onFinish={onFinish}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
            size="large"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            size="large"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" size="large" block>
            Log in
          </Button>
        </Form.Item>
      </Form>
    </Wrapper>
  );
};

export default LoginContainer;
