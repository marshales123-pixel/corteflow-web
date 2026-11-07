import {
  QrCode,
  FileSpreadsheet,
  ClipboardList,
  Wallet,
  Printer,
  Tags,
  HandCoins,
  ShoppingBag,
  Receipt,
  BarChart3,
  Globe,
  CalendarCheck,
  CalendarPlus,
  CalendarClock,
  Users,
  Cake,
  DoorOpen,
  RotateCcw,
  Star,
  Compass,
  Gift,
  Search,
  Flame,
  Smartphone,
  Lock,
  LayoutGrid,
  ClipboardCheck,
  Building2,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";

type Item = { icon: LucideIcon; title: string; desc: string; etiqueta?: string; corto?: string };
type Bloque = { id: string; numero: string; nombre: string; bajada: string; destacadas: Item[]; ademas: Item[] };

// Orden: lo que nadie más hace (la caja, los sueldos y la planilla) va primero.
// Reservar online lo hace cualquiera.
const bloques: Bloque[] = [
  {
    id: "caja",
    numero: "01",
    nombre: "La caja cuadra",
    bajada: "Efectivo, QR, tarjeta, propinas y sueldos: igual a lo que anotás en papel, peso por peso.",
    destacadas: [
      {
        icon: FileSpreadsheet,
        title: "Tu planilla de papel, cargada de una sola vez",
        desc: "A la noche pasás el día entero de una: cortes por barbero y medio de pago, pagos, propinas y gastos. Si la caja no da con el total del papel, te avisa antes de guardar.",
      },
      {
        icon: ClipboardList,
        title: "Cierre del día que cuadra",
        desc: "Desglose por barbero igual a tu planilla, arqueo de caja (contás la plata y ves si coincide) y todos los movimientos del día en una sola pantalla.",
      },
      {
        icon: Wallet,
        title: "Sueldos calculados solos",
        desc: "Cuánto le toca a cada barbero por sus cortes, con el plus del encargado, los feriados, la comisión por productos y los adelantos ya descontados. Igual a lo que pagás en papel.",
      },
      {
        icon: QrCode,
        title: "Cobrás con QR y se anota solo",
        etiqueta: "Nuevo · en prueba",
        desc: "El QR de Mercado Pago de tu mostrador muestra el monto exacto del corte, los productos y la propina. Cuando el cliente paga, el turno queda cobrado sin tocar nada.",
      },
    ],
    ademas: [
      {
        icon: Tags,
        title: "Precio de lista y descuento en efectivo, como lo cobrás vos", corto: "Descuento en efectivo y por día",
        desc: "Cada servicio con su precio de lista y su precio con descuento en efectivo, la transferencia al precio de efectivo si querés y un descuento mayor los días flojos. Cada botón de cobro muestra cuánto cobrar.",
      },
      {
        icon: Printer,
        title: "Te imprimimos la planilla", corto: "Planilla impresa",
        desc: "La hoja del día viene con tus barberos, tus servicios y tus precios. El encargado la llena como siempre.",
      },
      {
        icon: HandCoins,
        title: "Propinas por Mercado Pago sin líos", corto: "Propinas por MP",
        desc: "La que entra por MP y el barbero retira en efectivo queda registrada: tu caja y el resumen de Mercado Pago coinciden.",
      },
      {
        icon: ShoppingBag,
        title: "Vendé productos sin perder la cuenta", corto: "Productos con stock",
        desc: "Al cobrar el corte sumás la cera o el shampoo; el stock de cada sede baja solo y la comisión va al sueldo del barbero.",
      },
      {
        icon: Receipt,
        title: "Sabés cuánto facturó cada monotributo", corto: "Monotributos",
        desc: "Separa a qué CUIT va cada cobro. No emite facturas: te da los totales para tu contador.",
      },
      {
        icon: BarChart3,
        title: "Ingresos, gastos y estadísticas", corto: "Estadísticas",
        desc: "Qué servicios dejan más, qué días se mueven más y si el mes te da ganancia, sin Excel.",
      },
    ],
  },
  {
    id: "reservas",
    numero: "02",
    nombre: "Tus clientes reservan solos",
    bajada: "Con tu web, tu marca y tus precios. A cualquier hora, sin llamarte ni escribirte.",
    destacadas: [
      {
        icon: Globe,
        title: "Tu web, con tu marca",
        desc: "Tu nombre, tus colores y tus fotos, en su propia dirección (tubarberia.com). Con reservas, una página por sucursal para salir en Google (\"barbería en Palermo\") y botón de WhatsApp. La marca es la tuya: CorteFlow aparece solo en una firma chiquita al pie.",
      },
      {
        icon: CalendarCheck,
        title: "Turno en 4 pasos, a cualquier hora",
        desc: "Eligen sede, servicio, día, hora y barbero (o \"sin preferencia\") desde el celu. Solo ven horarios libres de verdad, y cada barbero ve su agenda al instante.",
      },
      {
        icon: CalendarPlus,
        title: "Confirmación en pantalla y en su calendario",
        desc: "Apenas reserva ve el resumen del turno y lo agrega a su calendario de Google o del iPhone con un toque. Le queda el recordatorio en el celu sin que vos mandes nada.",
      },
    ],
    ademas: [
      {
        icon: CalendarClock,
        title: "Cancela o cambia el turno solo", corto: '"Mis turnos"',
        desc: "Desde \"Mis turnos\" en tu web, con su número: cambia el día y la hora o cancela, hasta 4 horas antes. Después le aparece tu WhatsApp.",
      },
      {
        icon: Users,
        title: "Reserva para dos", corto: "Reserva para dos",
        desc: "Viene con un amigo o un hijo: reservan juntos, al mismo tiempo o uno después del otro.",
      },
      {
        icon: Cake,
        title: "Corte de cumpleaños", corto: "Cumpleaños",
        desc: "Si tiene su cumple cargado y reserva ese día, el turno sale en $0 solo. Y cada mañana ves quién cumple para saludarlo.",
      },
      {
        icon: DoorOpen,
        title: "El que entra sin turno, también", corto: "Clientes sin turno",
        desc: "Un botón para atender al que entra de la calle y cobrarlo en el momento, sin que te desarme la agenda.",
      },
    ],
  },
  {
    id: "vuelven",
    numero: "03",
    nombre: "Más clientes que vuelven",
    bajada: "Sabés quién se está yendo, de dónde llegan los nuevos y qué dicen de vos en Google.",
    destacadas: [
      {
        icon: RotateCcw,
        title: "\"Les toca volver\"",
        desc: "El sistema aprende cada cuánto viene cada cliente y te avisa quién ya se atrasó. Le escribís por WhatsApp con un toque, con el mensaje armado.",
      },
      {
        icon: Star,
        title: "Más reseñas en Google",
        desc: "Al terminar el corte tocás un botón y se abre WhatsApp con el mensaje y el link directo a la reseña de tu sucursal, listo para mandar. Y te armamos un cartel con QR para el mostrador.",
      },
      {
        icon: Compass,
        title: "Sabés de dónde vienen tus clientes",
        desc: "Cada reserva online dice si llegó por Instagram, Google o WhatsApp, con un link distinto para cada canal.",
      },
    ],
    ademas: [
      {
        icon: Gift,
        title: "Fidelización por sede", corto: "Fidelización",
        desc: "Vos elegís cada cuántos cortes regala cada sede (o si no regala). El sistema lleva la cuenta y te avisa cuando a un cliente le toca.",
      },
      {
        icon: Flame,
        title: "Ves qué horas quedan vacías", corto: "Mapa de horas vacías",
        desc: "Un mapa de calor por día y hora: sabés cuándo conviene una promo.",
      },
      {
        icon: Search,
        title: "Google Analytics y Search Console", corto: "Google Analytics",
        desc: "Ves cuánta gente visita tu web y desde dónde llega. Queda configurado en el arranque.",
      },
    ],
  },
  {
    id: "equipo",
    numero: "04",
    nombre: "Tu equipo y tus sedes",
    bajada: "Cada uno ve lo suyo y vos ves todo, aunque no estés en el local.",
    destacadas: [
      {
        icon: Smartphone,
        title: "Panel para tus barberos, desde el celu",
        desc: "Sin bajar nada: entran con su usuario y ven su agenda, cuánto llevan ganado hoy, bloquean el almuerzo y cobran en 2 toques. No ven la caja ni los sueldos.",
      },
      {
        icon: LayoutGrid,
        title: "Sabés qué sucursal no cargó",
        desc: "Una grilla con los últimos 7 días de cada sede: te enterás si un día quedó sin cargar o si la caja dio diferencia.",
      },
      {
        icon: ClipboardCheck,
        title: "Ves los cortes raros",
        desc: "El sistema marca los cortes raros (sin barbero, sin cobrar, en $0) y queda registrado quién cambió cada turno y cuándo.",
      },
    ],
    ademas: [
      {
        icon: Lock,
        title: "Cada uno ve lo suyo", corto: "Permisos por rol",
        desc: "El dueño ve todo, el encargado su sede y el barbero solo su trabajo.",
      },
      {
        icon: Building2,
        title: "Varias sedes, un solo lugar", corto: "Varias sedes y franquicias",
        desc: "Ves todas tus sedes juntas o de a una. Sirve para franquicias: cada franquiciado ve solo su sede.",
      },
      {
        icon: RefreshCw,
        title: "Las mejoras te llegan solas", corto: "Mejoras sin costo",
        desc: "El sistema se actualiza sin que hagas nada y sin pagar de más.",
      },
    ],
  },
];

export default function Features() {
  return (
    <section id="funcionalidades" className="relative py-24 sm:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="eyebrow mb-3">Funcionalidades</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-filo leading-tight">
            Lo que tu barbería necesita, en serio
          </h2>
          <p className="mt-4 text-humo text-lg max-w-2xl mx-auto">
            Turnos online los hace cualquiera. Lo que casi nadie hace es que la caja, los sueldos y tu
            planilla cuadren, pensado para cómo se cobra en Argentina.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {bloques.map((b) => (
            <div key={b.id} aria-labelledby={`bloque-${b.id}`}>
              <div className="mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
                <div>
                  <p className="font-mono text-sm text-flama mb-1" aria-hidden="true">
                    {b.numero}
                  </p>
                  <h3 id={`bloque-${b.id}`} className="text-filo font-extrabold text-2xl sm:text-3xl">
                    {b.nombre}
                  </h3>
                </div>
                <p className="text-humo text-sm sm:text-base sm:max-w-md sm:text-right">{b.bajada}</p>
              </div>

              <div className={`grid gap-5 sm:grid-cols-2 ${b.destacadas.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
                {b.destacadas.map(({ icon: Icon, title, desc, etiqueta }) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-borde bg-grafito p-5 sm:p-6 flex flex-col gap-3 hover:border-flama/30 hover:bg-grafito-2 transition-colors"
                  >
                    {etiqueta && (
                      <span className="self-start font-mono text-[11px] uppercase tracking-wider text-flama border border-flama/40 rounded-full px-2.5 py-1 sm:order-2">
                        {etiqueta}
                      </span>
                    )}
                    <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:order-1">
                      <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-navaja" aria-hidden="true" />
                      </div>
                      <h4 className="text-filo font-bold text-base leading-snug">{title}</h4>
                    </div>
                    <p className="text-humo text-sm leading-relaxed sm:order-3">{desc}</p>
                  </div>
                ))}
              </div>

              {/* "Y además": plegado para que en el celu no sea una pared (sigue en el HTML). */}
              <details className="faq group mt-5 rounded-2xl border border-borde">
                <summary className="flex items-start justify-between gap-4 p-5 sm:px-6 cursor-pointer select-none">
                  <span className="text-sm leading-relaxed">
                    <span className="font-mono text-xs uppercase tracking-widest text-flama">
                      Y además ({b.ademas.length})
                    </span>
                    <span className="block mt-1 text-humo">{b.ademas.map((a) => a.corto).join(" · ")}</span>
                  </span>
                  <span className="faq-mas text-flama text-2xl leading-none shrink-0 transition-transform duration-200" aria-hidden="true">
                    +
                  </span>
                </summary>
                <ul className="grid gap-x-8 gap-y-4 md:grid-cols-2 px-5 sm:px-6 pb-6">
                  {b.ademas.map(({ icon: Icon, title, desc }) => (
                    <li key={title} className="flex gap-3">
                      <Icon className="w-5 h-5 text-flama shrink-0 mt-0.5" aria-hidden="true" />
                      <p className="text-sm leading-relaxed text-humo">
                        <span className="text-filo font-semibold">{title}.</span> {desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </details>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-borde-2 to-transparent" aria-hidden="true" />
    </section>
  );
}
