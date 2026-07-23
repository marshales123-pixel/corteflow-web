const problemas = [
  {
    emoji: "📱",
    title: "WhatsApp caótico",
    desc: "Turnos por mensaje, cancelaciones sin aviso, clientes que preguntan lo mismo veinte veces.",
  },
  {
    emoji: "📓",
    title: "Anotador y papel",
    desc: "Agenda llena de tachones, turnos dobles y horarios que nadie recuerda bien.",
  },
  {
    emoji: "💸",
    title: "Sueldos a ojo",
    desc: "Calcular cuánto le pagás a cada barbero al final del mes es un dolor de cabeza.",
  },
];

export default function Problema() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* Separador superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-borde-2 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-flama mb-3">
            El problema
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-filo leading-tight">
            ¿Te suena familiar?
          </h2>
          <p className="mt-4 text-humo text-lg max-w-xl mx-auto">
            La mayoría de las barberías siguen trabajando como en 2005. CorteFlow lo cambia.
          </p>
        </div>

        {/* Cards de problemas */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {problemas.map(({ emoji, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-borde bg-grafito p-6 flex flex-col gap-3 hover:border-flama/30 transition-colors"
            >
              <span className="text-3xl">{emoji}</span>
              <h3 className="text-filo font-bold text-lg">{title}</h3>
              <p className="text-humo-2 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Transición */}
        <div className="text-center">
          <div className="text-3xl gradient-text font-black mb-4">↓</div>
          <div
            className="inline-block px-8 py-5 rounded-2xl border border-flama/20"
            style={{ background: "linear-gradient(135deg, rgba(239,68,68,0.08), rgba(249,115,22,0.08))" }}
          >
            <p className="text-filo text-xl font-bold tracking-tight">
              Con CorteFlow,{" "}
              <span className="gradient-text">
                todo eso desaparece.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Separador inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-borde-2 to-transparent" />
    </section>
  );
}
