import {
  Calendar,
  MessageCircle,
  CalendarCheck,
  CalendarX,
  DollarSign,
  BarChart2,
  Building2,
  ShieldCheck,
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
    icon: DollarSign,
    title: "Sueldos automáticos",
    desc: "El sistema calcula cuánto le toca a cada barbero por sus cortes del mes.",
  },
  {
    icon: BarChart2,
    title: "Estadísticas de ingresos",
    desc: "Ves qué servicios generan más, cuáles días son más movidos y cuánto entraste.",
  },
  {
    icon: Building2,
    title: "Multi-sucursal",
    desc: "Manejá varias sedes desde un solo lugar. Los datos de cada una van por separado.",
  },
  {
    icon: ShieldCheck,
    title: "Las sedes no se mezclan",
    desc: "Cada sucursal ve solo lo suyo. Clientes, barberos e ingresos separados por sede.",
  },
];

export default function Features() {
  return (
    <section className="relative py-28 px-6">
      {/* Separador superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-400 mb-3">
            Funcionalidades
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            Todo lo que tu barbería necesita
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto">
            Un sistema completo, pensado para el día a día de una barbería real.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/8 bg-white/3 p-6 flex flex-col gap-3 hover:border-orange-500/30 hover:bg-white/5 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-white font-bold text-base leading-snug">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Separador inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
