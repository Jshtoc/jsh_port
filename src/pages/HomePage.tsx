import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <section className="min-h-screen bg-surface-dark text-white flex flex-col justify-center px-6 sm:px-12 pt-24 pb-10">
      <div className="flex flex-col items-center text-center gap-8">
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-black uppercase leading-none tracking-tight text-primary">
          Portfolio
        </h1>

        <div className="flex items-center gap-4 border border-white/20 rounded-full px-6 py-3 text-sm sm:text-base text-white/80">
          <span className="text-primary">✦</span>
          <span>Frontend Developer · Vue · React · TypeScript</span>
          <span className="text-primary">✦</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            to="/projects"
            className="px-8 py-3 bg-primary hover:bg-primary-dark text-slate-900 hover:text-white rounded-full font-semibold transition-colors duration-200"
          >
            View Projects
          </Link>
        </div>
      </div>
    </section>
  )
}
