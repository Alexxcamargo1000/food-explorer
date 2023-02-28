import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { HeaderMobile } from '../components/Header/Mobile'
import { useAuth } from '../hooks/useAuth'

export function DefaultLayout() {
  const { user } = useAuth()
  console.log(user?.admin)

  return (
    <div>
      <HeaderMobile />
      <Outlet />
      <Footer />
    </div>
  )
}
