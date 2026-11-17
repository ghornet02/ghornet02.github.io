import Nav from "@/components/Nav";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import { ExternalLink } from "@/components/ui";
import { EMAIL, GITHUB_URL, GITHUB_USER, RESUME_URL } from "@/data/projects";

/** Single-page portfolio. */
export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="t-label sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-gold focus:px-4 focus:py-3 focus:text-ink"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="mx-auto max-w-6xl px-5 pb-12 sm:px-6">
        <div className="blade" />
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="t-label text-muted">
            © {new Date().getFullYear()} {GITHUB_USER}
          </p>
          <ul className="t-label flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <ExternalLink href={GITHUB_URL} className="inline-flex min-h-11 items-center text-gold transition-colors hover:text-gold-bright">
                GitHub
              </ExternalLink>
            </li>
            {EMAIL && (
              <li>
                <a href={`mailto:${EMAIL}`} className="inline-flex min-h-11 items-center text-gold transition-colors hover:text-gold-bright">
                  Email
                </a>
              </li>
            )}
            {RESUME_URL && (
              <li>
                <ExternalLink href={RESUME_URL} className="inline-flex min-h-11 items-center text-gold transition-colors hover:text-gold-bright">
                  Resume
                </ExternalLink>
              </li>
            )}
          </ul>
        </div>
      </footer>
    </>
  );
}
