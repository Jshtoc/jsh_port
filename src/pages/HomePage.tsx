import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <section className="min-h-screen bg-surface-dark text-white flex flex-col justify-between px-6 sm:px-12 pt-24 pb-10">
      <div className="flex items-center justify-between text-xs sm:text-sm tracking-[0.2em] uppercase text-white/50">
        <span>Frontend Developer</span>
        <span>Portfolio · 2026</span>
      </div>

      <div className="flex flex-col items-center text-center gap-8">
        <div className="flex items-center gap-3 bg-primary/10 border border-primary/30 rounded-full pl-2 pr-5 py-2">
          <span className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-lg">
            👨‍💻
          </span>
          <span className="text-sm font-semibold tracking-widest text-primary">정승호</span>
        </div>

        <h1 className="text-6xl sm:text-8xl md:text-9xl font-black uppercase leading-none tracking-tight text-primary">
          Portfolio
        </h1>

        <div className="flex items-center gap-4 border border-white/20 rounded-full px-6 py-3 text-sm sm:text-base text-white/80">
          <span className="text-primary">✦</span>
          <span>Frontend Developer · Vue · React · TypeScript · 3~5년 경력</span>
          <span className="text-primary">✦</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            to="/projects"
            className="px-8 py-3 bg-primary hover:bg-primary-dark text-slate-900 hover:text-white rounded-full font-semibold transition-colors duration-200"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3 border border-white/30 hover:border-primary text-white/80 hover:text-primary rounded-full font-semibold transition-colors duration-200"
          >
            Contact Me
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs sm:text-sm tracking-[0.15em] uppercase text-white/40">
        <span>github.com/Jshtoc</span>
        <span>tkdqja0517@gmail.com</span>
      </div>
    </section>
  )
}
