import { Link } from 'react-router-dom'
import profileImg from '../assets/profile.jpg'
import vueIcon from '../assets/icons/vue.svg'
import reactIcon from '../assets/icons/react.svg'
import javascriptIcon from '../assets/icons/javascript.svg'
import html5Icon from '../assets/icons/html5.svg'
import css3Icon from '../assets/icons/css3.svg'
import dockerIcon from '../assets/icons/docker.svg'
import mysqlIcon from '../assets/icons/mysql.svg'
import githubIcon from '../assets/icons/github.svg'
import jiraIcon from '../assets/icons/jira.svg'
import postmanIcon from '../assets/icons/postman.svg'
import bitbucketIcon from '../assets/icons/bitbucket.svg'

interface AboutSection {
  label: string
  title: string
  body: string
}

const sections: AboutSection[] = [
  {
    label: 'Frontend',
    title: 'Vue와 React를 넘나드는 프론트엔드 개발자입니다.',
    body: '안녕하세요! Vue와 React를 넘나들며 서비스를 구축하는 3~5년차 프론트엔드 개발자 정승호입니다.',
  },
  {
    label: 'Career',
    title: '대형 서비스 구축과 마이그레이션을 이끈 경험이 있습니다.',
    body: '소프트웍스 소속 SKT 협력사로 AI-Cloud 플랫폼, T 다이렉트샵(유선 파트 100% 단독 개발), SKT 테크 아카데미 등 대형 서비스 구축에 참여했으며, Vue 2 → Vue 3, Nuxt 2 → Nuxt 4 마이그레이션을 Composition API 전환과 SSR 구조 재설계까지 일관되게 수행한 경험이 있습니다.',
  },
  {
    label: 'AI Collab',
    title: 'Claude Code 기반 바이브 코딩으로 AI 협업 개발을 하고 있습니다.',
    body: '최근에는 Claude Code 기반 바이브 코딩(Vibe Coding)으로 Next.js 풀스택 서비스로 SKT TECH ACADEMY 사이트를 직접 구축하며 AI 개발을 진행하였으며, 서비스 신규 구축부터 레거시 마이그레이션, Docker + AWS + CI/CD 인프라 배포까지 전 사이클을 경험했습니다.',
  },
]

interface Tool {
  name: string
  icon: string
}

interface SkillGroup {
  label: string
  tools: Tool[]
}

const skillGroups: SkillGroup[] = [
  {
    label: 'Frontend',
    tools: [
      { name: 'Vue.js', icon: vueIcon },
      { name: 'React', icon: reactIcon },
      { name: 'JavaScript', icon: javascriptIcon },
      { name: 'HTML5', icon: html5Icon },
      { name: 'CSS3', icon: css3Icon },
    ],
  },
  {
    label: 'Backend / DB',
    tools: [
      { name: 'Docker', icon: dockerIcon },
      { name: 'MySQL', icon: mysqlIcon },
    ],
  },
  {
    label: 'Cooperation',
    tools: [
      { name: 'GitHub', icon: githubIcon },
      { name: 'Jira', icon: jiraIcon },
      { name: 'Postman', icon: postmanIcon },
      { name: 'BitBucket', icon: bitbucketIcon },
    ],
  },
]

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-surface-dark text-white py-24 px-6 sm:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16"><span className="text-primary">About</span> Me</h2>

        <div className="grid md:grid-cols-[280px_1fr] gap-12 mb-20">
          <div className="flex flex-col items-center gap-4">
            <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/40 overflow-hidden">
              <img src={profileImg} alt="내 사진" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-3 w-64">
              <Link
                to="/projects"
                className="px-6 py-3 bg-primary hover:bg-primary-dark text-slate-900 hover:text-white rounded-full font-semibold text-sm text-center transition-colors duration-200"
              >
                Projects 보기 →
              </Link>
              <a
                href="https://github.com/Jshtoc"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 bg-primary hover:bg-primary-dark text-slate-900 hover:text-white rounded-full font-semibold text-sm text-center transition-colors duration-200"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.label}>
                <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">{section.label}</p>
                <h3 className="text-xl font-bold mb-3">{section.title}</h3>
                <p className="text-white/70 leading-relaxed">{section.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8">Skill & Tools</h3>
          <div className="grid sm:grid-cols-3 gap-8">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <p className="text-white/50 text-sm font-semibold tracking-widest uppercase mb-3">{group.label}</p>
                <div className="flex flex-wrap gap-3">
                  {group.tools.map((tool) => (
                    <div
                      key={tool.name}
                      title={tool.name}
                      className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2"
                    >
                      <img src={tool.icon} alt={tool.name} className="w-full h-full object-contain" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
