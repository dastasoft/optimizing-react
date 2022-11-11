import Footer from './Footer'
import Header from './Header'
import { PerformanceContextProvider } from '../context/PerformanceContext'

export default function RootLayout({ children }) {
  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <div className="flex-1">
        <PerformanceContextProvider>
          <main>{children}</main>
        </PerformanceContextProvider>
      </div>
      <Footer />
    </div>
  )
}
