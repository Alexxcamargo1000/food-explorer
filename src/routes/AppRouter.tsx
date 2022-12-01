import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { Home } from '../pages/Home'
import { NewFood } from '../pages/NewFood'
import { Preview } from '../pages/Preview'

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewFood />} />
        <Route path="/food/:slug" element={<Preview />} />
      </Route>
    </Routes>
  )
}
