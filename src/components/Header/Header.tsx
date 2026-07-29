import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import NavLinks, { type NavLink } from './NavLinks'
import MobileMenu from './MobileMenu'
import MenuToggleButton from './MenuToggleButton'
import ThemeToggle from './ThemeToggle'

const navLinks: NavLink[] = [
  { label: 'ABOUT', href: '#about' },
  { label: 'WORK', href: '#work' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('')
      return
    }

    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [location.pathname])

  const solid = scrolled || menuOpen

  return (
    <div className="fixed top-0 left-0 right-0 z-40 px-6 sm:px-12 pt-4">
      <header
        className={`rounded-full transition-all duration-300 ${
          solid ? 'bg-bg/90 backdrop-blur-md border border-line shadow-sm' : 'bg-transparent border border-transparent'
        }`}
      >
        <nav
          className={`py-3 flex items-center justify-between transition-all duration-300 ${solid ? 'px-6' : 'px-0'}`}
        >
          <Link to="/" className="font-display text-lg font-bold text-fg">
            Portfolio
          </Link>

          <div className="flex items-center gap-4 sm:gap-8">
            <NavLinks
              links={navLinks}
              className="hidden md:flex gap-8"
              activeClassName="text-fg font-semibold"
              inactiveClassName="text-muted hover:text-fg"
              activeHref={activeSection ? `#${activeSection}` : undefined}
            />
            <ThemeToggle />
            <MenuToggleButton open={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
          </div>
        </nav>

        {menuOpen && (
          <MobileMenu
            links={navLinks}
            activeHref={activeSection ? `#${activeSection}` : undefined}
            onLinkClick={() => setMenuOpen(false)}
          />
        )}
      </header>
    </div>
  )
}
