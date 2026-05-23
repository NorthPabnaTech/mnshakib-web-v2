import type { Metadata } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import { SiteNav } from "@/components/nav/SiteNav";
import { CtaStrip } from "@/components/footer/CtaStrip";
import { SiteFooter } from "@/components/footer/SiteFooter";
import "./globals.css";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

// Inter Tight is a high-impact display sans, used for headlines.
// Italic variants give us the mint-accent treatment.
const fontDisplay = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nazmus Shakib — Strategy, Marketing & AI Ventures",
  description:
    "Founder of UpscaleBD. CSMO at MAAC. Product Strategy at TorontoCreatives. A decade of strategy and venture-building across two continents.",
  metadataBase: new URL("https://mnshakib.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontDisplay.variable} ${fontMono.variable}`}
    >
      <body>
        <SiteNav />
        <main>{children}</main>
        <CtaStrip />
        <SiteFooter />
      </body>
    </html>
  );
}
