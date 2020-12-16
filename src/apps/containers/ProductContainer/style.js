import styled from 'styled-components';

export const Content = styled.div`
  height: calc(100vh - 130px);
  overflow: auto;

  .ant-list-item {
    padding-right: 10px;
    padding-left: 10px;
  }
`;

export const FormWrapper = styled.div`
  padding: 12px;
`;

export const DetailWrapper = styled.div`
  .ant-descriptions {
    padding: 12px;
  }
  .ant-descriptions-item-content {
    background-color: #fafafa;
  }
`;
