import { WHATSAPP_URL, INSTAGRAM_URL } from "@/lib/constants";

export default function Contacto() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(239,68,68,0.10) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-400 mb-3">
            Contacto
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            ¿Listo para arrancar?
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto">
            Hablá directo con Gonzalo, el desarrollador. Te responde rápido y te arma una propuesta a medida para tu barbería.
          </p>
        </div>

        {/* Card de contacto */}
        <div className="rounded-2xl border border-white/10 bg-white/3 p-8 sm:p-10 mb-8">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 justify-center">
            {/* Logo */}
            <div className="relative shrink-0">
              <div
                className="absolute inset-0 rounded-2xl blur-xl opacity-50"
                style={{ background: "linear-gradient(135deg, #EF4444, #F97316)" }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="CorteFlow"
                width={72}
                height={72}
                className="relative"
                style={{ mixBlendMode: "screen" }}
              />
            </div>

            {/* Info */}
            <div className="text-left">
              <h3 className="text-white font-black text-xl">Gonzalo Guarnieri</h3>
              <p className="text-gray-500 text-sm mt-1">Fundador · CorteFlow · Olivos, Buenos Aires</p>
              <div className="flex flex-col sm:flex-row gap-2 mt-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl gradient-bg text-white font-bold text-sm glow hover:opacity-90 transition-opacity"
                >
                  <WhatsAppIcon />
                  +54 11 6733-0060
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Seguinos en Instagram @corteflow.ar"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/15 bg-white/5 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
                >
                  <InstagramIcon />
                  @corteflow.ar
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA principal */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-4 rounded-xl gradient-bg text-white font-bold text-lg glow transition-transform hover:scale-105 active:scale-95"
        >
          <WhatsAppIcon size={22} />
          Quiero una demo gratis
        </a>
      </div>

      {/* Footer mínimo */}
      <div className="relative mt-20 text-center">
        <div className="h-px bg-linear-to-r from-transparent via-white/10 to-transparent mb-8" />
        <div className="flex items-center justify-center gap-2 mb-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="CorteFlow" width={22} height={22} style={{ mixBlendMode: "screen", opacity: 0.7 }} />
          <span className="text-gray-600 text-sm font-semibold">
            Corte<span className="text-orange-500">Flow</span>
          </span>
        </div>
        <p className="text-gray-700 text-xs">
          © {new Date().getFullYear()} CorteFlow · Sistema de gestión para barberías · Buenos Aires, Argentina
        </p>
      </div>
    </section>
  );
}

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}
