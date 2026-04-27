import { useNavigate } from 'react-router-dom'
import './FloatingButtons.css'

export default function FloatingButtons() {
  const navigate = useNavigate()
  return (
    <div className="fab-wrap">
      <button className="fab fab-blue" onClick={() => navigate('/projects')} aria-label="Projects">
        <span className="fab-tooltip">Projects</span>⚡
      </button>
      <button className="fab fab-cyan" onClick={() => navigate('/blog')} aria-label="Blog">
        <span className="fab-tooltip">Blog</span>✍
      </button>
    </div>
  )
}
