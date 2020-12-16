import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import { Form, Input, Button, Select, message } from 'antd';
import dayjs from 'dayjs';
import { string, object, bool } from 'prop-types';
import { getGenerateId } from 'helpers/commonHelper';
import { Spinner } from 'apps/components';
import { FormWrapper } from './style';

const { Option } = Select;

const FormContainer = (props) => {
  const { productId, editData, loading, history } = props;
  const [form] = Form.useForm();
  const [dataCategory, setDataCategory] = useState([]);
  const [loadingBtn, setLoadingBtn] = useState(false);

  useEffect(() => {
    firebase
      .database()
      .ref('/categories')
      .once('value')
      .then((snapshot) => {
        setDataCategory(snapshot.val());
      });
  }, []);

  useEffect(() => {
    if (productId) {
      form.setFieldsValue({
        name: editData?.name,
        description: editData?.description,
        imageUrl: editData?.imageUrl,
        categoryId: editData?.categoryId,
        price: editData?.price,
        createdAt: editData?.createdAt,
      });
    }
  }, [productId, editData]);

  function submitData({ name, description, createdAt, categoryId, price, imageUrl }) {
    const id = productId || getGenerateId();
    const now = dayjs().format('YYYY-MM-DD, HH:mm:ss');
    const postData = {
      createdAt: createdAt || now,
      updatedAt: productId && now,
      id,
      name,
      description,
      categoryId,
      price,
      imageUrl,
      currency: 'Rp',
    };
    const updates = {};
    updates[`/products/${id}`] = postData;

    return firebase
      .database()
      .ref()
      .update(updates, (error) => {
        if (error) {
          message.error('failed save product');
        } else {
          message.success('success');
          setTimeout(() => {
            history.replace('/product-list');
          }, 1000);
        }
      });
  }

  const onFinish = (values) => {
    setLoadingBtn(true);
    submitData(values);
  };

  return (
    <FormWrapper>
      {!loading ? (
        <Form form={form} layout="horizontal" onFinish={onFinish}>
          <Form.Item
            label="Category"
            name="categoryId"
            rules={[{ required: true, message: 'Please select category product' }]}
          >
            <Select>
              {Object.values(dataCategory).map((item) => (
                <Option key={item.id}>{item.name}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input name product' }]}
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item
            label="Price (currency in IDR)"
            name="price"
            rules={[
              { required: true, message: 'Please input price product' },
              () => ({
                validator(rule, value) {
                  if (value && value.match(/^[0-9]+$/)) {
                    return Promise.resolve();
                  }
                  return Promise.reject('price should be number');
                },
              }),
            ]}
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item
            label="Image Url"
            name="imageUrl"
            rules={[
              { required: true, message: 'Please input image url product' },
              { type: 'url', message: 'input should url type' },
            ]}
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true, message: 'Please input description product' }]}
          >
            <Input.TextArea size="large" />
          </Form.Item>
          <Form.Item hidden name="createdAt">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block loading={loadingBtn}>
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
  productId: string.isRequired,
  editData: object.isRequired,
  loading: bool.isRequired,
  history: object.isRequired,
};

export default FormContainer;
