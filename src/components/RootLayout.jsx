import Footer from './Footer'
import Header from './Header'

export default function RootLayout({ children }) {
  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <main className="flex-1 p-4">{children}</main>
      <Footer />
    </div>
  )
}
