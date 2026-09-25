import {
  APP_VERSION,
  getEventDate,
  getEventName,
  getEventVenue,
  getProcessStartedAt,
} from "@/lib/config";

export function VelocityStrip() {
  const started = new Date(getProcessStartedAt()).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <footer className="border-t border-[var(--line)] bg-[var(--bg-raised)]">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-4 text-xs text-[var(--muted)]">
        <p>Hosted for the Cloudways Velocity demo</p>
        <dl className="flex flex-wrap gap-x-5 gap-y-1">
          <div>
            <dt className="sr-only">Version</dt>
            <dd className="text-[var(--accent)]">{APP_VERSION}</dd>
          </div>
          <div>
            <dt className="sr-only">Event</dt>
            <dd>{getEventName()}</dd>
          </div>
          <div>
            <dt className="sr-only">Date</dt>
            <dd>{getEventDate()}</dd>
          </div>
          <div>
            <dt className="sr-only">Venue</dt>
            <dd>{getEventVenue()}</dd>
          </div>
          <div>
            <dt className="sr-only">Node</dt>
            <dd>Node {process.version}</dd>
          </div>
          <div>
            <dt className="sr-only">Process started</dt>
            <dd>Up since {started}</dd>
          </div>
        </dl>
      </div>
    </footer>
  );
}
