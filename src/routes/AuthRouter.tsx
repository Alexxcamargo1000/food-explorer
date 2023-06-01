import { SingInPage } from '../pages/SingIn'
import { SingUpPage } from '../pages/SingUp'
import { Routes, Route } from 'react-router-dom'
import { SingUpPageAdmin } from '../pages/SingUpAdmin'

export function AuthRouter() {
  return (
    <Routes>
      <Route path="/" element={<SingInPage />} />
      <Route path="/register" element={<SingUpPage />} />
      <Route path="/register/admin" element={<SingUpPageAdmin />} />
    </Routes>
  )
}
