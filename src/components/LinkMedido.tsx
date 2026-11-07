"use client";

import { track } from "@vercel/analytics";
import type { ComponentProps } from "react";

type Props = ComponentProps<"a"> & {
  /** Nombre del evento en Vercel Analytics (ej. "click_whatsapp"). */
  evento: string;
  /** De qué botón vino (hero, plan_profesional, contacto…). */
  origen: string;
};

/**
 * Link externo que, además de abrir, cuenta el clic en Vercel Web Analytics.
 * Se usa en todos los botones de WhatsApp y en "Ver cómo reserva un cliente":
 * así se sabe qué botón trae las consultas.
 */
export default function LinkMedido({ evento, origen, onClick, ...props }: Props) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      onClick={(e) => {
        try {
          track(evento, { origen });
        } catch {
          // La medición nunca frena el clic.
        }
        onClick?.(e);
      }}
    />
  );
}
