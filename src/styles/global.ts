import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
${({ theme }) => css`
  html {
    font-size: 62.5%;
  }
  body {
    font-family: ${theme.font.family};
    font-weight: ${theme.font.light};
    font-size: ${theme.font.sizes.medium};
  }

  ::-webkit-scrollbar {
    width: 1rem;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.darkGray};
    border-radius: 1rem;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.secondaryGray};
  }
`}
`;

export default GlobalStyles;
