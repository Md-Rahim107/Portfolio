import { useNavigate } from 'react-router-dom'
import './Hero.css'

export default function Hero() {
  const navigate = useNavigate()

  return (
    <section id="hero" className="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />

      <div className="hero-profile-wrap">
        <div className="glow-ring" />
        <div className="glow-ring2" />
        <div className="orbit orbit1"><div className="orbit-dot" /></div>
        <div className="orbit orbit2"><div className="orbit-dot orbit-dot-cyan" /></div>
        <div className="profile-img">
          <img src="/WhatsApp Image 2025-11-14 at 01.15.39_45cdc9b5 (2).jpg" alt="Profile" />
          
        </div>
      </div>

      <div className="hero-content">
        <p className="hero-subtitle">Portfolio · 2024</p>
        <h1 className="hero-title">AI Automation<br />Engineer</h1>
        <p className="hero-desc">
          Building intelligent systems that learn, adapt, and automate.
          Turning complex workflows into elegant, self-sustaining solutions.
        </p>
        <div className="hero-cta">
          {/* React Router navigation via useNavigate */}
          <button className="btn-primary" onClick={() => navigate('/projects')}>⚡ View Projects</button>
          <button className="btn-outline" onClick={() => navigate('/contact')}>Get In Touch →</button>
        </div>

        <div className="hero-socials">
          <a href="https://github.com"   target="_blank" rel="noreferrer" className="social-link" title="GitHub">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-link" title="LinkedIn">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="https://x.com"        target="_blank" rel="noreferrer" className="social-link" title="X">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.76l7.73-8.835L1.254 2.25H8.08l4.258 5.624zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  )
}
