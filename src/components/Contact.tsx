import { useState, type FormEvent } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const { name, email, message } = form
    const mailtoLink = `mailto:tkdqja0517@gmail.com?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`)}`
    window.location.href = mailtoLink
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 px-6 bg-gray-900/50">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-gray-400 text-center mb-12">
          프로젝트 협업이나 채용 관련 문의를 환영합니다.
        </p>

        {submitted ? (
          <div className="text-center py-12">
            <div className="text-5xl mb-4">✉️</div>
            <p className="text-gray-300">메일 앱이 열렸습니다. 감사합니다!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm text-gray-400 mb-2">이름</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="홍길동"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">이메일</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="example@email.com"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">메시지</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="안녕하세요, ..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
