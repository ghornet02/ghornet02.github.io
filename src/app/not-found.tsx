import Link from "next/link";
import HornetMark from "@/components/HornetMark";

/** On-brand 404 page with a way back home. */
export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <HornetMark id="not-found" className="h-28 w-28" />
      <p className="font-mono text-sm tracking-[0.3em] text-gold">
        404 · <span className="kanji">迷</span>
      </p>
      <h1 className="font-display text-4xl font-bold text-text">This path doesn&apos;t exist.</h1>
      <p className="max-w-md text-muted">The page you were looking for has flown off. Head back to base.</p>
      <Link href="/" className="btn-gold notch mt-4 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em]">
        Back to base
      </Link>
    </main>
  );
}
