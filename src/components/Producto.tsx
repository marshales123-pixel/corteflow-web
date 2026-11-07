import Image from "next/image";
import MarcoCelular from "@/components/MarcoCelular";
import VideoCelular from "@/components/VideoCelular";
import LinkMedido from "@/components/LinkMedido";
import { BULLDOG_RESERVAR_URL } from "@/lib/constants";

// Videos grabados en la web real de The Bulldog (thebulldogbarbershop.com/reservar),
// noviembre 2026. Se navega hasta el resumen y NUNCA se confirma la reserva.
const clips = [
  {
    src: "/videos/reserva-sede-servicio",
    poster: "/videos/reserva-sede-servicio.webp",
    titulo: "Elige sede y servicio",
    desc: "Ve el precio en efectivo y con transferencia, QR o tarjeta, y el de los días más baratos.",
    label:
      "Video de la reserva online de The Bulldog: el cliente elige la sede Belgrano y ve los servicios con su precio en efectivo y con transferencia, QR o tarjeta; después elige Corte.",
  },
  {
    src: "/videos/reserva-dia-hora",
    poster: "/videos/reserva-dia-hora.webp",
    titulo: "Elige día y hora",
    desc: "Solo aparecen los horarios libres de verdad. Puede elegir barbero o \"sin preferencia\".",
    label:
      "Video de la reserva online: el cliente elige el martes 10 de noviembre en la tira de días y después un horario libre de la tarde.",
  },
  {
    src: "/videos/reserva-resumen",
    poster: "/videos/reserva-resumen.webp",
    titulo: "Revisa y confirma",
    desc: "Un resumen con el precio de ese día. Cuatro pasos y listo, sin llamarte ni escribirte.",
    label:
      "Video de la reserva online: aparece el resumen del turno con sede, día, horario, servicio y el precio de ese martes en efectivo y con tarjeta.",
  },
];

export default function Producto() {
  return (
    <section id="asi-se-ve" className="relative py-24 sm:py-28 px-4 sm:px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 50%, color-mix(in srgb, var(--ign-1) 10%, transparent) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="eyebrow mb-3">El producto real</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-filo leading-tight">
            Así se ve, en una barbería de verdad
          </h2>
          <p className="mt-4 text-humo text-lg max-w-2xl mx-auto">
            La reserva online de The Bulldog, grabada tal cual está hoy. Nada de maquetas.
          </p>
        </div>

        {/* En el celu: carrusel horizontal (deslizás de un paso al otro); en la compu, los tres juntos. */}
        <ol className="-mx-4 px-4 flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-3 sm:gap-8 sm:overflow-visible sm:pb-0">
          {clips.map((c, i) => (
            <li key={c.src} className="snap-center shrink-0 w-[72vw] sm:w-auto flex flex-col items-center text-center">
              <MarcoCelular className="w-[min(64vw,270px)]">
                <VideoCelular src={c.src} poster={c.poster} label={c.label} />
              </MarcoCelular>
              <p className="mt-6 font-mono text-sm text-flama" aria-hidden="true">
                Paso {i + 2} de 4
              </p>
              <h3 className="mt-1 text-filo font-bold text-lg">{c.titulo}</h3>
              <p className="mt-2 text-humo text-sm leading-relaxed max-w-[18rem]">{c.desc}</p>
            </li>
          ))}
        </ol>
        <p className="sm:hidden mt-2 text-center text-xs text-humo" aria-hidden="true">
          Deslizá para ver los 3 pasos →
        </p>

        <div className="mt-16 grid lg:grid-cols-[1.4fr_1fr] gap-8 items-center">
          <div className="rounded-2xl border border-borde-2 bg-grafito overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-borde" aria-hidden="true">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-borde-2" />
                <span className="w-2.5 h-2.5 rounded-full bg-borde-2" />
                <span className="w-2.5 h-2.5 rounded-full bg-borde-2" />
              </div>
              <div className="flex-1 mx-2 bg-grafito-2 rounded-md px-3 py-1 text-xs text-humo text-left">
                thebulldogbarbershop.com
              </div>
            </div>
            <div className="relative aspect-[1280/900]">
              <Image
                src="/screenshots/bulldog-landing.jpg"
                alt="Web de The Bulldog Barber Shop hecha con CorteFlow: su marca, sus colores y el botón Reservar turno."
                fill
                sizes="(min-width: 1024px) 640px, 100vw"
                className="object-cover object-top"
              />
            </div>
          </div>
          <div className="text-center lg:text-left">
            <h3 className="text-filo font-extrabold text-2xl sm:text-3xl">Tu web, con tu marca</h3>
            <p className="mt-3 text-humo leading-relaxed">
              Así queda la web de The Bulldog: sus colores, su logo y sus sedes. La tuya se arma igual,
              con tu nombre, tus fotos y tus precios, y con una página por sucursal para salir en Google.
            </p>
            <LinkMedido
              href={BULLDOG_RESERVAR_URL}
              evento="click_ver_reserva"
              origen="asi_se_ve"
              className="mt-5 inline-flex items-center gap-1 py-3 text-flama font-semibold hover:underline underline-offset-4"
            >
              Ver la reserva en vivo <span aria-hidden="true">→</span>
            </LinkMedido>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-borde-2 to-transparent" aria-hidden="true" />
    </section>
  );
}
