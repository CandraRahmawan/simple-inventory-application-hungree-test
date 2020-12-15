import styled from 'styled-components';

export const ContentHeader = styled.div`
  height: 200px;

  .greeting-profile {
    display: flex;
    align-items: center;
    padding: 32px;
    .ant-avatar-lg {
      margin-right: 12px;
      background-color: rgb(231, 76, 60);
      vertical-align: middle;
    }
  }
`;

export const ContentBody = styled.div`
  .ant-row {
    padding: 20px 4px;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
`;
