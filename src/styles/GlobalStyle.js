import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Poppins, sans-serif;
    background-color: #f5f6fa;
    
    a {
      color: #c0392b;
      &.active {
        color: #34495e;
      }
    }
    
    .background-primary {
      background: linear-gradient(118deg, #ffeaa7, #fdcb6e);
    }
  }
`;

export default GlobalStyle;
