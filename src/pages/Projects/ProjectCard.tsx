export interface Project {
  title: string
  description: string
  tags: string[]
  github?: string
  demo?: string
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:border-primary-dark/50 hover:shadow-md transition-all duration-300 flex flex-col">
      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
        <span className="text-xl">🚀</span>
      </div>
      <h3 className="text-lg font-semibold text-slate-900 mb-2">{project.title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span key={tag} className="text-xs px-2 py-1 bg-primary/15 text-primary-dark rounded-md">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-slate-500 hover:text-primary-dark transition-colors"
          >
            GitHub →
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-slate-500 hover:text-primary-dark transition-colors"
          >
            Live Demo →
          </a>
        )}
      </div>
    </div>
  )
}
