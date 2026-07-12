import { Link } from 'react-router-dom'
import BlurText from '@/components/react-bits/BlurText'
import Magnet from '@/components/react-bits/Magnet'
import ShinyText from '@/components/react-bits/ShinyText'
import SkillMarquee from '@/components/SkillMarquee'
import ProjectCard from '@/components/ProjectCard'
import GitHubStats from '@/components/GitHubStats'
import InstagramStats from '@/components/InstagramStats'
import HomeScrollBackground from '@/components/HomeScrollBackground'
import OrbHoverHint from '@/components/OrbHoverHint'
import Reveal from '@/components/Reveal'
import { Section } from '@/components/layout/PageContainer'
import { projects, site } from '@/data/siteData'

export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 3)

  return (
    <>
      <HomeScrollBackground />

      <section className="relative flex min-h-screen flex-col items-center justify-center px-5 text-center">
        <OrbHoverHint />
        <div className="relative z-10 max-w-4xl translate-y-8 sm:translate-y-10">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 pr-4 backdrop-blur-sm">
            <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-black">
              New
            </span>
            <span className="text-sm text-muted">{site.availability}</span>
          </div>

          <h1 className="text-2xl font-bold leading-snug tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[2.75rem]">
            {site.headline}
          </h1>

          <div className="mx-auto mt-4 max-w-2xl space-y-1 text-sm leading-relaxed text-white/60 sm:text-base">
            <p>{site.subheadline}</p>
            <p>{site.subheadlineSecondary}</p>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/projects"
              className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
            >
              View work
            </Link>
            <Link
              to="/about"
              className="rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-medium text-white/80 backdrop-blur-sm transition-colors hover:border-white/25 hover:text-white"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>

      <div className="relative z-10">
        <SkillMarquee />

        <Section>
          <div className="space-y-6">
            <GitHubStats />
            <InstagramStats />
          </div>
        </Section>

        <Section>
          <Reveal>
            <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-3">Selected work</span>
                <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                  <ShinyText text="Featured projects" speed={4} color="#ececf4" shineColor="#22d3ee" />
                </h2>
              </div>
              <Link to="/projects" className="link-underline text-sm font-medium text-muted hover:text-text">
                See all →
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project, i) => (
              <Reveal key={project.title} delay={i * 0.08}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </Section>

        <Section className="border-y border-border/40 bg-surface/20">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
              <BlurText text="Let's create something bold." as="span" delay={50} animateBy="words" />
            </h2>
            <p className="mt-4 text-base text-muted sm:text-lg">
              Open to internships, full-time roles, and open-source collabs.
            </p>
            <Magnet magnetStrength={3} lerp={0.12} wrapperClassName="mt-8 inline-block">
              <Link to="/contact" className="btn-glow inline-block rounded-full border-gradient px-8 py-3.5 text-sm font-bold">
                Get in touch
              </Link>
            </Magnet>
          </Reveal>
        </Section>
      </div>
    </>
  )
}
