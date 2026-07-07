import ProjectCard from './ProjectCard'
import { projects } from './projects'

export default function ProjectsPage() {
  return (
    <section className="min-h-screen bg-surface-dark text-white flex items-center justify-center py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          My <span className="text-primary">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
