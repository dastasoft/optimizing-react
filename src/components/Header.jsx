import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="p-4 bg-indigo-900 text-white flex items-center">
      <NavLink to="/" className="font-black text-3xl mr-6">
        React Optimization
      </NavLink>
      <NavLink
        to="/use-callback"
        className={(navData) =>
          navData.isActive
            ? 'font-bold text-xl hover:text-gray-900 mr-4 p-2 border-2 border-gray-900 rounded-xl'
            : 'font-bold text-xl hover:text-gray-900 mr-4 p-2'
        }
      >
        useCallback
      </NavLink>
      <NavLink
        to="/use-memo"
        className={(navData) =>
          navData.isActive
            ? 'font-bold text-xl hover:text-gray-900 mr-4 p-2 border-2 border-gray-900 rounded-xl'
            : 'font-bold text-xl hover:text-gray-900 mr-4 p-2'
        }
      >
        useMemo
      </NavLink>
    </header>
  )
}
