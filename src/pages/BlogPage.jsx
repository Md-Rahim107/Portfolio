import { useDispatch, useSelector } from 'react-redux'
import { selectBlog, clearBlog }   from '../store/blogSlice'
import { openModal, closeModal }   from '../store/uiSlice'
import { useFadeIn }               from '../hooks/useFadeIn'
import './BlogPage.css'

export default function BlogPage() {
  const dispatch  = useDispatch()
  const posts     = useSelector((s) => s.blog.list)
  const selected  = useSelector((s) => s.blog.selected)
  const modalOpen = useSelector((s) => s.ui.modalOpen && s.ui.modalType === 'blog')
  const ref       = useFadeIn()

  const handleOpen = (id) => {
    dispatch(selectBlog(id))
    dispatch(openModal('blog'))
  }
  const handleClose = () => {
    dispatch(closeModal())
    dispatch(clearBlog())
  }

  return (
    <main className="page-wrap" ref={ref}>
      <div className="page-hero fade-in">
        <span className="section-tag">Thoughts & Insights</span>
        <h1 className="page-title">Blog</h1>
        <div className="section-line" />
      </div>

      <div className="blog-grid">
        {posts.map((b, i) => (
          <div
            key={b.id}
            className="blog-card fade-in"
            style={{ transitionDelay: `${i * 0.1}s` }}
            onClick={() => handleOpen(b.id)}
          >
            <div className="blog-hero-img">{b.emoji}</div>
            <div className="blog-body">
              <div className="blog-meta">
                <span className="blog-date">{b.date}</span>
                <span className="blog-read">{b.read} read</span>
              </div>
              <h3 className="blog-title">{b.title}</h3>
              <p className="blog-excerpt">{b.excerpt}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal — driven by Redux state */}
      {modalOpen && selected && (
        <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && handleClose()}>
          <div className="modal-box">
            <button className="modal-close" onClick={handleClose}>✕</button>
            <div className="modal-icon">{selected.emoji}</div>
            <h2 className="modal-title">{selected.title}</h2>
            <div className="blog-meta" style={{ margin: '.75rem 0 1.5rem' }}>
              <span className="blog-date">{selected.date}</span>
              <span className="blog-read">{selected.read} read</span>
            </div>
            <div className="blog-full">
              {selected.content.map((para, i) => <p key={i}>{para}</p>)}
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
