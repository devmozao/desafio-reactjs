import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #fafafa;
  }

  body, input, button {
    font-family: 'Lato', sans-serif;
  }
`

export default GlobalStyles
