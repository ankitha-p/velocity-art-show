import Link from "next/link";
import { RsvpForm } from "@/components/RsvpForm";
import { ART_PIECES } from "@/data/art";
import { getEventDate, getEventName, getEventVenue } from "@/lib/config";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;
  const eventName = getEventName();
  const preview = ART_PIECES.slice(0, 3);

  return (
    <div>
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
            Live evening
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-tight text-[var(--ink)] sm:text-6xl">
            {eventName}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
            A small hanging of six works. Register for the live event, walk the
            room, and reserve a piece before it leaves the wall.
          </p>
          <dl className="mt-8 space-y-2 text-sm text-[var(--ink)]">
            <div className="flex gap-3">
              <dt className="w-16 text-[var(--muted)]">When</dt>
              <dd>{getEventDate()}</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-16 text-[var(--muted)]">Where</dt>
              <dd>{getEventVenue()}</dd>
            </div>
          </dl>
          <Link
            href="/gallery"
            className="mt-8 inline-block text-sm text-[var(--accent)] hover:underline"
          >
            Browse the hanging
          </Link>
        </div>
        <div
          id="rsvp"
          className="rounded-xl border border-[var(--line)] bg-[var(--bg-raised)] p-6"
        >
          <h2 className="font-serif text-2xl">Reserve a seat</h2>
          <p className="mt-2 mb-6 text-sm text-[var(--muted)]">
            Doors at 7. Seating is limited.
          </p>
          <RsvpForm error={params.error} />
        </div>
      </section>
      <section className="border-t border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-serif text-3xl">On the wall tonight</h2>
            <Link href="/gallery" className="text-sm text-[var(--muted)] hover:text-[var(--ink)]">
              See all six
            </Link>
          </div>
          <ul className="mt-8 grid gap-6 sm:grid-cols-3">
            {preview.map((piece) => (
              <li key={piece.id}>
                <Link href={`/gallery/${piece.id}`} className="group block">
                  <div className="overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--bg-raised)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={piece.image}
                      alt={piece.title}
                      className="aspect-[4/5] w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <p className="mt-3 font-serif text-lg">{piece.title}</p>
                  <p className="text-sm text-[var(--muted)]">{piece.artist}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
