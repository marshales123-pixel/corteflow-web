import Image from "next/image";

export default function Producto() {
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

      <div className="relative max-w-5xl mx-auto text-center">
        <div className="mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-flama mb-3">
            El producto real
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-filo leading-tight">
            Así lo ve tu cliente
          </h2>
          <p className="mt-4 text-humo text-lg max-w-xl mx-auto">
            The Bulldog Barber Shop, funcionando con CorteFlow ahora mismo. Nada de maquetas.
          </p>
        </div>

        {/* Dos capturas lado a lado */}
        <div className="grid sm:grid-cols-2 gap-6 items-start">
          {/* Landing pública */}
          <div className="rounded-2xl border border-borde-2 bg-grafito overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-borde bg-grafito">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-borde-2" />
                <span className="w-2.5 h-2.5 rounded-full bg-borde-2" />
                <span className="w-2.5 h-2.5 rounded-full bg-borde-2" />
              </div>
              <div className="flex-1 mx-2">
                <div className="bg-grafito-2 rounded-md px-3 py-1 text-xs text-humo-2 text-left">
                  thebulldogbarbershop.com
                </div>
              </div>
            </div>
            <div className="relative h-[420px]">
              <Image
                src="/screenshots/bulldog-landing.jpg"
                alt="Landing pública de The Bulldog Barber Shop, hecha con CorteFlow"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Wizard de reserva */}
          <div className="rounded-2xl border border-borde-2 bg-grafito overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-borde bg-grafito">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-borde-2" />
                <span className="w-2.5 h-2.5 rounded-full bg-borde-2" />
                <span className="w-2.5 h-2.5 rounded-full bg-borde-2" />
              </div>
              <div className="flex-1 mx-2">
                <div className="bg-grafito-2 rounded-md px-3 py-1 text-xs text-humo-2 text-left">
                  thebulldogbarbershop.com/reservar
                </div>
              </div>
            </div>
            <div className="relative h-[420px]">
              <Image
                src="/screenshots/bulldog-wizard.jpg"
                alt="Wizard de reserva de turno online de The Bulldog Barber Shop"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Separador inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-borde-2 to-transparent" />
    </section>
  );
}
