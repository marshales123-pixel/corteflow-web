import Image from "next/image";
import { whatsappUrl } from "@/lib/constants";
import LinkMedido from "@/components/LinkMedido";
import MarcoCelular from "@/components/MarcoCelular";
import { WhatsAppIcon } from "@/components/iconos";

const DEMO_HERO = whatsappUrl("Hola Gonzalo, vi la web de CorteFlow y quiero una demo");

const datos = [
  { valor: "3 sedes", texto: "usándolo todos los días" },
  { valor: "4 pasos", texto: "para sacar turno" },
  { valor: "1 pantalla", texto: "para pasar la planilla del día" },
];

export default function Hero() {
  return (
      <section
        id="inicio"
        className="relative min-h-screen flex items-center px-4 sm:px-6 pt-28 pb-16 sm:pt-32 overflow-hidden"
      >
        {/* Glow de fondo */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 40%, color-mix(in srgb, var(--ign-1) 10%, transparent) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-6xl grid lg:grid-cols-[1.25fr_1fr] gap-12 lg:gap-10 items-center">
          <div className="text-center lg:text-left">
            <p className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-borde-2 bg-grafito text-xs sm:text-sm text-humo">
              <span className="w-2 h-2 rounded-full gradient-bg shrink-0" aria-hidden="true" />
              Sistema para barberías · hecho en una barbería de Buenos Aires
            </p>

            <h1 className="text-4xl sm:text-6xl lg:text-[4.25rem] font-extrabold tracking-tight leading-[1.05] mb-6">
              <span className="text-filo">Tus clientes reservan solos.</span>
              <br />
              <span className="gradient-text" style={{ textShadow: "0 0 40px var(--glow)" }}>
                Vos te enfocás en cortar.
              </span>
            </h1>

            <p className="text-humo text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 mb-9 leading-relaxed">
              Turnos online, caja que cuadra con tu planilla y sueldos calculados solos. Lo usamos todos
              los días en las 3 sedes de The Bulldog.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
              <LinkMedido
                href={DEMO_HERO}
                evento="click_whatsapp"
                origen="hero"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl btn-ign font-bold text-lg glow transition-transform hover:scale-105 active:scale-95"
              >
                <WhatsAppIcon size={20} />
                Quiero una demo por WhatsApp
              </LinkMedido>
              <a
                href="#asi-se-ve"
                className="inline-flex items-center gap-1 py-3 text-flama font-semibold hover:underline underline-offset-4"
              >
                Ver la reserva en video <span aria-hidden="true">↓</span>
              </a>
            </div>

            <p className="mt-5 text-sm text-humo">
              Funciona en el celu y en la compu, sin instalar nada ·{" "}
              <span className="text-filo font-medium">Sin permanencia</span>
            </p>

            {/* Datos reales (The Bulldog) */}
            <ul className="mt-12 grid grid-cols-3 gap-4 sm:gap-8 max-w-xl mx-auto lg:mx-0">
              {datos.map(({ valor, texto }) => (
                <li key={valor} className="text-center lg:text-left">
                  <span className="block whitespace-nowrap font-mono text-base sm:text-2xl font-medium gradient-text">{valor}</span>
                  <span className="block text-xs sm:text-sm text-humo mt-1 leading-snug">{texto}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pantalla real del asistente de reserva (foto liviana: los videos van más abajo) */}
          <div className="flex justify-center lg:justify-end">
            <MarcoCelular className="w-[min(78vw,290px)] rotate-[2deg]">
              <Image
                src="/videos/reserva-precios.webp"
                alt="Paso 2 de la reserva online de The Bulldog: cada servicio con su precio en efectivo y su precio de lista, y el precio de los lunes, martes y miércoles."
                fill
                sizes="290px"
                className="object-cover object-top"
              />
            </MarcoCelular>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-borde-2 to-transparent" aria-hidden="true" />
      </section>
  );
}
