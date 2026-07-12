import BlurText from '@/components/react-bits/BlurText'

type Props = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({ eyebrow, title, subtitle, align = 'left' }: Props) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`mb-10 flex flex-col gap-3 ${alignClass}`}>
      {eyebrow && (
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-2">{eyebrow}</span>
      )}
      <BlurText
        text={title}
        as="span"
        className={`text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl ${align === 'center' ? 'justify-center' : ''}`}
        delay={30}
        animateBy="words"
        stepDuration={0.4}
      />
      {subtitle && <p className="max-w-2xl text-base text-muted sm:text-lg">{subtitle}</p>}
    </div>
  )
}
