import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { PT_Serif } from "next/font/google";
import "./globals.css";

const lato = Lato({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

const pt_serif = PT_Serif({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-pt_serif",
  display: "swap",
});

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
      <body>{children}</body>
    </html>
  );
}
