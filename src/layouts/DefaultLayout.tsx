import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { HeaderAdmin } from '../components/Header/admin'
import { useAuth } from '../hooks/useAuth'

export function DefaultLayout() {
  const { user } = useAuth()
  console.log(user?.admin)

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
