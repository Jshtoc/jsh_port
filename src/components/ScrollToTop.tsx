import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }

    const id = hash.slice(1)
    let frameId: number
    let attempts = 0

    const tryScroll = () => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else if (attempts < 60) {
        attempts += 1
        frameId = requestAnimationFrame(tryScroll)
      }
    }

    tryScroll()
    return () => cancelAnimationFrame(frameId)
  }, [pathname, hash, key])

  return null
}
