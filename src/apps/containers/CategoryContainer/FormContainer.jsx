import React from 'react';
import { Form, Input, Button } from 'antd';
import { FormWrapper } from './style';

const FormContainer = () => {
  return (
    <FormWrapper>
      <Form layout="horizontal">
        <Form.Item label="Name">
          <Input />
        </Form.Item>
        <Form.Item label="Description">
          <Input.TextArea />
        </Form.Item>
        <Form.Item>
          <Button type="primary" block>
            Save
          </Button>
        </Form.Item>
      </Form>
    </FormWrapper>
  );
};

export default FormContainer;
