import { Link, Navigate, useParams } from 'react-router-dom'
import { projects } from './projects'
import ImageCarousel from './ImageCarousel'
import Reveal from '../../components/Reveal'
import ContributionDonut from '../../components/ContributionDonut'

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const index = projects.findIndex((p) => p.slug === slug)
  const project = projects[index]

  if (!project) {
    return <Navigate to="/#work" replace />
  }

  return (
    <article>
      <section className="relative min-h-screen bg-ink text-cream flex flex-col justify-end overflow-hidden px-6 sm:px-12 pt-32 pb-16">
        {project.image && (
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <img src={project.image} alt="" className="w-full max-w-2xl h-auto object-contain" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/40" />

        <Link
          to="/#work"
          className="font-display absolute top-24 left-6 sm:left-12 z-30 text-sm text-cream/70 hover:text-cream transition-colors"
        >
          ← Work
        </Link>

        <span className="font-display absolute top-28 right-6 sm:right-12 text-9xl font-black text-cream/10 leading-none select-none">
          {String(index + 1).padStart(2, '0')}
        </span>

        <Reveal className="relative z-10 max-w-4xl">
          {project.logo && (
            <div className="h-10 mb-6 flex items-center rounded-lg w-fit overflow-hidden border-2 border-primary">
              <img src={project.logo} alt="" className="h-full w-auto object-contain" />
            </div>
          )}

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black leading-[0.95] tracking-tight mb-6">
            {project.title}
          </h1>

          <p className="text-lg text-cream/70 leading-relaxed max-w-2xl">{project.description}</p>
        </Reveal>
      </section>

      <section className="bg-bg text-fg px-6 sm:px-12 py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_300px] gap-x-16 gap-y-14">
          <div className="min-w-0 space-y-14">
            {project.details?.map((section, i) => (
              <Reveal key={section.title} className={i > 0 ? 'border-t border-line pt-14' : ''}>
                <p className="font-display text-primary text-sm font-semibold tracking-widest uppercase mb-6">
                  {String(i + 1).padStart(2, '0')} — {section.title}
                </p>
                <ul className="space-y-4">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex gap-3 text-base text-fg/80 leading-relaxed">
                      <span className="text-primary shrink-0">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}

            {project.images && (
              <Reveal className={project.details?.length ? 'border-t border-line pt-14' : ''}>
                <p className="font-display text-primary text-sm font-semibold tracking-widest uppercase mb-6">Preview</p>
                <ImageCarousel images={project.images} alt={project.title} />
              </Reveal>
            )}
          </div>

          <Reveal as="aside" className="lg:sticky lg:top-32 h-fit space-y-8 lg:border-l lg:border-line lg:pl-10">
            <div>
              <p className="font-display text-xs font-semibold tracking-widest uppercase text-muted mb-3">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="font-display text-xs px-3 py-1.5 border border-line rounded-full text-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {project.contributions && (
              <div className="border-t border-line pt-8 flex flex-wrap justify-center gap-8">
                {project.contributions.map((c) => (
                  <ContributionDonut key={c.label} percentage={c.percentage} label={c.label} />
                ))}
              </div>
            )}

            {project.meta && (
              <div className="space-y-5 border-t border-line pt-6">
                {project.meta.map((m) => (
                  <div key={m.label}>
                    <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-1">{m.label}</p>
                    <p className="text-sm text-fg/90 leading-relaxed">{m.value}</p>
                  </div>
                ))}
              </div>
            )}

            {(project.github || project.demo) && (
              <div className="flex flex-col gap-3 border-t border-line pt-6">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="font-display px-5 py-2.5 bg-primary hover:bg-primary-dark text-slate-900 hover:text-white rounded-full font-semibold text-sm text-center transition-colors duration-200"
                  >
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="font-display px-5 py-2.5 bg-primary hover:bg-primary-dark text-slate-900 hover:text-white rounded-full font-semibold text-sm text-center transition-colors duration-200"
                  >
                    바로가기
                  </a>
                )}
              </div>
            )}
          </Reveal>
        </div>
      </section>
    </article>
  )
}
