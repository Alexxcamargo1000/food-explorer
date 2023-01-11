import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { HeaderAdmin } from '../components/Header/admin'

export function AdminLayout() {
  return (
    <div>
      <HeaderAdmin />
      <Outlet />
      <Footer />
    </div>
  )
}
