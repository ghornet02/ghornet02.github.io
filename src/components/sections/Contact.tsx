import HornetMark from "@/components/HornetMark";
import { ExternalLink, GitHubIcon, SectionHeading } from "@/components/ui";
import { GITHUB_URL, GITHUB_USER } from "@/data/projects";

/** Contact call to action. */
export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-6xl scroll-mt-28 px-6 pb-8 pt-24">
      <SectionHeading id="contact-title" index="04" kanji="連" title="Contact" />
      <div className="edge card flex flex-col items-center gap-6 px-8 py-16 text-center">
        <HornetMark id="contact" className="hover-glow h-16 w-16" />
        <p className="max-w-xl text-lg leading-relaxed text-text/85">
          Interested in systems programming, networking or test-engineering work? Every project here is open source.
          Browse the code, then reach me through GitHub.
        </p>
        <ExternalLink
          href={GITHUB_URL}
          className="btn-gold notch flex items-center gap-2 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em]"
        >
          <GitHubIcon /> github.com/{GITHUB_USER}
        </ExternalLink>
      </div>
    </section>
  );
}
