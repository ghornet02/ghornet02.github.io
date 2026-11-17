import type { ElementType, ReactNode } from "react";

/**
 * Shared UI primitives. Section components should build from these instead of
 * repeating class strings. Styling lives in src/app/globals.css (tokens, .edge,
 * .card*, .btn*, and the .t-* type utilities).
 */

/** Join class names, skipping falsy values. */
function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

/** GitHub logo glyph. Decorative (aria-hidden); label the parent link instead. */
export function GitHubIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

/**
 * 12px link arrow: up-right for external links, down for in-page ones.
 * Decorative (aria-hidden). Inherits colour unless className sets one.
 */
export function LinkArrow({ external, className = "h-3 w-3 shrink-0" }: { external: boolean; className?: string }) {
  return (
    <svg viewBox="0 0 12 12" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      {external ? <path d="M3 9l6-6M4 3h5v5" /> : <path d="M6 2v8M2.5 6.5L6 10l3.5-3.5" />}
    </svg>
  );
}

/**
 * Link that opens in a new tab and announces that to screen readers.
 * `label` sets aria-label (use it when the visible text is ambiguous or icon-only);
 * ", opens in a new tab" is appended to it automatically.
 */
export function ExternalLink({
  href,
  className,
  children,
  label,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  label?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={className}
      aria-label={label ? `${label}, opens in a new tab` : undefined}
    >
      {children}
      {/* With a custom label the aria-label already carries the notice; skip the span to avoid repeating it. */}
      {!label && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}

/** Small mono uppercase label in gold, placed above a heading. */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cx("t-label text-gold", className)}>{children}</p>;
}

/**
 * Section heading: mono index, Cinzel H2, decorative kanji and a gold rule.
 * `id` goes on the <h2> so the parent <section> can point aria-labelledby at it.
 */
export function SectionHeading({ index, kanji, title, id }: { index: string; kanji?: string; title: string; id: string }) {
  return (
    <div className="mb-8 sm:mb-12">
      <div className="flex items-baseline gap-4">
        <span className="t-label text-gold">{index}</span>
        <h2 id={id} className="t-h2 text-text">
          {title}
        </h2>
        {kanji && (
          <span className="kanji ml-auto text-3xl text-muted select-none" aria-hidden="true">
            {kanji}
          </span>
        )}
      </div>
      <div className="blade mt-4" />
    </div>
  );
}

/** The page's content column: centred, max-w-6xl, standard side gutters. */
export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cx("mx-auto max-w-6xl px-5 sm:px-6", className)}>{children}</div>;
}

/**
 * Full-bleed band: the ink-2 surface (.band in globals.css), spanning the
 * viewport, with a Container inside so content stays aligned with the rest of
 * the page. It draws no rules; section borders provide the full-width lines.
 *
 * - as: element to render (default "div"; e.g. "article", "section").
 * - className: classes on the band itself, typically vertical padding.
 * - Any other props (id, aria-*...) are forwarded.
 *
 * Use it to alternate the page surface. Never put two bands directly next to
 * each other: separate them with plain-surface content.
 */
export function Band({
  as,
  className,
  children,
  ...rest
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  [prop: string]: unknown;
}) {
  const El = as ?? "div";
  return (
    <El className={cx("band", className)} {...rest}>
      <Container>{children}</Container>
    </El>
  );
}

/**
 * Page section with the standard container, vertical rhythm, scroll offset
 * for the fixed nav, and a SectionHeading. The heading id is `${id}-title`.
 *
 * Renders: <section id aria-labelledby class="scroll-mt-28 border-t border-line py-16 sm:py-24">
 *            <Container> heading + children
 *
 * Every section opens with the same full-width hairline (border-t in --line),
 * matching the nav's bottom border and the footer's top border. These are the
 * only full-width lines on the page; don't add others.
 *
 * - band: the whole section sits on a full-bleed <Band> surface.
 * - divider: set false to drop the top hairline (used by Skills, whose band
 *   edge already separates it from Projects).
 */
