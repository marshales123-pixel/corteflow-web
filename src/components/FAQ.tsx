import { PREGUNTAS } from "@/lib/faq";

// <details>/<summary>: las respuestas quedan en el HTML (Google las lee), anda sin
// JavaScript y el navegador ya dice si está abierta o cerrada. Las mismas preguntas
// van al JSON-LD FAQPage del layout.
export default function FAQ() {
  return (
    <section id="preguntas" className="relative py-24 sm:py-28 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="eyebrow mb-3">Preguntas frecuentes</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-filo leading-tight">Lo que todo barbero pregunta</h2>
        </div>

        <div className="faq flex flex-col gap-3">
          {PREGUNTAS.map(({ q, a }) => (
            <details
              key={q}
              className="group rounded-2xl border border-borde bg-grafito overflow-hidden transition-colors hover:border-borde-2 open:border-borde-2"
            >
              <summary className="flex items-center justify-between gap-4 px-5 sm:px-6 py-5 cursor-pointer select-none">
                <span className="text-filo font-semibold text-sm sm:text-base leading-snug">{q}</span>
                <span className="faq-mas text-flama text-2xl leading-none shrink-0 transition-transform duration-200" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="px-5 sm:px-6 pb-5 text-humo text-sm leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-borde-2 to-transparent" aria-hidden="true" />
    </section>
  );
}
