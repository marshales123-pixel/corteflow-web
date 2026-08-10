# CorteFlow Web — Contexto del proyecto

## Qué es esto

Landing page institucional de **CorteFlow** — SaaS de gestión para barberías argentinas.
Esta web presenta el producto, los planes y permite que barberías interesadas contacten al desarrollador.

## Stack

- Next.js 15 App Router + TypeScript + Tailwind CSS v4
- Deploy en Vercel
- Dominio: corteflow.com

## Sobre CorteFlow

**Producto:** Sistema de gestión SaaS para barberías
**Fundador:** Gonzalo Guarnieri — Olivos, Buenos Aires
**Demo live:** https://barbershopdemo-kappa.vercel.app/

**Qué resuelve:** Reemplaza papel, anotadores y WhatsApp caótico con:
- Reservas online 24/7 (el cliente saca turno solo)
- Agenda digital por barbero en tiempo real
- WhatsApp automático al confirmar turno + recordatorio el día anterior
- Cancelación self-service por el cliente
- Reagendar turno online sin llamar (cambia día y hora sin cancelar)
- Cálculo automático de sueldos por corte
- Estadísticas de ingresos y servicios
- Marketing por WhatsApp con segmentación
- Campaña automática de reseñas de Google por WhatsApp después del corte
- Google Analytics + Google Search Console incluidos en el setup
- Páginas SEO por sucursal (ej. "barbería en Palermo") para rankear en búsquedas locales
- Multi-sucursal con aislamiento total de datos

**Precios:**
- Plan Básico:         Setup USD 100 + USD 40/mes (1 sucursal)
- Plan Profesional:    Setup USD 150 + USD 60/mes  ← el más vendido
- Plan Multi-Sucursal: Setup USD 200 + USD 40/mes × sucursal

## Identidad visual — Brand Book CorteFlow v1.0

Fuente de verdad: Brand Book oficial v1.0. Todos los tokens viven como CSS custom properties en `src/app/globals.css` (`:root` + `@theme inline`, con utilities Tailwind generadas automáticamente: `bg-grafito`, `text-humo`, `border-borde`, etc.).

### Colores

```
--navaja:    #080808   fondo principal
--grafito:   #141009   superficies/tarjetas (cálido, reemplaza white/3, white/5 en cards)
--grafito-2: #1d1610   variante de grafito, gradientes de tarjetas
--borde:     rgba(255,244,232,0.09)   borde sutil (reemplaza white/8, white/10)
--borde-2:   rgba(255,244,232,0.16)   borde marcado (reemplaza white/15, white/20)
--filo:      #f7f3ee   texto principal — blanco CÁLIDO (reemplaza foreground #ffffff puro)
--humo:      #a79f97   texto secundario (reemplaza gray-400)
--humo-2:    #6f6862   texto terciario/apagado (reemplaza gray-500/600)
--ign-1:     #ef4444   inicio del gradiente (alias de --brand-red)
--ign-2:     #f97316   fin del gradiente (alias de --brand-orange)
--flama:     #f45c24   naranja plano SÓLIDO — íconos, bordes, highlights, botones (no es el gradiente)
--glow:      rgba(244,92,36,0.55)   resplandor cálido (usado en .glow/.glow-text)
--ok:        #34d399   semántico, éxito/confirmado
```

⚠️ **Regla explícita del brand book: cero dorado.** Nunca usar tonos dorados/amarillentos en CorteFlow — eso es identidad de las barberías clientes (ej. The Bulldog usa dorado), nunca del SaaS mismo.

### Tipografía (`next/font/google`, variables en `layout.tsx`)

- **Sora** (700/800) — títulos y display. Aplicada globalmente a `h1`–`h6` vía selector en `globals.css` (no hace falta poner la clase a mano en cada heading).
- **DM Sans** (400/500) — cuerpo de texto. Font-family por default del `body`.
- **JetBrains Mono** (500) — datos, precios, labels en mayúscula con letter-spacing ancho. Reemplazó a Geist Mono (swap limpio, mismo rol).

Tokens expuestos en `@theme inline`: `--font-sans` (DM Sans), `--font-heading` (Sora), `--font-mono` (JetBrains Mono).

### Logo — "Hex Flow"

`src/components/Logo.tsx` — anillo hexagonal ABIERTO (hexágono sin el lado derecho, forma de "C"), trazado con `stroke` en gradiente `--ign-1`→`--ign-2` y un filtro de glow suave (`feGaussianBlur` + `feMerge`). Ya no es un hexágono relleno con una "C" en texto Arial encima.

⚠️ **`Logo.tsx` no está importado en ningún lado del código** (verificado — no hay `icon.tsx`/favicon que lo use). El sitio real usa la imagen estática `/public/logo.png` en `Hero.tsx` y `Contacto.tsx`. Si se quiere que el "Hex Flow" se vea en el sitio, hay que regenerar `logo.png` (y el favicon) a partir de este componente, o reemplazar los `<img src="/logo.png">` por `<Logo />`.

- **Estilo:** Tech moderno con energía — NO premium/lujoso/dorado

## Tono de comunicación

Cercano y directo. Le habla al dueño de la barbería, no al programador.

  ✓ "Tus clientes reservan solos. Vos te enfocás en cortar."
  ✓ "Sin papel. Sin WhatsApp caótico. Sin excusas."
  ✗ "Solución integral de gestión para establecimientos capilares."

## Secciones de la landing

1. Hero — slogan + CTA "Quiero una demo"
2. Qué es — el problema que resuelve
3. Features — 6-8 funcionalidades clave con íconos
4. Planes — los 3 planes con precios
5. Demo en vivo — link a la demo
6. Contacto — WhatsApp directo a Gonzalo

## Contacto del desarrollador

- WhatsApp: +54 11 6733-0060
- Instagram: @corteflow.ar

## Generador de carruseles de Instagram (`marketing/instagram-carousel/`)

Tool interno (no forma parte de la app Next.js, no se despliega) para armar posts de
carrusel para `@corteflow.ar` — HTML autocontenido (fuentes Sora/DM Sans/JetBrains Mono
y el logo "Hex Flow"/Geometric C embebidos como `data:` URIs) que se exporta a PNGs de
1080×1350 px vía Puppeteer + Chrome headless. Respeta el Brand Book v1.0 de arriba
(mismos colores, tipografías y logo que la web — nunca dorado, fondo siempre `--navaja`).

Ver `marketing/instagram-carousel/README.md` para el flujo completo (duplicar
`template.html` → editar contenido → `node build.js` → `node export.js`). Las imágenes
finales de cada post se guardan fuera del repo, en
`Desktop\CorteFlow — Comercial\Instagram - Carrusel presentacion\post N\`.
