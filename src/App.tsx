import { ThemeProvider } from 'styled-components'
import { Route } from './routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Route />
    </ThemeProvider>
  )
}
