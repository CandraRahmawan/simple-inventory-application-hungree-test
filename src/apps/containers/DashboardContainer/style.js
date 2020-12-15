import styled from 'styled-components';

export const ContentHeader = styled.div`
  background: linear-gradient(118deg, #ffeaa7, #fdcb6e);
  height: 200px;

  .greeting-profile {
    display: flex;
    align-items: center;
    padding: 32px;
    .ant-avatar-lg {
      margin-right: 12px;
    }
  }
`;

export const ContentBody = styled.div`
  .ant-row {
    padding: 20px 8px;
  }
`;
