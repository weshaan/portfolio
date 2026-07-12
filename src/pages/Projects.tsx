import SectionHeading from '@/components/SectionHeading'
import ProjectCard from '@/components/ProjectCard'
import Reveal from '@/components/Reveal'
import { Section } from '@/components/layout/PageContainer'
import { projects } from '@/data/siteData'

export default function Projects() {
  return (
    <Section tight>
      <SectionHeading
        eyebrow="Projects"
        title="Things I've built"
        subtitle={
          <>
            From GitHub — RAG systems, full-stack apps, ML pipelines,
            <br />
            and systems programming.
          </>
        }
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 3) * 0.06} className="content-visibility-auto">
            <ProjectCard project={project} glass />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
