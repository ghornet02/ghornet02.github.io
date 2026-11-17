import HornetMark from "@/components/HornetMark";
import { Button, Eyebrow } from "@/components/ui";

/** On-brand 404 page with a way back home. */
export default function NotFound() {
  return (
    <main id="main" className="flex min-h-screen flex-col items-center justify-center gap-6 px-5 text-center sm:px-6">
      <HornetMark id="not-found" className="h-24 w-24" />
      <Eyebrow>404</Eyebrow>
      <h1 className="t-h2 text-text">Page not found</h1>
      <p className="t-body max-w-md">The page you were looking for doesn&apos;t exist or has moved.</p>
      <Button href="/">Back to home</Button>
    </main>
  );
}
