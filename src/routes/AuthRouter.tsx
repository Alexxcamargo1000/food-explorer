import { Routes, Route } from 'react-router-dom'
import { SignInPage } from '../pages/SignIn'

export function AuthRouter() {
  return (
    <Routes>
      <Route path="/" element={<SignInPage />} />
    </Routes>
  )
}
