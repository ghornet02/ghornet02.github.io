import { SectionHeading } from "@/components/ui";
import { skills } from "@/data/projects";

/** Skill groups drawn from the projects. */
export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-24">
      <SectionHeading id="skills-title" index="03" kanji="技" title="Skills" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((g) => (
          <div key={g.group} className="edge card p-6">
            <h3 className="font-display text-lg font-bold tracking-widest text-gold-bright">{g.group}</h3>
            <div className="blade my-4 opacity-60" />
            <ul className="space-y-2">
              {g.items.map((item) => (
                <li key={item} className="font-mono text-sm text-text/80">
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
