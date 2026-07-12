import { skills } from '@/data/siteData'

export default function SkillMarquee() {
  const doubled = [...skills, ...skills]

  return (
    <div className="overflow-hidden border-y border-border/40 bg-surface/20 py-4">
      <div className="marquee-track gap-10 px-4">
        {doubled.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="flex shrink-0 items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-muted sm:text-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-2" />
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
