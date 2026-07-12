import React, { useRef, useState, useCallback } from 'react'
import clsx from 'clsx'

interface SpotlightCardProps extends React.PropsWithChildren {
  className?: string
  spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  spotlightColor = 'rgba(255, 255, 255, 0.25)',
}) => {
  const divRef = useRef<HTMLDivElement>(null)
  const spotlightRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [opacity, setOpacity] = useState(0)

  const updateSpotlight = useCallback(
    (x: number, y: number) => {
      if (!spotlightRef.current) return
      spotlightRef.current.style.background = `radial-gradient(circle at ${x}px ${y}px, ${spotlightColor}, transparent 68%)`
    },
    [spotlightColor],
  )

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!divRef.current || isFocused) return

    const rect = divRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => {
      updateSpotlight(x, y)
      rafRef.current = null
    })
  }

  const handleFocus = () => {
    setIsFocused(true)
    setOpacity(0.85)
  }

  const handleBlur = () => {
    setIsFocused(false)
    setOpacity(0)
  }

  const handleMouseEnter = () => {
    setOpacity(0.85)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
  }

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={clsx(
        'relative overflow-hidden rounded-3xl p-8',
        !className.includes('liquid-glass') && 'border border-neutral-800 bg-neutral-900',
        className,
      )}
    >
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-in-out"
        style={{ opacity }}
      />
      {children}
    </div>
  )
}

export default SpotlightCard
