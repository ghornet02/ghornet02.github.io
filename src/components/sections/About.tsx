import { Card, ExternalLink, LinkArrow, Section } from "@/components/ui";
import { stats } from "@/data/projects";

/** Short introduction with headline numbers, each linking to its source. */
export default function About() {
  return (
    <Section id="about" index="01" kanji="己" title="About">
      <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <div className="space-y-6">
          <p className="t-lead">
            I like working close to the operating system: processes and signals, sockets and threads, bytes on the
            wire. My projects range from a POSIX shell with its own parser to a distributed file system that detects
            and recovers from storage servers going down.
          </p>
          <p className="t-lead">
            I care as much about proving software works as about writing it. Every project here ships with tests, from
            pytest suites built for full branch coverage to end-to-end scripts that kill servers mid-run.
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => {
            const external = s.href.startsWith("http");
            const lastOdd = i === stats.length - 1 && stats.length % 2 === 1;
            return (
              <li key={s.label} className={lastOdd ? "col-span-2" : undefined}>
                <Card as={external ? ExternalLink : "a"} href={s.href} interactive size="sm" className="block h-full">
                  <span className="flex items-start justify-between gap-4">
                    <span className="t-stat text-text">{s.value}</span>
                    <LinkArrow external={external} className="h-3 w-3 shrink-0 text-gold" />
                  </span>
                  <span className="t-label mt-4 block text-muted">{s.label}</span>
                </Card>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
