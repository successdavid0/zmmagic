import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import styles from './Nav.module.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={`container ${styles.inner}`}>
          <Link className={styles.logo} to="/" onClick={close}>
            zm<span>magic</span>
          </Link>

          <ul className={styles.links}>
            <li><NavLink to="/"        end className={({ isActive }) => isActive ? styles.active : ''}>Home</NavLink></li>
            <li><NavLink to="/about"       className={({ isActive }) => isActive ? styles.active : ''}>About</NavLink></li>
            <li><NavLink to="/contact"     className={({ isActive }) => isActive ? styles.active : ''}>Contact</NavLink></li>
          </ul>

          <div className={styles.cta}>
            <Link to="/contact"       className={styles.btnOutline}>Send an email</Link>
            <Link to="/contact#book"  className={styles.btnPrimary}>Book a call</Link>
          </div>

          <button
            className={`${styles.hamburger} ${open ? styles.hamburgerOpen : ''}`}
            aria-label="Toggle menu"
            onClick={() => setOpen(o => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`${styles.mobile} ${open ? styles.mobileOpen : ''}`}>
        <NavLink to="/"       end onClick={close}>Home</NavLink>
        <NavLink to="/about"      onClick={close}>About</NavLink>
        <NavLink to="/contact"    onClick={close}>Contact</NavLink>
        <Link    to="/contact#book" className={styles.btnPrimary} onClick={close} style={{ marginTop: 8 }}>
          Book a call
        </Link>
      </div>
    </>
  )
}
