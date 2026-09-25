import { submitReserve } from "@/app/actions";

type ReserveFormProps = {
  pieceId: string;
  reserved: boolean;
  error?: string;
};

export function ReserveForm({ pieceId, reserved, error }: ReserveFormProps) {
  if (reserved) {
    return (
      <p className="rounded border border-[var(--line)] bg-[var(--bg-raised)] px-4 py-3 text-sm text-[var(--muted)]">
        This piece is reserved for the night of the show.
      </p>
    );
  }

  return (
    <form action={submitReserve} className="space-y-4">
      <input type="hidden" name="pieceId" value={pieceId} />
      {error === "taken" ? (
        <p className="rounded border border-red-400/40 bg-red-950/30 px-3 py-2 text-sm text-red-200">
          Someone just reserved this piece. Browse another work.
        </p>
      ) : null}
      {error === "reserve" ? (
        <p className="rounded border border-red-400/40 bg-red-950/30 px-3 py-2 text-sm text-red-200">
          Add your name and email to reserve this piece.
        </p>
      ) : null}
      <label className="block text-sm">
        <span className="text-[var(--muted)]">Name</span>
        <input
          required
          name="name"
          type="text"
          autoComplete="name"
          className="mt-1 w-full rounded border border-[var(--line)] bg-[var(--bg)] px-3 py-2 text-[var(--ink)] outline-none focus:border-[var(--accent)]"
        />
      </label>
      <label className="block text-sm">
        <span className="text-[var(--muted)]">Email</span>
        <input
          required
          name="email"
          type="email"
          autoComplete="email"
          className="mt-1 w-full rounded border border-[var(--line)] bg-[var(--bg)] px-3 py-2 text-[var(--ink)] outline-none focus:border-[var(--accent)]"
        />
      </label>
      <button
        type="submit"
        className="w-full rounded bg-[var(--accent)] px-4 py-3 text-sm font-medium text-[#1a100b] hover:brightness-110"
      >
        Reserve this piece
      </button>
      <p className="text-xs text-[var(--muted)]">
        Mock checkout for the Velocity demo. No payment is collected.
      </p>
    </form>
  );
}
