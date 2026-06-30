interface Project {
  title: string
  description: string
  tags: string[]
  github?: string
  demo?: string
}

const projects: Project[] = [
  {
    title: 'Project 1',
    description: '프로젝트 설명을 여기에 입력하세요. 어떤 문제를 해결했고, 어떤 기술을 사용했는지 간략히 설명합니다.',
    tags: ['React', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/your-username/project1',
    demo: 'https://project1.example.com',
  },
  {
    title: 'Project 2',
    description: '프로젝트 설명을 여기에 입력하세요. 어떤 문제를 해결했고, 어떤 기술을 사용했는지 간략히 설명합니다.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/your-username/project2',
  },
  {
    title: 'Project 3',
    description: '프로젝트 설명을 여기에 입력하세요. 어떤 문제를 해결했고, 어떤 기술을 사용했는지 간략히 설명합니다.',
    tags: ['React', 'Express', 'MongoDB'],
    github: 'https://github.com/your-username/project3',
    demo: 'https://project3.example.com',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          My <span className="text-primary">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-primary/50 transition-colors duration-300 flex flex-col"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <span className="text-xl">🚀</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-md"
                  >
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
          ))}
        </div>
      </div>
    </section>
  )
}
