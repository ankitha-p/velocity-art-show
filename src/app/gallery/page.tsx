import Link from "next/link";
import { ART_PIECES, formatPrice } from "@/data/art";
import { reservedIds } from "@/data/store";

export const metadata = {
  title: "Gallery",
};

export default async function GalleryPage() {
  const reserved = await reservedIds();

  return (
    <div className="mx-auto max-w-6xl px-6 py-14">
      <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
        The hanging
      </p>
      <h1 className="mt-3 font-serif text-4xl">Six traditions, one evening</h1>
      <p className="mt-4 max-w-2xl text-[var(--muted)]">
        Works from Bihar, Maharashtra, Rajasthan, Kerala, Madhya Pradesh, and
        Odisha. Open a piece. Reserve it if it should go home with you.
      </p>
      <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {ART_PIECES.map((piece) => {
          const sold = reserved.has(piece.id);
          return (
            <li key={piece.id}>
              <Link href={`/gallery/${piece.id}`} className="group block">
                <div className="relative overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--bg-raised)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={piece.image}
                    alt={piece.title}
                    className="aspect-[4/5] w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                  />
                  {sold ? (
                    <span className="absolute top-3 right-3 rounded bg-[var(--bg)]/85 px-2 py-1 text-xs uppercase tracking-wide">
                      Reserved
                    </span>
                  ) : null}
                </div>
                <div className="mt-3 flex items-baseline justify-between gap-3">
                  <div>
                    <p className="font-serif text-xl">{piece.title}</p>
                    <p className="text-sm text-[var(--muted)]">{piece.tradition}</p>
                  </div>
                  <p className="text-sm">{formatPrice(piece.price)}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
