import { Button, Card, GitHubIcon, Section } from "@/components/ui";
import { EMAIL, GITHUB_URL, LINKEDIN_URL, RESUME_URL } from "@/data/projects";

/** Contact call to action. Email, resume and LinkedIn appear only when set in src/data/projects.ts. */
export default function Contact() {
  return (
    <Section id="contact" index="04" kanji="連" title="Contact">
      <Card className="flex flex-col items-center gap-8 text-center">
        <p className="t-lead max-w-xl">
          Interested in systems programming, networking or test-engineering work? Every project here is open source.
          Browse the code, then get in touch.
        </p>
        <div className="grid w-full grid-cols-1 gap-4 sm:flex sm:w-auto sm:flex-wrap sm:justify-center">
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
      </Card>
    </Section>
  );
}
