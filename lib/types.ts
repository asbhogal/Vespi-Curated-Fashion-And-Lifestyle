import { Antonio } from "next/font/google";
import { Chakra_Petch } from "next/font/google";
import { Lato } from "next/font/google";
import { PT_Serif } from "next/font/google";
import { Roboto_Condensed } from "next/font/google";
import { Unna } from "next/font/google";

export const antonio = Antonio({
  subsets: ["latin"],
  variable: "--font-antonio",
  display: "swap",
});

export const chakra_petch = Chakra_Petch({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-chakra_petch",
  display: "swap",
});

export const lato = Lato({
  weight: ["400", "700"],
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

export const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-roboto_condensed",
  display: "swap",
});

export const unna = Unna({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-unna",
  display: "swap",
});

export interface AddToCartProps {
  size?: "small" | "medium" | "large";
  label: number;
  quantity: string;
  onClick?: () => void;
}
