import { WHATSAPP_URL, DEMO_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-10 py-6 border-b border-white/5 backdrop-blur-md bg-[#080808]/80">
        <div className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="CorteFlow" width={48} height={48} fetchPriority="high" style={{ mixBlendMode: "screen" }} />
          <span className="text-white font-bold text-2xl tracking-tight">
            Corte<span className="gradient-text">Flow</span>
          </span>
        </div>

        {/* Mobile: solo icono */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Quiero una demo de CorteFlow por WhatsApp"
          className="inline-flex sm:hidden items-center justify-center w-10 h-10 rounded-xl gradient-bg text-white glow"
        >
          <WhatsAppIcon size={18} />
        </a>

        {/* Desktop: texto completo */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl gradient-bg text-white glow transition-opacity hover:opacity-90"
        >
          <WhatsAppIcon size={16} />
          Quiero una demo
        </a>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-start sm:justify-center px-6 pt-28 sm:pt-24 overflow-hidden">
        {/* Glow de fondo */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(239,68,68,0.10) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs sm:text-sm text-gray-400">
            <span className="w-2 h-2 rounded-full gradient-bg animate-pulse shrink-0" />
            <span>Sistema de gestión para barberías<span className="hidden sm:inline"> · Buenos Aires</span></span>
          </div>

          {/* Compatibilidad */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <AppleIcon size={13} />
              iPhone
            </span>
            <span className="text-white/10">·</span>
            <span className="flex items-center gap-1">
              <AndroidIcon size={13} />
              Android
            </span>
            <span className="text-white/10">·</span>
            <span className="flex items-center gap-1">
              <DesktopIcon size={13} />
              PC / Mac
            </span>
            <span className="text-white/10">·</span>
            <span>Sin instalar nada</span>
            <span className="text-white/10">·</span>
            <span className="text-orange-400 font-semibold">Sin contrato</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6">
            <span className="text-white">Tus clientes reservan solos.</span>
            <br />
            <span className="gradient-text" style={{ textShadow: "0 0 40px rgba(239,68,68,0.4)" }}>
              Vos te enfocás en cortar.
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Sin papel. Sin WhatsApp caótico. Sin excusas.{" "}
            <br className="hidden sm:block" />
            CorteFlow pone tu barbería en piloto automático.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl gradient-bg text-white font-bold text-lg glow transition-transform hover:scale-105 active:scale-95"
            >
              <WhatsAppIcon size={20} />
              Quiero una demo
            </a>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/20 bg-white/5 text-white font-semibold text-lg transition-all hover:bg-white/10 hover:border-white/30"
            >
              Ver demo en vivo →
            </a>
          </div>

          {/* Stats rápidos */}
          <div className="mt-16 grid grid-cols-3 sm:flex sm:flex-row gap-4 sm:gap-12 justify-center items-center text-center">
            {[
              { value: "24/7", label: "Reservas online" },
              { value: "0 papel", label: "Todo digital" },
              { value: "48 hs", label: "Listo para operar" },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="text-xl sm:text-2xl font-black gradient-text">{value}</div>
                <div className="text-xs sm:text-sm text-gray-500 mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Línea decorativa inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      </section>
    </>
  );
}

function AppleIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function AndroidIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.523 15.341a.5.5 0 01-.5.5H6.977a.5.5 0 01-.5-.5V9.5h11.046v5.841zM7.5 7.5a.5.5 0 110-1 .5.5 0 010 1zm9 0a.5.5 0 110-1 .5.5 0 010 1zM3.517 9.5a.517.517 0 00-.517.517v3.966a.517.517 0 001.034 0V10.017A.517.517 0 003.517 9.5zm16.966 0a.517.517 0 00-.517.517v3.966a.517.517 0 001.034 0V10.017a.517.517 0 00-.517-.517zM14.715 2.434l.82-1.49a.173.173 0 00-.302-.166l-.83 1.508A5.947 5.947 0 0012 2c-.844 0-1.644.18-2.403.486l-.83-1.508a.173.173 0 10-.302.166l.82 1.49A5.978 5.978 0 006.477 7h11.046a5.978 5.978 0 00-2.808-4.566z" />
    </svg>
  );
}

function DesktopIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 2H3a2 2 0 00-2 2v12a2 2 0 002 2h7l-2 3v1h8v-1l-2-3h7a2 2 0 002-2V4a2 2 0 00-2-2zm0 12H3V4h18v10z" />
    </svg>
  );
}

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
