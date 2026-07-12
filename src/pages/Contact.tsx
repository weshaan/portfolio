import { useState, type FormEvent } from 'react'
import BlurText from '@/components/react-bits/BlurText'
import Magnet from '@/components/react-bits/Magnet'
import Particles from '@/components/react-bits/Particles'
import SpotlightCard from '@/components/react-bits/SpotlightCard'
import Reveal from '@/components/Reveal'
import { Section } from '@/components/layout/PageContainer'
import { contactMessage, site, social, github } from '@/data/siteData'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = data.get('name') as string
    const email = data.get('email') as string
    const message = data.get('message') as string

    const subject = encodeURIComponent(`Portfolio contact from ${name}`)
    const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`)
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  const links = [
    { label: 'GitHub', href: social.github },
    { label: 'LinkedIn', href: social.linkedin },
    { label: 'Resume', href: social.resume },
  ]

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <Particles
          particleCount={80}
          particleSpread={12}
          speed={0.05}
          particleColors={['#7c3aed', '#22d3ee', '#f472b6']}
          moveParticlesOnHover
          particleHoverFactor={0.4}
          alphaParticles
          particleBaseSize={70}
        />
      </div>

      <Section className="relative">
        <Reveal className="mb-12 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-2">Contact</span>
          <h1 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            <BlurText text={contactMessage.title} as="span" delay={40} animateBy="words" />
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-base text-muted sm:text-lg">{contactMessage.subtitle}</p>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal delay={0.05}>
            <SpotlightCard className="border-border/80 bg-elevated/80" spotlightColor="rgba(34, 211, 238, 0.12)">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-lg border border-border bg-void/60 px-4 py-3 text-base outline-none transition-colors focus:border-accent/40"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-border bg-void/60 px-4 py-3 text-base outline-none transition-colors focus:border-accent/40"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full resize-none rounded-lg border border-border bg-void/60 px-4 py-3 text-base outline-none transition-colors focus:border-accent/40"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <Magnet magnetStrength={3} lerp={0.12} wrapperClassName="w-full">
                  <button
                    type="submit"
                    className="btn-glow w-full rounded-lg bg-gradient-to-r from-accent to-accent-2 py-3.5 text-sm font-bold text-void"
                  >
                    {sent ? 'Opening mail client…' : 'Send message'}
                  </button>
                </Magnet>

                <p className="font-mono text-[10px] text-muted/60">
                  Opens your email app · update site.email in siteData.ts
                </p>
              </form>
            </SpotlightCard>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal delay={0.1}>
              <SpotlightCard className="border-border/80 bg-elevated/80" spotlightColor="rgba(124, 58, 237, 0.12)">
                <p className="font-mono text-xs uppercase tracking-wider text-muted">Direct</p>
                <div className="mt-4 flex items-center gap-4">
                  <img src={github.avatar} alt="" className="h-14 w-14 rounded-lg border border-accent/30" />
                  <div>
                    <p className="text-xl font-bold">{site.name}</p>
                    <p className="text-sm text-muted">{site.location}</p>
                  </div>
                </div>
                <p className="mt-4 font-mono text-sm text-accent-2">{site.email}</p>
              </SpotlightCard>
            </Reveal>

            <Reveal delay={0.15}>
              <SpotlightCard className="border-border/80 bg-elevated/80" spotlightColor="rgba(244, 114, 182, 0.1)">
                <p className="mb-4 font-mono text-xs uppercase tracking-wider text-muted">Links</p>
                <div className="flex flex-col gap-2">
                  {links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-lg border border-border bg-void/40 px-4 py-3 text-sm font-medium transition-colors hover:border-accent/30"
                    >
                      {link.label}
                      <span aria-hidden>↗</span>
                    </a>
                  ))}
                </div>
              </SpotlightCard>
            </Reveal>
          </div>
        </div>
      </Section>
    </div>
  )
}
