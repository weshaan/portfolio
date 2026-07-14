import type { CSSProperties } from 'react'
import type { Project } from '@/data/siteData'
import clsx from 'clsx'

type Rarity = {
  label: string
  color: string
  glow: string
}

function getRarity(project: Project): Rarity {
  if (project.featured) {
    return { label: 'COVERT', color: '#eb4b4b', glow: 'rgba(235, 75, 75, 0.45)' }
  }
  if (project.stars != null && project.stars >= 4) {
    return { label: 'CLASSIFIED', color: '#d32ce6', glow: 'rgba(211, 44, 230, 0.4)' }
  }
  if (project.stars != null && project.stars >= 1) {
    return { label: 'RESTRICTED', color: '#8847ff', glow: 'rgba(136, 71, 255, 0.4)' }
  }
  return { label: 'MIL-SPEC', color: '#4b69ff', glow: 'rgba(75, 105, 255, 0.35)' }
}

function shortTitle(title: string) {
  return title.split('—')[0].trim().toUpperCase()
}

type Props = {
  project: Project
  index: number
  isActive: boolean
  onHover: (title: string | null) => void
}

export default function ProjectLoadoutCard({ project, index, isActive, onHover }: Props) {
  const hasGithub = project.github && project.github !== '#'
  const href = hasGithub ? project.github : project.link ?? '#'
  const rarity = getRarity(project)
  const slot = String(index + 1).padStart(2, '0')

  return (
    <a
      href={href}
      target={hasGithub ? '_blank' : undefined}
      rel={hasGithub ? 'noreferrer' : undefined}
      className={clsx('cursor-target loadout-card group', isActive && 'loadout-card--active')}
      style={{ '--rarity': rarity.color, '--rarity-glow': rarity.glow } as CSSProperties}
      onMouseEnter={() => onHover(project.title)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(project.title)}
      onBlur={() => onHover(null)}
    >
      <div className="loadout-card__header">
        <span className="loadout-card__slot">SLOT {slot}</span>
        <span className="loadout-card__rarity" style={{ color: rarity.color }}>
          {rarity.label}
        </span>
      </div>

      <div className="loadout-card__preview">
        <img src={project.image} alt="" className="loadout-card__image" loading="lazy" />
        <div className="loadout-card__scanlines" aria-hidden />
        {project.featured && <span className="loadout-card__stattrak">★ STATTRAK™</span>}
      </div>

      <div className="loadout-card__body">
        <h3 className="loadout-card__name">{shortTitle(project.title)}</h3>
        <p className="loadout-card__desc">{project.description}</p>

        <div className="loadout-card__stats">
          <span>FN</span>
          <span className="loadout-card__divider">|</span>
          {project.stars != null && project.stars > 0 && <span>★ {project.stars}</span>}
          {project.stars != null && project.stars > 0 && <span className="loadout-card__divider">|</span>}
          <span>{project.tags.slice(0, 2).join(' · ')}</span>
        </div>

        <div className="loadout-card__tags">
          {project.tags.map((tag) => (
            <span key={tag} className="loadout-card__tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="loadout-card__action">
        <span className="loadout-card__key">[ E ]</span>
        <span>INSPECT REPO</span>
      </div>
    </a>
  )
}

export { shortTitle, getRarity }
