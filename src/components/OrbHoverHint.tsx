import clsx from 'clsx'
import type { ReactNode } from 'react'

type OrbHoverHintVariant = 'top-right' | 'bottom-left'

const variants: Record<
  OrbHoverHintVariant,
  {
    position: string
    layout: string
    text: string
    message: ReactNode
    width: string
    path: string
    markerId: string
  }
> = {
  'top-right': {
    position: 'right-[2%] top-[22%] lg:right-[5%] xl:right-[9%]',
    layout: 'flex-row-reverse items-start',
    text: 'pt-1 text-left',
    message: 'hovering the orb makes it angry!',
    width: 'w-48 lg:w-52',
    path: 'M 66 10 C 50 12 24 42 14 78',
    markerId: 'orb-hint-arrow-top-right',
  },
  'bottom-left': {
    position: 'left-[4%] top-[62%] lg:left-[7%] xl:left-[11%]',
    layout: 'flex-row items-end',
    text: 'pb-1 text-right',
    message: (
      <>
        scroll to bottom and move
        <br />
        <span className="whitespace-nowrap">mouse for a plasma trail 👀</span>
      </>
    ),
    width: 'w-40 lg:w-44',
    path: 'M 6 78 C 22 76 48 46 58 10',
    markerId: 'orb-hint-arrow-bottom-left',
  },
}

type OrbHoverHintProps = {
  variant: OrbHoverHintVariant
}

export default function OrbHoverHint({ variant }: OrbHoverHintProps) {
  const config = variants[variant]

  return (
    <div
      className={clsx(
        'pointer-events-none absolute z-10 hidden translate-y-8 gap-2 sm:translate-y-10 md:flex',
        config.position,
        config.layout
      )}
      aria-hidden
    >
      <p
        className={clsx(
          'shrink-0 text-xs font-medium leading-snug text-white/75 lg:text-sm',
          config.width,
          config.text
        )}
      >
        {config.message}
      </p>
      <svg
        viewBox="0 0 72 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-[5.5rem] w-14 shrink-0 text-white lg:h-[6.5rem] lg:w-16"
        aria-hidden
      >
        <defs>
          <marker
            id={config.markerId}
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="4"
            orient="auto"
          >
            <path d="M0 0 L8 4 L0 8 Z" fill="currentColor" />
          </marker>
        </defs>
        <path
          d={config.path}
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          markerEnd={`url(#${config.markerId})`}
          className="text-white/90"
        />
      </svg>
    </div>
  )
}
