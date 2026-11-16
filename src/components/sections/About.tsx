import { SectionHeading } from "@/components/ui";
import { stats } from "@/data/projects";

/** Short introduction with headline numbers, each linking to the project it comes from. */
export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-24">
      <SectionHeading id="about-title" index="01" kanji="己" title="About" />
      <div className="grid gap-12 md:grid-cols-[1.3fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-text/85">
          <p>
            I like working close to the operating system: processes and signals, sockets and threads, bytes on the
            wire. My projects range from a POSIX shell with its own parser to a distributed file system that detects
            and recovers from storage servers going down.
          </p>
          <p>
            I care as much about proving software works as about writing it. Every project here ships with tests, from
            pytest suites built for full branch coverage to end-to-end scripts that kill servers mid-run.
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-4">
          {stats.map((s) => {
            const external = s.href.startsWith("http");
            return (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className="edge card block h-full p-6"
                >
                  <span className="block font-display text-4xl font-bold text-gold-bright">{s.value}</span>
                  <span className="mt-2 block text-xs uppercase tracking-[0.2em] text-muted">{s.label}</span>
                  {external && <span className="sr-only"> (opens in a new tab)</span>}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
