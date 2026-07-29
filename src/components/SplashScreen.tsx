import { useEffect, useState } from 'react'

export default function SplashScreen() {
  const [visible, setVisible] = useState(true)
  const [lineGrown, setLineGrown] = useState(false)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const growTimer = setTimeout(() => setLineGrown(true), 50)
    const fadeTimer = setTimeout(() => setFading(true), 900)
    const hideTimer = setTimeout(() => setVisible(false), 1300)
    return () => {
      clearTimeout(growTimer)
      clearTimeout(fadeTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 z-[100] bg-bg flex flex-col items-center justify-center transition-opacity duration-300 ${
        fading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <p className="font-display text-2xl sm:text-3xl font-black tracking-tight text-fg">JUNG SEUNG HO</p>
      <span
        className={`mt-3 h-px bg-fg/40 transition-all duration-700 ease-out ${lineGrown ? 'w-40' : 'w-0'}`}
      />
    </div>
  )
}
