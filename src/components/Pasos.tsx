const pasos = [
  {
    numero: "01",
    titulo: "Me escribís por WhatsApp",
    desc: "Me contás cómo es tu barbería: cuántos barberos, qué servicios, precios y horarios. Con 15 minutos alcanza.",
  },
  {
    numero: "02",
    titulo: "Te lo dejamos funcionando",
    desc: "Cargamos tu barbería completa: barberos, servicios, precios, horarios y sucursales, y armamos tu web. Vos no tocás nada.",
  },
  {
    numero: "03",
    titulo: "Tus clientes reservan solos",
    desc: "Compartís el link en Instagram, Google y WhatsApp. Los clientes eligen día, hora y barbero sin mandarte un mensaje.",
  },
];

export default function Pasos() {
  return (
    <section className="relative py-24 sm:py-28 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="eyebrow mb-3">Cómo funciona</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-filo leading-tight">
            Te lo dejamos funcionando nosotros
          </h2>
          <p className="mt-4 text-humo text-lg max-w-xl mx-auto">
            No necesitás saber nada de tecnología. Nosotros nos encargamos de todo.
          </p>
        </div>

        <div className="relative">
        <div className="hidden sm:block absolute top-8 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-borde" aria-hidden="true" />
        <ol className="relative grid sm:grid-cols-3 gap-8">
          {pasos.map(({ numero, titulo, desc }) => (
            <li key={numero} className="flex flex-col items-center sm:items-start text-center sm:text-left gap-4">
              <div className="relative w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center shrink-0 glow">
                <span className="text-navaja font-mono font-medium text-lg" aria-hidden="true">{numero}</span>
              </div>
              <div>
                <h3 className="text-filo font-bold text-lg mb-2">{titulo}</h3>
                <p className="text-humo text-sm leading-relaxed">{desc}</p>
              </div>
            </li>
          ))}
        </ol>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-borde-2 to-transparent" aria-hidden="true" />
    </section>
  );
}
