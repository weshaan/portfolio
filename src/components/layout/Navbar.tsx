import { Link, NavLink, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { navLinks, site } from '@/data/siteData'
import clsx from 'clsx'

const pillNavLinks = navLinks.filter(
  (link) => link.path === '/about' || link.path === '/experience' || link.path === '/projects'
)

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
    <header className="fixed left-0 right-0 top-4 z-50 px-4 sm:top-5 sm:px-6">
      <div className="liquid-glass mx-auto flex max-w-3xl items-center justify-between rounded-full px-3 py-2 sm:max-w-4xl sm:px-4 sm:py-2.5">
        <NavLink to="/" className="group flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs font-bold text-black transition-transform duration-300 group-hover:scale-105 sm:h-9 sm:w-9 sm:text-sm">
            {site.name
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </span>
          <span className="text-sm font-semibold sm:text-base">{site.name.split(' ')[0]}</span>
        </NavLink>

        <nav className="hidden items-center gap-1 md:flex">
          {pillNavLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                clsx(
                  'rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200',
                  isActive ? 'text-white' : 'text-muted hover:text-text'
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition-opacity hover:opacity-90 md:inline-flex"
        >
          Contact
        </Link>

        <button
          type="button"
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm md:hidden"
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
        <div className="liquid-glass absolute left-4 right-4 top-[calc(100%+0.5rem)] rounded-2xl md:hidden">
          <nav className="flex flex-col gap-0.5 px-4 py-3">
            {pillNavLinks.map((link) => (
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
            <Link to="/contact" className="rounded-lg px-4 py-3 text-sm font-semibold text-white">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
