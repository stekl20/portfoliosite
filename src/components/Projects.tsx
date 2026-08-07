import { projects } from '../data/content'
import styles from './Projects.module.css'

export function Projects() {
  return (
    <section aria-label="Projects">
      <div className={`container ${styles.section}`}>
        <div className={styles.heading}>
          <span className={styles.chevron}>&gt;</span>
          <span className={styles.headingText}>PROJECTS</span>
        </div>

        <div className={styles.list}>
          {projects.map(project => (
            <div key={project.id} className={styles.entry}>
              <div className={styles.entryLine}>
                <span className={styles.name}>{project.name}</span>
                <span className={styles.stack}>// {project.stack.join(' · ')}</span>
              </div>
              <p className={styles.description}>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
