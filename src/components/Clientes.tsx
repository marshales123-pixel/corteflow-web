import Image from "next/image";
import { BULLDOG_URL } from "@/lib/constants";
import LinkMedido from "@/components/LinkMedido";

// Solo datos reales y medidos. Fuente: barbershop-ms/CLAUDE.md
// ("Horarios disponibles": Olivos, 10,7 reservas online por día, medido el
// 13/10/2026 sobre la semana 06–12/10). Nada de testimonios ni cifras inventadas.
export default function Clientes() {
  return (
    <section className="relative py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="eyebrow mb-3">De dónde sale</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-filo leading-tight">
            Nació en The Bulldog, una barbería de verdad
          </h2>
        </div>

        <div className="rounded-2xl border border-borde-2 bg-grafito p-6 sm:p-10 grid md:grid-cols-[auto_1fr] gap-8 items-center">
          <div className="mx-auto md:mx-0 shrink-0 w-24 h-24 rounded-2xl bg-filo flex items-center justify-center overflow-hidden">
            <Image src="/clients/bulldog-logo.png" alt="Logo de The Bulldog Barber Shop" width={96} height={96} className="w-20 h-20 object-contain" />
          </div>
          <div>
            <p className="text-filo text-lg sm:text-xl leading-relaxed">
              Tres sedes en <strong>Olivos, Palermo y Belgrano</strong>. Ahí lo usamos todos los días para
              los turnos, la caja y los sueldos, y cada mejora se prueba primero ahí.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-4">
              <li className="rounded-xl border border-borde p-4">
                <span className="block font-mono text-2xl gradient-text">~10 por día</span>
                <span className="block mt-1 text-sm text-humo">
                  reservas online solo en la sede de Olivos (medido en octubre de 2026)
                </span>
              </li>
              <li className="rounded-xl border border-borde p-4">
                <span className="block font-mono text-2xl gradient-text">3 sedes</span>
                <span className="block mt-1 text-sm text-humo">
                  con turnos, caja, sueldos y la planilla del día en el mismo sistema
                </span>
              </li>
            </ul>
            <LinkMedido
              href={BULLDOG_URL}
              evento="click_ver_bulldog"
              origen="clientes"
              className="mt-6 inline-flex items-center gap-1 py-2 text-flama font-semibold hover:underline underline-offset-4"
            >
              Ver la web de The Bulldog <span aria-hidden="true">→</span>
            </LinkMedido>
          </div>
        </div>
      </div>
    </section>
  );
}
