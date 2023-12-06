import { Lato } from "next/font/google";
import { PT_Serif } from "next/font/google";

export const lato = Lato({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

export const pt_serif = PT_Serif({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-pt_serif",
  display: "swap",
});
