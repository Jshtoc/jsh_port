import { Link, Navigate, useParams } from 'react-router-dom'
import { projects } from './projects'
import ImageCarousel from './ImageCarousel'

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  return (
    <section className="min-h-screen bg-surface-dark text-white py-24 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto">
        <Link to="/projects" className="text-sm text-white/60 hover:text-primary transition-colors">
          ← Projects
        </Link>

        <div className="grid md:grid-cols-[7fr_3fr] gap-12 mt-8 items-start">
          <div>
            {project.images ? (
              <ImageCarousel images={project.images} alt={project.title} />
            ) : project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-xl border border-white/10"
              />
            ) : project.toolIcons ? (
              <div className="w-full rounded-xl border border-white/10 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center gap-4 py-16">
                {project.toolIcons.map((icon, i) => (
                  <div key={i} className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-3">
                    <img src={icon} alt="" className="w-full h-full object-contain" />
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <div>
            {project.logo && (
              <div className="h-10 mb-3 flex items-center rounded-lg w-fit overflow-hidden border-2 border-primary">
                <img src={project.logo} alt="" className="h-full w-auto object-contain" />
              </div>
            )}

            <h2 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h2>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs px-2 py-1 bg-primary/15 text-primary rounded-md">
                  {tag}
                </span>
              ))}
            </div>

            {project.meta && (
              <dl className="space-y-1.5 mb-6 text-sm">
                {project.meta.map((m) => (
                  <div key={m.label} className="flex gap-3">
                    <dt className="text-white/50 shrink-0 w-20">{m.label}</dt>
                    <dd className="text-white/80">{m.value}</dd>
                  </div>
                ))}
              </dl>
            )}

            <p className="text-white/70 leading-relaxed text-lg mb-8">{project.description}</p>

            <div className="flex items-center gap-6">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
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
                  className="px-5 py-2.5 bg-primary hover:bg-primary-dark text-slate-900 hover:text-white rounded-full font-semibold text-sm transition-colors duration-200"
                >
                  바로가기
                </a>
              )}
            </div>
          </div>
        </div>

        {project.details && (
          <div className="grid sm:grid-cols-2 gap-10 mt-16">
            {project.details.map((section) => (
              <div key={section.title}>
                <h3 className="text-xl font-bold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex gap-2 text-white/70 leading-relaxed">
                      <span className="text-primary shrink-0">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
