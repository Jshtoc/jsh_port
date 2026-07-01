export default function AboutPage() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center">
              <span className="text-8xl">👨‍💻</span>
            </div>
          </div>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              안녕하세요! Vue와 React를 넘나들며 서비스를 구축하는 3~5년차 프론트엔드 개발자 정승호입니다.
            </p>
            <p>
              소프트웍스 소속 SKT 협력사로 AI-Cloud 플랫폼, T 다이렉트샵(유선 파트 100% 단독 개발), SKT 테크 아카데미 등
              대형 서비스 구축에 참여했으며, Vue 2 → Vue 3, Nuxt 2 → Nuxt 4 마이그레이션을 Composition API 전환과
              SSR 구조 재설계까지 일관되게 수행한 경험이 있습니다.
            </p>
            <p>
              최근에는 Claude Code 기반 바이브 코딩(Vibe Coding)으로 Next.js 풀스택 서비스를 구축하며 AI 협업 개발 역량을
              키우고 있고, 서비스 신규 구축부터 레거시 마이그레이션, Docker + AWS + CI/CD 인프라 배포까지 전 사이클을
              경험했습니다.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/Jshtoc"
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:text-secondary transition-colors"
              >
                GitHub →
              </a>
              <a
                href="/resume.pdf"
                className="text-primary hover:text-secondary transition-colors"
              >
                Resume →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
