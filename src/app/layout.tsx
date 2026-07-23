import type { Metadata } from "next";
import { Sora, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["500"],
});

const siteUrl = "https://corteflow.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CorteFlow — Sistema de gestión para barberías",
    template: "%s | CorteFlow",
  },
  description:
    "Reservas online 24/7, agenda digital y WhatsApp automático para tu barbería. Sin papel. Sin WhatsApp caótico. Sin excusas.",
  keywords: [
    "sistema gestión barbería",
    "reservas online barbería",
    "agenda digital barbería",
    "software barbería argentina",
    "turnos barbería online",
    "CorteFlow",
  ],
  authors: [{ name: "Gonzalo Guarnieri" }],
  creator: "CorteFlow",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: "CorteFlow",
    title: "CorteFlow — Sistema de gestión para barberías",
    description:
      "Reservas online 24/7, agenda digital y WhatsApp automático. Sin papel. Sin WhatsApp caótico.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CorteFlow — Sistema de gestión para barberías",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CorteFlow — Sistema de gestión para barberías",
    description:
      "Reservas online 24/7, agenda digital y WhatsApp automático para tu barbería.",
    images: ["/og-image.png"],
    creator: "@corteflow_ar",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${sora.variable} ${dmSans.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-[var(--navaja)] text-[var(--filo)]">{children}</body>
    </html>
  );
}
