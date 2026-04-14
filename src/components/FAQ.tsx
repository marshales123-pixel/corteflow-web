"use client";

import { useState } from "react";

const preguntas = [
  {
    q: "¿Mis clientes tienen que bajar alguna app?",
    a: "No. Reservan desde un link en el celular, como si pidieran una pizza online. Si tu cliente usa WhatsApp, puede reservar en CorteFlow.",
  },
  {
    q: "¿Yo tengo que configurar todo?",
    a: "Para nada. Yo cargo tu barbería completa: barberos, servicios, horarios y sucursales. Vos abrís el sistema y ya está funcionando.",
  },
  {
    q: "¿Qué pasa si me quiero ir?",
    a: "No hay contrato. Cancelás cuando querés. Y si decidís salir, te exporto toda la información de tus clientes y turnos — los datos son tuyos.",
  },
  {
    q: "¿Y si el sistema falla un sábado a la mañana?",
    a: "Corre en servidores de nivel empresarial con alta disponibilidad. Y si hay cualquier problema, me escribís por WhatsApp y lo resuelvo ese mismo día.",
  },
  {
    q: "¿El precio es en dólares? ¿Cómo pago?",
    a: "Los precios están en dólares para mantenerlos estables, pero pagás en pesos al cambio del día o en dólares si preferís. Aceptamos transferencia bancaria y Mercado Pago.",
  },
];

export default function FAQ() {
  const [abierto, setAbierto] = useState<number | null>(null);

  return (
    <section className="relative py-28 px-6">
      {/* Separador superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-400 mb-3">
            Preguntas frecuentes
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            Lo que todo barbero pregunta
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {preguntas.map(({ q, a }, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/8 bg-white/3 overflow-hidden transition-colors hover:border-white/15"
            >
              <button
                onClick={() => setAbierto(abierto === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-white font-semibold text-sm sm:text-base leading-snug">{q}</span>
                <span
                  className={`text-orange-400 text-xl font-bold shrink-0 transition-transform duration-200 ${
                    abierto === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              {abierto === i && (
                <div className="px-6 pb-5">
                  <p className="text-gray-400 text-sm leading-relaxed">{a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Separador inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
