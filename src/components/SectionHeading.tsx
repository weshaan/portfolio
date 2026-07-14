import type { ReactNode } from 'react'
import clsx from 'clsx'
import BlurText from '@/components/react-bits/BlurText'

type Props = {
  eyebrow?: string
  title: string
  subtitle?: ReactNode
  align?: 'left' | 'center'
  className?: string
  trailing?: ReactNode
}

export default function SectionHeading({ eyebrow, title, subtitle, align = 'left', className, trailing }: Props) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={clsx('mb-10 flex flex-col gap-3', alignClass, className)}>
      {eyebrow && (
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-2">{eyebrow}</span>
      )}
      <div className={clsx(trailing && 'flex w-full items-start justify-between gap-4')}>
        <BlurText
          text={title}
          as="span"
          className={`font-display text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl ${trailing ? 'min-w-0 flex-1' : ''} ${align === 'center' ? 'justify-center' : ''}`}
          delay={30}
          animateBy="words"
          stepDuration={0.4}
        />
        {trailing}
      </div>
      {subtitle && <p className="max-w-2xl text-base text-muted sm:text-lg">{subtitle}</p>}
    </div>
  )
}
