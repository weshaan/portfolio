import SpotlightCard from '@/components/react-bits/SpotlightCard'
import SectionHeading from '@/components/SectionHeading'
import Reveal from '@/components/Reveal'
import { Section } from '@/components/layout/PageContainer'
import { experience } from '@/data/siteData'

export default function ExperiencePage() {
  return (
    <Section tight className="relative">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've built & contributed"
        subtitle="From internships to global open-source programs — a trail of shipped code and community impact."
      />

      <div className="relative space-y-6">
        {experience.map((job, index) => (
          <Reveal key={`${job.company}-${job.period}`} delay={index * 0.05}>
            <SpotlightCard
              className="border-border/80 bg-elevated/50"
              spotlightColor={
                index % 3 === 0
                  ? 'rgba(124, 58, 237, 0.12)'
                  : index % 3 === 1
                    ? 'rgba(34, 211, 238, 0.1)'
                    : 'rgba(244, 114, 182, 0.1)'
              }
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-bold sm:text-xl">{job.role}</h3>
                    {job.current && (
                      <span className="rounded-full bg-accent-2/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent-2">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-base text-accent-2">{job.company}</p>
                  <p className="mt-1 font-mono text-xs text-muted">{job.location}</p>
                </div>
                <span className="shrink-0 font-mono text-xs text-muted sm:text-sm">{job.period}</span>
              </div>

              <ul className="mt-5 space-y-2 border-t border-border/50 pt-5">
                {job.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm text-muted sm:text-base">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-3" />
                    {h}
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
