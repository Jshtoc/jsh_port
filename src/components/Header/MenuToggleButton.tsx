interface MenuToggleButtonProps {
  open: boolean
  onClick: () => void
  light?: boolean
}

export default function MenuToggleButton({ open, onClick, light = false }: MenuToggleButtonProps) {
  return (
    <button
      className={`md:hidden ${light ? 'text-white/80 hover:text-primary' : 'text-slate-600 hover:text-primary-dark'}`}
      onClick={onClick}
      aria-label="Toggle menu"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {open ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        )}
      </svg>
    </button>
  )
}
