import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <Link className={styles.logo} to="/">zm<span>magic</span></Link>
        <nav className={styles.links}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <p className={styles.copy}>© {new Date().getFullYear()} zmmagic. All rights reserved.</p>
      </div>
    </footer>
  )
}
