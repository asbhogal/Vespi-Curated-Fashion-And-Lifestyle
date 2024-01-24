import { lato, pt_serif } from "@/lib/types";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vespi | Curated Luxury Fashion & Lifestyle",
  description:
    "Browse our range of high-end, curated Mens and Womens fashion and the latest journals in our lookbook",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lato.variable} ${pt_serif.variable}`}>
      <body><main>
      {children}
      </main></body>
    </html>
  );
}
