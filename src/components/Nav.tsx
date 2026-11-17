"use client";

import { useEffect, useState } from "react";
import HornetMark from "@/components/HornetMark";
import { ExternalLink, GitHubIcon } from "@/components/ui";
import { GITHUB_URL, GITHUB_USER, sections } from "@/data/projects";

/** Track which section is currently in the middle band of the viewport. */
function useActiveSection(ids: string[]): string | null {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

const SECTION_IDS = sections.map((s) => s.id);

/**
 * Fixed top navigation.
 *
 * - From md: one 64px row laid out as a 1fr/auto/1fr grid, so the links are
 *   centred on the page regardless of the wordmark and icon widths.
 * - Below md: a 56px brand row plus a 44px link row (four links spread
 *   edge to edge; they fit at 320px with no scrolling).
 *
 * Total height: ~101px below md, ~65px from md (including the 1px border).
 * Section scroll-mt-28 (112px) clears both.
 *
 * The current section gets aria-current, gold text and a gold underline;
 * the others are text-text-2.
 */
export default function Nav() {
  const active = useActiveSection(SECTION_IDS);
  const links = (extra: string) =>
    sections.map((s) => (
      <a
        key={s.id}
        href={`#${s.id}`}
        aria-current={active === s.id ? "true" : undefined}
        className={`nav-link t-label inline-flex min-h-11 shrink-0 flex-col items-center justify-center text-text-2 transition-colors hover:text-gold-bright ${extra}`}
      >
        {s.label}
      </a>
    ));

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-ink/80 backdrop-blur-md">
      <nav aria-label="Primary" className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="flex h-14 items-center justify-between md:grid md:h-16 md:grid-cols-[1fr_auto_1fr]">
          <a href="#top" className="flex items-center gap-3 justify-self-start" aria-label={`${GITHUB_USER}, back to top`}>
            <HornetMark id="nav" className="h-8 w-8" />
            <span className="font-display text-lg font-bold tracking-widest text-gold-bright">{GITHUB_USER}</span>
          </a>
          <div className="hidden items-center gap-8 md:flex">{links("")}</div>
          <ExternalLink
            href={GITHUB_URL}
            label="GitHub profile"
            className="-mr-3 inline-flex h-11 w-11 items-center justify-center justify-self-end text-text-2 transition-colors hover:text-gold-bright"
          >
            <GitHubIcon className="h-5 w-5" />
          </ExternalLink>
        </div>
        <div className="flex h-11 items-center justify-between md:hidden">{links("tracking-[0.12em]")}</div>
      </nav>
    </header>
  );
}
