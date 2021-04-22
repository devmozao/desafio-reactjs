import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: local('Lato Light'), local('Lato-Light'),
       url('/fonts/lato.light.ttf');
}
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
`}
`

export default GlobalStyles
