import { Link } from 'react-router-dom'
import AboutPage from './AboutPage'
import ProjectsPage from './Projects/ProjectsPage'
import Reveal from '../components/Reveal'

export default function HomePage() {
  return (
    <>
    <section id="home" className="relative min-h-screen bg-bg text-fg flex flex-col justify-end px-6 sm:px-12 pt-32 pb-20 sm:pb-24">
      <div className="hidden lg:flex absolute right-6 sm:right-12 top-1/2 -translate-y-1/2 flex-col items-center gap-4">
        <span className="font-display text-xs tracking-[0.3em] uppercase text-muted [writing-mode:vertical-rl]">Scroll</span>
        <span className="relative w-px h-16 bg-line overflow-hidden">
          <span className="absolute inset-x-0 top-0 h-6 bg-primary animate-scroll-line" />
        </span>
      </div>

      <div className="w-full flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
        <div>
          <Reveal>
            <p className="font-display text-sm font-semibold tracking-widest uppercase text-muted mb-4">Frontend Developer</p>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="font-display text-6xl sm:text-8xl md:text-9xl font-black tracking-tight leading-[0.9] mb-8">
              <span className="block">JUNG</span>
              <span className="block">SEUNG HO</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="max-w-xl text-lg text-muted leading-relaxed mb-8">
              Vue와 React를 넘나들며 서비스를 구축하는 3~5년차 프론트엔드 개발자입니다.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <Link
              to="/#work"
              className="font-display inline-block px-8 py-3 bg-primary hover:bg-primary-dark text-slate-900 hover:text-white rounded-full font-semibold transition-colors duration-200"
            >
              View Work
            </Link>
          </Reveal>
        </div>

        <Reveal delay={300} className="flex flex-row flex-wrap lg:flex-col items-start lg:items-end gap-3">
          <span className="font-display inline-flex items-center gap-2 px-4 py-2 border border-line rounded-full text-sm whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Available for work
          </span>
          <span className="font-display px-4 py-2 border border-line rounded-full text-sm text-muted whitespace-nowrap">
            Vue · React · TypeScript
          </span>
        </Reveal>
      </div>
    </section>

    <AboutPage />
    <ProjectsPage />
    </>
  )
}
