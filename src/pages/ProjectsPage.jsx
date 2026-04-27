import { useDispatch, useSelector } from 'react-redux'
import { selectProject, clearProject } from '../store/projectSlice'
import { openModal, closeModal }       from '../store/uiSlice'
import { useFadeIn }                   from '../hooks/useFadeIn'
import './ProjectsPage.css'

export default function ProjectsPage() {
  const dispatch  = useDispatch()
  const projects  = useSelector((s) => s.project.list)
  const selected  = useSelector((s) => s.project.selected)
  const modalOpen = useSelector((s) => s.ui.modalOpen && s.ui.modalType === 'project')
  const ref       = useFadeIn()

  const handleOpen = (id) => {
    dispatch(selectProject(id))
    dispatch(openModal('project'))
  }
  const handleClose = () => {
    dispatch(closeModal())
    dispatch(clearProject())
  }

  const handleMouseMove = (e, card) => {
    const r = card.getBoundingClientRect()
    card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%')
    card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%')
  }

  return (
    <main className="page-wrap" ref={ref}>
      <div className="page-hero fade-in">
        <span className="section-tag">What I've Built</span>
        <h1 className="page-title">Featured Projects</h1>
        <div className="section-line" />
      </div>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div
            key={p.id}
            className="project-card fade-in"
            style={{ transitionDelay: `${i * 0.07}s` }}
            onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
            onClick={() => handleOpen(p.id)}
          >
            <div className="card-glow" />
            <div className="card-icon">{p.icon}</div>
            <h3 className="card-title">{p.title}</h3>
            <p className="card-desc">{p.desc}</p>
            <div className="card-tags">
              {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
            <div className="card-footer">
              <span className="card-hint">Click to expand</span>
              <span className="card-arrow">Explore →</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal — shown when a project is selected in Redux */}
      {modalOpen && selected && (
        <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && handleClose()}>
          <div className="modal-box">
            <button className="modal-close" onClick={handleClose}>✕</button>
            <div className="modal-icon">{selected.icon}</div>
            <h2 className="modal-title">{selected.title}</h2>
            <div className="card-tags" style={{ margin: '.75rem 0' }}>
              {selected.tags.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
            <div className="modal-section">
              <h4 className="modal-label">Overview</h4>
              <p className="modal-text">{selected.full}</p>
            </div>
            <div className="modal-section">
              <h4 className="modal-label">Tech Stack</h4>
              <div className="card-tags">
                {selected.stack.map((s) => <span key={s} className="chip-sm">{s}</span>)}
              </div>
            </div>
            <div className="modal-actions">
              <a href="/"   className="btn-primary" target="_blank" rel="noreferrer">🔗 Live Demo</a>
              <a href="https://github.com/Md-Rahim107/AI-Agent/tree/5dd2a4b8a5f2174e2ef8ed6f0ad194b85878107f/SAAS" className="btn-outline" target="_blank" rel="noreferrer">GitHub →</a>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
