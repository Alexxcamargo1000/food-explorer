import { Routes, Route } from 'react-router-dom'
import { SingInPage } from '../pages/SingIn'

export function AuthRouter() {
  return (
    <Routes>
      <Route path="/" element={<SingInPage />} />
    </Routes>
  )
}
