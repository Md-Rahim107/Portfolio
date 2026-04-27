import { useDispatch, useSelector } from 'react-redux'
import {
  setField, touchField, setSubject,
  touchAll, resetForm, submitContact,
} from '../store/contactSlice'
import { useFadeIn } from '../hooks/useFadeIn'
import './ContactPage.css'

const SUBJECTS = ['Project Inquiry', 'Freelance Work', 'Consulting', 'Just Saying Hi', 'Other']
const MAX_MSG  = 500

export default function ContactPage() {
  const dispatch = useDispatch()
  const { fields, touched, errors, status, errorMsg } = useSelector((s) => s.contact)
  const ref = useFadeIn()

  const onChange = (e) => dispatch(setField({ name: e.target.name, value: e.target.value }))
  const onBlur   = (e) => dispatch(touchField({ name: e.target.name, value: e.target.value }))
  const pickChip = (chip) => dispatch(setSubject(fields.subject === chip ? '' : chip))

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(touchAll())
    const hasErrors =
      !fields.name.trim() || !fields.email.trim() ||
      !fields.subject     || fields.message.trim().length < 20 ||
      Object.values(errors).some(Boolean)
    if (hasErrors) return
    dispatch(submitContact(fields))
  }

  const msgLen      = fields.message.length
  const counterCls  = msgLen > MAX_MSG ? 'counter over' : msgLen > MAX_MSG * .85 ? 'counter warn' : 'counter'
  const inputCls    = (name) =>
    `field-input${errors[name] && touched[name] ? ' err' : ''}${!errors[name] && touched[name] && fields[name] ? ' ok' : ''}`

  return (
    <main className="page-wrap" ref={ref}>
      <div className="page-hero fade-in">
        <span className="section-tag">Let's Work Together</span>
        <h1 className="page-title">Get In Touch</h1>
        <div className="section-line" />
      </div>

      <div className="contact-wrap fade-in">
        <div className="contact-card">
          <div className="contact-topbar" />

          {/* ── Success overlay ── */}
          {status === 'success' && (
            <div className="success-overlay">
              <div className="success-icon">✓</div>
              <h3 className="success-title">Message Sent!</h3>
              <p className="success-msg">Thanks! I'll get back to you within 24 hours.</p>
              <button className="success-back" onClick={() => dispatch(resetForm())}>
                Send Another Message
              </button>
            </div>
          )}

          {/* ── Error banner ── */}
          {status === 'error' && (
            <div className="error-banner">⚠ {errorMsg} — please try again.</div>
          )}

          <p className="contact-subtitle">Have a project or idea? Drop me a message.</p>

          <form onSubmit={handleSubmit} noValidate>

            {/* Name + Email */}
            <div className="form-row">
              <div className="form-field">
                <label className="field-label">Your Name</label>
                <div className="field-wrap">
                  <input className={inputCls('name')} type="text" name="name"
                    placeholder="John Doe" value={fields.name}
                    onChange={onChange} onBlur={onBlur} autoComplete="name" />
                  {touched.name && !errors.name && fields.name && <span className="field-check">✓</span>}
                </div>
                {touched.name && errors.name && <span className="field-error">⚠ {errors.name}</span>}
              </div>

              <div className="form-field">
                <label className="field-label">Email Address</label>
                <div className="field-wrap">
                  <input className={inputCls('email')} type="email" name="email"
                    placeholder="you@example.com" value={fields.email}
                    onChange={onChange} onBlur={onBlur} autoComplete="email" />
                  {touched.email && !errors.email && fields.email && <span className="field-check">✓</span>}
                </div>
                {touched.email && errors.email && <span className="field-error">⚠ {errors.email}</span>}
              </div>
            </div>

            {/* Subject chips */}
            <div className="form-field">
              <label className="field-label">Subject</label>
              <div className="chips">
                {SUBJECTS.map((s) => (
                  <button key={s} type="button"
                    className={`chip ${fields.subject === s ? 'active' : ''}`}
                    onClick={() => pickChip(s)}>{s}</button>
                ))}
              </div>
              {touched.subject && errors.subject && <span className="field-error">⚠ {errors.subject}</span>}
            </div>

            {/* Message */}
            <div className="form-field">
              <label className="field-label">Message</label>
              <textarea
                className={`field-input field-textarea${errors.message && touched.message ? ' err' : ''}`}
                name="message" placeholder="Tell me about your project..."
                value={fields.message} onChange={onChange} onBlur={onBlur}
                maxLength={MAX_MSG + 50}
              />
              <div className="field-bottom">
                {touched.message && errors.message
                  ? <span className="field-error">⚠ {errors.message}</span>
                  : <span />}
                <span className={counterCls}>{msgLen}/{MAX_MSG}</span>
              </div>
            </div>

            <button
              className={`submit-btn${status === 'loading' ? ' loading' : ''}`}
              type="submit"
              disabled={status === 'loading'}
            >
              {status === 'loading'
                ? <><span className="btn-spinner" /> Sending...</>
                : 'Send Message ✦'}
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
