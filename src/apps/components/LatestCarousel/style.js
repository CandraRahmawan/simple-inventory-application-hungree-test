import styled from 'styled-components';

export const Wrapper = styled.div`
  h3 {
    padding: 0 12px;
  }
`;

export const Cards = styled.div`
  padding: 0 12px 100px 12px;
  display: flex;
  margin: 0 8px;
  overflow: auto;

  .ant-card {
    width: 200px;
    margin-right: 8px;
  }

  img {
    width: 182px;
    height: 182px;
    object-fit: cover;
  }

  .ant-spin-spinning {
    text-align: center;
    width: 100%;
    margin-top: 60px;
  }
`;
