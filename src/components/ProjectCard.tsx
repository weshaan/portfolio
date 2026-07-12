import SpotlightCard from '@/components/react-bits/SpotlightCard'
import type { Project } from '@/data/siteData'

type Props = {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  const hasGithub = project.github && project.github !== '#'

  return (
    <SpotlightCard
      className="group h-full border-border/80 bg-elevated/80 p-0"
      spotlightColor="rgba(124, 58, 237, 0.15)"
    >
      <div className="flex h-full flex-col p-6">
        <div className="mb-3 flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold leading-snug transition-colors group-hover:text-accent-2 sm:text-xl">
            {project.title}
          </h3>
          <div className="flex shrink-0 flex-col items-end gap-1">
            {project.featured && (
              <span className="rounded-full bg-accent/15 px-2 py-0.5 font-mono text-[10px] uppercase text-accent-2">
                Featured
              </span>
            )}
            {project.stars != null && project.stars > 0 && (
              <span className="font-mono text-xs text-muted">★ {project.stars}</span>
            )}
          </div>
        </div>

        <p className="mb-5 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-border bg-void/50 px-2 py-0.5 font-mono text-[10px] text-muted sm:text-xs"
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
