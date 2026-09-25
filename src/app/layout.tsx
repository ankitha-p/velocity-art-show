import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { Header } from "@/components/Header";
import { VelocityStrip } from "@/components/VelocityStrip";
import { THEME_COLOR, getEventName } from "@/lib/config";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: {
    default: "The Great Indian Art Show",
    template: "%s · The Great Indian Art Show",
  },
  description:
    "A live hanging of six Indian traditions. Register, walk the room, and reserve a piece.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const eventName = getEventName();

  return (
    <html
      lang="en"
      className={`${outfit.variable} ${cormorant.variable} h-full antialiased`}
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
