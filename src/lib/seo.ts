import { SITE_URL, INSTAGRAM_URL, WHATSAPP_NUMERO } from "@/lib/constants";
import { PLANES, ORDEN_PLANES, DESDE_MENSUAL, mensualMinimo, textoMensual, usd } from "@/lib/precios";
import { PREGUNTAS } from "@/lib/faq";

export const TITULO = "CorteFlow — Sistema de turnos, caja y sueldos para barberías";

/** Meta description: el precio sale de lib/precios.ts (única fuente). */
export const DESCRIPCION = `Turnos online con tu marca, caja que cuadra con tu planilla, sueldos calculados y cobro con QR de Mercado Pago. Desde ${usd(DESDE_MENSUAL)}/mes.`;

export const DESCRIPCION_CORTA = `Turnos online, caja que cuadra con tu planilla y sueldos calculados solos. Desde ${usd(DESDE_MENSUAL)}/mes.`;

/**
 * JSON-LD en un solo @graph: Organization + WebSite + SoftwareApplication (con las
 * ofertas de lib/precios.ts) + FAQPage (las mismas preguntas que se ven en la página).
 * Sin aggregateRating ni reviews: no hay reseñas propias que mostrar y Google los
 * penaliza si se inventan.
 */
export function jsonLd() {
  const org = `${SITE_URL}/#organization`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": org,
        name: "CorteFlow",
        url: SITE_URL,
        logo: `${SITE_URL}/logo-mark-144.png`,
        founder: { "@type": "Person", name: "Gonzalo Guarnieri" },
        areaServed: { "@type": "Country", name: "Argentina" },
        sameAs: [INSTAGRAM_URL],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: `+${WHATSAPP_NUMERO}`,
          availableLanguage: "es",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "CorteFlow",
        inLanguage: "es-AR",
        publisher: { "@id": org },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/#software`,
        name: "CorteFlow",
        description: DESCRIPCION_CORTA,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: SITE_URL,
        publisher: { "@id": org },
        offers: ORDEN_PLANES.map((id) => {
          const p = PLANES[id];
          return {
            "@type": "Offer",
            name: `Plan ${p.nombre}`,
            description: p.porSede
              ? `${textoMensual(p)}, desde ${p.sedesMinimas} sedes (${usd(mensualMinimo(p))}/mes)`
              : textoMensual(p),
            price: String(mensualMinimo(p)),
            priceCurrency: "USD",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: String(p.mensual),
              priceCurrency: "USD",
              unitText: p.porSede ? "mes por sede" : "mes",
              billingDuration: "P1M",
            },
          };
        }),
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: PREGUNTAS.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  };
}
