export const APP_VERSION = "v1.0.0";

export const THEME_COLOR = "#c45c26";

export function getEventName() {
  return process.env.EVENT_NAME || "Atelier Night";
}

export function getEventDate() {
  return process.env.EVENT_DATE || "October 12, 2026";
}

export function getEventVenue() {
  return process.env.EVENT_VENUE || "Studio 4, live and in person";
}

const runtime = globalThis as { __atelierStartedAt?: string };

export function getProcessStartedAt() {
  if (!runtime.__atelierStartedAt) {
    runtime.__atelierStartedAt = new Date().toISOString();
  }
  return runtime.__atelierStartedAt;
}
