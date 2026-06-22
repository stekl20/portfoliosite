import styles from './ThemeToggle.module.css'

interface ThemeToggleProps {
  theme: 'light' | 'dark'
  onToggle: (theme: 'light' | 'dark') => void
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <div className={styles.toggle}>
      <button
        className={`${styles.btn} ${theme === 'light' ? styles.active : styles.inactive}`}
        onClick={() => onToggle('light')}
        aria-pressed={theme === 'light'}
      >
        [light]
      </button>
      <button
        className={`${styles.btn} ${theme === 'dark' ? styles.active : styles.inactive}`}
        onClick={() => onToggle('dark')}
        aria-pressed={theme === 'dark'}
      >
        [dark]
      </button>
    </div>
  )
}
