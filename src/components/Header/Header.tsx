import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-950/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-primary">
          Portfolio
        </Link>

        <NavLinks links={navLinks} className="hidden md:flex gap-8" />

        <MenuToggleButton open={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
      </nav>

      {menuOpen && <MobileMenu links={navLinks} onLinkClick={() => setMenuOpen(false)} />}
    </header>
  )
}
