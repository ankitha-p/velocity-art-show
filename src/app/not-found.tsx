import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-6 py-20 text-center">
      <h1 className="font-serif text-4xl">That work is not in this hanging</h1>
      <p className="mt-4 text-[var(--muted)]">
        It may have been moved, or the link is from an older deploy.
      </p>
      <Link href="/gallery" className="mt-8 inline-block text-[var(--accent)] hover:underline">
        Return to the gallery
      </Link>
    </div>
  );
}
