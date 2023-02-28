import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer'

export function AdminLayout() {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  )
}
