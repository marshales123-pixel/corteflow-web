import { whatsappUrl } from "@/lib/constants";
import { PLANES, ORDEN_PLANES, SETUP_SIN_CARGO, mensualMinimo, usd, type PlanId } from "@/lib/precios";
import LinkMedido from "@/components/LinkMedido";

const contenido: Record<PlanId, { desc: string; features: string[]; destacado: boolean }> = {
  basico: {
    desc: "Para arrancar: tu web y los turnos online de una sede.",
    destacado: false,
    features: [
      "1 sede",
      "Tu web con tu marca y página para Google",
      "Turnos online en 4 pasos, a cualquier hora",
      "Agenda digital por barbero",
      "\"Mis turnos\": el cliente cancela o cambia solo",
      "El turno en el calendario del cliente",
      "Corte de cumpleaños y reserva para dos",
      "Google Analytics y Search Console",
    ],
  },
  profesional: {
    desc: "El más elegido. Todo lo del Básico más la caja, los sueldos y los clientes que vuelven.",
    destacado: true,
    features: [
      "1 sede",
      "Todo el plan Básico",
      "Planilla del día en 5 minutos (te la imprimimos)",
      "Cierre del día y arqueo de caja",
      "Sueldos y comisiones calculados solos",
      "Precios por medio de pago y por día",
      "Cobro con QR de Mercado Pago (en prueba)",
      "Productos con stock al cobrar",
      "Cuánto facturó cada monotributo",
      "Panel para tus barberos, desde el celu",
      "\"Les toca volver\" y reseñas en Google",
      "Fidelización y estadísticas",
    ],
  },
  multi: {
    desc: "Para barberías con varias sedes o franquicias. Todo el Profesional en cada sede.",
    destacado: false,
    features: [
      `Desde ${PLANES.multi.sedesMinimas} sedes`,
      "Todo el plan Profesional en cada sede",
      "Ves todas tus sedes juntas o de a una",
      "Sabés qué sede no cargó el día",
      "Franquicias: cada franquiciado ve solo su sede",
      "Reportes por sucursal",
    ],
  },
};

export default function Planes() {
  return (
    <section id="planes" className="relative py-24 sm:py-28 px-4 sm:px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, color-mix(in srgb, var(--ign-2) 7%, transparent) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="eyebrow mb-3">Planes y precios</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-filo leading-tight">Elegí el que va con tu barbería</h2>
          <p className="mt-4 text-humo text-lg max-w-2xl mx-auto">
            Pagás por sucursal: sin cargo por barbero ni comisión por reserva o por cliente nuevo.
            Sin contrato, sin sorpresas.
          </p>
          {SETUP_SIN_CARGO && (
            <p className="inline-flex items-center gap-2 mt-5 px-4 py-1.5 rounded-full bg-ok/10 border border-ok/30 text-ok font-mono text-xs font-medium tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-ok" aria-hidden="true" />
              Hoy el setup va sin cargo
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-5 lg:gap-6 items-stretch">
          {ORDEN_PLANES.map((id) => {
            const plan = PLANES[id];
            const c = contenido[id];
            const href = whatsappUrl(`Hola Gonzalo, me interesa el plan ${plan.nombre} de CorteFlow`);
            return (
              <div
                key={id}
                className={`relative rounded-2xl flex flex-col p-6 sm:p-7 ${
                  c.destacado
                    ? "order-first md:order-none border-2 border-flama/60 bg-grafito-2 glow md:scale-[1.03]"
                    : "border border-borde-2 bg-grafito"
                }`}
              >
                {c.destacado && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full btn-ign font-mono text-xs font-medium tracking-wide shadow-lg">
                      RECOMENDADO
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-filo font-extrabold text-xl mb-1">{plan.nombre}</h3>
                  <p className="text-humo text-sm">{c.desc}</p>
                </div>

                <div className="mb-6">
                  <div className="text-humo text-sm mb-1">Mensual</div>
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="font-mono font-medium text-3xl gradient-text">{usd(plan.mensual)}</span>
                    <span className="text-humo text-sm">{plan.porSede ? "/mes por sede" : "/mes"}</span>
                  </div>
                  {plan.porSede && (
                    <p className="text-humo text-xs mt-1">
                      Desde {plan.sedesMinimas} sedes: <span className="font-mono">{usd(mensualMinimo(plan))}</span>/mes
                    </p>
                  )}

                  <div className="mt-4 text-humo text-sm mb-1">Setup único</div>
                  {SETUP_SIN_CARGO ? (
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-humo text-lg line-through" aria-label={`Precio de lista ${usd(plan.setup)}`}>
                        {usd(plan.setup)}
                      </span>
                      <span className="text-ok font-bold text-lg">Sin cargo</span>
                    </div>
                  ) : (
                    <div className="font-mono text-filo font-medium text-2xl">{usd(plan.setup)}</div>
                  )}
                  <p className="text-humo text-xs mt-1">Te lo dejamos configurado nosotros</p>
                </div>

                <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                  {c.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-humo">
                      <span className="text-flama font-bold" aria-hidden="true">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <LinkMedido
                  href={href}
                  evento="click_whatsapp"
                  origen={`plan_${id}`}
                  className={`w-full text-center py-3.5 rounded-xl font-bold text-sm transition-opacity ${
                    c.destacado
                      ? "btn-ign glow hover:opacity-90"
                      : "border border-borde-2 text-filo hover:bg-grafito-2"
                  }`}
                >
                  Consultar por {plan.nombre}
                </LinkMedido>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center text-sm text-humo space-y-2">
          <p>Con 3 turnos extra por semana, la mensualidad se paga sola.</p>
          <p>Las mejoras nuevas te llegan sin pagar de más.</p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-borde-2 to-transparent" aria-hidden="true" />
    </section>
  );
}
