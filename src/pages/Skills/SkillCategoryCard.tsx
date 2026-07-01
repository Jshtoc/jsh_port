export interface Skill {
  name: string
  level: number
}

export interface SkillCategory {
  category: string
  items: Skill[]
}

interface SkillCategoryCardProps {
  category: SkillCategory
}

export default function SkillCategoryCard({ category }: SkillCategoryCardProps) {
  return (
    <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
      <h3 className="text-primary font-semibold mb-6 text-lg">{category.category}</h3>
      <ul className="space-y-4">
        {category.items.map((skill) => (
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
  )
}
