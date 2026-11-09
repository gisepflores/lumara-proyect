# Lumara — plataforma y preview web

Base inicial de arquitectura para **Lumara | Espiritualidad Consciente**.

Repositorio privado: https://github.com/gisepflores/lumara-proyect

## Preview web

Este proyecto está preparado para generar una exportación estática de Next.js y publicarla en GitHub Pages mediante GitHub Actions.

URL prevista: https://gisepflores.github.io/lumara-proyect/

Para activar la publicación, en GitHub ir a **Settings → Pages → Build and deployment → Source → GitHub Actions**. Luego, cada push a `main` ejecutará el workflow de publicación.

> GitHub Pages es público aunque el repositorio sea privado. La cuenta debe disponer de un plan compatible con Pages para repositorios privados. El artefacto publicado contiene únicamente el sitio estático generado desde `out/`, no la documentación ni el código fuente.

## Preview vs. plataforma completa

La web de preview permite revisar estructura, estilo, jerarquía, textos y comportamiento responsive. Por ser estática, no incluye autenticación, Mi Lumara funcional, pagos Whop, aula privada, streaming Mux, reservas, Zoom, Calendar ni panel administrativo.

La arquitectura de producción está documentada en `docs/`. Las integraciones se implementarán en un hosting con runtime de servidor cuando corresponda.

## Stack previsto
- Next.js App Router + React + TypeScript.
- Supabase: Auth, PostgreSQL y RLS.
- Payload CMS: páginas, artículos, catálogo y FAQs.
- Whop: checkout y cobros USD.
- Mux: streaming firmado y DRM compatible.
- Google Calendar: agenda central sincronizada.
- Zoom: videollamadas.
- Vercel propuesto para producción; dominio pendiente.

## Desarrollo local
Requiere Node.js 24.

```bash
npm install
npm run dev
```

Abrir http://localhost:3000.

Para validar tipos:

```bash
npm run typecheck
```

Para generar export estático local:

```bash
GITHUB_PAGES=true GITHUB_REPOSITORY=gisepflores/lumara-proyect npm run build
```

La exportación queda en `out/`.

## Seguridad
No introducir secretos, tokens, claves privadas ni credenciales OAuth en Git, en el navegador o en mensajes. Usar variables de entorno server-side y los secretos del entorno de hosting. El archivo `.env.example` contiene nombres de variables sin valores sensibles.

## Base de datos
La migración inicial habilita RLS sin políticas permisivas. Es intencional: crear y probar políticas específicas por tabla y rol antes de conectar la aplicación a datos reales.
