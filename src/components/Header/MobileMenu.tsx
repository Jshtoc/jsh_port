import NavLinks, { type NavLink } from './NavLinks'

interface MobileMenuProps {
  links: NavLink[]
  onLinkClick: () => void
}

export default function MobileMenu({ links, onLinkClick }: MobileMenuProps) {
  return (
    <div className="md:hidden bg-black/60 backdrop-blur-md border-t border-white/10">
      <NavLinks
        links={links}
        className="flex flex-col px-6 py-4 gap-4"
        linkClassName="block"
        activeClassName="text-primary"
        inactiveClassName="text-white/70 hover:text-primary"
        onLinkClick={onLinkClick}
      />
    </div>
  )
}
