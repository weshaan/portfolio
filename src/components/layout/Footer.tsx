import { site, social, github } from '@/data/siteData'
import { NavLink } from 'react-router-dom'
import { PageContainer } from '@/components/layout/PageContainer'

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border/40 bg-surface/30">
      <PageContainer className="flex flex-col gap-8 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-bold sm:text-xl">{site.name}</p>
          <p className="mt-1 text-sm text-muted">{site.tagline}</p>
          <p className="mt-3 font-mono text-xs text-muted/60">
            © {site.year} · @{github.username}
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <NavLink to="/about" className="link-underline text-muted hover:text-text">
            About
          </NavLink>
          <NavLink to="/projects" className="link-underline text-muted hover:text-text">
            Projects
          </NavLink>
          <a href={social.github} target="_blank" rel="noreferrer" className="link-underline text-muted hover:text-text">
            GitHub
          </a>
          <a href={social.linkedin} target="_blank" rel="noreferrer" className="link-underline text-muted hover:text-text">
            LinkedIn
          </a>
          <a href={social.resume} target="_blank" rel="noreferrer" className="link-underline text-muted hover:text-text">
            Resume
          </a>
        </div>
      </PageContainer>
    </footer>
  )
}
