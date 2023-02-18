import { ThemeProvider } from 'styled-components'
import { AuthProvider } from './hooks/useAuth'
import { FoodProvider } from './hooks/useFood'
import { Route } from './routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AuthProvider>
        <FoodProvider>
          <GlobalStyle />
          <Route />
        </FoodProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}
