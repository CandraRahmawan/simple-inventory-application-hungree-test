import React from 'react';
import { Modal } from 'antd';
import { bool, func, string } from 'prop-types';

const ModalConfirm = (props) => {
  const { visible, setVisible, onOk, description } = props;
  return (
    <Modal
      title="Confirmation"
      visible={visible}
      onOk={onOk}
      onCancel={() => setVisible(!visible)}
      okText="OK"
      okType="danger"
    >
      <p>{description}</p>
    </Modal>
  );
};

ModalConfirm.propTypes = {
  visible: bool.isRequired,
  setVisible: func.isRequired,
  onOk: func.isRequired,
  description: string.isRequired,
};

export default ModalConfirm;
