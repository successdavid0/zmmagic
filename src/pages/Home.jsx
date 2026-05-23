import { Link } from 'react-router-dom'
import { useFadeUp } from '../components/useFadeUp'
import styles from './Home.module.css'

/* ── Hero profile image ─────────────────────────────────── */
function ImgOrPlaceholder({ src, alt, placeholderText }) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <img
        src={src} alt={alt}
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
        onError={e => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'flex' }}
      />
      <div className={styles.placeholder} style={{ display: 'none' }}>
        <svg width="56" height="56" fill="none" stroke="#7a90ab" strokeWidth="1.2" viewBox="0 0 24 24">
          <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
        </svg>
        <span dangerouslySetInnerHTML={{ __html: placeholderText }} />
      </div>
    </div>
  )
}

/* ── Proof-of-work card ─────────────────────────────────── */
function WorkCard({ item, delay }) {
  const inner = (
    <div className={styles.workCard} style={{ transitionDelay: `${delay}s` }}>
      {/* Image */}
      <div className={styles.workImgWrap}>
        {item.src ? (
          <img
            src={item.src} alt={item.title}
            className={styles.workImg}
            onError={e => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'flex' }}
          />
        ) : null}
        <div className={styles.workImgPlaceholder} style={{ display: item.src ? 'none' : 'flex' }}>
          <svg width="36" height="36" fill="none" stroke="#7a90ab" strokeWidth="1.2" viewBox="0 0 24 24">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21,15 16,10 5,21"/>
          </svg>
          <span>{item.placeholderLabel}</span>
        </div>
        <span className={styles.workBadge}>{item.type}</span>
      </div>

      {/* Info */}
      <div className={styles.workInfo}>
        <h3 className={styles.workTitle}>{item.title}</h3>
        <div className={styles.workMeta}>
          {item.stats.map(s => (
            <span key={s} className={styles.workStat}>{s}</span>
          ))}
        </div>
        {item.link
          ? <span className={styles.workLink}>View on X <ArrowIcon /></span>
          : <span className={styles.workLinkPlaceholder}>Link coming soon</span>
        }
      </div>
    </div>
  )

  return item.link
    ? <a href={item.link} target="_blank" rel="noopener noreferrer" className={styles.workAnchor}>{inner}</a>
    : <div className={styles.workAnchor}>{inner}</div>
}

/* ── Data ───────────────────────────────────────────────── */
const WORK = [
  {
    src:    '/assets/space-1.jpg',
    type:   '🎙️ X Space',
    title:  'AMA with Coinseal ($100 giveaway)',
    stats:  ['25 Apr 2026', '1h 13m', '1.4K tuned in', '2.2K views'],
    // ← paste the X Space URL here
    link:   'https://x.com/zmmagic0/status/2047281008555315570?s=20',
  },
  {
    src:    '/assets/space-2.jpg',
    type:   '🎙️ X Space',
    title:  'AMA with Coinseal Episode 2 ($200 giveaway)',
    stats:  ['2 May 2026', '1h 32m', '1K tuned in', '7.3K views'],
    // ← paste the X Space URL here
    link:   'https://x.com/zmmagic0/status/2050583814930309461?s=20',
  },
  {
    src:    '/assets/IMG_0265.jpg',
    type:   '⭐ Testimonial',
    title:  'Charly B — Coinseal',
    stats:  ['Community growth', 'Discord', 'Twitter presence'],
    link:   'https://x.com/zmmagic0/status/2050816144345309523?s=20',
  },
]

const SERVICES = [
  { icon: '🎙️', title: 'Space Hosting',      desc: 'Live Twitter/X Spaces that build real-time community, establish authority, and keep audiences coming back. From concept to close — fully managed.' },
  { icon: '📈', title: 'Growth Strategy',    desc: 'Data-informed positioning and content strategy that turns attention into pipeline. Built for brands that are done playing small.' },
  { icon: '🤝', title: 'Brand Partnerships', desc: "Collaborative activations with aligned brands and event organisers. If the audience matches, let's talk." },
]

