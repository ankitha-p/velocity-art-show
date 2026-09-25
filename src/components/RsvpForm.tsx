import { submitRsvp } from "@/app/actions";

type RsvpFormProps = {
  error?: string;
};

export function RsvpForm({ error }: RsvpFormProps) {
  return (
    <form action={submitRsvp} className="space-y-4">
      {error ? (
        <p className="rounded border border-red-400/40 bg-red-950/30 px-3 py-2 text-sm text-red-200">
          Check your name, email, and guest count (1 to 8), then try again.
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
      <label className="block text-sm">
        <span className="text-[var(--muted)]">Guests</span>
        <input
          required
          name="guests"
          type="number"
          min={1}
          max={8}
          defaultValue={1}
          className="mt-1 w-full rounded border border-[var(--line)] bg-[var(--bg)] px-3 py-2 text-[var(--ink)] outline-none focus:border-[var(--accent)]"
        />
      </label>
      <button
        type="submit"
        className="w-full rounded bg-[var(--accent)] px-4 py-3 text-sm font-medium text-[#1a100b] hover:brightness-110"
      >
        Reserve a seat
      </button>
    </form>
  );
}
