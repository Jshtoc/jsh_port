import NavLinks, { type NavLink } from './NavLinks'

interface MobileMenuProps {
  links: NavLink[]
  onLinkClick: () => void
}

export default function MobileMenu({ links, onLinkClick }: MobileMenuProps) {
  return (
    <div className="md:hidden bg-gray-950/95 backdrop-blur-md border-t border-gray-800">
      <NavLinks
        links={links}
        className="flex flex-col px-6 py-4 gap-4"
        linkClassName="block"
        onLinkClick={onLinkClick}
      />
    </div>
  )
}
