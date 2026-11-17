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
 * Architecture diagram. Below lg (stacked under the text) it keeps a 640px
 * minimum width and the frame scrolls sideways on narrow screens; the frame is
 * a labelled, focusable region so keyboard users can scroll it too. From lg it
 * sits in the feature's right column and scales to fit.
 */
function Diagram({ project, image }: { project: Project; image: NonNullable<Project["image"]> }) {
  const captionId = `project-${project.slug}-diagram`;
  return (
    <figure className="min-w-0" aria-labelledby={captionId}>
      <div
        role="region"
        tabIndex={0}
        aria-labelledby={captionId}
        className="diagram-scroll overflow-x-auto border border-line bg-ink"
      >
        <div className="min-w-[640px] lg:min-w-0">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(min-width: 1152px) 640px, (min-width: 1024px) 58vw, (min-width: 768px) calc(100vw - 48px), 640px"
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

/** Bulleted highlights with the muted diamond marker. */
function Highlights({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 grid gap-3">
      {items.map((h) => (
        <li key={h} className="t-small flex gap-3 text-text-2">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-muted" aria-hidden="true" />
          {h}
        </li>
      ))}
    </ul>
  );
}

function TechTags({ tech }: { tech: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Technologies">
      {tech.map((t) => (
        <Tag key={t}>{t}</Tag>
      ))}
    </ul>
  );
}

function SourceButton({ project }: { project: Project }) {
  return (
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
  );
}

/**
 * The flagship project as a large card spanning the full grid width: same card
 * treatment as the others, bigger padding and type. Text on the left and a
 * large diagram on the right from lg; stacked below lg.
 */
function FeatureProject({ project }: { project: Project }) {
  const titleId = `project-${project.slug}`;
  return (
    <Card as="article" highlight aria-labelledby={titleId} className="min-w-0 md:col-span-2 lg:col-span-3">
      <Strike />
      <div
        className={
          project.image ? "grid items-center gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12" : "max-w-3xl"
        }
      >
        <div className="min-w-0">
          <Eyebrow>{project.category}</Eyebrow>
          <h3 id={titleId} className="t-h2 mt-3 text-text">
            {project.title}
          </h3>
          <p className="t-lead mt-6 border-l-2 border-gold pl-4 font-medium text-text">{project.impact}</p>
          <p className="t-body mt-4">{project.description}</p>
          <Highlights items={project.highlights} />
          <div className="mt-8">
            <TechTags tech={project.tech} />
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <SourceButton project={project} />
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
          </div>
        </div>
        {project.image && <Diagram project={project} image={project.image} />}
      </div>
    </Card>
  );
}

/**
 * A compact project card. Anatomy, top to bottom: category eyebrow, title,
 * impact lead (gold left rule), one-sentence description, highlights, then
 * tech tags and the source action.
 */
function ProjectCard({ project, className }: { project: Project; className?: string }) {
  const titleId = `project-${project.slug}`;
  return (
    <Card as="article" highlight size="sm" aria-labelledby={titleId} className={`flex min-w-0 flex-col ${className ?? ""}`}>
      <Strike />
      <Eyebrow>{project.category}</Eyebrow>
      <h3 id={titleId} className="t-h3 mt-3 text-text">
        {project.title}
      </h3>
      <p className="t-body mt-4 border-l-2 border-gold pl-4 font-medium text-text">{project.impact}</p>
      <p className="t-small mt-4 text-text-2">{project.description}</p>
      <Highlights items={project.highlights} />
      <div className="mt-auto flex flex-col gap-4 pt-8">
        <TechTags tech={project.tech} />
        <div>
          <SourceButton project={project} />
        </div>
      </div>
    </Card>
  );
}

/** One card grid: the featured project as a full-width card, then the rest as compact cards. */
export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => p !== featured);
  return (
    <Section id="projects" index="02" kanji="作" title="Projects">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured && <FeatureProject project={featured} />}
        {rest.map((p, i) => {
          // At two columns an odd last card spans both instead of leaving a hole.
          const lastOdd = i === rest.length - 1 && rest.length % 2 === 1;
          return <ProjectCard key={p.slug} project={p} className={lastOdd ? "md:col-span-2 lg:col-span-1" : undefined} />;
        })}
      </div>
    </Section>
  );
}
