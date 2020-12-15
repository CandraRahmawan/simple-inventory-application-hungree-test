import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;

  a {
    padding: 12px 20px;
    .anticon {
      font-size: 28px;
    }
  }

  .anticon-plus-circle {
    margin-top: -26px;
    font-size: 60px;
  }
`;
