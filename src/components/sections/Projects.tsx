import Image from "next/image";
import { ExternalLink, GitHubIcon, SectionHeading } from "@/components/ui";
import { projects, type Project } from "@/data/projects";

/** Gold diagonal that "strikes" across the card's cut corner on hover or focus. */
function Strike() {
  return (
    <svg className="strike" viewBox="0 0 40 40" aria-hidden="true">
      <line x1="0" y1="0" x2="40" y2="40" />
    </svg>
  );
}

/**
 * A single project card: category, title, impact line, description,
 * highlights, tech tags, an optional diagram and a link to the source.
 */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const full = project.span === "full";
  const titleId = `project-${project.slug}`;
  return (
    <article aria-labelledby={titleId} className={`edge card flex flex-col p-8 ${full ? "md:col-span-2" : ""}`}>
      <Strike />
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-gold">
            {String(index + 1).padStart(2, "0")} · {project.category.toUpperCase()}
          </p>
          <h3 id={titleId} className="mt-2 font-display text-2xl font-bold tracking-wide text-text">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-muted">{project.tagline}</p>
        </div>
        <span className="kanji card-kanji hidden whitespace-nowrap text-4xl text-gold/40 select-none sm:block" aria-hidden="true">
          {project.kanji}
        </span>
      </div>

      <p className="mt-5 border-l-2 border-gold pl-4 text-base font-medium text-gold-bright">{project.impact}</p>

      <div className={`mt-6 grid gap-8 ${project.image ? "lg:grid-cols-[1fr_1.15fr]" : ""}`}>
        <div>
          <p className="leading-relaxed text-text/85">{project.description}</p>
          <ul className={`mt-5 gap-x-10 gap-y-2.5 ${full && !project.image ? "grid md:grid-cols-2" : "space-y-2.5"}`}>
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm leading-relaxed text-text/80">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" aria-hidden="true" />
                {h}
              </li>
            ))}
          </ul>
        </div>
        {project.image && (
          <figure>
            <ExternalLink href={project.image.full} className="block border border-line transition-colors hover:border-gold">
              <Image
                src={project.image.src}
                alt={project.image.alt}
                width={project.image.width}
                height={project.image.height}
                sizes="(min-width: 1024px) 540px, 100vw"
                className="h-auto w-full"
              />
            </ExternalLink>
            <figcaption className="mt-2 text-right font-mono text-xs text-muted">Architecture · click to view full size</figcaption>
          </figure>
        )}
      </div>

      <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-8">
        <ul className="flex flex-wrap gap-2" aria-label="Technologies">
          {project.tech.map((t) => (
            <li key={t} className="border border-line px-2.5 py-1 font-mono text-xs text-gold/90">
              {t}
            </li>
          ))}
        </ul>
        <ExternalLink
          href={project.repo}
          label={`${project.title} source code on GitHub`}
          className="btn-ghost edge sm-cut flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]"
        >
          <GitHubIcon /> Source
        </ExternalLink>
      </div>
    </article>
  );
}

/** Grid of all projects; each card's width comes from its `span` field. */
export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-24">
      <SectionHeading id="projects-title" index="02" kanji="作" title="Projects" />
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
