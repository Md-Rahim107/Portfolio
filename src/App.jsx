import { Routes, Route } from 'react-router-dom'
import Navbar          from './components/Navbar'
import Footer          from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import Modal           from './components/Modal'

// Pages (each page = one route)
import HomePage        from './pages/HomePage'
import ProjectsPage    from './pages/ProjectsPage'
import BlogPage        from './pages/BlogPage'
import ContactPage     from './pages/ContactPage'
import NotFoundPage    from './pages/NotFoundPage'

export default function App() {
  return (
    <>
      {/* Navbar is always visible across all routes */}
      <Navbar />

      {/* React Router: renders the matching page component */}
      <Routes>
        <Route path="/"          element={<HomePage />} />
        <Route path="/projects"  element={<ProjectsPage />} />
        <Route path="/blog"      element={<BlogPage />} />
        <Route path="/contact"   element={<ContactPage />} />
        <Route path="*"          element={<NotFoundPage />} />
      </Routes>

      <Footer />
      <FloatingButtons />

      {/* Global modal — controlled by Redux ui.modalOpen */}
      <Modal />
    </>
  )
}