export function Section({
  id,
  index,
  kanji,
  title,
  children,
  className,
  band = false,
  divider = true,
}: {
  id: string;
  index: string;
  kanji?: string;
  title: string;
  children: ReactNode;
  /** Extra classes on the <section>, e.g. to adjust bottom padding. */
  className?: string;
  band?: boolean;
  divider?: boolean;
}) {
  const titleId = `${id}-title`;
  const heading = <SectionHeading id={titleId} index={index} kanji={kanji} title={title} />;
  const sectionProps = {
    id,
    "aria-labelledby": titleId,
    className: cx("scroll-mt-28 py-16 sm:py-24", divider && "border-t border-line", className),
  };
  if (band) {
    return (
      <Band as="section" {...sectionProps}>
        {heading}
        {children}
      </Band>
    );
  }
  return (
    <section {...sectionProps}>
      <Container>
        {heading}
        {children}
      </Container>
    </section>
  );
}

const BUTTON_SIZE = {
  md: "min-h-11 px-6",
  sm: "min-h-9 px-4",
} as const;

const BUTTON_VARIANT = {
  primary: "btn-gold notch",
  ghost: "btn-ghost edge",
} as const;

/**
 * Link styled as a button (all buttons on this site navigate).
 *
 * - variant "primary": solid gold (.btn-gold.notch). Use once per block.
 * - variant "ghost":   gold edge on ink (.btn-ghost.edge).
 * - size "md" (44px tall, default) or "sm" (36px tall).
 * - external: opens in a new tab via ExternalLink (adds the sr-only notice).
 * - icon: rendered before the label (e.g. <GitHubIcon />).
 * - label: aria-label, for when the visible text needs more context.
 *
 * Renders: <a class="btn t-label {variant classes} {size classes}">.
 * Hover, active and focus-visible states come from globals.css; the cut is --cut-sm.
 */
export function Button({
  href,
  variant = "primary",
  size = "md",
  external = false,
  icon,
  label,
  className,
  children,
}: {
  href: string;
  variant?: keyof typeof BUTTON_VARIANT;
  size?: keyof typeof BUTTON_SIZE;
  external?: boolean;
  icon?: ReactNode;
  label?: string;
  className?: string;
  children: ReactNode;
}) {
  const classes = cx("btn t-label", BUTTON_VARIANT[variant], BUTTON_SIZE[size], className);
  const content = (
    <>
      {icon}
      {children}
    </>
  );
  if (external) {
    return (
      <ExternalLink href={href} className={classes} label={label}>
        {content}
      </ExternalLink>
    );
  }
  return (
    <a href={href} className={classes} aria-label={label}>
      {content}
    </a>
  );
}

const CARD_SIZE = {
  lg: "p-5 sm:p-8",
  sm: "cut-sm p-5 sm:p-6",
} as const;

/**
 * Clipped-corner card surface (.edge.card).
 *
 * - as: element to render (default "div"; e.g. "article", "li", "a").
 * - interactive: the card itself is a link/control -> adds .card-interactive
 *   (edge brightens, 2px lift). Pass `as="a"` and `href` with it.
 * - highlight: the card *contains* links -> adds .card-highlight
 *   (edge brightens on hover/focus-within, no movement).
 * - size "lg" (default: --cut-lg, p-5 sm:p-8) or "sm" (--cut-sm, p-5 sm:p-6).
 *   Pass padding: false to manage padding yourself.
 * - Any other props (href, target, aria-*, id...) are forwarded.
 */
export function Card({
  as,
  interactive = false,
  highlight = false,
  size = "lg",
  padding = true,
  className,
  children,
  ...rest
}: {
  as?: ElementType;
  interactive?: boolean;
  highlight?: boolean;
  size?: keyof typeof CARD_SIZE;
  padding?: boolean;
  className?: string;
  children: ReactNode;
  [prop: string]: unknown;
}) {
  const Tag = as ?? "div";
  const sizeClasses = padding ? CARD_SIZE[size] : size === "sm" ? "cut-sm" : "";
  return (
    <Tag
      className={cx(
        "edge card",
        interactive && "card-interactive",
        highlight && "card-highlight",
        sizeClasses,
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Small bordered technology/keyword tag in muted mono, normal case. Renders an <li> by default. */
export function Tag({ children, as, className }: { children: ReactNode; as?: ElementType; className?: string }) {
  const El = as ?? "li";
  return (
    <El className={cx("t-label border border-line px-2.5 py-1 normal-case tracking-normal text-muted", className)}>
      {children}
    </El>
  );
}
