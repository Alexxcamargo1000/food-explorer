import { Routes, Route } from 'react-router-dom'
import { AdminLayout } from '../layouts/AdminLayout'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { Home } from '../pages/Home'
import { NewFood } from '../pages/NewFood'
import { NewIngredient } from '../pages/NewIngredient'
import { Order } from '../pages/Order'
import { Preview } from '../pages/Preview'
import { useAuth } from '../hooks/useAuth'
import { EditFood } from '../pages/EditFood'

export function AppRouter() {
  const { user } = useAuth()
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="/new" element={<NewFood />} />
        <Route path="/order" element={<Order />} />
        <Route path="/edit/:slug" element={<EditFood />} />
        <Route path="/food/:slug" element={<Preview />} />
      </Route>

      <Route path="admin" element={<AdminLayout />}>
        {user?.admin && (
          <>
            <Route path="" element={<Home />} />
            <Route path="new" element={<NewFood />} />
            <Route path="edit/:slug" element={<NewFood />} />
            <Route path="ingredient/new" element={<NewIngredient />} />
          </>
        )}
      </Route>
    </Routes>
  )
}
