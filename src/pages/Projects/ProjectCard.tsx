import { Link, useNavigate } from 'react-router-dom'
import type { Project } from './projects'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/projects/${project.slug}`)}
      className="grid md:grid-cols-2 items-stretch rounded-2xl border border-line overflow-hidden cursor-pointer group md:h-[420px]"
    >
      <div className="p-8 sm:p-10 pb-10 flex flex-col justify-center">
        <p className="font-display text-muted text-sm mb-4">{String(index + 1).padStart(2, '0')}</p>

        {project.logo && (
          <div className="h-8 mb-4 flex items-center rounded-lg w-fit overflow-hidden border-2 border-primary">
            <img src={project.logo} alt="" className="h-full w-auto object-contain" />
          </div>
        )}

        <h3 className="font-display text-3xl md:text-4xl font-black tracking-tight mb-4 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-muted leading-relaxed mb-4 line-clamp-3">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span key={tag} className="font-display text-xs px-2 py-1 border border-line rounded-full text-muted">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <Link
            to={`/projects/${project.slug}`}
            onClick={(e) => e.stopPropagation()}
            className="font-display px-5 py-1.5 border border-line hover:border-fg/40 rounded-full font-semibold text-sm transition-colors duration-200"
          >
            View Detail
          </Link>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="font-display px-5 py-1.5 border border-line hover:border-fg/40 rounded-full font-semibold text-sm transition-colors duration-200"
            >
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="font-display px-5 py-1.5 border border-line hover:border-fg/40 rounded-full font-semibold text-sm transition-colors duration-200"
            >
              바로가기
            </a>
          )}
        </div>
      </div>

      <div
        className="relative h-64 md:h-auto flex items-center justify-center p-10"
        style={{ backgroundColor: project.imageBg }}
      >
        {project.image ? (
          <img src={project.image} alt={project.title} className="max-w-full max-h-full object-contain" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl bg-gradient-to-br from-primary/10 to-secondary/10">
            🚀
          </div>
        )}
      </div>
    </div>
  )
}
