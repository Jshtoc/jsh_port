import { Link } from 'react-router-dom'

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
  activeHref?: string
  onLinkClick?: () => void
}

export default function NavLinks({
  links,
  className,
  linkClassName = '',
  activeClassName = 'text-primary-dark',
  inactiveClassName = 'text-slate-600 hover:text-primary-dark',
  activeHref,
  onLinkClick,
}: NavLinksProps) {
  return (
    <ul className={className}>
      {links.map((link) => (
        <li key={link.href}>
          <Link
            to={`/${link.href}`}
            onClick={onLinkClick}
            className={`font-display transition-colors duration-200 ${
              activeHref === link.href ? activeClassName : inactiveClassName
            } ${linkClassName}`}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}
