import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './AppRouter'
// import { AuthRouter } from './AuthRouter'

export function Route() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}
