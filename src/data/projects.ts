/** A project shown on the portfolio. */
export type Project = {
  slug: string;
  title: string;
  /** Shown as the card eyebrow. */
  category: string;
  /** One-line outcome, shown as the card's lead. */
  impact: string;
  /** A single sentence. */
  description: string;
  /** At most 3, none restating `impact`. */
  highlights: string[];
  tech: string[];
  repo: string;
  span: "full" | "half";
  /** Diagram shown full card width below the text; `full` is the full-resolution file. */
  image?: { src: string; full: string; alt: string; width: number; height: number };
};

/** Site-wide identity and links. */
export const SITE_URL = "https://ghornet02.github.io";
export const GITHUB_USER = "ghornet02";
export const GITHUB_URL = `https://github.com/${GITHUB_USER}`;
export const ROLE = "Systems programmer · C, networking, Linux";

/**
 * Optional identity and contact details. Leave undefined until real values
 * exist; the Contact section and footer render each one only when it is set.
 */
export const NAME: string | undefined = undefined;
export const EMAIL: string | undefined = undefined;
export const LINKEDIN_URL: string | undefined = undefined;
export const RESUME_URL: string | undefined = undefined;

/** Projects in display order. `span` controls the card width on the two-column grid. */
export const projects: Project[] = [
  {
    slug: "distributed-file-system",
    title: "Distributed File System",
    category: "Distributed systems",
    impact: "Detects crashed storage servers through heartbeats and restores access to their files automatically when they rejoin",
    description:
      "A distributed file system in C: a multithreaded Name Server keeps metadata and routes requests, Storage Servers hold the data on disk, and clients read and write directly on the storage servers after a redirect.",
    highlights: [
      "Least-loaded placement, owner-only writes and deletes, path-traversal protection",
      "Thread-per-connection servers, mutex-guarded tables and flock()-based file locking",
      "21-check end-to-end test suite that kills and restarts a storage server",
    ],
    tech: ["C", "POSIX sockets", "pthreads", "Bash", "Make"],
    repo: "https://github.com/ghornet02/distributed-file-system",
    span: "full",
    image: {
      src: "/dfs-architecture.webp",
      full: "/dfs-architecture-full.png",
      alt: "Architecture diagram: clients send requests to the Name Server, which redirects reads and writes to storage servers that send it heartbeats",
      width: 1400,
      height: 766,
    },
  },
  {
    slug: "cshark",
    title: "CShark",
    category: "Networking",
    impact: "Decodes live traffic from Ethernet frames up to HTTP, HTTPS and DNS payloads",
    description:
      "A command-line packet sniffer built on libpcap, with a non-blocking capture loop multiplexed with select() for clean Ctrl-C and Ctrl-D handling.",
    highlights: [
      "Decodes Ethernet, IPv4, IPv6, ARP, TCP and UDP headers field by field",
      "BPF protocol filters and storage for up to 10,000 captured packets",
      "Hex and ASCII dumps with per-packet deep inspection after capture",
    ],
    tech: ["C", "libpcap", "BPF", "Networking"],
    repo: "https://github.com/ghornet02/cshark",
    span: "half",
  },
  {
    slug: "c-shell",
    title: "C-Shell",
    category: "Operating systems",
    impact: "Runs real pipelines with redirection and job control on a hand-written parser",
    description:
      "An interactive POSIX shell written from scratch, with its own lexer and grammar-driven recursive-descent parser.",
    highlights: [
      "Pipelines, <, > and >> redirection, sequential (;) and background (&) execution",
      "Job control: Ctrl-C and Ctrl-Z forwarding with fg and bg",
      "Built-ins for navigation, directory listing, persistent history and signals",
    ],
    tech: ["C", "fork / exec", "Signals", "Make"],
    repo: "https://github.com/ghornet02/c-shell",
    span: "half",
  },
  {
    slug: "software-testing",
    title: "Software Testing",
    category: "Quality engineering",
    impact: "187 automated tests across three systems, each written with a different technique",
    description:
      "Three pytest suites, one each for a REST API, an eight-module management system and a board-game engine.",
    highlights: [
      "105 black-box API tests covering auth, cart, checkout, wallet, orders and support tickets",
      "43 integration tests checking cross-module rules and transactional rollback, plus the maintenance and leaderboard modules I designed and built",
      "39 white-box tests written for full branch coverage with stubs and monkeypatching",
    ],
    tech: ["Python", "pytest", "REST", "Test design"],
    repo: "https://github.com/ghornet02/software-testing",
    span: "full",
  },
];

/** Headline numbers for the About section, each linked to its source project. */
export const stats: { value: string; label: string; href: string }[] = [
  { value: "208", label: "Automated tests", href: "#projects" },
  { value: "21", label: "Fault-injection checks", href: "https://github.com/ghornet02/distributed-file-system/tree/main/tests" },
  { value: "4", label: "Open-source projects", href: GITHUB_URL },
];

/** Skill groups shown in the skills section. */
export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["C", "Python", "Bash"] },
  { group: "Systems", items: ["Processes & signals", "TCP sockets", "pthreads", "File locking", "libpcap"] },
  { group: "Testing", items: ["pytest", "Black-box", "White-box", "Integration", "End-to-end"] },
  { group: "Tools", items: ["Linux", "Git", "GCC", "Make"] },
];

/** Section anchors used by the navigation. */
export const sections = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
