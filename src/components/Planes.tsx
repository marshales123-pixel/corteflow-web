import { WHATSAPP_URL } from "@/lib/constants";

const planes = [
  {
    nombre: "Básico",
    setup: "USD 80",
    mensual: "USD 50/mes",
    desc: "Ideal para empezar. Una sede, reservas online y agenda digital.",
    features: [
      "1 sede",
      "Reservas online 24/7",
      "Agenda digital por barbero",
      "WhatsApp automático",
      "El cliente cancela solo",
    ],
    destacado: false,
    cta: "Empezar con Básico",
  },
  {
    nombre: "Profesional",
    setup: "USD 150",
    mensual: "USD 80/mes",
    desc: "El más elegido. Todo lo del Básico más sueldos y estadísticas.",
    features: [
      "1 sede",
      "Todo el plan Básico",
      "Cálculo automático de sueldos",
      "Estadísticas de ingresos",
      "Soporte prioritario",
    ],
    destacado: true,
    cta: "Empezar con Profesional",
  },
  {
    nombre: "Multi-Sucursal",
    setup: "USD 300",
    mensual: "USD 100/mes",
    desc: "Para barberías con varias sedes. Gestión centralizada con datos aislados.",
    features: [
      "Múltiples sedes",
      "Todo el plan Profesional",
      "Las sedes no se mezclan",
      "Panel por sucursal",
      "Soporte dedicado",
    ],
    destacado: false,
    cta: "Empezar con Multi-Sucursal",
  },
];

export default function Planes() {
  const whatsappUrl = WHATSAPP_URL;

  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* Glow de fondo centrado */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(249,115,22,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-400 mb-3">
            Planes y precios
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            Elegí el que va con tu barbería
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto">
            Precio único de setup + mensualidad baja. Sin contratos, sin sorpresas.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {planes.map((plan) => (
            <div
              key={plan.nombre}
              className={`relative rounded-2xl flex flex-col p-7 transition-all duration-300 ${
                plan.destacado
                  ? "border-2 border-orange-500/60 bg-white/5 glow sm:scale-105 sm:-mx-1"
                  : "border border-white/10 bg-white/3 hover:border-white/20"
              }`}
            >
              {/* Badge popular */}
              {plan.destacado && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full gradient-bg text-white text-xs font-bold tracking-wide shadow-lg">
                    RECOMENDADO
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-white font-black text-xl mb-1">{plan.nombre}</h3>
                <p className="text-gray-500 text-sm">{plan.desc}</p>
              </div>

              {/* Precio */}
              <div className="mb-6">
                <div className="text-gray-400 text-sm mb-1">Setup único</div>
                <div className="text-white font-bold text-2xl">{plan.setup}</div>
                <p className="text-gray-600 text-xs mt-0.5">Configuración completa a cargo de CorteFlow</p>
                <div className="mt-3 text-gray-400 text-sm mb-1">Mensual</div>
                <div className="gradient-text font-black text-3xl">{plan.mensual}</div>
                <p className="text-gray-600 text-xs mt-0.5">Con 3 turnos extra por semana se paga solo</p>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="gradient-text font-bold">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full text-center py-3.5 rounded-xl font-bold text-sm transition-all ${
                  plan.destacado
                    ? "gradient-bg text-white glow hover:opacity-90"
                    : "border border-white/15 text-white hover:bg-white/8 hover:border-white/25"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-sm mt-8">
          ¿Tenés dudas? Escribinos por WhatsApp y te armamos una propuesta a medida.
        </p>
      </div>

      {/* Separador inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
