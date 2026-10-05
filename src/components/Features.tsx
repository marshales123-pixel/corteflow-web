import {
  Calendar,
  MessageCircle,
  CalendarCheck,
  CalendarX,
  CalendarClock,
  DollarSign,
  BarChart2,
  Building2,
  ShieldCheck,
  BadgeCheck,
  TrendingUp,
  Star,
  Megaphone,
  Gift,
  Cake,
  Users,
  Wallet,
  Banknote,
  ClipboardCheck,
  FileSpreadsheet,
  LayoutGrid,
  ClipboardList,
  Smartphone,
  ShoppingBag,
  Receipt,
  HandCoins,
  Lock,
  type LucideIcon,
} from "lucide-react";

type Feature = { icon: LucideIcon; title: string; desc: string };

const categorias: { nombre: string; features: Feature[] }[] = [
  {
    nombre: "Reservas y clientes",
    features: [
      { icon: Calendar, title: "Reservas online 24/7", desc: "El cliente elige día, hora y barbero desde su celular. Sin llamadas, sin mensajes." },
      { icon: MessageCircle, title: "WhatsApp automático", desc: "Confirmación instantánea al reservar. El cliente sabe todo sin que vos hagas nada." },
      { icon: BadgeCheck, title: "El cliente confirma su turno", desc: "La noche antes le llega un WhatsApp y toca un botón para confirmar. Los turnos sacados online faltaban 10 veces más que los cargados en el local: así tenés menos sillones vacíos." },
      { icon: CalendarCheck, title: "Agenda digital en tiempo real", desc: "Cada barbero ve su agenda actualizada al instante. Sin papel, sin confusiones." },
      { icon: CalendarX, title: "El cliente cancela solo", desc: "Cancela desde el link del turno sin llamarte ni mandarte mensajes. Vos te enterás al toque." },
      { icon: CalendarClock, title: "El cliente reagenda solo", desc: "Si se le complica el día, cambia turno y hora desde el mismo link. No cancela, no te escribe, y vos no perdés el cliente." },
      { icon: Users, title: "Reserva para dos", desc: "Vienen un amigo o un hijo con el cliente: reservan los dos juntos, al mismo tiempo o uno después del otro." },
      { icon: Cake, title: "Corte gratis de cumpleaños", desc: "Si el cliente cumple años, el sistema le pone el corte gratis solo. Vos no anotás ni te acordás de nada." },
      { icon: Gift, title: "Programa de fidelización", desc: "Cada 10 cortes, el siguiente es gratis — automático, sin anotar nada en ningún lado." },
      { icon: Megaphone, title: "Marketing por WhatsApp", desc: "Campañas automáticas a clientes inactivos, cumpleaños o a un corte del gratis. Un clic y se manda solo." },
      { icon: Star, title: "Reseñas de Google automáticas", desc: "Después del corte, el sistema le pide por WhatsApp que te deje una reseña con el link directo a tu sucursal. Más estrellas, más clientes nuevos." },
      { icon: ShieldCheck, title: "Aparecés en Google", desc: "Landing con SEO, Search Console y una página por sucursal para rankear en tu barrio. Tus clientes te encuentran solos." },
    ],
  },
  {
    nombre: "Plata y caja",
    features: [
      { icon: FileSpreadsheet, title: "Tu planilla de papel, cargada en 5 minutos", desc: "Pasás la planilla del día entera de una: cortes por barbero y medio de pago, pagos, propinas y gastos. Si la caja no cuadra con el total del papel, te avisa antes de guardar." },
      { icon: ClipboardList, title: "Cierre del día que cuadra", desc: "Desglose por barbero igual a tu planilla, arqueo de caja (contás la plata y ves si coincide) y todos los movimientos del día en una sola pantalla." },
      { icon: DollarSign, title: "Sueldos automáticos", desc: "El sistema calcula cuánto le toca a cada barbero por sus cortes, con bonos y adelantos descontados." },
      { icon: ShoppingBag, title: "Comisión por venta de productos", desc: "Si un barbero vende una cera o un shampoo, la comisión se suma sola a su sueldo." },
      { icon: HandCoins, title: "Propinas por Mercado Pago sin líos", desc: "La propina que entra por Mercado Pago y el barbero retira en efectivo queda registrada. Tu caja y el resumen de Mercado Pago coinciden." },
      { icon: Receipt, title: "Facturación separada por monotributo", desc: "El sistema separa a qué CUIT va cada cobro. Por ejemplo, tarjeta y QR de un barbero a un monotributo y el resto a otro." },
      { icon: Wallet, title: "Ingresos, gastos y rentabilidad", desc: "Cargá gastos y adelantos y sabé al toque si el mes te da ganancia real, sin Excel." },
      { icon: BarChart2, title: "Estadísticas de ingresos", desc: "Ves qué servicios generan más, cuáles días son más movidos y cuánto entraste." },
    ],
  },
  {
    nombre: "Equipo y sucursales",
    features: [
      { icon: Smartphone, title: "App para tus barberos", desc: "Cada barbero ve cuánto lleva ganado hoy, bloquea su horario de almuerzo y cobra en 2 toques. No ve la plata del negocio." },
      { icon: Lock, title: "Cada uno ve lo suyo", desc: "Permisos por rol: el dueño ve todo, el encargado lo de su sede y el barbero solo su trabajo." },
      { icon: LayoutGrid, title: "Sabés qué sucursal no cargó", desc: "Una grilla de colores con los últimos 7 días de cada sede. Te enterás si un día quedó sin cargar o si la caja dio diferencia." },
      { icon: ClipboardCheck, title: "Auditoría automática", desc: "El sistema marca solo los cortes raros — sin barbero, sin cobrar, sin registrar — para que nada se te escape." },
      { icon: Building2, title: "Multi-sucursal", desc: "Manejá varias sedes desde un solo lugar. Los datos de cada una van por separado." },
      { icon: TrendingUp, title: "Google Analytics incluido", desc: "Ves cuánta gente visita tu web, desde dónde llegan y qué páginas miran. Todo gratis." },
    ],
  },
];

export default function Features() {
  return (
    <section className="relative py-28 px-6">
      {/* Separador superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-borde-2 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-flama mb-3">
            Funcionalidades
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-filo leading-tight">
            Todo lo que tu barbería necesita
          </h2>
          <p className="mt-4 text-humo text-lg max-w-xl mx-auto">
            Un sistema completo, pensado para el día a día de una barbería real.
          </p>
        </div>

        {/* Categorías */}
        <div className="flex flex-col gap-14">
          {categorias.map(({ nombre, features }) => (
            <div key={nombre}>
              <h3 className="text-filo font-black text-2xl mb-6 flex items-center gap-3">
                <span className="w-1.5 h-6 rounded-full gradient-bg" aria-hidden="true" />
                {nombre}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="group rounded-2xl border border-borde bg-grafito p-6 flex flex-col gap-3 hover:border-flama/30 hover:bg-grafito-2 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-filo" aria-hidden="true" />
                    </div>
                    <h4 className="text-filo font-bold text-base leading-snug">{title}</h4>
                    <p className="text-humo-2 text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Separador inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-borde-2 to-transparent" />
    </section>
  );
}
