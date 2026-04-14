import { WHATSAPP_URL, DEMO_URL } from "@/lib/constants";

export default function Demo() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(239,68,68,0.10) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-400 mb-3">
            Demo en vivo
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            Probalo antes de decidir
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto">
            Tenemos una demo funcional lista para que veas cómo trabaja CorteFlow en una barbería real.
            Sin registro, sin tarjeta.
          </p>
        </div>

        {/* Preview card */}
        <div className="relative rounded-2xl border border-white/10 bg-white/3 overflow-hidden mb-10">
          {/* Barra de browser falsa */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-white/8 bg-white/3">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-white/10" />
              <span className="w-3 h-3 rounded-full bg-white/10" />
              <span className="w-3 h-3 rounded-full bg-white/10" />
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-white/8 rounded-md px-3 py-1 text-xs text-gray-500 text-left flex items-center gap-1.5">
                <span>🔒</span>
                barbershopdemo-kappa.vercel.app
              </div>
            </div>
          </div>

          {/* Header de la barbería demo */}
          <div className="flex items-center justify-between px-6 pt-5 pb-3 border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-xs font-black text-white">TB</div>
              <div className="text-left">
                <p className="text-white font-bold text-sm leading-none">The Bulldog</p>
                <p className="text-gray-600 text-xs mt-0.5">Barber Shop · Buenos Aires</p>
              </div>
            </div>
            <span className="text-xs px-2 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400">En vivo</span>
          </div>

          {/* Contenido simulado — agenda de turnos */}
          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between mb-4">
              <p className="text-white font-bold text-sm">Agenda del día — Lunes 14 Abr</p>
              <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">3 turnos activos</span>
            </div>
            <div className="flex flex-col gap-2 mb-6">
              {[
                { hora: "09:00", cliente: "Rodrigo M.", servicio: "Corte + Barba", barbero: "Nico", color: "bg-orange-500/20 border-orange-500/30" },
                { hora: "10:30", cliente: "Facundo L.", servicio: "Degradé", barbero: "Nico", color: "bg-white/5 border-white/10" },
                { hora: "11:00", cliente: "Tomás P.", servicio: "Corte clásico", barbero: "Santi", color: "bg-white/5 border-white/10" },
              ].map(({ hora, cliente, servicio, barbero, color }) => (
                <div key={hora} className={`flex items-center gap-4 px-4 py-3 rounded-xl border ${color}`}>
                  <span className="text-orange-400 font-bold text-sm w-12 shrink-0">{hora}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-semibold truncate">{cliente}</p>
                    <p className="text-gray-500 text-xs">{servicio}</p>
                  </div>
                  <span className="text-xs text-gray-600 shrink-0">{barbero}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-bg text-white font-bold text-lg glow transition-transform hover:scale-105 active:scale-95"
              >
                Abrir demo completa →
              </a>
            </div>
          </div>
        </div>

        <p className="text-gray-600 text-sm">
          ¿Querés una demo personalizada para tu barbería?{" "}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-300 transition-colors"
          >
            Escribinos por WhatsApp
          </a>
        </p>
      </div>

      {/* Separador inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
