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
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Tailwind CSS', level: 80 },
      { name: 'Next.js', level: 70 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 65 },
      { name: 'Express', level: 60 },
      { name: 'PostgreSQL', level: 55 },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', level: 85 },
      { name: 'Figma', level: 70 },
      { name: 'Docker', level: 50 },
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
