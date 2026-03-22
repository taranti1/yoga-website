import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Cynthia Tarantino | Yoga & Reiki in New Jersey",
    template: "%s | Cynthia Tarantino Yoga & Reiki",
  },
  description:
    "Experienced yoga instructor and Usui Reiki Master offering group classes, private sessions, reiki healing, and retreats in Long Beach Island, Cranford, Milburn, and Summit, NJ.",
  keywords: [
    "yoga",
    "reiki",
    "yoga classes NJ",
    "reiki healing New Jersey",
    "yoga Long Beach Island",
    "yoga Cranford NJ",
    "yoga Milburn NJ",
    "yoga Summit NJ",
    "reiki master NJ",
    "private yoga sessions",
    "yoga retreats NJ",
    "Cynthia Tarantino",
  ],
  openGraph: {
    title: "Cynthia Tarantino | Yoga & Reiki in New Jersey",
    description:
      "Guiding you home to yourself through yoga and reiki. Group classes, private sessions, and retreats across New Jersey.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <div className="grain-overlay" aria-hidden="true" />
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
