import SpotlightCard from '@/components/react-bits/SpotlightCard'
import type { Project } from '@/data/siteData'
import clsx from 'clsx'

type Props = {
  project: Project
  glass?: boolean
}

export default function ProjectCard({ project, glass = false }: Props) {
  const hasGithub = project.github && project.github !== '#'

  return (
    <SpotlightCard
      className={clsx('group h-full p-0', glass ? 'liquid-glass liquid-glass-hover' : 'border-border/80 bg-elevated/80')}
      spotlightColor="rgba(124, 58, 237, 0.15)"
    >
      <div className="flex h-full flex-col p-6">
        <div className="mb-3 flex items-start justify-between gap-3">
          <h3 className={clsx('text-lg font-bold leading-snug transition-colors sm:text-xl', glass ? 'text-text group-hover:text-accent-2' : 'group-hover:text-accent-2')}>
            {project.title}
          </h3>
          <div className="flex shrink-0 flex-col items-end gap-1">
            {project.featured && (
              <span className="rounded-full bg-accent/15 px-2 py-0.5 font-mono text-[10px] uppercase text-accent-2">
                Featured
              </span>
            )}
            {project.stars != null && project.stars > 0 && (
              <span className={clsx('font-mono text-xs', glass ? 'text-text/70' : 'text-muted')}>★ {project.stars}</span>
            )}
          </div>
        </div>

        <p className={clsx('mb-5 flex-1 text-sm leading-relaxed', glass ? 'text-text/80' : 'text-muted')}>{project.description}</p>

        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={clsx(
                'rounded border px-2 py-0.5 font-mono text-[10px] sm:text-xs',
                glass
                  ? 'border-white/10 bg-void/65 text-text/75'
                  : 'border-border bg-void/50 text-muted',
              )}
            >
              {tag}
            </span>
          ))}
        </div>

        {hasGithub && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="link-underline text-sm font-medium text-accent-2"
          >
            View on GitHub →
          </a>
        )}
      </div>
    </SpotlightCard>
  )
}
