import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { CursorGlow } from '@/components/CursorGlow'
import LiquidEther from '@/components/react-bits/LiquidEther'
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

  return (
    <div className="noise-overlay relative flex min-h-screen flex-col">
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
        <LiquidEther
          colors={['#22d3ee', '#7c3aed', '#f472b6']}
          mouseForce={22}
          cursorSize={110}
          resolution={0.5}
          autoDemo
          autoSpeed={0.45}
          autoIntensity={2}
        />
      </div>
      <CursorGlow />
      <div className="pointer-events-none fixed inset-0 z-0 grid-bg opacity-15" aria-hidden />
      <Navbar />
      <main className="relative z-10 flex-1 pt-[4.5rem]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
