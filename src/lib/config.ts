export const APP_VERSION = "v1.0.0";

export const THEME_COLOR = "#e08a1e";

export function getEventName() {
  return process.env.EVENT_NAME || "The Great Indian Art Show";
}

export function getEventDate() {
  return process.env.EVENT_DATE || "15 November 2026";
}

export function getEventVenue() {
  return process.env.EVENT_VENUE || "National Gallery of Modern Art, New Delhi";
}

const runtime = globalThis as { __atelierStartedAt?: string };

export function getProcessStartedAt() {
  if (!runtime.__atelierStartedAt) {
    runtime.__atelierStartedAt = new Date().toISOString();
  }
  return runtime.__atelierStartedAt;
}
