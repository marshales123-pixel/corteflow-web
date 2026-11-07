import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

// Fecha fija de la última actualización real del contenido (no new Date():
// cambiaría en cada deploy aunque la página sea la misma).
const ACTUALIZADA = "2026-11-07";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: ACTUALIZADA,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
