/** A project shown on the portfolio. */
export type Project = {
  slug: string;
  title: string;
  kanji: string;
  tagline: string;
  description: string;
  highlights: string[];
  tech: string[];
  repo: string;
  image?: { src: string; alt: string };
};

/** GitHub profile that hosts every project. */
export const GITHUB_USER = "ghornet02";
export const GITHUB_URL = `https://github.com/${GITHUB_USER}`;

/** Projects in display order. */
export const projects: Project[] = [
  {
    slug: "distributed-file-system",
    title: "Distributed File System",
    kanji: "分散",
    tagline: "Name server, storage servers and clients over raw TCP",
    description:
      "A distributed file system in C. A multithreaded Name Server keeps metadata and routes requests, Storage Servers hold the data on disk, and clients read and write directly on the storage servers after a redirect.",
    highlights: [
      "Heartbeat-based failure detection with automatic recovery when a server rejoins",
      "Least-loaded placement, owner-only writes and deletes, path-traversal protection",
      "Thread-per-connection servers, mutex-guarded tables and flock()-based file locking",
      "21-check end-to-end test suite that kills and restarts a storage server",
    ],
    tech: ["C", "POSIX sockets", "pthreads", "Bash", "Make"],
    repo: "https://github.com/ghornet02/distributed-file-system",
    image: { src: "/dfs-architecture.png", alt: "Architecture diagram of the distributed file system" },
  },
  {
    slug: "cshark",
    title: "CShark",
    kanji: "鮫",
    tagline: "Command-line packet sniffer and protocol analyser",
    description:
      "A live packet sniffer built on libpcap that decodes traffic layer by layer, from Ethernet frames up to HTTP, HTTPS and DNS payloads, with filtering and post-capture inspection.",
    highlights: [
      "Decodes Ethernet, IPv4, IPv6, ARP, TCP and UDP headers field by field",
      "BPF protocol filters and storage for up to 10,000 captured packets",
      "Hex and ASCII dumps with per-packet deep inspection after capture",
      "Non-blocking capture loop multiplexed with select() for clean Ctrl-C and Ctrl-D handling",
    ],
    tech: ["C", "libpcap", "BPF", "Networking"],
    repo: "https://github.com/ghornet02/cshark",
  },
  {
    slug: "c-shell",
    title: "C-Shell",
    kanji: "殻",
    tagline: "A POSIX shell written from scratch",
    description:
      "An interactive Unix shell with its own lexer and recursive-descent parser, supporting pipelines, I/O redirection, background jobs, job control and a set of custom built-in commands.",
    highlights: [
      "Hand-written lexer and grammar-driven recursive-descent parser",
      "Pipelines, <, > and >> redirection, sequential (;) and background (&) execution",
      "Job control: Ctrl-C and Ctrl-Z forwarding with fg and bg",
      "Built-ins for navigation, directory listing, persistent history and signals",
    ],
    tech: ["C", "fork / exec", "Signals", "Make"],
    repo: "https://github.com/ghornet02/c-shell",
  },
  {
    slug: "software-testing",
    title: "Software Testing",
    kanji: "検",
    tagline: "Black-box, integration and white-box test suites",
    description:
      "Three pytest suites, each applying a different testing technique to a different system: a REST API, an eight-module management system and a board-game engine.",
    highlights: [
      "105 black-box API tests covering auth, cart, checkout, wallet, orders and support tickets",
      "43 integration tests checking cross-module rules and transactional rollback",
      "39 white-box tests written for full branch coverage with stubs and monkeypatching",
      "Designed and built the maintenance and leaderboard modules of the integration system",
    ],
    tech: ["Python", "pytest", "REST", "Test design"],
    repo: "https://github.com/ghornet02/software-testing",
  },
];

/** Skill groups shown in the skills section. */
export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["C", "Python", "TypeScript", "Bash"] },
  { group: "Systems", items: ["Processes & signals", "TCP sockets", "pthreads", "File locking", "libpcap"] },
  { group: "Testing", items: ["pytest", "Black-box", "White-box", "Integration", "End-to-end"] },
  { group: "Tools", items: ["Linux", "Git", "GCC", "Make", "Next.js"] },
];
