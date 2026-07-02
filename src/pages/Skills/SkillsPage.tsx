import SkillCategoryCard, { type SkillCategory } from './SkillCategoryCard'

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

export default function SkillsPage() {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Tech <span className="text-primary-dark">Skills</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((group) => (
            <SkillCategoryCard key={group.category} category={group} />
          ))}
        </div>
      </div>
    </section>
  )
}
