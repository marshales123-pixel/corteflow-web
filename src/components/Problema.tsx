import { MessageCircleWarning, NotebookPen, Calculator, type LucideIcon } from "lucide-react";

const problemas: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: MessageCircleWarning,
    title: "WhatsApp caótico",
    desc: "Turnos por mensaje, cancelaciones sin aviso, clientes que preguntan lo mismo veinte veces.",
  },
  {
    icon: NotebookPen,
    title: "Anotador y papel",
    desc: "Agenda llena de tachones, turnos dobles y horarios que nadie recuerda bien.",
  },
  {
    icon: Calculator,
    title: "Planilla y caja a ojo",
    desc: "Pasar la planilla a mano, calcular sueldos y no saber si la caja cuadra. Un dolor de cabeza todos los días.",
  },
];

export default function Problema() {
  return (
    <section className="relative py-24 sm:py-28 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="eyebrow mb-3">El problema</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-filo leading-tight">¿Te suena familiar?</h2>
          <p className="mt-4 text-humo text-lg max-w-xl mx-auto">
            La mayoría de las barberías siguen trabajando como en 2005. CorteFlow lo cambia.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-14">
          {problemas.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-borde bg-grafito p-6 flex flex-col gap-3">
              <Icon className="w-7 h-7 text-flama" aria-hidden="true" />
              <h3 className="text-filo font-bold text-lg">{title}</h3>
              <p className="text-humo text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div
            className="inline-block px-8 py-5 rounded-2xl border border-flama/20"
            style={{
              background:
                "linear-gradient(135deg, color-mix(in srgb, var(--ign-1) 8%, transparent), color-mix(in srgb, var(--ign-2) 8%, transparent))",
            }}
          >
            <p className="text-filo text-xl font-bold tracking-tight">
              Con CorteFlow, <span className="gradient-text">cada turno y cada peso quedan anotados.</span>
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-borde-2 to-transparent" aria-hidden="true" />
    </section>
  );
}
