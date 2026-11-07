import { whatsappUrl } from "@/lib/constants";
import Logo from "@/components/Logo";
import LinkMedido from "@/components/LinkMedido";
import { WhatsAppIcon } from "@/components/iconos";

const DEMO_HEADER = whatsappUrl("Hola Gonzalo, quiero una demo de CorteFlow");

export default function Header() {
  return (
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-borde backdrop-blur-md bg-[var(--navaja)]/80">
        <nav aria-label="Principal" className="flex items-center justify-between px-4 sm:px-10 py-4 sm:py-5">
          <a href="#inicio" className="flex items-center gap-3" aria-label="CorteFlow, inicio">
            <Logo size={44} priority />
            <span className="text-filo font-bold text-2xl tracking-tight" aria-hidden="true">
              Corte<span className="gradient-text">Flow</span>
            </span>
          </a>

          {/* Celular: solo el ícono */}
          <LinkMedido
            href={DEMO_HEADER}
            evento="click_whatsapp"
            origen="header"
            aria-label="Pedir una demo de CorteFlow por WhatsApp"
            className="inline-flex sm:hidden items-center justify-center w-11 h-11 rounded-xl btn-ign glow"
          >
            <WhatsAppIcon size={20} />
          </LinkMedido>

          {/* Compu: texto completo */}
          <LinkMedido
            href={DEMO_HEADER}
            evento="click_whatsapp"
            origen="header"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold px-5 py-3 rounded-xl btn-ign glow transition-opacity hover:opacity-90"
          >
            <WhatsAppIcon size={16} />
            Quiero una demo
          </LinkMedido>
        </nav>
      </header>
  );
}
