export default function About() {
  return (
    <section id="about" className="py-24 px-6">
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
              안녕하세요! 사용자 경험을 중심으로 생각하는 프론트엔드 개발자입니다.
            </p>
            <p>
              React와 TypeScript를 주력으로 사용하며, 직관적이고 성능 좋은 웹 애플리케이션 개발을 즐깁니다.
            </p>
            <p>
              새로운 기술을 배우고 적용하는 것을 좋아하며, 팀과의 협업을 통해 더 나은 결과물을 만드는 것을 추구합니다.
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
