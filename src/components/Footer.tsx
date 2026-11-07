import { whatsappUrl, INSTAGRAM_URL, BULLDOG_URL } from "@/lib/constants";
import Logo from "@/components/Logo";
import LinkMedido from "@/components/LinkMedido";

const WA_PIE = whatsappUrl("Hola Gonzalo, quiero hablar de CorteFlow para mi barbería");

export default function Footer() {
  return (
      <footer className="relative px-4 sm:px-6 pb-12 text-center">
        <div className="h-px bg-linear-to-r from-transparent via-borde-2 to-transparent mb-8" aria-hidden="true" />
        <div className="flex items-center justify-center gap-2 mb-4">
          <Logo size={22} />
          <span className="text-humo text-sm font-semibold">
            Corte<span className="text-flama">Flow</span>
          </span>
        </div>
        <nav aria-label="Enlaces del pie" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-4 text-sm">
          <LinkMedido href={WA_PIE} evento="click_whatsapp" origen="pie" className="text-humo hover:text-filo py-2">
            WhatsApp
          </LinkMedido>
          <LinkMedido href={INSTAGRAM_URL} evento="click_instagram" origen="pie" className="text-humo hover:text-filo py-2">
            Instagram
          </LinkMedido>
          <a href={BULLDOG_URL} target="_blank" rel="noopener noreferrer" className="text-humo hover:text-filo py-2">
            Ver The Bulldog
          </a>
          <a href="#preguntas" className="text-humo hover:text-filo py-2">
            Preguntas frecuentes
          </a>
        </nav>
        <p className="text-humo text-xs">
          © {new Date().getFullYear()} CorteFlow · Sistema de gestión para barberías · Buenos Aires, Argentina
        </p>
      </footer>
  );
}
