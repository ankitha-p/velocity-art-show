"use server";

import { redirect } from "next/navigation";
import { getPiece } from "@/data/art";
import { addReservation, addRsvp } from "@/data/store";

function readText(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function submitRsvp(formData: FormData) {
  const name = readText(formData, "name");
  const email = readText(formData, "email");
  const guestsRaw = readText(formData, "guests");
  const guests = Number.parseInt(guestsRaw, 10);

  if (!name || !email || !Number.isFinite(guests) || guests < 1 || guests > 8) {
    redirect("/?error=rsvp");
  }

  await addRsvp({ name, email, guests });
  redirect("/thanks?type=rsvp");
}

export async function submitReserve(formData: FormData) {
  const pieceId = readText(formData, "pieceId");
  const name = readText(formData, "name");
  const email = readText(formData, "email");
  const piece = getPiece(pieceId);

  if (!piece || !name || !email) {
    redirect(`/gallery/${pieceId || ""}?error=reserve`);
  }

  const result = await addReservation({ pieceId, name, email });
  if (!result.ok) {
    redirect(`/gallery/${pieceId}?error=taken`);
  }

  redirect(`/thanks?type=reserve&piece=${encodeURIComponent(pieceId)}`);
}
