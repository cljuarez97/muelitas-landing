# muelitas-landing

Landing page de Dental Kaizen, clínica dentista del Dr. Muelitas Axpuaca: https://cljuarez97.github.io/muelitas-landing/

Astro 7 estático, CSS propio y tipografías autohospedadas. Misma estructura que `alaria-landing`, con identidad propia.

- Textos y datos de contacto: `src/data/content.ts`.
- Solicitud de cita: arma un mensaje de WhatsApp en el navegador (`src/lib/request.ts`); no se guarda nada.
- CSP por `<meta>` en `src/layouts/Base.astro`: sin scripts ni estilos inline.
- Iconos e imagen para compartir: `pnpm brand`.

Comandos: `pnpm dev`, `pnpm build`, `pnpm preview`, `pnpm check`, `pnpm test`. Cada push a `main` prueba y publica en GitHub Pages.

## Pendiente de la clínica

Número de colegiado, fotos reales, redes sociales, y revisión del texto de tratamientos y del aviso de privacidad.
