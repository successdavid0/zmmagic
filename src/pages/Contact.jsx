import { useState, useEffect, useRef } from 'react'
import { useFadeUp } from '../components/useFadeUp'
import styles from './Contact.module.css'

const SOCIALS = [
  { icon: '𝕏', label: 'Twitter / X', href: 'https://twitter.com/zmmagic' },
  { icon: 'in', label: 'LinkedIn',    href: 'https://linkedin.com/in/zmmagic' },
]

export default function Contact() {
  const headerRef = useFadeUp(0)
  const infoRef   = useFadeUp(0)
  const formRef   = useFadeUp(0.12)

  const [fields, setFields]   = useState({ name: '', email: '', subject: '', message: '' })
  const [sending, setSending]  = useState(false)
  const [sent, setSent]        = useState(false)
  const [errors, setErrors]    = useState({})

  // Scroll to #book on mount if hash present
  const bookRef = useRef(null)
  useEffect(() => {
    if (window.location.hash === '#book' && bookRef.current) {
      setTimeout(() => {
        const top = bookRef.current.getBoundingClientRect().top + window.scrollY - 80
        window.scrollTo({ top, behavior: 'smooth' })
      }, 100)
    }
  }, [])

  const validate = () => {
    const e = {}
    if (!fields.name.trim())    e.name    = 'Name is required'
    if (!fields.email.trim())   e.email   = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(fields.email)) e.email = 'Enter a valid email'
    if (!fields.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSending(true)
    await new Promise(r => setTimeout(r, 900)) // replace with real endpoint
    setSending(false)
    setSent(true)
  }

  const set = (field) => (e) => {
    setFields(f => ({ ...f, [field]: e.target.value }))
    if (errors[field]) setErrors(err => ({ ...err, [field]: '' }))
  }

  return (
    <>
      {/* ── Header ────────────────────────────────────────── */}
      <section className={styles.header}>
        <div className="container">
          <div className={`fade-up ${styles.headerInner}`} ref={headerRef}>
            <span className={styles.tag}>Get in touch</span>
            <h1 className={styles.title}>Let's start a conversation</h1>
            <p className={styles.sub}>
              Whether it's a quick question or a full brief — reach out.
              I respond to every message personally.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main ──────────────────────────────────────────── */}
      <section className={styles.main}>
        <div className="container">
          <div className={styles.grid}>

            {/* Left: Info */}
            <div className={`fade-up`} ref={infoRef}>

              {/* Book a call */}
              <div id="book" ref={bookRef} className={styles.bookCard}>
                <div className={styles.bookIcon}>📅</div>
                <h2 className={styles.bookTitle}>Book a call</h2>
                <p className={styles.bookDesc}>
                  Pick a time that works for you. First call is always free —
                  no pressure, just a conversation.
                </p>
                {/* Replace href with your Calendly / Cal.com link */}
                <a
                  href="https://calendly.com/zmmagic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnPrimary}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <CalIcon /> Open booking calendar
                </a>
              </div>

              {/* Email */}
              <div className={styles.emailBlock}>
                <div className={styles.emailLabel}>Or email directly</div>
                {/* Replace with real email */}
                <a href="mailto:hello@zmmagic.com" className={styles.emailLink}>
                  <MailIcon /> hello@zmmagic.com
                </a>
              </div>

              {/* Socials */}
              <div className={styles.socials}>
                <div className={styles.socialsLabel}>Find me on</div>
                {SOCIALS.map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    <span className={styles.socialIcon}>{s.icon}</span>
                    <span>{s.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div className={`fade-up ${styles.formWrap}`} ref={formRef}>
              <h2 className={styles.formTitle}>Send a message</h2>

              {sent ? (
                <div className={styles.success}>
                  ✓ Message sent — I'll be in touch shortly.
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className={styles.formRow}>
                    <Field label="Your name" error={errors.name}>
                      <input
                        type="text" placeholder="Jane Smith"
                        value={fields.name} onChange={set('name')}
                        className={errors.name ? styles.inputError : ''}
                      />
                    </Field>
                    <Field label="Email address" error={errors.email}>
                      <input
                        type="email" placeholder="jane@company.com"
                        value={fields.email} onChange={set('email')}
                        className={errors.email ? styles.inputError : ''}
                      />
                    </Field>
                  </div>

                  <Field label="Subject">
                    <input
                      type="text" placeholder="What's this about?"
                      value={fields.subject} onChange={set('subject')}
                    />
                  </Field>

                  <Field label="Message" error={errors.message}>
                    <textarea
                      rows={5}
                      placeholder="Tell me about your project, event, or what you're looking for…"
                      value={fields.message} onChange={set('message')}
                      className={errors.message ? styles.inputError : ''}
                    />
                  </Field>

                  <button type="submit" className={styles.submit} disabled={sending}>
                    {sending ? 'Sending…' : <><SendIcon /> Send message</>}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

/* ── Small helpers ──────────────────────────────────────── */
function Field({ label, error, children }) {
  return (
    <div style={{ marginBottom: 22 }}>
      <label style={{
        display: 'block', fontSize: '.78rem', fontWeight: 600,
        textTransform: 'uppercase', letterSpacing: '.08em',
        color: 'var(--muted)', marginBottom: 8,
      }}>{label}</label>
      {children}
      {error && <p style={{ color: '#f87171', fontSize: '.78rem', marginTop: 5 }}>{error}</p>}
    </div>
  )
}

function CalIcon() {
  return (
    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
    </svg>
  )
}
function MailIcon() {
  return (
    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  )
}
function SendIcon() {
  return (
    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
    </svg>
  )
}
