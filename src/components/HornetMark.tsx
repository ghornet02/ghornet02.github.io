/**
 * Stylised hornet emblem: two blade-like wings over a striped, stinger-tipped body.
 *
 * `id` must be unique per instance on the page; it namespaces the SVG gradient.
 */
export default function HornetMark({ id, className = "" }: { id: string; className?: string }) {
  const gradient = `hm-gold-${id}`;
  return (
    <svg viewBox="0 0 200 240" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gradient} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f3d27a" />
          <stop offset="0.5" stopColor="#d4af37" />
          <stop offset="1" stopColor="#9c7a1e" />
        </linearGradient>
      </defs>
      <g fill="none" stroke={`url(#${gradient})`} strokeWidth="2.2" strokeLinejoin="round">
        <path d="M100 70 C 60 30, 18 26, 8 46 C 30 58, 62 70, 96 84 Z" />
        <path d="M100 70 C 140 30, 182 26, 192 46 C 170 58, 138 70, 104 84 Z" />
        <path d="M98 88 C 70 92, 36 108, 30 126 C 54 122, 78 110, 98 98 Z" opacity="0.7" />
        <path d="M102 88 C 130 92, 164 108, 170 126 C 146 122, 122 110, 102 98 Z" opacity="0.7" />
      </g>
      <circle cx="100" cy="58" r="11" fill={`url(#${gradient})`} />
      <path d="M100 74 L 116 96 L 112 150 L 100 232 L 88 150 L 84 96 Z" fill={`url(#${gradient})`} />
      <g stroke="#07070a" strokeWidth="5" strokeLinecap="round">
        <path d="M88 112 H 112" />
        <path d="M88 128 H 112" />
        <path d="M90 144 H 110" />
      </g>
    </svg>
  );
}
