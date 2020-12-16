import React, { useEffect, useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import firebase from 'firebase';
import { object } from 'prop-types';
import dayjs from 'dayjs';
import { getGenerateId, getQueryId } from 'helpers/commonHelper';
import { Spinner } from 'apps/components';
import { FormWrapper } from './style';

const FormContainer = (props) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [loadingBtn, setLoadingBtn] = useState(false);
  const { location } = props;

  const getId = getQueryId(location);
  useEffect(() => {
    if (getId) {
      setLoading(true);
      firebase
        .database()
        .ref('/categories')
        .orderByChild('id')
        .equalTo(getId)
        .once('value')
        .then((snapshot) => {
          const editData = snapshot.val()[getId];
          form.setFieldsValue({
            name: editData?.name,
            description: editData?.description,
            createdAt: editData.createdAt,
          });
          setLoading(false);
        });
    }
  }, [getId]);

  function submitData(name, description, createdAt) {
    const id = getId || getGenerateId();
    const now = dayjs().format('YYYY-MM-DD, HH:mm:ss');
    const postData = {
      createdAt: createdAt || now,
      updatedAt: getId && now,
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
    const { name, description, createdAt } = values;
    setLoadingBtn(true);
    submitData(name, description, createdAt);
  };

  return (
    <FormWrapper>
      {!loading ? (
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
          <Form.Item hidden name="createdAt">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" size="large" htmlType="submit" block loading={loadingBtn}>
              Save
            </Button>
          </Form.Item>
        </Form>
      ) : (
        <Spinner.FixSpinner />
      )}
    </FormWrapper>
  );
};

FormContainer.propTypes = {
  location: object.isRequired,
};

export default FormContainer;
