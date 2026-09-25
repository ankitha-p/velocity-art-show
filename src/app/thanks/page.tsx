import Link from "next/link";
import { getPiece } from "@/data/art";
import { getEventDate, getEventName, getEventVenue } from "@/lib/config";

export const metadata = {
  title: "You are in",
};

export default async function ThanksPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string; piece?: string }>;
}) {
  const { type, piece: pieceId } = await searchParams;
  const piece = pieceId ? getPiece(pieceId) : undefined;
  const isReserve = type === "reserve" && piece;

  return (
    <div className="mx-auto max-w-2xl px-6 py-20 text-center">
      <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
        {isReserve ? "Reserved" : "See you there"}
      </p>
      <h1 className="mt-4 font-serif text-4xl">
        {isReserve ? `${piece.title} is held for you` : "Your seat is held"}
      </h1>
      <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
        {isReserve
          ? "This is a mock hold for the Velocity demo. Collect it at the close of the show."
          : `${getEventName()} is ${getEventDate()} at ${getEventVenue()}. Bring the email you used to register.`}
      </p>
      <div className="mt-10 flex justify-center gap-4 text-sm">
        <Link href="/gallery" className="text-[var(--accent)] hover:underline">
          Back to the gallery
        </Link>
        <Link href="/" className="text-[var(--muted)] hover:text-[var(--ink)]">
          Event details
        </Link>
      </div>
    </div>
  );
}
