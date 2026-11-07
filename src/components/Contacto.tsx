import { whatsappUrl, INSTAGRAM_URL, WHATSAPP_VISIBLE } from "@/lib/constants";
import { SETUP_SIN_CARGO } from "@/lib/precios";
import Logo from "@/components/Logo";
import LinkMedido from "@/components/LinkMedido";
import { WhatsAppIcon, InstagramIcon } from "@/components/iconos";

const WA_CONTACTO = whatsappUrl("Hola Gonzalo, quiero hablar de CorteFlow para mi barbería");
const WA_CTA = whatsappUrl(
  SETUP_SIN_CARGO
    ? "Hola Gonzalo, quiero arrancar con CorteFlow (setup sin cargo)"
    : "Hola Gonzalo, quiero una demo de CorteFlow",
);

export default function Contacto() {
  return (
      <section id="contacto" className="relative py-24 sm:py-28 px-4 sm:px-6 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 60%, color-mix(in srgb, var(--ign-1) 10%, transparent) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="mb-14">
            <p className="eyebrow mb-3">Contacto</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-filo leading-tight">¿Listo para arrancar?</h2>
            <p className="mt-4 text-humo text-lg max-w-xl mx-auto">
              Hablá directo con Gonzalo, el que lo hizo. Te responde rápido y te muestra el sistema con tu
              barbería en mente.
            </p>
          </div>

          <div className="rounded-2xl border border-borde-2 bg-grafito p-6 sm:p-10 mb-8">
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 justify-center">
              <div className="relative shrink-0">
                <div className="absolute inset-0 rounded-2xl blur-xl opacity-50 gradient-bg" aria-hidden="true" />
                <div className="relative">
                  <Logo size={72} />
                </div>
              </div>

              <div className="text-center sm:text-left">
                <h3 className="text-filo font-extrabold text-xl">Gonzalo Guarnieri</h3>
                <p className="text-humo text-sm mt-1">Fundador · CorteFlow · Olivos, Buenos Aires</p>
                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                  <LinkMedido
                    href={WA_CONTACTO}
                    evento="click_whatsapp"
                    origen="contacto_tarjeta"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl btn-ign font-bold text-sm glow hover:opacity-90 transition-opacity"
                  >
                    <WhatsAppIcon size={16} />
                    <span className="font-mono">{WHATSAPP_VISIBLE}</span>
                  </LinkMedido>
                  <LinkMedido
                    href={INSTAGRAM_URL}
                    evento="click_instagram"
                    origen="contacto_tarjeta"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-borde-2 bg-grafito-2 text-filo font-semibold text-sm hover:border-flama/40 transition-colors"
                  >
                    <InstagramIcon size={16} />
                    @corteflow.ar
                  </LinkMedido>
                </div>
              </div>
            </div>
          </div>

          <LinkMedido
            href={WA_CTA}
            evento="click_whatsapp"
            origen="contacto_cta"
            className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 rounded-xl btn-ign font-bold text-lg glow transition-transform hover:scale-105 active:scale-95"
          >
            <WhatsAppIcon size={22} />
            {SETUP_SIN_CARGO ? "Quiero arrancar sin pagar el setup" : "Quiero una demo"}
          </LinkMedido>
        </div>
      </section>
  );
}
