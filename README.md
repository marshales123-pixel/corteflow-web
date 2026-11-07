# corteflow-web

Landing de CorteFlow (corteflow.com): sistema de turnos, caja y sueldos para barberías.

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

- Contexto, marca (Brand Book v1.0) y reglas de contenido: ver `CLAUDE.md`.
- Precios: `src/lib/precios.ts` (única fuente).
- Preguntas frecuentes: `src/lib/faq.ts` (se usan en la página y en el JSON-LD).
