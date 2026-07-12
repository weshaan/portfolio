import BlurText from '@/components/react-bits/BlurText'
import SpotlightCard from '@/components/react-bits/SpotlightCard'
import SkillMarquee from '@/components/SkillMarquee'
import SectionHeading from '@/components/SectionHeading'
import GitHubStats from '@/components/GitHubStats'
import InstagramStats from '@/components/InstagramStats'
import Reveal from '@/components/Reveal'
import { PageContainer, Section } from '@/components/layout/PageContainer'
import { about, education, skills, site, github, social } from '@/data/siteData'

export default function About() {
  return (
    <>
      <Section tight>
        <PageContainer>
          <SectionHeading
            eyebrow="About"
            title={`The mind behind ${site.name.split(' ')[0]}`}
            subtitle="Engineer, builder, open-source contributor — turning curiosity into shipped software."
          />
        </PageContainer>
      </Section>

      <Section tight className="!pt-0">
        <div className="space-y-6">
          <GitHubStats />
          <InstagramStats />
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-3">
            {[about.intro, about.story, about.community].map((text, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <SpotlightCard
                  className="border-border/80 bg-elevated/60"
                  spotlightColor={
                    i === 0
                      ? 'rgba(34, 211, 238, 0.12)'
                      : i === 1
                        ? 'rgba(244, 114, 182, 0.1)'
                        : 'rgba(124, 58, 237, 0.12)'
                  }
                >
                  <p className={`leading-relaxed ${i === 0 ? 'text-base text-text/90 sm:text-lg' : 'text-base text-muted'}`}>
                    {text}
                  </p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>

          <div className="lg:col-span-2">
            <Reveal className="lg:sticky lg:top-24">
              <div className="rounded-2xl border border-border bg-elevated p-6 sm:p-8">
                <img
                  src={github.avatar}
                  alt={site.name}
                  className="mx-auto mb-5 h-24 w-24 rounded-xl border border-accent/30 sm:h-28 sm:w-28"
                />
                <p className="text-center font-mono text-xs uppercase tracking-widest text-accent-2">Profile</p>
                <h3 className="mt-3 text-center text-xl font-bold sm:text-2xl">{site.name}</h3>
                <p className="mt-2 text-center text-sm text-muted sm:text-base">{site.tagline}</p>
                <p className="mt-3 text-center font-mono text-xs text-muted">{site.location}</p>

                <div className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-6">
                  <div className="text-center">
                    <p className="font-mono text-[10px] uppercase text-muted">Focus</p>
                    <p className="mt-1 text-sm font-semibold">LLMs & RAG</p>
                  </div>
                  <div className="text-center">
                    <p className="font-mono text-[10px] uppercase text-muted">Stack</p>
                    <p className="mt-1 text-sm font-semibold">Java + MERN</p>
                  </div>
                </div>

                <a
                  href={social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 block text-center font-mono text-sm text-accent-2 link-underline"
                >
                  github.com/{github.username}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section>
        <Reveal>
          <h3 className="mb-6 text-xl font-bold sm:text-2xl">
            <BlurText text="Education" as="span" delay={30} animateBy="words" />
          </h3>
        </Reveal>
        <div className="space-y-4">
          {education.map((edu) => (
            <Reveal key={edu.school}>
              <SpotlightCard className="border-border/80 bg-elevated/50" spotlightColor="rgba(124, 58, 237, 0.1)">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h4 className="text-lg font-bold sm:text-xl">{edu.school}</h4>
                    <p className="text-sm text-accent-2 sm:text-base">{edu.degree}</p>
                    <p className="mt-2 text-sm text-muted">{edu.detail}</p>
                  </div>
                  <span className="shrink-0 font-mono text-xs text-muted sm:text-sm">{edu.period}</span>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <h3 className="mb-6 text-xl font-bold sm:text-2xl">
            <BlurText text="Skills & tools" as="span" delay={30} animateBy="words" />
          </h3>
        </Reveal>
        <div className="flex flex-wrap gap-2.5">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-border bg-elevated/80 px-3.5 py-1.5 font-mono text-xs text-muted transition-colors hover:border-accent/30 hover:text-text sm:text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </Section>

      <SkillMarquee />
    </>
  )
}
