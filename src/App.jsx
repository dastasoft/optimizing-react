import { BrowserRouter } from 'react-router-dom'

import RootLayout from './components/RootLayout'
import Router from './router'

export default function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <Router />
      </RootLayout>
    </BrowserRouter>
  )
}
