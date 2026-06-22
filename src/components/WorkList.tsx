import { experience } from '../data/content'
import { WorkEntry } from './WorkEntry'
import styles from './WorkList.module.css'

export function WorkList() {
  return (
    <main aria-label="Experience">
      <div className={`container ${styles.section}`}>
        {experience.map((entry, index) => (
          <WorkEntry key={entry.id} entry={entry} index={index} />
        ))}
      </div>
    </main>
  )
}
