import { Routes, Route } from 'react-router-dom'
import { SingInPage } from '../pages/SingIn'
import { SingUpPage } from '../pages/SingUp'

export function AuthRouter() {
  return (
    <Routes>
      <Route path="/" element={<SingInPage />} />
      <Route path="/register" element={<SingUpPage />} />
    </Routes>
  )
}
