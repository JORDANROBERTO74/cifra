import { Inter, Onest, Playfair_Display } from "next/font/google"

export const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const fontOnest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
  display: "swap",
})

export const fontPlayfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  style: ["italic"],
  weight: ["500", "600"],
})

export const fontVariables = `${fontInter.variable} ${fontOnest.variable} ${fontPlayfair.variable}`
