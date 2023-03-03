import { BrowserRouter } from 'react-router-dom'

import { useAuth } from '../hooks/useAuth'
import { AppRouter } from './AppRouter'
import { AuthRouter } from './AuthRouter'

export function Route() {
  const { user } = useAuth()

  return <BrowserRouter>{user ? <AppRouter /> : <AuthRouter />}</BrowserRouter>
}
