export const SITE_URL = "https://corteflow.com";

export const WHATSAPP_NUMERO = "541167330060";
export const WHATSAPP_VISIBLE = "+54 11 6733-0060";

/** Link de WhatsApp a Gonzalo con un mensaje armado (distinto por botón, así sabe desde dónde escriben). */
export function whatsappUrl(texto = "Hola Gonzalo, quiero una demo de CorteFlow"): string {
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(texto)}`;
}

export const WHATSAPP_URL = whatsappUrl();

export const INSTAGRAM_URL = "https://instagram.com/corteflow.ar";

/** The Bulldog: la barbería donde nació y se usa CorteFlow todos los días. */
export const BULLDOG_URL = "https://thebulldogbarbershop.com";
export const BULLDOG_RESERVAR_URL = "https://thebulldogbarbershop.com/reservar";
