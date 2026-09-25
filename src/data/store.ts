import { promises as fs } from "fs";
import path from "path";

export type Rsvp = {
  name: string;
  email: string;
  guests: number;
  createdAt: string;
};

export type Reservation = {
  pieceId: string;
  name: string;
  email: string;
  createdAt: string;
};

type Store = {
  rsvps: Rsvp[];
  reservations: Reservation[];
};

const STORE_PATH = path.join(process.cwd(), "data", "store.json");

const emptyStore = (): Store => ({ rsvps: [], reservations: [] });

async function readStore(): Promise<Store> {
  try {
    const raw = await fs.readFile(STORE_PATH, "utf8");
    const parsed = JSON.parse(raw) as Store;
    return {
      rsvps: Array.isArray(parsed.rsvps) ? parsed.rsvps : [],
      reservations: Array.isArray(parsed.reservations) ? parsed.reservations : [],
    };
  } catch {
    return emptyStore();
  }
}

async function writeStore(store: Store) {
  await fs.mkdir(path.dirname(STORE_PATH), { recursive: true });
  await fs.writeFile(STORE_PATH, JSON.stringify(store, null, 2));
}

export async function addRsvp(rsvp: Omit<Rsvp, "createdAt">) {
  const store = await readStore();
  store.rsvps.push({ ...rsvp, createdAt: new Date().toISOString() });
  await writeStore(store);
}

export async function addReservation(reservation: Omit<Reservation, "createdAt">) {
  const store = await readStore();
  if (store.reservations.some((item) => item.pieceId === reservation.pieceId)) {
    return { ok: false as const, reason: "reserved" as const };
  }
  store.reservations.push({
    ...reservation,
    createdAt: new Date().toISOString(),
  });
  await writeStore(store);
  return { ok: true as const };
}

export async function isReserved(pieceId: string) {
  const store = await readStore();
  return store.reservations.some((item) => item.pieceId === pieceId);
}

export async function reservedIds() {
  const store = await readStore();
  return new Set(store.reservations.map((item) => item.pieceId));
}
