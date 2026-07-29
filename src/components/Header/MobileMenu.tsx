import NavLinks, { type NavLink } from './NavLinks'

interface MobileMenuProps {
  links: NavLink[]
  activeHref?: string
  onLinkClick: () => void
}

export default function MobileMenu({ links, activeHref, onLinkClick }: MobileMenuProps) {
  return (
    <div className="md:hidden border-t border-line">
      <NavLinks
        links={links}
        className="flex flex-col px-6 py-4 gap-4"
        linkClassName="block"
        activeClassName="text-fg font-semibold"
        inactiveClassName="text-muted hover:text-fg"
        activeHref={activeHref}
        onLinkClick={onLinkClick}
      />
    </div>
  )
}
