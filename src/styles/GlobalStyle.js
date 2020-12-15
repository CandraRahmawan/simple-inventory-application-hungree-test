import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Poppins, sans-serif;
    
    a {
      color: #e74c3c;
    }
    
    .background-primary {
      background: linear-gradient(118deg, #ffeaa7, #fdcb6e);
    }
  }
`;

export default GlobalStyle;
