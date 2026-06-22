import type { Tag } from '../data/content'
import styles from './TagPill.module.css'

interface TagPillProps {
  tag: Tag
}

const tagClass: Record<Tag, string> = {
  marketing:    styles.marketing,
  pr:           styles.pr,
  creative:     styles.creative,
  ar:           styles.ar,
  mgmt:         styles.mgmt,
  label:        styles.label,
  ops:          styles.ops,
  partnerships: styles.partnerships,
}

export function TagPill({ tag }: TagPillProps) {
  return (
    <span className={`${styles.pill} ${tagClass[tag]}`}>
      [{tag}]
    </span>
  )
}
