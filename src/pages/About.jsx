import { Link } from 'react-router-dom'
import { useFadeUp } from '../components/useFadeUp'
import styles from './About.module.css'

const SKILLS = [
  { icon: '🎙️', name: 'Live Space Hosting',    desc: 'Audience management, agenda design, real-time moderation' },
  { icon: '🧭', name: 'Growth Strategy',        desc: 'Positioning, content systems, audience conversion' },
  { icon: '💬', name: 'Brand Communication',    desc: 'Tone of voice, messaging frameworks, copy direction' },
  { icon: '🤝', name: 'Partnership Development',desc: 'Brand deals, event collaboration, co-hosting' },
  { icon: '📊', name: 'Audience Analytics',     desc: 'Data interpretation, performance review, iteration' },
  { icon: '🏗️', name: 'Community Building',     desc: 'Retention strategies, engagement loops, trust architecture' },
]

export default function About() {
  const img    = useFadeUp(0)
  const body   = useFadeUp(0.12)
  const skills = useFadeUp(0)
  const cta    = useFadeUp(0)

  return (
    <>
      {/* ── About Hero ────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>

            {/* Image */}
            <div className={`fade-up ${styles.imgWrap}`} ref={img}>
              <img
                src="/assets/about.jpg"
                alt="zmmagic"
                className={styles.img}
                style={{ objectPosition: 'center 30%' }}
                onError={e => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'flex' }}
              />
              <div className={styles.imgPlaceholder} style={{ display: 'none' }}>
                <svg width="64" height="64" fill="none" stroke="#7a90ab" strokeWidth="1.2" viewBox="0 0 24 24">
                  <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                </svg>
                <span>Add your photo to<br /><strong>public/assets/about.jpg</strong></span>
              </div>
            </div>

            {/* Body */}
            <div className={`fade-up ${styles.body}`} ref={body}>
              <span className={styles.tag}>About</span>
              <h1 className={styles.title}>The person behind the mic</h1>
              <div className={styles.divider} />

              <div className={styles.bio}>
                <p>
                  I'm <strong>zmmagic</strong> — a space host and growth strategist
                  who believes the most powerful thing a professional can do is{' '}
                  <strong>show up consistently and speak clearly</strong>.
                </p>
                <p>
                  I've spent years inside Twitter/X Spaces — not as a listener, but
                  as the person shaping conversations that actually move rooms. I
                  know what keeps an audience, what drives action, and what makes
                  brands memorable in a world full of noise.
                </p>
                <p>
                  On the strategy side, I work with brands and individuals who are
                  ready to stop waiting and start growing. That means honest
                  diagnosis, sharp positioning, and content that does something —
                  not content that just fills a calendar.
                </p>
                <p>
                  If you're looking for someone to tell you what you want to hear,
                  I'm the wrong call. If you want results, let's talk.
                </p>
              </div>

              <div className={styles.heroCtas}>
                <Link to="/contact#book" className={styles.btnPrimary}>Book a call</Link>
                <Link to="/contact"      className={styles.btnOutline}>Send an email</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Skills ────────────────────────────────────────── */}
      <section className={styles.skills}>
        <div className="container">
          <span className={styles.tag}>Expertise</span>
          <h2 className={styles.sectionTitle}>What I bring to the table</h2>

          <div className={`fade-up ${styles.skillsGrid}`} ref={skills}>
            {SKILLS.map(s => (
              <div key={s.name} className={styles.skillPill}>
                <div className={styles.skillIcon}>{s.icon}</div>
                <div>
                  <div className={styles.skillName}>{s.name}</div>
                  <div className={styles.skillDesc}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ────────────────────────────────────── */}
      <section className={styles.bottomCta}>
        <div className="container">
          <div className={`fade-up ${styles.ctaInner}`} ref={cta}>
            <span className={styles.tag}>Work with zmmagic</span>
            <h2 className={styles.sectionTitle} style={{ maxWidth: 520, margin: '20px auto 0' }}>
              Enough reading. Let's have a real conversation.
            </h2>
            <p className={styles.sectionSub} style={{ margin: '18px auto 40px' }}>
              One call is all it takes to figure out if we're a fit.
            </p>
            <div className={styles.heroCtas} style={{ justifyContent: 'center' }}>
              <Link to="/contact#book" className={styles.btnPrimary}>Book a call</Link>
              <Link to="/contact"      className={styles.btnOutline}>Send an email</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
