import { SingInPage } from '../pages/SingIn'
import { SingUpPage } from '../pages/SingUp'
import { Routes, Route } from 'react-router-dom'

export function AuthRouter() {
  return (
    <Routes>
      <Route path="/" element={<SingInPage />} />
      <Route path="/register" element={<SingUpPage />} />
    </Routes>
  )
}
