import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import UseCallback from './pages/UseCallback'
import UseMemo from './pages/UseMemo'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/use-callback" element={<UseCallback />} />
      <Route path="/use-memo" element={<UseMemo />} />
    </Routes>
  )
}
