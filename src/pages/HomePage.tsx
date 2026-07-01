import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-3xl text-center">
        <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">
          Hello, I'm
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-white">정승호 </span>
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Frontend
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-10">
          Frontend Developer · Vue · React · TypeScript · 3~5년 경력
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/projects"
            className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-colors duration-200"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3 border border-gray-600 hover:border-primary text-gray-300 hover:text-primary rounded-lg font-semibold transition-colors duration-200"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  )
}
