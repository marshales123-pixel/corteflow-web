/**
 * ÚNICA fuente de los precios de CorteFlow.
 *
 * Todo lo que muestra un precio sale de acá: las tarjetas de Planes, la meta
 * description, la imagen para compartir (opengraph-image) y el JSON-LD.
 * Si cambia un número, se cambia SOLO en este archivo.
 *
 * Montos en dólares (USD), enteros.
 */

/**
 * Oferta actual: el setup va sin cargo. Sin fecha ni cupo, así que no se
 * presenta como urgencia ("por tiempo limitado"): es la oferta de hoy.
 * En false vuelven a mostrarse los precios de setup de lista, sin tocar nada más.
 */
export const SETUP_SIN_CARGO = true;

export type PlanId = "basico" | "profesional" | "multi";

export type Plan = {
  id: PlanId;
  nombre: string;
  /** Setup único, en USD (precio de lista). */
  setup: number;
  /** Mensualidad en USD. En Multi-Sucursal es POR SEDE. */
  mensual: number;
  porSede: boolean;
  /** Sedes mínimas del plan. Multi-Sucursal arranca en 2: con 1 sede es el Profesional. */
  sedesMinimas: number;
};

export const PLANES: Record<PlanId, Plan> = {
  basico: { id: "basico", nombre: "Básico", setup: 100, mensual: 40, porSede: false, sedesMinimas: 1 },
  profesional: { id: "profesional", nombre: "Profesional", setup: 150, mensual: 60, porSede: false, sedesMinimas: 1 },
  // USD 40 por sede, desde 2 sedes (USD 80/mes): así nunca sale más barato que el
  // Profesional, que es para una sola sede.
  multi: { id: "multi", nombre: "Multi-Sucursal", setup: 200, mensual: 40, porSede: true, sedesMinimas: 2 },
};

export const ORDEN_PLANES: PlanId[] = ["basico", "profesional", "multi"];

/** Lo mínimo que se paga por mes en un plan (en Multi-Sucursal, con las sedes mínimas). */
export function mensualMinimo(plan: Plan): number {
  return plan.porSede ? plan.mensual * plan.sedesMinimas : plan.mensual;
}

export function usd(monto: number): string {
  return `USD ${monto}`;
}

/** "USD 40/mes" o "USD 40/mes por sede". */
export function textoMensual(plan: Plan): string {
  return plan.porSede ? `${usd(plan.mensual)}/mes por sede` : `${usd(plan.mensual)}/mes`;
}

/** El precio más bajo de todos, para "desde USD X/mes". */
export const DESDE_MENSUAL = Math.min(...ORDEN_PLANES.map((id) => mensualMinimo(PLANES[id])));
