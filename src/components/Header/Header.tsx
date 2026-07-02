import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import NavLinks, { type NavLink } from './NavLinks'
import MobileMenu from './MobileMenu'
import MenuToggleButton from './MenuToggleButton'

const navLinks: NavLink[] = [
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const lightMode = pathname === '/' && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className={`text-xl font-bold ${lightMode ? 'text-primary' : 'text-primary-dark'}`}>
          Portfolio
        </Link>

        <NavLinks
          links={navLinks}
          className="hidden md:flex gap-8"
          activeClassName={lightMode ? 'text-primary' : 'text-primary-dark'}
          inactiveClassName={lightMode ? 'text-white/80 hover:text-primary' : 'text-slate-600 hover:text-primary-dark'}
        />

        <MenuToggleButton open={menuOpen} onClick={() => setMenuOpen(!menuOpen)} light={lightMode} />
      </nav>

      {menuOpen && <MobileMenu links={navLinks} onLinkClick={() => setMenuOpen(false)} />}
    </header>
  )
}
