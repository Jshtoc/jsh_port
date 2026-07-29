import ProjectCard from './ProjectCard'
import { projects } from './projects'
import Reveal from '../../components/Reveal'

export default function ProjectsPage() {
  return (
    <section id="work" className="min-h-screen bg-bg text-fg py-32 px-6 sm:px-12 border-t border-line">
      <div>
        <Reveal>
          <p className="font-display text-sm font-semibold tracking-widest uppercase text-muted mb-4">Selected Work</p>
          <h2 className="font-display text-6xl md:text-8xl font-black tracking-tight mb-16">Work</h2>
        </Reveal>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={(index % 3) * 100}>
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
