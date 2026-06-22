import styles from './About.module.css'
import { profile } from '../data/content'

export function About() {
  return (
    <section aria-label="About">
      <div className={`container ${styles.section}`}>
        <p className={styles.label}>/* about */</p>
        <p className={styles.bio}>{profile.about}</p>
      </div>
      <div className="container">
        <hr className={styles.divider} />
      </div>
    </section>
  )
}
