import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useNavigate }     from 'react-router-dom'
import { toggleMenu, closeMenu }    from '../store/uiSlice'
import './Navbar.css'

const navItems = [
  { label: 'Home',     path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Blog',     path: '/blog' },
  { label: 'Contact',  path: '/contact' },
]

export default function Navbar() {
  const dispatch  = useDispatch()
  const navigate  = useNavigate()
  const menuOpen  = useSelector((s) => s.ui.menuOpen)

  return (
    <nav className="navbar">
      {/* Logo — clicking navigates home via React Router */}
      <button className="nav-logo" onClick={() => { navigate('/'); dispatch(closeMenu()) }}>
        A.I.E
      </button>

      {/* Nav links — NavLink gives automatic "active" class */}
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {navItems.map(({ label, path }) => (
          <li key={label}>
            <NavLink
              to={path}
              end={path === '/'}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => dispatch(closeMenu())}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Hamburger — toggleMenu dispatched to Redux */}
      <button
        className={`nav-hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => dispatch(toggleMenu())}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}
