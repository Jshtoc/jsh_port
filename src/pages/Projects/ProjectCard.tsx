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
    <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-primary/50 transition-colors duration-300 flex flex-col">
      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
        <span className="text-xl">🚀</span>
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span key={tag} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-md">
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
            className="text-sm text-gray-400 hover:text-primary transition-colors"
          >
            GitHub →
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-gray-400 hover:text-primary transition-colors"
          >
            Live Demo →
          </a>
        )}
      </div>
    </div>
  )
}
