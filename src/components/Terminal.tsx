type Line = { kind: "cmd" | "out" | "ok"; prompt?: string; text: string };

const SESSION: Line[] = [
  { kind: "cmd", prompt: "<hornet@linux:~>", text: "make -C cshark && sudo ./cshark/cshark" },
  { kind: "out", text: "Packet ID: 1 | Packet's Length: 74" },
  { kind: "out", text: "L3 (IPv4): Src IP: 10.0.0.4 | Dst IP: 1.1.1.1 | Protocol: UDP (17)" },
  { kind: "out", text: "L4 (UDP): Src Port: 51544 | Dst Port: 53 (DNS)" },
  { kind: "cmd", prompt: "client>", text: "CREATE notes.txt" },
  { kind: "ok", text: "OK File created on 127.0.0.1:9101" },
  { kind: "cmd", prompt: "<hornet@linux:~>", text: "make -C distributed-file-system test" },
  { kind: "ok", text: "21 passed, 0 failed" },
];

const STEP_MS = 420;

/**
 * Faux terminal that reveals a short session from the projects line by line.
 *
 * Purely CSS-driven: each line fades in after a staggered delay, and with
 * reduced motion the whole session is shown at once.
 */
export default function Terminal() {
  return (
    <figure className="edge card w-full min-w-0 max-w-xl" aria-label="Example terminal session from the projects">
      <div className="flex items-center gap-2 border-b border-line px-5 py-3">
        <span className="h-2.5 w-2.5 rotate-45 bg-gold" />
        <span className="h-2.5 w-2.5 rotate-45 bg-gold/50" />
        <span className="h-2.5 w-2.5 rotate-45 bg-gold/25" />
        <span className="ml-3 font-mono text-xs tracking-widest text-muted">hornet — zsh</span>
      </div>
      <pre tabIndex={0} aria-label="Terminal output" className="overflow-x-auto px-5 py-4 font-mono text-[12.5px] leading-6 sm:text-[13px]">
        {SESSION.map((line, i) => (
          <div key={i} className="term-line whitespace-pre" style={{ ["--d" as string]: `${600 + i * STEP_MS}ms` }}>
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
          <span className="text-gold">{"<hornet@linux:~>"}</span> <span className="cursor" aria-hidden="true" />
        </div>
      </pre>
    </figure>
  );
}
