import { useEffect, useState } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'
import Header from './Header/Header'
import LoadingSpinner from './LoadingSpinner'

export default function Layout() {
  const location = useLocation()
  const outlet = useOutlet()
  const [displayOutlet, setDisplayOutlet] = useState(outlet)
  const [displayPath, setDisplayPath] = useState(location.pathname)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (location.pathname !== displayPath) {
      setLoading(true)
      const timer = setTimeout(() => {
        setDisplayOutlet(outlet)
        setDisplayPath(location.pathname)
        setLoading(false)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [location.pathname, displayPath, outlet])

  return (
    <div className="min-h-screen bg-bg">
      <Header />
      <main className={`transition-opacity duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        {displayOutlet}
      </main>

      <div
        className={`fixed inset-0 z-50 bg-bg flex items-center justify-center transition-opacity duration-300 ${
          loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <LoadingSpinner />
      </div>
    </div>
  )
}
