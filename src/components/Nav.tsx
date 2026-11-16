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
 * On wide screens the links sit in the bar; below `sm` they move to a
 * horizontally scrollable row under it. The current section is marked with
 * `aria-current` and a gold underline.
 */
export default function Nav() {
  const active = useActiveSection(SECTION_IDS);
  const links = (extra: string) =>
    sections.map((s) => (
      <a
        key={s.id}
        href={`#${s.id}`}
        aria-current={active === s.id ? "true" : undefined}
        className={`nav-link shrink-0 uppercase text-muted transition-colors hover:text-gold-bright ${extra}`}
      >
        {s.label}
      </a>
    ));

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line/70 bg-ink/80 backdrop-blur-md">
      <nav aria-label="Primary" className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between py-4">
          <a href="#top" className="flex items-center gap-3" aria-label={`${GITHUB_USER}, back to top`}>
            <HornetMark id="nav" className="h-8 w-8" />
            <span className="font-display text-lg font-bold tracking-widest text-gold-bright">{GITHUB_USER}</span>
          </a>
          <div className="hidden items-center gap-8 sm:flex">{links("text-sm tracking-[0.2em]")}</div>
          <ExternalLink href={GITHUB_URL} label="GitHub profile" className="text-muted transition-colors hover:text-gold-bright">
            <GitHubIcon className="h-5 w-5" />
          </ExternalLink>
        </div>
        <div className="no-scrollbar -mx-6 flex gap-6 overflow-x-auto px-6 pb-3 sm:hidden">{links("text-xs tracking-[0.2em]")}</div>
      </nav>
    </header>
  );
}
