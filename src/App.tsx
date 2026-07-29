import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import SplashScreen from './components/SplashScreen'
import { ThemeProvider } from './context/ThemeContext'
import HomePage from './pages/HomePage'
import ProjectDetailPage from './pages/Projects/ProjectDetailPage'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <SplashScreen />
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="projects/:slug" element={<ProjectDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
