import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
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

  return (
    <div className="noise-overlay relative flex min-h-screen flex-col">
      {isExperience ? (
        <div className="fixed inset-0 z-0 h-screen w-screen" aria-hidden>
          <Hyperspeed effectOptions={experienceHyperspeed} />
        </div>
      ) : !isHome ? (
        <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
          <LiquidEther {...defaultLiquidEther} />
        </div>
      ) : null}
      <CursorGlow />
      {!isExperience && !isHome && (
        <div className="pointer-events-none fixed inset-0 z-0 grid-bg opacity-15" aria-hidden />
      )}
      <Navbar />
      <main className="relative z-10 flex-1 pt-[4.5rem]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
