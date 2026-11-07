# CorteFlow Web — Contexto del proyecto

## Qué es esto

Landing page institucional de **CorteFlow** — SaaS de gestión para barberías argentinas.
Esta web presenta el producto, los planes y permite que barberías interesadas contacten al desarrollador.

## Stack

- Next.js 16.4.5 App Router + TypeScript + Tailwind CSS v4 (misma versión que barbershop-ms; leer `node_modules/next/dist/docs/` antes de tocar APIs de Next)
- Vercel Web Analytics (`@vercel/analytics` fijo en **1.3.2**: desde 1.4 npm corta con ERESOLVE por un peer de SvelteKit)
- Deploy en Vercel
- Dominio: corteflow.com

## Sobre CorteFlow

**Producto:** Sistema de gestión SaaS para barberías
**Fundador:** Gonzalo Guarnieri — Olivos, Buenos Aires
**Demo live:** https://barbershopdemo-kappa.vercel.app/

**Qué resuelve (solo lo que el sistema hace HOY — la landing no promete nada que no exista):**
- La caja cuadra: planilla de papel cargada de una sola vez, en una pantalla (y la planilla imprimible), cierre del día con arqueo, sueldos y comisiones calculados, precio de lista y descuento en efectivo (también por día), propinas por MP, productos con stock al cobrar, totales por monotributo (NO factura en ARCA)
- Cobro con QR de Mercado Pago desde el sistema — **piloto en Belgrano**: se muestra con la etiqueta "Nuevo · en prueba"
- Reservas: web propia con la marca de la barbería (+ página SEO por sucursal), turno en 4 pasos, confirmación en pantalla + "Agregar al calendario", "Mis turnos" (cancelar/cambiar con el teléfono), reserva para dos, cumpleaños, atención sin turno
- Clientes que vuelven: "Les toca volver" (aviso A MANO por WhatsApp), botón para pedir reseña + cartel QR, canal de cada reserva, fidelización por sede, mapa de ocupación
- Equipo y sedes: panel del barbero desde el celu, permisos por rol, control de carga, auditoría, franquiciados

⚠️ **NO prometer (no existe hoy, nov 2026):** WhatsApp automático al reservar, recordatorio/confirmación por WhatsApp, campañas que "se mandan solas", reseñas automáticas, "el link del turno" por WhatsApp (Twilio se sacó el 05/11/2026 y el agente de WhatsApp está apagado), tienda online (está apagada), plazos de puesta en marcha ("48 hs") ni nada sobre el dominio si el cliente se va. "App" = web desde el celu (no hay app de tienda). Tampoco: "5 minutos" para la planilla (no está medido: decir "de una sola vez" / "en una pantalla"), "el más elegido" (prueba social inventada), "sin contrato" (el contrato es mes a mes con 30 días de aviso: decir "sin permanencia"), "lo resuelvo el mismo día" ni links a `/reservar` de The Bulldog (un visitante podría sacar un turno real: se muestran los videos y la home).

**Tono:** en plural ("te lo dejamos", "te exportamos", "nos escribís"), salvo el bloque de contacto ("Hablá directo con Gonzalo").

**Precios por medio de pago (Ley 25.065):** nunca "más caro con tarjeta". Se dice "precio de lista" y "descuento en efectivo".

**Precios:** la ÚNICA fuente es `src/lib/precios.ts` (planes, setup, flag `SETUP_SIN_CARGO`). De ahí salen las tarjetas de Planes, la meta description, la imagen para compartir y el JSON-LD. Hoy: Básico USD 40/mes, Profesional USD 60/mes (1 sede), Multi-Sucursal USD 40/mes por sede **desde 2 sedes** (así nunca sale más barato que el Profesional); setup de lista 100/150/200, hoy sin cargo (sin fecha ni cupo: nunca escribir "por tiempo limitado"). Se cobra por sede: sin cargo por barbero ni comisión por reserva.

**The Bulldog:** es el caso real (3 sedes: Olivos, Palermo, Belgrano). Se cuenta como "nació en The Bulldog / lo usamos todos los días". Nada de testimonios ni cifras inventadas; el "~10 reservas online por día en Olivos" sale de `barbershop-ms/CLAUDE.md` (medido el 13/10/2026).

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

`Logo.tsx` muestra `public/logo-mark-144.webp` (~5 KB, generado con sharp desde `logo-mark.png` de 322 KB, que queda como original). Se usa en el header, el contacto y el pie. Favicon: `src/app/icon.png` (64 px) y `apple-icon.png` (180 px). `public/logo.png` (1 MB) no se usa.

### Contraste (desvío consciente del Brand Book)
- `--humo-2` queda en `#6f6862` (Brand Book) pero NO se usa para texto de lectura (da 3,5:1 sobre grafito); las descripciones van en `--humo`.
- Los botones con gradiente usan `.btn-ign` (texto **navaja**, 5,3–7,1:1); el texto filo sobre el gradiente daba 2,5–3,4:1.
- JetBrains Mono se usa en precios, datos y etiquetas (`.eyebrow`).

- **Estilo:** Tech moderno con energía — NO premium/lujoso/dorado

## Tono de comunicación

Cercano y directo. Le habla al dueño de la barbería, no al programador.

  ✓ "Tus clientes reservan solos. Vos te enfocás en cortar."
  ✓ "Sin papel. Sin WhatsApp caótico. Sin excusas."
  ✗ "Solución integral de gestión para establecimientos capilares."

## Secciones de la landing (`src/app/page.tsx`)

1. Header + Hero — titular, CTA de WhatsApp, "Ver la reserva en video ↓" (ancla a #asi-se-ve), datos reales ("3 sedes · 4 pasos · 1 pantalla") y una foto del asistente real
2. Problema
3. Funcionalidades — 4 bloques ("La caja cuadra" primero), 3–4 tarjetas grandes + "Y además" plegado
4. Así se ve — 3 VIDEOS cortos del asistente real de The Bulldog (`public/videos/*.mp4|webm|webp`, ver abajo) + la web de The Bulldog
5. De dónde sale (The Bulldog) · 6. Cómo funciona · 7. Planes · 8. FAQ (`<details>`, misma lista que el JSON-LD: `src/lib/faq.ts`) · 9. Contacto + Footer

**Videos:** grabados con Playwright en `thebulldogbarbershop.com/reservar` (390×844, dpr 2, capturas de pantalla en bucle; `recordVideo` graba a 1x). NUNCA confirmar una reserva al grabar (bloquear `crear-turno` con `page.route`). `VideoCelular.tsx` no baja nada hasta que el video entra en pantalla, elige MP4 (H.264) o WebM según el navegador, se pausa al salir y con "reducir movimiento" queda en el póster.

**Medición:** `LinkMedido.tsx` manda un evento a Vercel Analytics en cada botón de WhatsApp (`click_whatsapp` con `origen`: header, hero, plan_basico…) y cada WhatsApp lleva un texto distinto (`whatsappUrl()` en `src/lib/constants.ts`). Hay que activar Analytics en el proyecto de Vercel.

**SEO:** `src/lib/seo.ts` (title, description, JSON-LD Organization + WebSite + SoftwareApplication con las ofertas + FAQPage; sin aggregateRating/review). OG y Twitter: `opengraph-image.tsx` / `twitter-image.tsx` (estáticas, en el build). `sitemap.ts` y `robots.ts` con `https://corteflow.com`.

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
