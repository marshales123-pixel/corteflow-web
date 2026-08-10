# Generador de carruseles de Instagram — CorteFlow

Herramienta para armar posts de carrusel (10 slides, 1080×1350 px) para `@corteflow.ar`,
respetando el Brand Book v1.0 ya aplicado en la web (mismos colores, tipografías y logo
que `corteflow-web` — ver la sección "Identidad visual" en `CLAUDE.md`, raíz del repo).

No es parte de la app Next.js (no se despliega, no corre en Vercel). Es un tool interno
que arma HTML autocontenido (fuentes y logo embebidos como `data:` URIs) y lo convierte
en PNGs listos para subir.

## Archivos

| Archivo | Qué hace |
|---|---|
| `template.html` | El deck de ejemplo (el post "Presentación completa de CorteFlow"). Placeholders `__SORA_B64__` / `__DMSANS_B64__` / `__JBMONO_B64__` / `__LOGO_B64__` sin resolver — no abrir directo en el navegador, hay que buildearlo primero. |
| `build.js` | Reemplaza los placeholders por las fuentes (`fonts/*.b64`, ya en el repo, no hace falta internet) y el logo (convertido on-the-fly desde `public/logo-mark.png`, la misma fuente que usa la web). Genera un `.build.html` autocontenido. |
| `export.js` | Levanta un server local temporal, abre el `.build.html` con Chrome headless (Puppeteer) y exporta cada slide a un PNG de 1080×1350 px exactos. |
| `fonts/*.b64` | Sora, DM Sans y JetBrains Mono (subset latin, variable) ya descargados de Google Fonts y codificados en base64. Se commitean al repo — no hace falta volver a bajarlos. |

## Cómo armar un post nuevo

1. **Copiá el template**: `cp template.html post-2.html` (o el nombre que quieras).
2. **Editá el contenido** de `post-2.html`: cada slide es un bloque
   ```html
   <div class="frame"><div class="slide ..." data-slide>
     <div class="pad"> ...contenido... </div>
     <div class="chrome-bottom">...</div>
   </div></div>
   ```
   Mantené las clases (`label`, `headline`, `body-txt`, `bullets`, `plan`, `cta-pill`, etc.) —
   son las que aplican el sistema de diseño (tipografía, escala, color). Cambiá solo el
   texto/contenido interno. El contador `<b>01</b>/10` de cada slide hay que actualizarlo
   a mano si cambia la cantidad de slides.
   - Tipos de slide reutilizables (ver `template.html` para un ejemplo de cada uno):
     - `.cover` / `.cta` — lockup grande centrado (portada y cierre)
     - Slide con `label` + `headline` + `.body-txt` + `.stat-row` — para una idea "tesis", sin bullets
     - Slide con `label` + `headline` + `ul.bullets` (o `ul.bullets.danger` para el framing de "problema") — para listas de 3-4 features
     - Slide con `.plans` / `.plan` / `.plan.destacado` — para precios
3. **Buildeá**: `node build.js post-2.html` → genera `post-2.build.html`.
   - Para previsualizar rápido: doble clic en `post-2.build.html`, se abre en el navegador tal cual va a quedar (es un archivo autocontenido, no necesita servidor).
4. **Exportá los PNG**: `node export.js post-2.build.html "<carpeta de salida>"`
   - Ejemplo, guardando directo en la carpeta comercial:
     ```
     node export.js post-2.build.html "C:\Users\Gonza\Desktop\CorteFlow — Comercial\Instagram - Carrusel presentacion\post 2"
     ```
   - Detecta automáticamente cuántas slides hay (no hace falta que sean 10).
5. **Subilo a Instagram** como carrusel, en orden, con el texto/caption correspondiente
   (guardar como `texto.txt` junto a las imágenes, mismo patrón que `post 1`).

## Primera vez / setup

```bash
cd marketing/instagram-carousel
npm install
```

Requiere Chrome instalado en `C:\Program Files\Google\Chrome\Application\chrome.exe`
(usa Puppeteer con `executablePath`, no descarga un Chromium aparte).

## Reglas de diseño a mantener

- Fondo siempre `--navaja` (#080808) — CorteFlow es marca "single-theme" oscura, no adaptar a modo claro.
- Nunca dorado (`#C9A84C` y similares) — eso es de los clientes barbershop, no de CorteFlow.
- Mono (`JetBrains Mono`) para precios, contadores y eyebrows en mayúscula. Sora para titulares. DM Sans para cuerpo.
- El glow cálido (`--glow`) tiene que estar detrás del ícono/logo siempre que aparezca grande (portada y cierre).
- Un carrusel = una idea por slide. No amontonar.
