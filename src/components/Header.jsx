import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="p-4 bg-indigo-900 text-white flex items-center">
      <Link to="/" className="font-black text-2xl mr-6">
        React Optimization
      </Link>
      <Link
        to="/use-callback"
        className="font-bold text-xl hover:text-gray-900 mr-4"
      >
        useCallback
      </Link>
      <Link to="/use-memo" className="font-bold text-xl hover:text-gray-900">
        useMemo
      </Link>
    </header>
  )
}
