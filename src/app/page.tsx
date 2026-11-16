import Image from "next/image";
import HornetMark from "@/components/HornetMark";
import { GITHUB_URL, GITHUB_USER, projects, skills, type Project } from "@/data/projects";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

/** GitHub logo glyph. */
function GitHubIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

/** Section heading with an index number, a kanji accent and a gold rule. */
function SectionHeading({ index, kanji, title }: { index: string; kanji: string; title: string }) {
  return (
    <div className="mb-12">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-sm text-gold">{index}</span>
        <h2 className="font-display text-3xl font-bold tracking-wide text-text sm:text-4xl">{title}</h2>
        <span className="ml-auto font-serif text-3xl text-gold/25 select-none" aria-hidden="true">
          {kanji}
        </span>
      </div>
      <div className="blade mt-4" />
    </div>
  );
}

/** Fixed top navigation bar. */
function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line/70 bg-ink/75 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <HornetMark id="nav" className="h-8 w-8" />
          <span className="font-display text-lg font-bold tracking-widest text-gold-bright">{GITHUB_USER}</span>
        </a>
        <div className="hidden items-center gap-8 sm:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm uppercase tracking-[0.2em] text-muted transition-colors hover:text-gold-bright"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="text-muted transition-colors hover:text-gold-bright">
          <GitHubIcon className="h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </a>
      </nav>
    </header>
  );
}

/** Landing section with the name, tagline and emblem. */
function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <span
        className="pointer-events-none absolute -right-10 top-1/2 -translate-y-1/2 font-serif text-[22rem] leading-none text-gold/[0.04] select-none sm:text-[28rem]"
        aria-hidden="true"
      >
        雀蜂
      </span>
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 md:grid-cols-[1.4fr_1fr]">
        <div className="reveal">
          <p className="mb-6 font-mono text-sm tracking-[0.3em] text-gold">◆ SYSTEMS · NETWORKS · TESTING</p>
          <h1 className="font-display text-5xl font-black leading-[1.05] tracking-wide sm:text-7xl">
            <span className="gold-text">{GITHUB_USER}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            I build low-level software in C: shells, packet sniffers and distributed storage. I test it hard enough to
            trust it. Fast, precise and quiet until it matters.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="btn-gold notch px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em]">
              View projects
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost notch flex items-center gap-2 px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em]"
            >
              <GitHubIcon /> GitHub
            </a>
          </div>
        </div>
        <div className="reveal relative mx-auto hidden md:block" style={{ animationDelay: "200ms" }}>
          <div className="absolute inset-0 rounded-full bg-gold/10 blur-3xl" />
          <HornetMark id="hero" className="sting relative h-80 w-80" />
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs tracking-[0.3em] text-muted hover:text-gold"
      >
        SCROLL ↓
      </a>
    </section>
  );
}

/** Short introduction with headline numbers taken from the projects. */
function About() {
  const stats = [
    { value: "4", label: "Public projects" },
    { value: "200+", label: "Automated tests" },
    { value: "6", label: "Protocols decoded" },
    { value: "0", label: "Compiler warnings" },
  ];
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <SectionHeading index="01" kanji="己" title="About" />
      <div className="grid gap-12 md:grid-cols-[1.3fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-muted">
          <p>
            I like working close to the operating system: processes and signals, sockets and threads, bytes on the
            wire. My projects range from a POSIX shell with its own parser to a distributed file system that survives
            storage servers going down.
          </p>
          <p>
            I care as much about proving software works as about writing it. Every project here ships with tests, from
            pytest suites built for full branch coverage to end-to-end scripts that kill servers mid-run.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="card notch p-6">
              <div className="font-display text-4xl font-bold text-gold-bright">{s.value}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * A single project card with highlights, tech tags and a repository link.
 *
 * Featured cards (with an image) and `wide` cards span the full grid width.
 */
function ProjectCard({ project, index, wide }: { project: Project; index: number; wide: boolean }) {
  const featured = Boolean(project.image);
  return (
    <article className={`card notch flex flex-col p-8 ${featured || wide ? "md:col-span-2" : ""}`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="font-mono text-xs text-gold">{String(index + 1).padStart(2, "0")}</span>
          <h3 className="mt-1 font-display text-2xl font-bold tracking-wide text-text">{project.title}</h3>
          <p className="mt-1 text-sm text-gold-bright/80">{project.tagline}</p>
        </div>
        <span className="font-serif text-4xl text-gold/30 select-none" aria-hidden="true">
          {project.kanji}
        </span>
      </div>

      <div className={`mt-6 grid gap-8 ${featured ? "lg:grid-cols-[1fr_1.1fr]" : ""}`}>
        <div>
          <p className="leading-relaxed text-muted">{project.description}</p>
          <ul className={`mt-5 gap-x-10 gap-y-2.5 ${wide && !featured ? "grid md:grid-cols-2" : "space-y-2.5"}`}>
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm leading-relaxed text-text/85">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />
                {h}
              </li>
            ))}
          </ul>
        </div>
        {project.image && (
          <div className="overflow-hidden rounded-sm border border-line bg-white p-2">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              width={1878}
              height={1028}
              className="h-auto w-full"
            />
          </div>
        )}
      </div>

      <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-8">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="border border-line px-2.5 py-1 font-mono text-xs text-gold/90">
              {t}
            </span>
          ))}
        </div>
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="btn-ghost flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]"
        >
          <GitHubIcon /> Source
        </a>
      </div>
    </article>
  );
}

/** True when the project at index `i` would otherwise sit alone in the last grid row. */
function isLastAlone(i: number): boolean {
  const regular = projects.filter((p) => !p.image).length;
  return i === projects.length - 1 && !projects[i].image && regular % 2 === 1;
}

/** Grid of all projects. */
function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <SectionHeading index="02" kanji="作" title="Projects" />
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} wide={isLastAlone(i)} />
        ))}
      </div>
    </section>
  );
}

/** Skill groups drawn from the projects. */
function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <SectionHeading index="03" kanji="技" title="Skills" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((g) => (
          <div key={g.group} className="card notch p-6">
            <h3 className="font-display text-lg font-bold tracking-widest text-gold-bright">{g.group}</h3>
            <div className="blade my-4 opacity-60" />
            <ul className="space-y-2">
              {g.items.map((item) => (
                <li key={item} className="font-mono text-sm text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

/** Contact call-to-action and footer. */
function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-6 pb-16 pt-28">
      <SectionHeading index="04" kanji="連" title="Contact" />
      <div className="card notch flex flex-col items-center gap-6 px-8 py-16 text-center">
        <HornetMark id="contact" className="h-16 w-16" />
        <p className="max-w-xl text-lg text-muted">
          Interested in systems programming, networking or testing work? The code speaks for itself, so take a look
          and get in touch through GitHub.
        </p>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          className="btn-gold notch flex items-center gap-2 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em]"
        >
          <GitHubIcon /> github.com/{GITHUB_USER}
        </a>
      </div>
      <footer className="mt-20 flex flex-col items-center gap-3">
        <div className="blade w-40" />
        <p className="font-mono text-xs tracking-[0.3em] text-muted">
          © {new Date().getFullYear()} {GITHUB_USER.toUpperCase()}
        </p>
      </footer>
    </section>
  );
}

/** Single-page portfolio. */
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
