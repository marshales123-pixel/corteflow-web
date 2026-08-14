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
  Bell,
  TrendingUp,
  Star,
  Megaphone,
  Gift,
  Wallet,
  Banknote,
  ClipboardCheck,
  type LucideIcon,
} from "lucide-react";

const features: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Calendar,
    title: "Reservas online 24/7",
    desc: "El cliente elige día, hora y barbero desde su celular. Sin llamadas, sin mensajes.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp automático",
    desc: "Confirmación instantánea al reservar. El cliente sabe todo sin que vos hagas nada.",
  },
  {
    icon: Bell,
    title: "Recordatorio el día anterior",
    desc: "El sistema le manda un WhatsApp automático la noche antes. Menos ausentes, más plata.",
  },
  {
    icon: CalendarCheck,
    title: "Agenda digital en tiempo real",
    desc: "Cada barbero ve su agenda actualizada al instante. Sin papel, sin confusiones.",
  },
  {
    icon: CalendarX,
    title: "El cliente cancela solo",
    desc: "Cancela desde el link del turno sin llamarte ni mandarte mensajes. Vos te enterás al toque.",
  },
  {
    icon: CalendarClock,
    title: "El cliente reagenda solo",
    desc: "Si se le complica el día, cambia turno y hora desde el mismo link. No cancela, no te escribe, y vos no perdés el cliente.",
  },
  {
    icon: DollarSign,
    title: "Sueldos automáticos",
    desc: "El sistema calcula cuánto le toca a cada barbero por sus cortes del mes, con bonos incluidos.",
  },
  {
    icon: Wallet,
    title: "Ingresos, gastos y rentabilidad",
    desc: "Cargá gastos y adelantos y sabé al toque si el mes te da ganancia real, sin Excel.",
  },
  {
    icon: Banknote,
    title: "Arqueo de caja automático",
    desc: "Al cerrar el local, sabés al toque cuánto debería haber en la caja en efectivo y cuánto en MercadoPago — sin sacar la calculadora.",
  },
  {
    icon: Megaphone,
    title: "Marketing por WhatsApp",
    desc: "Campañas automáticas a clientes inactivos, cumpleaños o a un corte del gratis. Un clic y se manda solo.",
  },
  {
    icon: Gift,
    title: "Programa de fidelización",
    desc: "Cada 10 cortes, el siguiente es gratis — automático, sin anotar nada en ningún lado.",
  },
  {
    icon: ClipboardCheck,
    title: "Auditoría automática",
    desc: "El sistema marca solo los cortes raros — sin barbero, sin cobrar, sin registrar — para que nada se te escape.",
  },
  {
    icon: BarChart2,
    title: "Estadísticas de ingresos",
    desc: "Ves qué servicios generan más, cuáles días son más movidos y cuánto entraste.",
  },
  {
    icon: TrendingUp,
    title: "Google Analytics incluido",
    desc: "Ves cuánta gente visita tu web, desde dónde llegan y qué páginas miran. Todo gratis.",
  },
  {
    icon: Building2,
    title: "Multi-sucursal",
    desc: "Manejá varias sedes desde un solo lugar. Los datos de cada una van por separado.",
  },
  {
    icon: ShieldCheck,
    title: "Aparecés en Google",
    desc: "Landing con SEO, Search Console y una página por sucursal para rankear en tu barrio. Tus clientes te encuentran solos.",
  },
  {
    icon: Star,
    title: "Reseñas de Google automáticas",
    desc: "Después del corte, el sistema le pide por WhatsApp que te deje una reseña con el link directo a tu sucursal. Más estrellas, más clientes nuevos.",
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

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-borde bg-grafito p-6 flex flex-col gap-3 hover:border-flama/30 hover:bg-grafito-2 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-filo" aria-hidden="true" />
              </div>
              <h3 className="text-filo font-bold text-base leading-snug">{title}</h3>
              <p className="text-humo-2 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Separador inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-borde-2 to-transparent" />
    </section>
  );
}
