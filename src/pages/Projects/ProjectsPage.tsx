import ProjectCard, { type Project } from './ProjectCard'

const projects: Project[] = [
  {
    title: 'T 다이렉트샵 (SKT)',
    description:
      'SKT 공식 온라인 판매 채널의 유선(인터넷·TV·전화) 파트를 기획·디자인 협의부터 배포까지 100% 단독 개발. Vue 2 Options API → Vue 3 Composition API, Nuxt 2 → Nuxt 4 마이그레이션을 SSR 구조 재설계까지 포함해 주도했습니다.',
    tags: ['Vue 3', 'Nuxt 4', 'TypeScript', 'Pinia'],
  },
  {
    title: 'SKT 테크 아카데미',
    description:
      'Claude Code 기반 바이브 코딩(Vibe Coding)으로 개발한 풀스택 서비스. Next.js App Router + React Server Component 구조를 설계하고, 지원 신청 폼·관리자 대시보드 등 주요 페이지와 공통 UI 컴포넌트 25종을 구현했습니다.',
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Prisma'],
  },
  {
    title: 'AI-Cloud 플랫폼 (SKT)',
    description:
      '클라우드 리소스 모니터링 대시보드 컴포넌트를 Vue 3 Composition API로 개발하고, 공통 UI 컴포넌트 라이브러리 설계에 참여해 재사용률과 디자인 일관성을 높였습니다.',
    tags: ['Vue 3', 'Pinia', 'Vite'],
  },
  {
    title: '나눔에너지',
    description:
      '웹 퍼블리싱 100% 담당으로 제작한 웹사이트. HTML5·CSS·jQuery 기반 반응형 마크업 및 인터랙션을 구현했습니다.',
    tags: ['HTML5', 'CSS', 'jQuery'],
    demo: 'https://www.energyplanner.ai/',
  },
]

export default function ProjectsPage() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          My <span className="text-primary-dark">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
