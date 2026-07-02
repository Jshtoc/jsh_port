import { NavLink as RouterNavLink } from 'react-router-dom'

export interface NavLink {
  label: string
  href: string
}

interface NavLinksProps {
  links: NavLink[]
  className: string
  linkClassName?: string
  activeClassName?: string
  inactiveClassName?: string
  onLinkClick?: () => void
}

export default function NavLinks({
  links,
  className,
  linkClassName = '',
  activeClassName = 'text-primary-dark',
  inactiveClassName = 'text-slate-600 hover:text-primary-dark',
  onLinkClick,
}: NavLinksProps) {
  return (
    <ul className={className}>
      {links.map((link) => (
        <li key={link.href}>
          <RouterNavLink
            to={link.href}
            onClick={onLinkClick}
            className={({ isActive }) =>
              `transition-colors duration-200 ${isActive ? activeClassName : inactiveClassName} ${linkClassName}`
            }
          >
            {link.label}
          </RouterNavLink>
        </li>
      ))}
    </ul>
  )
}
