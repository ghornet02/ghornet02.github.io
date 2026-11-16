import Nav from "@/components/Nav";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import { GITHUB_USER } from "@/data/projects";

/** Single-page portfolio. */
export default function Home() {
  return (
    <>
      <a
        href="#projects"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-gold focus:px-4 focus:py-2 focus:font-semibold focus:text-ink"
      >
        Skip to projects
      </a>
      <div className="scroll-blade" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="mb-12 mt-16 flex flex-col items-center gap-3">
        <div className="blade w-40" />
        <p className="font-mono text-xs tracking-[0.3em] text-muted">
          © {new Date().getFullYear()} {GITHUB_USER.toUpperCase()}
        </p>
      </footer>
    </>
  );
}
