import React from 'react';
import { object, bool } from 'prop-types';
import { Descriptions } from 'antd';
import dayjs from 'dayjs';
import { Spinner } from 'apps/components';
import { DetailWrapper } from './style';

const DetailContainer = (props) => {
  const { detail, loading } = props;
  const { name, id, description, createdAt, updatedAt } = detail;

  return (
    <DetailWrapper>
      {loading ? (
        <Spinner.FixSpinner />
      ) : (
        <>
          <Descriptions title="Category Info" bordered>
            <Descriptions.Item label="ID">{id}</Descriptions.Item>
            <Descriptions.Item label="Name">{name}</Descriptions.Item>
            <Descriptions.Item label="Description">{description}</Descriptions.Item>
            <Descriptions.Item label="Created Date">
              {dayjs(createdAt).format('DD MMM YYYY, HH:mm:ss')}
            </Descriptions.Item>
            <Descriptions.Item label="Last Update">
              {updatedAt ? dayjs(updatedAt).format('DD MMM YYYY, HH:mm:ss') : '-'}
            </Descriptions.Item>
          </Descriptions>
        </>
      )}
    </DetailWrapper>
  );
};

DetailContainer.propTypes = {
  detail: object.isRequired,
  loading: bool.isRequired,
};

export default DetailContainer;
