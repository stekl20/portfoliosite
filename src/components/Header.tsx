import styles from './Header.module.css'
import { ThemeToggle } from './ThemeToggle'
import { profile } from '../data/content'

interface HeaderProps {
  theme: 'light' | 'dark'
  onToggle: (theme: 'light' | 'dark') => void
}

export function Header({ theme, onToggle }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.nameBlock}>
          <span className={styles.prompt}>$</span>
          <span className={styles.name}>{profile.name}</span>
        </div>

        <div className={styles.roleBlock}>
          // {profile.role}
        </div>

        <div className={styles.actions}>
          <div className={styles.links}>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              [linkedin]
            </a>
            <a
              href={`mailto:${profile.email}`}
              className={styles.link}
            >
              [email]
            </a>
          </div>
          <ThemeToggle theme={theme} onToggle={onToggle} />
        </div>
      </div>
    </header>
  )
}
