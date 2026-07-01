interface Skill {
  name: string
  level: number
}

interface SkillCategory {
  category: string
  items: Skill[]
}

const skills: SkillCategory[] = [
  {
    category: 'Frontend',
    items: [
      { name: 'Vue 2 / Vue 3 / Nuxt', level: 90 },
      { name: 'React / Next.js', level: 85 },
      { name: 'TypeScript', level: 85 },
      { name: 'Tailwind CSS / SCSS', level: 80 },
    ],
  },
  {
    category: 'Backend / Infra',
    items: [
      { name: 'AWS (S3, ECR, EC2, SSM)', level: 75 },
      { name: 'Docker / GitHub Actions', level: 75 },
      { name: 'Next.js Route Handlers', level: 70 },
      { name: 'Prisma / PostgreSQL', level: 65 },
    ],
  },
  {
    category: 'Tools & AI',
    items: [
      { name: 'Claude Code (바이브 코딩)', level: 90 },
      { name: 'Git', level: 85 },
      { name: 'Vuex / Pinia / Zustand', level: 80 },
      { name: 'Figma', level: 75 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Tech <span className="text-primary">Skills</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((group) => (
            <div
              key={group.category}
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50"
            >
              <h3 className="text-primary font-semibold mb-6 text-lg">{group.category}</h3>
              <ul className="space-y-4">
                {group.items.map((skill) => (
                  <li key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
