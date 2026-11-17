import Image from "next/image";
import { Button, Card, Eyebrow, GitHubIcon, LinkArrow, Section, Tag } from "@/components/ui";
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
 * Architecture diagram at full card width. Below ~700px of card width the
 * diagram keeps a 640px minimum and the frame scrolls sideways; the frame is a
 * labelled, focusable region so keyboard users can scroll it too.
 */
function Diagram({ project, image }: { project: Project; image: NonNullable<Project["image"]> }) {
  const captionId = `project-${project.slug}-diagram`;
  return (
    <figure className="mt-8" aria-labelledby={captionId}>
      <div
        role="region"
        tabIndex={0}
        aria-labelledby={captionId}
        className="diagram-scroll overflow-x-auto border border-line bg-ink"
      >
        <div className="min-w-[640px]">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(min-width: 1152px) 1088px, (min-width: 768px) calc(100vw - 112px), 640px"
            className="h-auto w-full"
          />
        </div>
      </div>
      <figcaption id={captionId} className="t-small mt-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-muted">
        <span>{project.title} architecture</span>
        <span className="md:hidden" aria-hidden="true">
          Scroll sideways to see the whole diagram →
        </span>
      </figcaption>
    </figure>
  );
}

/**
 * A project card. Anatomy, top to bottom: category eyebrow, title, impact lead
 * (gold left rule), one-sentence description, up to three highlights, tech
 * tags, then source/diagram actions. Cards with an image add the diagram at
 * full card width below the text.
 */
function ProjectCard({ project }: { project: Project }) {
  const full = project.span === "full";
  const titleId = `project-${project.slug}`;
  return (
    <Card as="article" highlight aria-labelledby={titleId} className={full ? "flex min-w-0 flex-col md:col-span-2" : "flex min-w-0 flex-col"}>
      <Strike />
      <Eyebrow>{project.category}</Eyebrow>
      <h3 id={titleId} className="t-h3 mt-3 text-text">
        {project.title}
      </h3>

      <p className="t-lead mt-4 max-w-3xl border-l-2 border-gold pl-4 font-medium text-text">{project.impact}</p>
      <p className="t-body mt-4 max-w-3xl">{project.description}</p>

      <ul className={full ? "mt-6 grid gap-3 md:grid-cols-3 md:gap-6" : "mt-6 grid gap-3"}>
        {project.highlights.map((h) => (
          <li key={h} className="t-small flex gap-3 text-text-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-muted" aria-hidden="true" />
            {h}
          </li>
        ))}
      </ul>

      {project.image && <Diagram project={project} image={project.image} />}

      <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-8">
        <ul className="flex flex-wrap gap-2" aria-label="Technologies">
          {project.tech.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </ul>
        <div className="flex flex-wrap gap-4">
          {project.image && (
            <Button
              href={project.image.full}
              variant="ghost"
              size="sm"
              external
              label={`${project.title} architecture diagram, full size`}
            >
              Full-size diagram
              <LinkArrow external />
            </Button>
          )}
          <Button
            href={project.repo}
            variant="ghost"
            size="sm"
            external
            icon={<GitHubIcon />}
            label={`${project.title} source code on GitHub`}
          >
            Source
          </Button>
        </div>
      </div>
    </Card>
  );
}

/** Grid of all projects; each card's width comes from its `span` field. */
export default function Projects() {
  return (
    <Section id="projects" index="02" kanji="作" title="Projects">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </Section>
  );
}
