import { Link, NavLink, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { navLinks, site, social } from '@/data/siteData'
import clsx from 'clsx'

const homeNavLinks = navLinks.filter(
  (link) => link.path === '/about' || link.path === '/projects'
)

export default function Navbar() {
  const location = useLocation()
  const isHome = location.pathname === '/'
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

  const links = isHome ? homeNavLinks : navLinks

  return (
    <header
      className={clsx(
        'fixed left-0 right-0 z-50',
        isHome ? 'top-4 px-4 sm:top-5 sm:px-6' : 'top-0 h-[4.5rem] border-b border-border/40 glass'
      )}
    >
      <div
        className={clsx(
          'mx-auto flex items-center justify-between',
          isHome
            ? 'max-w-3xl rounded-full border border-white/10 bg-void/50 px-3 py-2 backdrop-blur-xl sm:max-w-4xl sm:px-4 sm:py-2.5'
            : 'h-full max-w-6xl px-5 sm:px-6 lg:px-8'
        )}
      >
        <NavLink to="/" className="group flex items-center gap-2.5">
          <span
            className={clsx(
              'flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-transform duration-300 group-hover:scale-105 sm:h-9 sm:w-9 sm:text-sm',
              isHome
                ? 'bg-white text-black'
                : 'border border-border bg-elevated text-gradient'
            )}
          >
            {site.name
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </span>
          <span className={clsx('font-semibold', isHome ? 'text-sm sm:text-base' : 'hidden sm:block')}>
            {site.name.split(' ')[0]}
          </span>
        </NavLink>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                clsx(
                  'rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200',
                  isHome
                    ? isActive
                      ? 'text-white'
                      : 'text-muted hover:text-text'
                    : isActive
                      ? 'bg-accent/15 text-white'
                      : 'text-muted hover:text-text'
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          {isHome ? (
            <Link
              to="/contact"
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition-opacity hover:opacity-90"
            >
              Contact
            </Link>
          ) : (
            <>
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
            </>
          )}
        </div>

        <button
          type="button"
          className={clsx(
            'flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full md:hidden',
            isHome ? 'border border-white/10 bg-white/5' : 'rounded-lg border border-border bg-elevated'
          )}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={clsx('h-0.5 w-4 bg-text transition-all duration-300', menuOpen && 'translate-y-1.5 rotate-45')} />
          <span className={clsx('h-0.5 w-4 bg-text transition-all duration-300', menuOpen && 'opacity-0')} />
          <span className={clsx('h-0.5 w-4 bg-text transition-all duration-300', menuOpen && '-translate-y-1.5 -rotate-45')} />
        </button>
      </div>

      {menuOpen && (
        <div
          className={clsx(
            'glass absolute left-4 right-4 border border-border/60 md:hidden',
            isHome ? 'top-[calc(100%+0.5rem)] rounded-2xl' : 'left-0 right-0 top-[4.5rem] border-b'
          )}
        >
          <nav className="flex flex-col gap-0.5 px-4 py-3">
            {links.map((link) => (
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
            {isHome ? (
              <Link to="/contact" className="rounded-lg px-4 py-3 text-sm font-semibold text-white">
                Contact
              </Link>
            ) : (
              <>
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
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}
