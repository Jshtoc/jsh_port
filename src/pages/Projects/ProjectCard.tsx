import { useNavigate } from 'react-router-dom'
import type { Project } from './projects'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/projects/${project.slug}`)}
      className="bg-white/5 rounded-xl border border-white/10 hover:border-primary/50 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer"
    >
      <div className="h-40 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover ${project.imagePosition === 'top' ? 'object-top' : 'object-center'}`}
          />
        ) : project.toolIcons ? (
          <div className="flex gap-3">
            {project.toolIcons.map((icon, i) => (
              <div key={i} className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2">
                <img src={icon} alt="" className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
        ) : (
          <span className="text-4xl">🚀</span>
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        {project.logo && (
          <div className="h-10 mb-3 flex items-center rounded-lg w-fit overflow-hidden border-2 border-primary">
            <img src={project.logo} alt="" className="h-full w-auto object-contain" />
          </div>
        )}
        <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-white/60 text-sm leading-relaxed flex-1 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-1 bg-primary/15 text-primary rounded-md">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="px-5 py-2.5 bg-primary hover:bg-primary-dark text-slate-900 hover:text-white rounded-full font-semibold text-sm transition-colors duration-200"
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
              className="px-5 py-2.5 bg-primary hover:bg-primary-dark text-slate-900 hover:text-white rounded-full font-semibold text-sm transition-colors duration-200"
            >
              바로가기
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
