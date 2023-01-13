import { Routes, Route } from 'react-router-dom'
import { AdminLayout } from '../layouts/AdminLayout'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { Home } from '../pages/Home'
import { NewFood } from '../pages/NewFood'
import { NewIngredient } from '../pages/NewIngredient'
import { Order } from '../pages/Order'
import { Preview } from '../pages/Preview'

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewFood />} />
        <Route path="/order" element={<Order />} />
        <Route path="/food/:slug" element={<Preview />} />
      </Route>

      <Route path="admin" element={<AdminLayout />}>
        <Route path="new" element={<NewFood />} />
        <Route path="ingredient/new" element={<NewIngredient />} />
      </Route>
    </Routes>
  )
}
