import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="text-center py-6 text-gray-500 text-sm border-t border-gray-800">
        © 2025 Portfolio. Built with React + Vite.
      </footer>
    </div>
  )
}
