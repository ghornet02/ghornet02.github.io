import type { Metadata, Viewport } from "next";
import { Cinzel, Inter, JetBrains_Mono, Shippori_Mincho } from "next/font/google";
import { GITHUB_USER, ROLE, SITE_URL } from "@/data/projects";
import "./globals.css";

const cinzel = Cinzel({ variable: "--font-cinzel", subsets: ["latin"], weight: ["500", "700", "900"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const jetbrains = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"] });
const mincho = Shippori_Mincho({ variable: "--font-mincho", weight: ["700"], subsets: ["latin"], preload: false });

const title = `${GITHUB_USER} — ${ROLE}`;
const description =
  "Systems programmer building in C: a fault-tolerant distributed file system, a libpcap packet sniffer, a POSIX shell, and 200+ automated tests.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: GITHUB_USER,
    title,
    description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${GITHUB_USER}: ${ROLE}` }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
};

export const viewport: Viewport = { themeColor: "#07070a" };

/** Root layout: fonts, dark theme and the film-grain overlay. */
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${inter.variable} ${jetbrains.variable} ${mincho.variable} antialiased`}
    >
      <body className="grain min-h-screen font-sans">{children}</body>
    </html>
  );
}
