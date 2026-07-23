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
          <p className="text-sm font-semibold uppercase tracking-widest text-flama mb-3">
            Demo en vivo
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-filo leading-tight">
            Probalo antes de decidir
          </h2>
          <p className="mt-4 text-humo text-lg max-w-xl mx-auto">
            Tenemos una demo funcional lista para que veas cómo trabaja CorteFlow en una barbería real.
            Sin registro, sin tarjeta.
          </p>
        </div>

        {/* Preview card */}
        <div className="relative rounded-2xl border border-borde-2 bg-grafito overflow-hidden mb-10">
          {/* Barra de browser falsa */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-borde bg-grafito">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-borde-2" />
              <span className="w-3 h-3 rounded-full bg-borde-2" />
              <span className="w-3 h-3 rounded-full bg-borde-2" />
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-grafito-2 rounded-md px-3 py-1 text-xs text-humo-2 text-left flex items-center gap-1.5">
                <span>🔒</span>
                barbershopdemo-kappa.vercel.app
              </div>
            </div>
          </div>

          {/* Header de la barbería demo */}
          <div className="flex items-center justify-between px-6 pt-5 pb-3 border-b border-borde">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-grafito-2 flex items-center justify-center text-xs font-black text-filo">DB</div>
              <div className="text-left">
                <p className="text-filo font-bold text-sm leading-none">Demo Barbería</p>
                <p className="text-humo-2 text-xs mt-0.5">Buenos Aires · CorteFlow</p>
              </div>
            </div>
            <span className="text-xs px-2 py-1 rounded-full bg-flama/10 border border-flama/20 text-flama">En vivo</span>
          </div>

          {/* Contenido simulado — agenda de turnos */}
          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between mb-4">
              <p className="text-filo font-bold text-sm">Agenda del día — Lunes 14 Abr</p>
              <span className="text-xs px-2 py-1 rounded-full bg-grafito-2 border border-borde-2 text-humo">3 turnos activos</span>
            </div>
            <div className="flex flex-col gap-2 mb-6">
              {[
                { hora: "09:00", cliente: "Rodrigo M.", servicio: "Corte + Barba", barbero: "Nico", color: "bg-flama/20 border-flama/30" },
                { hora: "10:30", cliente: "Facundo L.", servicio: "Degradé", barbero: "Nico", color: "bg-grafito-2 border-borde-2" },
                { hora: "11:00", cliente: "Tomás P.", servicio: "Corte clásico", barbero: "Santi", color: "bg-grafito-2 border-borde-2" },
              ].map(({ hora, cliente, servicio, barbero, color }) => (
                <div key={hora} className={`flex items-center gap-4 px-4 py-3 rounded-xl border ${color}`}>
                  <span className="text-flama font-bold text-sm w-12 shrink-0">{hora}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-filo text-sm font-semibold truncate">{cliente}</p>
                    <p className="text-humo-2 text-xs">{servicio}</p>
                  </div>
                  <span className="text-xs text-humo-2 shrink-0">{barbero}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-bg text-filo font-bold text-lg glow transition-transform hover:scale-105 active:scale-95"
              >
                Abrir demo completa →
              </a>
            </div>
          </div>
        </div>

        <p className="text-humo-2 text-sm">
          ¿Querés una demo personalizada para tu barbería?{" "}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-flama hover:opacity-80 transition-opacity"
          >
            Escribinos por WhatsApp
          </a>
        </p>
      </div>

      {/* Separador inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-borde-2 to-transparent" />
    </section>
  );
}
