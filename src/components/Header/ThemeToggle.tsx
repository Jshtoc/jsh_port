import { useTheme } from '../../context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="font-display flex items-center gap-1.5 px-3 py-1.5 border border-line rounded-full text-xs font-semibold uppercase tracking-wide text-fg hover:border-fg/40 transition-colors"
      aria-label="테마 전환"
    >
      <span aria-hidden>◑</span>
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  )
}
