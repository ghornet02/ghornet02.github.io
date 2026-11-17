import Terminal from "@/components/Terminal";
import { Button, Eyebrow } from "@/components/ui";
import { GITHUB_USER } from "@/data/projects";

/**
 * Landing section: handle eyebrow, the proposition as the H1, a one-line
 * summary of the work, calls to action and a live-looking terminal.
 *
 * Top padding clears the fixed nav: ~101px tall below md (two rows),
 * ~65px from md (one row).
 */
export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative flex min-h-[88svh] items-center overflow-hidden pb-16 pt-32 md:pt-28"
    >
      {/* Single decorative glyph, wide screens only. Sits behind the terminal column. */}
      <span
        className="kanji pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 text-[22rem] leading-none text-ink-3 select-none lg:block"
        aria-hidden="true"
      >
        蜂
      </span>
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1.15fr_1fr]">
        <div className="reveal min-w-0">
          <Eyebrow className="mb-5 leading-normal">{GITHUB_USER} · Systems · Networks</Eyebrow>
          <h1 id="hero-title" className="t-display text-text">
            Systems programmer working in C, <span className="text-gold">close to the kernel.</span>
          </h1>
          <p className="t-lead mt-6 max-w-xl">
            A POSIX shell, a libpcap packet sniffer and a fault-tolerant distributed file system, backed by over 200
            automated tests.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:flex sm:flex-wrap">
            <Button href="#projects">View projects</Button>
            <Button href="#contact" variant="ghost">
              Contact
            </Button>
          </div>
        </div>
        <div className="reveal relative min-w-0" style={{ animationDelay: "200ms" }}>
          {/* Ambient glow; blurred and clipped by the section, so it never overhangs visibly. */}
          <div className="pointer-events-none absolute -right-6 -top-16 hidden h-72 w-72 rounded-full bg-gold-glow blur-3xl lg:block" />
          <div className="relative">
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  );
}
