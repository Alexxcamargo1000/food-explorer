import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from '../layouts/DefaultLayout'
import { Home } from '../pages/Home'
import { NewFood } from '../pages/NewFood'
import { NewIngredient } from '../pages/NewIngredient'
import { Order } from '../pages/Order'
import { Preview } from '../pages/Preview'

import { EditFood } from '../pages/EditFood'
import { Page404 } from '../pages/404'

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/food/:slug" element={<Preview />} />
        <Route path="edit/:slug" element={<EditFood />} />
        <Route path="ingredient/new" element={<NewIngredient />} />
        <Route path="/new" element={<NewFood />} />

        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  )
}
