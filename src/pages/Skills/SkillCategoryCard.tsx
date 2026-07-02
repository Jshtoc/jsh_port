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
    <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
      <h3 className="text-primary-dark font-semibold mb-6 text-lg">{category.category}</h3>
      <ul className="space-y-4">
        {category.items.map((skill) => (
          <li key={skill.name}>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-slate-600">{skill.name}</span>
              <span className="text-slate-400">{skill.level}%</span>
            </div>
            <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
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
