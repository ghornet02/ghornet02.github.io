import { Section } from "@/components/ui";
import { skills } from "@/data/projects";

/** Skill groups drawn from the projects, as a borderless definition list on a full-bleed band. */
export default function Skills() {
  return (
    <Section id="skills" index="03" kanji="技" title="Skills" band divider={false}>
      <dl>
        {skills.map((g) => (
          <div key={g.group} className="grid gap-4 border-t border-line py-6 sm:grid-cols-[10rem_1fr] sm:gap-8">
            <dt className="t-label text-text">{g.group}</dt>
            <dd className="t-body">{g.items.join(" · ")}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
