import { useFadeIn } from '../hooks/useFadeIn'
import './About.css'

const skills = ['n8n','Python','LangChain','Google Gemini','Groq','Qdrant','RAG','MCP Servers','Telegram Bots','Google Sheets API','Webhooks','Error Workflows']
const stats  = [{ num:'7+', label:'n8n Projects'}, { num:'3+', label:'AI Integrations'}, { num:'100%', label:'Automated'}]

export default function About() {
  const ref = useFadeIn()
  return (
    <section id="about" className="section section-alt" ref={ref}>
      <div className="section-header fade-in">
        <span className="section-tag">Who I Am</span>
        <h2 className="section-title">About Me</h2>
        <div className="section-line" />
      </div>
      <div className="about-grid">
        <div className="about-text fade-in">
          <p>I'm an AI Automation Engineer from Bangladesh, specialising in building end-to-end intelligent workflows with <strong>n8n</strong>. I turn manual, repetitive processes into fully automated pipelines — from lead generation and contact hygiene to AI-powered customer support and delivery management.</p>
          <p>My projects span RAG systems backed by Qdrant & Google Gemini, Telegram-driven personal assistants with MCP Servers, restaurant chatbots, and a full e-commerce automation backend (GadgetGrid). Every workflow is production-ready with error logging and silent monitoring built in.</p>
          <div className="skills-grid">
            {skills.map((s) => <span key={s} className="skill-chip">{s}</span>)}
          </div>
        </div>
        <div className="fade-in" style={{ animationDelay: '.15s' }}>
          <div className="stats-grid">
            {stats.map((s) => (
              <div key={s.label} className="stat-card">
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="quote-card">
            <p className="quote-text">"The best automation isn't invisible — it's reliable enough that you forget it's there."</p>
            <p className="quote-author">— My n8n Engineering Philosophy</p>
          </div>
        </div>
      </div>
    </section>
  )
}
