import { NavLink as RouterNavLink } from 'react-router-dom'

export interface NavLink {
  label: string
  href: string
}

interface NavLinksProps {
  links: NavLink[]
  className: string
  linkClassName?: string
  onLinkClick?: () => void
}

export default function NavLinks({ links, className, linkClassName = '', onLinkClick }: NavLinksProps) {
  return (
    <ul className={className}>
      {links.map((link) => (
        <li key={link.href}>
          <RouterNavLink
            to={link.href}
            onClick={onLinkClick}
            className={({ isActive }) =>
              `transition-colors duration-200 ${isActive ? 'text-primary' : 'text-gray-300 hover:text-primary'} ${linkClassName}`
            }
          >
            {link.label}
          </RouterNavLink>
        </li>
      ))}
    </ul>
  )
}
