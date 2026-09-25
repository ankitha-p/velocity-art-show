import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import { Header } from "@/components/Header";
import { VelocityStrip } from "@/components/VelocityStrip";
import { THEME_COLOR, getEventName } from "@/lib/config";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: {
    default: "Atelier Night",
    template: "%s · Atelier Night",
  },
  description:
    "Register for a live art evening, browse the hanging works, and reserve a piece.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const eventName = getEventName();

  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfair.variable} h-full antialiased`}
    >
      <body
        className="flex min-h-full flex-col"
        style={{ ["--accent" as string]: THEME_COLOR }}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <VelocityStrip />
        <span className="sr-only">{eventName}</span>
      </body>
    </html>
  );
}
