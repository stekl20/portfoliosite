import { useState, useRef, useCallback, useEffect } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import type { ExperienceEntry } from '../data/content'
import { TagPill } from './TagPill'
import styles from './WorkEntry.module.css'

interface WorkEntryProps {
  entry: ExperienceEntry
  index: number
}

export function WorkEntry({ entry, index }: WorkEntryProps) {
  const [lightboxIndex, setLightboxIndex] = useState(-1)
  const [expandedThumb, setExpandedThumb] = useState<number | null>(null)
  const [expandOrigin, setExpandOrigin] = useState('top left')
  const [showPreview, setShowPreview] = useState(false)
  const [slideTick, setSlideTick] = useState(0)
  const [crossfading, setCrossfading] = useState(false)
  const [slidePaused, setSlidePaused] = useState(false)
  const expandTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const previewTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pauseTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleCompanyEnter = useCallback(() => {
    previewTimer.current = setTimeout(() => setShowPreview(true), 300)
  }, [])

  const handleCompanyLeave = useCallback(() => {
    if (previewTimer.current) clearTimeout(previewTimer.current)
    setShowPreview(false)
  }, [])

  const slides = entry.images?.map(src => ({ src })) ?? []

  const offset = Math.max(1, Math.floor(slides.length / 4))
  const getSlide = (cell: number, tick: number) => slides[(tick + cell * offset) % slides.length]
  const getNextSlide = (cell: number, tick: number) => slides[(tick + 1 + cell * offset) % slides.length]

  useEffect(() => {
    if (slides.length < 4 || slidePaused) return
    const interval = setInterval(() => {
      setCrossfading(true)
      setTimeout(() => {
        setSlideTick(t => t + 1)
        setCrossfading(false)
      }, 1000)
    }, 6000)
    return () => clearInterval(interval)
  }, [slides.length, slidePaused])

  const handleSlideshowClick = () => {
    setSlidePaused(true)
    if (pauseTimer.current) clearTimeout(pauseTimer.current)
    pauseTimer.current = setTimeout(() => setSlidePaused(false), 7000)
  }

  const handleThumbEnter = (i: number, el: HTMLDivElement) => {
    const container = el.parentElement
    if (container) {
      const t = el.getBoundingClientRect()
      const c = container.getBoundingClientRect()
      const expandedSize = 72 * 2.4
      const h = t.left + expandedSize > c.right ? 'right' : 'left'
      const v = t.top + expandedSize > c.bottom ? 'bottom' : 'top'
      setExpandOrigin(`${v} ${h}`)
    }
    expandTimer.current = setTimeout(() => setExpandedThumb(i), 600)
  }

  const handleThumbLeave = () => {
    if (expandTimer.current) clearTimeout(expandTimer.current)
    setExpandedThumb(null)
  }

  return (
    <>
      <div className={styles.entry} data-entry style={{ animationDelay: `${index * 60}ms` }}>
        {/* Left column */}
        <div className={styles.left}>
          <div className={styles.companyLine}>
            <span className={styles.chevron}>&gt;</span>
            {entry.url
              ? (
                <span className={styles.companyLinkWrap}
                  onMouseEnter={handleCompanyEnter}
                  onMouseLeave={handleCompanyLeave}
                >
                  <a className={styles.companyName} href={entry.url} target="_blank" rel="noopener noreferrer">{entry.company}</a>
                  {entry.preview && showPreview && (
                    <div className={styles.previewCard}>
                      <img src={entry.preview} alt={`${entry.company} website`} />
                    </div>
                  )}
                </span>
              )
              : <span className={styles.companyName}>{entry.company}</span>
            }
          </div>
          {entry.location && <div className={styles.meta}>{entry.location}</div>}
          <div className={styles.tags}>
            {entry.tags.map(tag => (
              <TagPill key={tag} tag={tag} />
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className={styles.right}>
          <div className={styles.roles}>
            {entry.roles.map(role => (
              <div key={role.title} className={styles.role}>
                <span className={styles.roleTitle}>{role.title}</span>
                <span>
                  <span className={styles.roleDates}>{role.start} → {role.end}</span>
                  <span className={styles.roleDuration}>// {role.duration}</span>
                </span>
              </div>
            ))}
          </div>

          {entry.description && (
            <p className={styles.description}>
              <span className={styles.descHash}>#</span>
              {entry.description}
            </p>
          )}

          {entry.bullets.length > 0 && (
            <ul className={styles.bullets}>
              {entry.bullets.map((b, i) => (
                <li key={i} className={styles.bullet}>
                  <span className={styles.bulletDot}>•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}

          {entry.documents && entry.documents.length > 0 && (
            <div className={styles.documents}>
              {entry.documents.map((doc, i) => (
                <a
                  key={i}
                  className={styles.docLink}
                  href={doc.src}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [{doc.label}]
                </a>
              ))}
            </div>
          )}

          {slides.length >= 4 && (
            <div className={styles.slideshowGrid} onClick={handleSlideshowClick}>
              {[0, 1, 2, 3].map(cell => (
                <div key={cell} className={styles.slideshowCell}>
                  <img src={getSlide(cell, slideTick).src} alt="" className={styles.cellBase} />
                  <img
                    key={`${cell}-${slideTick}`}
                    src={getNextSlide(cell, slideTick).src}
                    alt=""
                    className={`${styles.cellNext} ${crossfading ? styles.cellNextVisible : ''}`}
                  />
                </div>
              ))}
            </div>
          )}

          {slides.length > 0 && (
            <div className={styles.images}>
              {slides.map((slide, i) => (
                <div
                  key={i}
                  className={`${styles.imgThumb} ${expandedThumb === i ? styles.imgThumbExpanded : ''}`}
                  style={expandedThumb === i ? { transformOrigin: expandOrigin } : undefined}
                  onMouseEnter={e => handleThumbEnter(i, e.currentTarget)}
                  onMouseLeave={handleThumbLeave}
                  onClick={() => setLightboxIndex(i)}
                >
                  <img src={slide.src} alt={`${entry.company} work sample ${i + 1}`} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <hr className={styles.divider} />

      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        slides={slides}
        close={() => setLightboxIndex(-1)}
        on={{ view: ({ index }) => setLightboxIndex(index) }}
      />
    </>
  )
}
