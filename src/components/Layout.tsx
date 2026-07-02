import { Outlet } from 'react-router-dom'
import Header from './Header/Header'

export default function Layout() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Outlet />
      </main>
      <footer className="text-center py-6 text-slate-400 text-sm border-t border-slate-200">
        © 2026 정승호. Built with React + Vite.
      </footer>
    </div>
  )
}
