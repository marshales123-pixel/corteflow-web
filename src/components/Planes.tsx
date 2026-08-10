import { WHATSAPP_URL } from "@/lib/constants";

// Promo de lanzamiento: setup gratis por tiempo limitado / primeros clientes.
// Para volver al precio de lista, poner en false — no borra los precios reales.
const SETUP_GRATIS = true;

const planes = [
  {
    nombre: "Básico",
    setup: "USD 100",
    mensual: "USD 40/mes",
    desc: "Ideal para empezar. Una sede, reservas online y agenda digital.",
    features: [
      "1 sede",
      "Reservas online 24/7",
      "Agenda digital por barbero",
      "WhatsApp automático al reservar",
      "El cliente cancela solo",
      "Landing page con SEO",
      "Google Analytics incluido",
    ],
    destacado: false,
    cta: "Empezar con Básico",
  },
  {
    nombre: "Profesional",
    setup: "USD 150",
    mensual: "USD 60/mes",
    desc: "El más elegido. Todo lo del Básico más sueldos, marketing y estadísticas.",
    features: [
      "1 sede",
      "Todo el plan Básico",
      "Cálculo automático de sueldos",
      "Marketing por WhatsApp",
      "Estadísticas de ingresos",
      "Programa de fidelización",
      "Galería de fotos",
    ],
    destacado: true,
    cta: "Empezar con Profesional",
  },
  {
    nombre: "Multi-Sucursal",
    setup: "USD 200",
    mensual: "USD 40/mes × sede",
    desc: "Para barberías con varias sedes. Gestión centralizada con datos aislados.",
    features: [
      "Sedes ilimitadas",
      "Todo el plan Profesional",
      "Las sedes no se mezclan",
      "Panel super admin global",
      "Reportes por sucursal",
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
          <p className="text-sm font-semibold uppercase tracking-widest text-flama mb-3">
            Planes y precios
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-filo leading-tight">
            Elegí el que va con tu barbería
          </h2>
          <p className="mt-4 text-humo text-lg max-w-xl mx-auto">
            {SETUP_GRATIS
              ? "Mensualidad baja y, por tiempo limitado, arrancás sin pagar el setup. Sin contratos, sin sorpresas."
              : "Precio único de setup + mensualidad baja. Sin contratos, sin sorpresas."}
          </p>
          {SETUP_GRATIS && (
            <div className="inline-flex items-center gap-2 mt-5 px-4 py-1.5 rounded-full bg-ok/10 border border-ok/30 text-ok text-xs font-bold tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-ok" />
              LANZAMIENTO · SETUP GRATIS POR TIEMPO LIMITADO
            </div>
          )}
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {planes.map((plan) => (
            <div
              key={plan.nombre}
              className={`relative rounded-2xl flex flex-col p-7 transition-all duration-300 ${
                plan.destacado
                  ? "border-2 border-flama/60 bg-grafito-2 glow sm:scale-105 sm:-mx-1"
                  : "border border-borde-2 bg-grafito hover:border-borde-2"
              }`}
            >
              {/* Badge popular */}
              {plan.destacado && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full gradient-bg text-filo text-xs font-bold tracking-wide shadow-lg">
                    RECOMENDADO
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-filo font-black text-xl mb-1">{plan.nombre}</h3>
                <p className="text-humo-2 text-sm">{plan.desc}</p>
              </div>

              {/* Precio */}
              <div className="mb-6">
                <div className="text-humo text-sm mb-1">Setup único</div>
                {SETUP_GRATIS ? (
                  <div className="flex items-center gap-2">
                    <span className="text-humo-2 text-lg line-through">{plan.setup}</span>
                    <span className="text-ok font-black text-2xl">GRATIS</span>
                  </div>
                ) : (
                  <div className="text-filo font-bold text-2xl">{plan.setup}</div>
                )}
                <p className="text-humo-2 text-xs mt-0.5">
                  {SETUP_GRATIS ? "Configuración completa incluida — promo de lanzamiento" : "Configuración completa a cargo de CorteFlow"}
                </p>
                <div className="mt-3 text-humo text-sm mb-1">Mensual</div>
                <div className="gradient-text font-black text-3xl">{plan.mensual}</div>
                <p className="text-humo-2 text-xs mt-0.5">Con 3 turnos extra por semana se paga solo</p>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-humo">
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
                    ? "gradient-bg text-filo glow hover:opacity-90"
                    : "border border-borde-2 text-filo hover:bg-grafito-2 hover:border-borde-2"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-humo-2 text-sm mt-8">
          ¿Tenés dudas? Escribinos por WhatsApp y te armamos una propuesta a medida.
        </p>
      </div>

      {/* Separador inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-borde-2 to-transparent" />
    </section>
  );
}
