import { useState, type FormEvent } from 'react'

interface ContactFormValues {
  name: string
  email: string
  message: string
}

interface ContactFormProps {
  onSubmitted: () => void
}

export default function ContactForm({ onSubmitted }: ContactFormProps) {
  const [form, setForm] = useState<ContactFormValues>({ name: '', email: '', message: '' })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const { name, email, message } = form
    const mailtoLink = `mailto:tkdqja0517@gmail.com?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`)}`
    window.location.href = mailtoLink
    onSubmitted()
  }

  return (
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
  )
}
