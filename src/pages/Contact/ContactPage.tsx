import { useState } from 'react'
import ContactForm from './ContactForm'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="py-24 px-6 bg-gray-900/50">
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
          <ContactForm onSubmitted={() => setSubmitted(true)} />
        )}
      </div>
    </section>
  )
}
