import { Link } from 'react-router-dom'
import './NotFoundPage.css'

export default function NotFoundPage() {
  return (
    <main className="nf-wrap">
      <div className="nf-glow" />
      <h1 className="nf-code">404</h1>
      <p className="nf-title">Page Not Found</p>
      <p className="nf-desc">The page you're looking for doesn't exist or has been moved.</p>
      <Link to="/" className="btn-primary">← Back to Home</Link>
    </main>
  )
}
