import { Card } from "@/components/ui";

type Line = { kind: "cmd" | "out" | "ok"; prompt?: string; text: string };

/** Prompt of the POSIX shell project. */
const PROMPT = "<hornet@linux:~>";

/**
 * A short session across the projects. Keep every rendered line (prompt
 * included) at 46 characters or fewer so it fits the hero column at lg
 * without scrolling; below that it wraps.
 */
const SESSION: Line[] = [
  { kind: "cmd", prompt: PROMPT, text: "sudo ./cshark/cshark" },
  { kind: "out", text: "Packet 1 | length 74" },
  { kind: "out", text: "L3 IPv4 10.0.0.4 -> 1.1.1.1 UDP (17)" },
  { kind: "out", text: "L4 UDP 51544 -> 53 (DNS)" },
  { kind: "cmd", prompt: "client>", text: "CREATE notes.txt" },
  { kind: "ok", text: "OK File created on 127.0.0.1:9101" },
  { kind: "cmd", prompt: PROMPT, text: "cd distributed-file-system" },
  { kind: "cmd", prompt: PROMPT, text: "make test" },
  { kind: "ok", text: "21 passed, 0 failed" },
];

const STEP_MS = 420;

/**
 * Faux terminal that reveals a short session from the projects line by line.
 *
 * Purely CSS-driven: each line fades in after a staggered delay, and with
 * reduced motion the whole session is shown at once. Lines wrap instead of
 * scrolling, so the <pre> needs no focus stop or label of its own; the
 * figure's caption names it.
 */
export default function Terminal() {
  return (
    <Card as="figure" padding={false} className="w-full min-w-0 max-w-xl">
      <figcaption className="sr-only">Example terminal session from the projects</figcaption>
      <div className="flex items-center gap-2 border-b border-line px-4 py-3 sm:px-5" aria-hidden="true">
        <span className="h-2.5 w-2.5 rotate-45 bg-gold" />
        <span className="h-2.5 w-2.5 rotate-45 bg-gold-deep" />
        <span className="h-2.5 w-2.5 rotate-45 bg-line-strong" />
        <span className="t-label ml-3 normal-case tracking-normal text-muted">hornet — zsh</span>
      </div>
      <pre className="t-code whitespace-pre-wrap break-words px-4 py-4 sm:px-5">
        {SESSION.map((line, i) => (
          <div key={i} className="term-line pl-[2ch] indent-[-2ch]" style={{ ["--d" as string]: `${600 + i * STEP_MS}ms` }}>
            {line.kind === "cmd" ? (
              <>
                <span className="text-gold">{line.prompt}</span> <span className="text-text">{line.text}</span>
              </>
            ) : (
              <span className={line.kind === "ok" ? "text-gold-bright" : "text-muted"}>{line.text}</span>
            )}
          </div>
        ))}
        <div className="term-line" style={{ ["--d" as string]: `${600 + SESSION.length * STEP_MS}ms` }}>
          <span className="text-gold">{PROMPT}</span> <span className="cursor" aria-hidden="true" />
        </div>
      </pre>
    </Card>
  );
}
