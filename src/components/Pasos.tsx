const pasos = [
  {
    numero: "01",
    titulo: "Me contactás por WhatsApp",
    desc: "Me contás cómo es tu barbería: cuántos barberos, qué servicios, los horarios. 15 minutos alcanza.",
  },
  {
    numero: "02",
    titulo: "Yo configuro todo",
    desc: "Cargo tu barbería en el sistema: barberos, servicios, horarios y sucursales. Vos no tocás nada.",
  },
  {
    numero: "03",
    titulo: "Tus clientes reservan solos",
    desc: "Compartís el link y listo. Los clientes eligen día, hora y barbero sin mandarte un mensaje.",
  },
];

export default function Pasos() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* Separador superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-400 mb-3">
            Cómo funciona
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            En 48 horas, tu barbería<br className="hidden sm:block" /> reserva sola
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto">
            No necesitás saber nada de tecnología. Yo me encargo de todo.
          </p>
        </div>

        {/* Pasos */}
        <div className="grid sm:grid-cols-3 gap-8 relative">
          {/* Línea conectora desktop */}
          <div className="hidden sm:block absolute top-8 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-white/8" />

          {pasos.map(({ numero, titulo, desc }) => (
            <div key={numero} className="flex flex-col items-center sm:items-start text-center sm:text-left gap-4">
              {/* Número */}
              <div className="relative w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center shrink-0 glow">
                <span className="text-white font-black text-lg">{numero}</span>
              </div>

              <div>
                <h3 className="text-white font-bold text-lg mb-2">{titulo}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Separador inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