export default function Home() {
  const heroText   = useFadeUp(0)
  const heroVisual = useFadeUp(0.15)
  const services   = useFadeUp(0)
  const galleryHdr = useFadeUp(0)
  const cta        = useFadeUp(0)

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>

          <div className={`fade-up ${styles.heroText}`} ref={heroText}>
            <div className={styles.eyebrow}>Space Host &amp; Growth Strategist</div>

            <h1 className={styles.heroTitle}>
              Build presence.<br />
              Drive <span className={styles.accent}>growth.</span><br />
              Own the room.
            </h1>

            <p className={styles.heroDesc}>
              zmmagic helps brands and professionals cut through the noise —
              hosting spaces that move audiences and crafting strategies that convert.
            </p>

            <div className={styles.heroCtas}>
              <Link to="/contact#book" className={styles.btnPrimary}>
                <CalIcon /> Book a call
              </Link>
              <Link to="/contact" className={styles.btnOutline}>
                <MailIcon /> Send an email
              </Link>
            </div>

            <div className={styles.scrollHint}>
              <div className={styles.scrollLine} />
              <span>Scroll to see the work</span>
            </div>
          </div>

          <div className={`fade-up ${styles.heroVisual}`} ref={heroVisual}>
            <div className={styles.stat}>
              <div className={styles.statNum}>100+</div>
              <div className={styles.statLabel}>Spaces hosted</div>
            </div>

            <div className={styles.imgWrap}>
              <ImgOrPlaceholder
                src="/assets/profile.jpg"
                alt="zmmagic profile photo"
                placeholderText="Add your photo to<br/><strong>public/assets/profile.jpg</strong>"
              />
            </div>

            <div className={styles.badge}>
              <div className={styles.badgeDot} />
              <div>
                <div className={styles.badgeText}>Available for projects</div>
                <div className={styles.badgeSub}>Booking now</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────── */}
      <section className={styles.services}>
        <div className="container">
          <span className={styles.tag}>What I do</span>
          <h2 className={styles.sectionTitle}>Where I create impact</h2>
          <p className={styles.sectionSub}>Two distinct disciplines, one unified goal: making you impossible to ignore.</p>

          <div className={`fade-up ${styles.servicesGrid}`} ref={services}>
            {SERVICES.map(s => (
              <div key={s.title} className={styles.card}>
                <div className={styles.cardIcon}>{s.icon}</div>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.cardDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Proof of Work ─────────────────────────────────── */}
      <section className={styles.gallery}>
        <div className="container">
          <div className={`fade-up ${styles.galleryHeader}`} ref={galleryHdr}>
            <span className={styles.tag}>Proof of work</span>
            <h2 className={styles.sectionTitle} style={{ marginTop: 16 }}>The receipts</h2>
            <div className={styles.divider} />
            <p className={styles.sectionSub} style={{ margin: '0 auto' }}>
              Real spaces, real results. Actions over claims.
            </p>
          </div>

          <div className={styles.workGrid}>
            {WORK.map((item, i) => (
              <WorkCard key={item.title} item={item} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ────────────────────────────────────── */}
      <section className={styles.bottomCta}>
        <div className="container">
          <div className={`fade-up ${styles.ctaInner}`} ref={cta}>
            <span className={styles.tag}>Ready to work together?</span>
            <h2 className={styles.sectionTitle} style={{ maxWidth: 600, margin: '20px auto 0' }}>
              Let's build something that actually moves the needle.
            </h2>
            <p className={styles.sectionSub} style={{ margin: '18px auto 40px' }}>
              Whether you want to book a space session or explore a longer engagement,
              the first conversation is always free.
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
function ArrowIcon() {
  return (
    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <path d="M7 17L17 7M17 7H7M17 7v10"/>
    </svg>
  )
}
