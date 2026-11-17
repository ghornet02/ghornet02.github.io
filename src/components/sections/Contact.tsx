import { Button, GitHubIcon, Section } from "@/components/ui";
import { EMAIL, GITHUB_URL, LINKEDIN_URL, RESUME_URL } from "@/data/projects";

/**
 * Contact call to action: one large line of type, a short follow-up and the
 * buttons, unboxed. Email, resume and LinkedIn appear only when set in
 * src/data/projects.ts.
 */
export default function Contact() {
  return (
    <Section id="contact" index="04" kanji="連" title="Contact">
      <p className="t-statement max-w-4xl">Interested in systems programming, networking or test-engineering work?</p>
      <p className="t-lead mt-6 max-w-2xl">Every project here is open source. Browse the code, then get in touch.</p>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:flex sm:flex-wrap">
        {EMAIL ? (
          <>
            <Button href={`mailto:${EMAIL}`}>Email me</Button>
            <Button href={GITHUB_URL} variant="ghost" external icon={<GitHubIcon />}>
              GitHub
            </Button>
          </>
        ) : (
          <Button href={GITHUB_URL} external icon={<GitHubIcon />}>
            GitHub
          </Button>
        )}
        {RESUME_URL && (
          <Button href={RESUME_URL} variant="ghost" external>
            Resume
          </Button>
        )}
        {LINKEDIN_URL && (
          <Button href={LINKEDIN_URL} variant="ghost" external>
            LinkedIn
          </Button>
        )}
      </div>
    </Section>
  );
}
