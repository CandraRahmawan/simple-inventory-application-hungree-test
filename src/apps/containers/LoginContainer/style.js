import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: calc(${(props) => props.height}px / 4);
  form {
    max-width: 460px;
    margin: 0 auto;
    padding: 32px;
  }
  .logo-wrapper {
    text-align: center;
  }
`;
