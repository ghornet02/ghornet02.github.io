import HornetMark from "@/components/HornetMark";
import Terminal from "@/components/Terminal";
import { ExternalLink, GitHubIcon } from "@/components/ui";
import { GITHUB_URL, GITHUB_USER, ROLE } from "@/data/projects";

/** Landing section: handle, role, a one-line pitch, calls to action and a live-looking terminal. */
export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative flex min-h-[88svh] items-center overflow-hidden pb-16 pt-36 sm:pt-28">
      <span
        className="kanji pointer-events-none absolute -right-16 top-1/2 -translate-y-1/2 text-[16rem] leading-none text-gold/[0.05] select-none sm:text-[26rem]"
        aria-hidden="true"
      >
        雀蜂
      </span>
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.15fr_1fr]">
        <div className="reveal min-w-0">
          <HornetMark id="hero-mobile" className="mb-8 h-24 w-24 lg:hidden" />
          <p className="mb-5 font-mono text-xs tracking-[0.2em] text-gold sm:text-sm sm:tracking-[0.3em]">
            ◆ SYSTEMS · NETWORKS · TESTING
          </p>
          <h1 id="hero-title" className="font-display text-5xl font-black leading-[1.05] tracking-wide sm:text-7xl">
            <span className="gold-text">{GITHUB_USER}</span>
          </h1>
          <p className="mt-4 font-display text-xl text-text sm:text-2xl">{ROLE}</p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-text/85">
            I write C close to the kernel: a POSIX shell, a libpcap packet sniffer and a fault-tolerant distributed
            file system. Everything is backed by over 200 automated tests.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="btn-gold notch px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em]">
              View projects
            </a>
            <ExternalLink
              href={GITHUB_URL}
              className="btn-ghost edge flex items-center gap-2 px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em]"
            >
              <GitHubIcon /> GitHub
            </ExternalLink>
          </div>
        </div>
        <div className="reveal relative min-w-0" style={{ animationDelay: "200ms" }}>
          <div className="glow-pulse absolute -right-6 -top-24 hidden h-72 w-72 rounded-full bg-gold/10 blur-3xl lg:block" />
          <HornetMark id="hero" className="hover-glow absolute -right-4 -top-36 hidden h-44 w-44 lg:block" />
          <div className="relative">
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  );
}
