import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #ecf0f1;

  a {
    padding: 12px 20px;
    .anticon {
      font-size: 26px;
    }
  }

  .anticon-plus-circle {
    margin-top: -22px;
    font-size: 45px;
  }
`;
