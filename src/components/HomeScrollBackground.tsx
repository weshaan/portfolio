import { useEffect, useRef } from 'react'
import Orb from '@/components/react-bits/Orb'
import LiquidEther from '@/components/react-bits/LiquidEther'
import { homeLiquidEther, homeOrb } from '@/config/pageBackgrounds'
import { getLenis } from '@/hooks/useLenis'

function smoothstep(t: number) {
  return t * t * (3 - 2 * t)
}

export default function HomeScrollBackground() {
  const orbRef = useRef<HTMLDivElement>(null)
  const etherRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const update = () => {
      const lenis = getLenis()
      const scrollY = lenis?.scroll ?? window.scrollY
      const range = window.innerHeight * 0.72
      const blend = smoothstep(Math.min(1, Math.max(0, scrollY / range)))

      if (orbRef.current) orbRef.current.style.opacity = String(1 - blend)
      if (etherRef.current) etherRef.current.style.opacity = String(blend)
      if (gridRef.current) gridRef.current.style.opacity = String(blend * 0.15)
    }

    update()

    const lenis = getLenis()
    lenis?.on('scroll', update)
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    return () => {
      lenis?.off('scroll', update)
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
      <div ref={orbRef} className="absolute inset-0 h-full w-full translate-y-8 sm:translate-y-10" style={{ opacity: 1 }}>
        <Orb {...homeOrb} />
      </div>
      <div ref={etherRef} className="absolute inset-0 h-full w-full" style={{ opacity: 0 }}>
        <LiquidEther {...homeLiquidEther} />
      </div>
      <div ref={gridRef} className="absolute inset-0 grid-bg" style={{ opacity: 0 }} />
    </div>
  )
}
