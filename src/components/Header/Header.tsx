import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import NavLinks, { type NavLink } from './NavLinks'
import MobileMenu from './MobileMenu'
import MenuToggleButton from './MenuToggleButton'

const navLinks: NavLink[] = [
  { label: 'ABOUT', href: '/about' },
  { label: 'PROJECT', href: '/projects' },
]

export default function Header() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const [menuOpen, setMenuOpen] = useState(false)
  const [hovered, setHovered] = useState(false)
  const visible = !isHome || hovered || menuOpen

  return (
    <>
      <MenuToggleButton open={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />

      <div
        className="fixed top-0 left-0 right-0 z-40"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {isHome && <div className="h-6 w-full" />}

        <header
          className={`bg-black/60 backdrop-blur-md border-b border-white/10 transition-transform duration-500 ease-in-out ${
            visible ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="px-6 sm:px-12 py-4 flex items-center justify-between">
            <Link to="/" className="text-xl font-bold text-primary">
              Portfolio
            </Link>

            <NavLinks
              links={navLinks}
              className="hidden md:flex gap-8"
              activeClassName="text-primary"
              inactiveClassName="text-white/70 hover:text-primary"
            />
          </nav>

          {menuOpen && <MobileMenu links={navLinks} onLinkClick={() => setMenuOpen(false)} />}
        </header>
      </div>
    </>
  )
}
