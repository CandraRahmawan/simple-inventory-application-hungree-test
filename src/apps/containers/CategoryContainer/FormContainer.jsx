import React from 'react';
import { Form, Input, Button, message } from 'antd';
import firebase from 'firebase';
import dayjs from 'dayjs';
import { getGenerateId } from 'helpers/commonHelper';
import { FormWrapper } from './style';

const FormContainer = () => {
  const [form] = Form.useForm();

  function submitData(name, description) {
    const id = getGenerateId();
    const postData = {
      createdAt: dayjs().format('YYYY-MM-DD, HH:mm:ss'),
      id,
      name,
      description,
    };
    const updates = {};
    updates[`/categories/${id}`] = postData;

    return firebase
      .database()
      .ref()
      .update(updates, (error) => {
        if (error) {
          message.error('failed save category');
        } else {
          message.success('success');
          setTimeout(() => {
            window.location.replace('/category-list');
          }, 1000);
        }
      });
  }

  const onFinish = (values) => {
    const { name, description } = values;
    submitData(name, description);
  };

  return (
    <FormWrapper>
      <Form form={form} layout="horizontal" onFinish={onFinish}>
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please input Name Category' }]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: 'Please input Description Category' }]}
        >
          <Input.TextArea size="large" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" size="large" htmlType="submit" block>
            Save
          </Button>
        </Form.Item>
      </Form>
    </FormWrapper>
  );
};

export default FormContainer;
