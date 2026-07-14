import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import clsx from 'clsx'
import Navbar from './Navbar'
import Footer from './Footer'
import { CursorGlow } from '@/components/CursorGlow'
import LiquidEther from '@/components/react-bits/LiquidEther'
import Hyperspeed from '@/components/react-bits/Hyperspeed'
import { defaultLiquidEther, experienceHyperspeed } from '@/config/pageBackgrounds'
import { useLenis, getLenis } from '@/hooks/useLenis'

export default function Layout() {
  const location = useLocation()
  useLenis()

  useEffect(() => {
    const lenis = getLenis()
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }
  }, [location.pathname])

  const isHome = location.pathname === '/'
  const isExperience = location.pathname === '/experience'
  const isProjects = location.pathname === '/projects'

  return (
    <div className="noise-overlay relative flex min-h-screen flex-col">
      {isExperience ? (
        <div className="fixed inset-0 z-0 h-screen w-screen" aria-hidden>
          <Hyperspeed effectOptions={experienceHyperspeed} />
        </div>
      ) : isProjects ? (
        <div className="pointer-events-none fixed inset-0 z-0 bg-[#060a12]" aria-hidden>
          <div className="projects-armory__bg projects-armory__bg--layout">
            <div className="projects-armory__speedlines" />
            <div className="projects-armory__grid" />
          </div>
        </div>
      ) : !isHome ? (
        <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
          <LiquidEther {...defaultLiquidEther} />
        </div>
      ) : null}
      {!isHome && !isProjects && <CursorGlow />}
      {!isExperience && !isHome && !isProjects && (
        <div className="pointer-events-none fixed inset-0 z-0 grid-bg opacity-15" aria-hidden />
      )}
      <Navbar />
      <main className={clsx('relative z-10 flex-1', !isHome && 'pt-20')}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
