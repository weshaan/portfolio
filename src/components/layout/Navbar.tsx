import { NavLink, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { navLinks, site, social } from '@/data/siteData'
import clsx from 'clsx'

export default function Navbar() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[4.5rem] border-b border-border/40 glass">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <NavLink to="/" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-elevated text-sm font-bold text-gradient transition-transform duration-300 group-hover:scale-105">
            {site.name
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </span>
          <span className="hidden font-semibold sm:block">{site.name}</span>
        </NavLink>

        <nav className="hidden items-center gap-0.5 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                clsx(
                  'rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-200',
                  isActive ? 'bg-accent/15 text-white' : 'text-muted hover:text-text'
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={social.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-border px-3.5 py-2 text-sm font-medium transition-colors hover:border-accent-2/40 hover:text-accent-2"
          >
            GitHub
          </a>
          <a
            href={social.resume}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border-gradient px-3.5 py-2 text-sm font-semibold"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-border bg-elevated md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={clsx('h-0.5 w-5 bg-text transition-all duration-300', menuOpen && 'translate-y-1.5 rotate-45')} />
          <span className={clsx('h-0.5 w-5 bg-text transition-all duration-300', menuOpen && 'opacity-0')} />
          <span className={clsx('h-0.5 w-5 bg-text transition-all duration-300', menuOpen && '-translate-y-1.5 -rotate-45')} />
        </button>
      </div>

      {menuOpen && (
        <div className="glass absolute left-0 right-0 top-[4.5rem] border-b border-border/60 md:hidden">
          <nav className="flex flex-col gap-0.5 px-5 py-3 sm:px-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  clsx(
                    'rounded-lg px-4 py-3 text-sm font-medium',
                    isActive ? 'bg-accent/15 text-white' : 'text-muted'
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={social.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg px-4 py-3 text-sm font-medium text-accent-2"
            >
              GitHub ↗
            </a>
            <a
              href={social.resume}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg px-4 py-3 text-sm font-medium"
            >
              Resume ↗
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
