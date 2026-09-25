import Link from "next/link";
import { notFound } from "next/navigation";
import { ReserveForm } from "@/components/ReserveForm";
import { ART_PIECES, formatPrice, getNeighbors, getPiece } from "@/data/art";
import { isReserved } from "@/data/store";

export function generateStaticParams() {
  return ART_PIECES.map((piece) => ({ id: piece.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const piece = getPiece(id);
  return { title: piece?.title ?? "Piece" };
}

export default async function PiecePage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ error?: string }>;
}) {
  const { id } = await params;
  const { error } = await searchParams;
  const piece = getPiece(id);
  if (!piece) {
    notFound();
  }

  const reserved = await isReserved(piece.id);
  const { prev, next } = getNeighbors(piece.id);

  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--bg-raised)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={piece.image}
          alt={piece.title}
          className="aspect-[4/5] w-full object-cover"
        />
      </div>
      <div>
        <p className="text-sm text-[var(--muted)]">
          {piece.tradition} · {piece.year}
        </p>
        <h1 className="mt-2 font-serif text-4xl">{piece.title}</h1>
        <p className="mt-1 text-sm text-[var(--muted)]">{piece.artist}</p>
        <p className="mt-4 text-lg">{formatPrice(piece.price)}</p>
        <p className="mt-2 text-sm text-[var(--muted)]">{piece.medium}</p>
        <p className="mt-6 leading-7 text-[var(--muted)]">{piece.blurb}</p>
        <div className="mt-8">
          <ReserveForm pieceId={piece.id} reserved={reserved} error={error} />
        </div>
        <nav className="mt-10 flex justify-between text-sm text-[var(--muted)]">
          {prev ? (
            <Link href={`/gallery/${prev.id}`} className="hover:text-[var(--ink)]">
              ← {prev.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/gallery/${next.id}`} className="hover:text-[var(--ink)]">
              {next.title} →
            </Link>
          ) : null}
        </nav>
      </div>
    </div>
  );
}
