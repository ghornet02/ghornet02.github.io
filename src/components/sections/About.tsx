import { ExternalLink, LinkArrow, Section } from "@/components/ui";
import { stats } from "@/data/projects";

/**
 * Editorial introduction (no boxes): a large opening sentence, body prose,
 * then a spec-sheet strip of headline numbers, each linking to its source.
 * The strip's rules are vertical from sm, horizontal when stacked below it.
 */
export default function About() {
  return (
    <Section id="about" index="01" kanji="己" title="About">
      <div className="max-w-3xl">
        <p className="t-intro">
          I like working close to the operating system: processes and signals, sockets and threads, bytes on the wire.
        </p>
        <div className="mt-6 space-y-4">
          <p className="t-body">
            My projects range from a POSIX shell with its own parser to a distributed file system that detects and
            recovers from storage servers going down.
          </p>
          <p className="t-body">
            I care as much about proving software works as about writing it. Every project here ships with tests, from
            pytest suites built for full branch coverage to end-to-end scripts that kill servers mid-run.
          </p>
        </div>
      </div>

      <ul className="mt-12 grid grid-cols-1 border-y border-line sm:mt-16 sm:grid-cols-3" aria-label="At a glance">
        {stats.map((s) => {
          const external = s.href.startsWith("http");
          const Link = external ? ExternalLink : "a";
          const cut = s.label.lastIndexOf(" ");
          const head = cut === -1 ? "" : s.label.slice(0, cut);
          const last = s.label.slice(cut + 1);
          return (
            <li
              key={s.label}
              className="min-w-0 border-gold-deep not-first:border-t sm:not-first:border-t-0 sm:not-first:border-l"
            >
              <Link href={s.href} className="stat-link group flex h-full flex-col gap-4 px-1 py-6 sm:px-6 sm:py-8">
                <span className="t-stat-lg stat-value text-text">{s.value}</span>
                {/* Arrow is inline and glued to the last word so it never wraps onto a line alone. */}
                <span className="t-label block leading-normal text-muted group-hover:text-text group-focus-visible:text-text">
                  {head && `${head} `}
                  <span className="whitespace-nowrap">
                    {last}
                    <LinkArrow external={external} className="ml-2 inline-block h-3 w-3 align-[-1px] text-gold" />
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
