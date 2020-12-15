import styled from 'styled-components';

export const ContentHeader = styled.div`
  height: 160px;

  .greeting-profile {
    display: flex;
    align-items: center;
    padding: 12px;
    .ant-avatar-lg {
      margin-right: 12px;
      background-color: rgb(231, 76, 60);
      vertical-align: middle;
    }
  }

  .dashboard {
    padding: 12px;
    h1 {
      margin-bottom: 0;
    }
    p {
      color: #c0392b;
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
