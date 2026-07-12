import type { ReactNode } from 'react'
import clsx from 'clsx'

type Props = {
  children: ReactNode
  className?: string
  /** Full-bleed sections skip horizontal padding */
  bleed?: boolean
}

/** Consistent page width + horizontal padding */
export function PageContainer({ children, className, bleed }: Props) {
  return (
    <div
      className={clsx(
        'mx-auto w-full max-w-6xl',
        !bleed && 'px-5 sm:px-6 lg:px-8',
        className
      )}
    >
      {children}
    </div>
  )
}

/** Consistent vertical rhythm between sections */
export function Section({
  children,
  className,
  bleed,
  tight,
}: Props & { tight?: boolean }) {
  return (
    <section
      className={clsx(
        tight ? 'py-12 md:py-16' : 'py-16 md:py-20',
        className
      )}
    >
      {bleed ? children : <PageContainer>{children}</PageContainer>}
    </section>
  )
}
