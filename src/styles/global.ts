import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme['blue-200']};
  }


  body {
    background-color: ${(prop) => prop.theme['blue-900']};
    color: ${(prop) => prop.theme['gray-200']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: 'Poppins', sans-serif;
  }

  main {
    min-height: calc(100vh - (2 * 6.5rem));
  }
`
