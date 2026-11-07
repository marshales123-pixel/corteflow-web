import type { Metadata } from "next";
import { Sora, DM_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SITE_URL } from "@/lib/constants";
import { TITULO, DESCRIPCION, DESCRIPCION_CORTA, jsonLd } from "@/lib/seo";
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

// La imagen para compartir (og:image y twitter:image) la ponen solos
// src/app/opengraph-image.tsx y twitter-image.tsx: no se declara a mano acá.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITULO,
    template: "%s | CorteFlow",
  },
  description: DESCRIPCION,
  authors: [{ name: "Gonzalo Guarnieri" }],
  creator: "CorteFlow",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    siteName: "CorteFlow",
    title: TITULO,
    description: DESCRIPCION_CORTA,
  },
  twitter: {
    card: "summary_large_image",
    title: TITULO,
    description: DESCRIPCION_CORTA,
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
      lang="es-AR"
      className={`${sora.variable} ${dmSans.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-[var(--navaja)] text-[var(--filo)]">
        <script
          type="application/ld+json"
          // "<" escapado: nada del texto puede cerrar el <script>.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()).replace(/</g, "\\u003c") }}
        />
        {children}
        {/* Vercel Web Analytics: visitas + eventos de los botones (LinkMedido). Hay que activarlo en Vercel → Analytics. */}
        <Analytics />
      </body>
    </html>
  );
}
