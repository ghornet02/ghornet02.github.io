import type { Metadata } from "next";
import { Cinzel, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({ variable: "--font-cinzel", subsets: ["latin"], weight: ["500", "700", "900"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const jetbrains = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ghornet02 — Systems Developer",
  description:
    "Portfolio of ghornet02: a distributed file system, a packet sniffer, a Unix shell and software testing suites.",
};

/** Root layout: fonts, dark theme and the film-grain overlay. */
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${inter.variable} ${jetbrains.variable} antialiased`}>
      <body className="grain min-h-screen font-sans">{children}</body>
    </html>
  );
}
