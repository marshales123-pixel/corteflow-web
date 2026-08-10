import Image from "next/image";

const clientes = [
  {
    nombre: "The Bulldog Barber Shop",
    detalle: "3 sucursales · Buenos Aires",
    logo: "/clients/bulldog-logo.png",
    url: "https://thebulldogbarbershop.com",
  },
];

export default function Clientes() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-flama mb-3">
          Con quién trabajamos
        </p>
        <h2 className="text-3xl sm:text-4xl font-black text-filo leading-tight">
          Barberías reales, ya funcionando con CorteFlow
        </h2>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {clientes.map((c) => (
            <a
              key={c.nombre}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 rounded-2xl border border-borde-2 bg-grafito p-6 sm:p-7 hover:border-flama/30 hover:bg-grafito-2 transition-all duration-300 text-left"
            >
              <div className="shrink-0 w-16 h-16 rounded-xl bg-filo flex items-center justify-center overflow-hidden">
                <Image src={c.logo} alt={c.nombre} width={64} height={64} className="w-14 h-14 object-contain" />
              </div>
              <div>
                <p className="text-filo font-bold text-lg leading-snug">{c.nombre}</p>
                <p className="text-humo-2 text-sm mt-0.5">{c.detalle}</p>
                <span className="inline-flex items-center gap-1 text-flama text-sm font-semibold mt-2 opacity-80 group-hover:opacity-100 transition-opacity">
                  Ver su web
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
