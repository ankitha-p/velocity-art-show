import Link from "next/link";
import { getEventName } from "@/lib/config";

export function Header() {
  const eventName = getEventName();

  return (
    <header className="border-b border-[var(--line)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-5">
        <Link href="/" className="font-serif text-xl tracking-tight text-[var(--ink)]">
          {eventName}
        </Link>
        <nav className="flex items-center gap-6 text-sm text-[var(--muted)]">
          <Link href="/#rsvp" className="hover:text-[var(--ink)]">
            RSVP
          </Link>
          <Link href="/gallery" className="hover:text-[var(--ink)]">
            Gallery
          </Link>
        </nav>
      </div>
    </header>
  );
}
