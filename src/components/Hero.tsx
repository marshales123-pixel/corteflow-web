import Logo from "./Logo";

export default function Hero() {
  const whatsappUrl =
    "https://wa.me/541167330060?text=Hola%20Gonzalo%2C%20quiero%20una%20demo%20de%20CorteFlow";

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Fondo con glow radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(239,68,68,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Navbar mínima */}
      <nav className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 py-5">
        <div className="flex items-center gap-3">
          <Logo size={36} />
          <span className="text-white font-bold text-xl tracking-tight">
            Corte<span className="gradient-text">Flow</span>
          </span>
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:block text-sm font-semibold px-4 py-2 rounded-lg gradient-bg text-white glow transition-opacity hover:opacity-90"
        >
          Quiero una demo
        </a>
      </nav>

      {/* Contenido principal */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300">
          <span className="w-2 h-2 rounded-full gradient-bg animate-pulse" />
          Sistema de gestión para barberías
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-tight mb-6">
          <span className="text-white">Tus clientes reservan solos.</span>
          <br />
          <span className="gradient-text glow-text">
            Vos te enfocás en cortar.
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Sin papel. Sin WhatsApp caótico. Sin excusas.
          <br />
          CorteFlow pone tu barbería en piloto automático.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl gradient-bg text-white font-bold text-lg glow transition-transform hover:scale-105 active:scale-95"
          >
            <WhatsAppIcon />
            Quiero una demo
          </a>
          <a
            href="https://barbershop-ms-taupe.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/20 bg-white/5 text-white font-semibold text-lg transition-all hover:bg-white/10 hover:border-white/30"
          >
            Ver demo en vivo →
          </a>
        </div>

        {/* Social proof mínimo */}
        <p className="mt-10 text-gray-600 text-sm">
          Desarrollado en Buenos Aires · Barberías que ya usan CorteFlow
        </p>
      </div>

      {/* Línea decorativa inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
