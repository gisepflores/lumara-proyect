# Arquitectura técnica V1.0

## 1. Componentes
- Next.js App Router: sitio, cuenta, aula, APIs de backend y experiencia administrativa específica de Lumara.
- Supabase: PostgreSQL, Auth, Row Level Security y almacenamiento solo para imágenes/documentos no audiovisuales sensibles.
- Payload CMS: gestión editorial, páginas, artículos, fichas de catálogo, FAQs y campos localizados.
- Whop: checkout y eventos de pago.
- Mux: ingestión, encoding, streaming, signed playback y DRM cuando esté soportado.
- Google Calendar API: sincronización con un calendario central.
- Zoom API: creación de reuniones para sesiones que lo requieran.
- Email transaccional: proveedor a seleccionar.
- Hosting: Vercel propuesto, pendiente de alta y dominio.

## 2. Límites de confianza
- El navegador nunca firma JWT de Mux ni valida pagos.
- Las claves privadas de Whop, Mux, Supabase service role, Google y Zoom viven solo en secretos server-side.
- Las rutas API validan sesión, rol, ownership, payload y rate limit.
- Los webhooks validan firma/autenticidad antes de procesar.
- RLS protege todas las tablas con datos de usuario.
- Los jobs de sincronización usan claves de idempotencia.

## 3. Identidad
Supabase Auth es la identidad principal de Lumara.
Tabla `profiles` enlaza `auth.users`.
Tabla `provider_identities` enlaza `supabase_user_id` con `whop_user_id` y otros identificadores externos verificados. Whop no se asume como proveedor de autenticación del aula.

## 4. Compra y entitlement
1. El usuario autenticado inicia checkout desde Lumara.
2. Backend crea orden local pendiente y sesión de checkout Whop.
3. Usuario completa pago en Whop.
4. Webhook llega a endpoint firmado de Lumara.
5. Backend valida firma, timestamp, evento e idempotencia.
6. Orden se actualiza y se genera entitlement.
7. Usuario accede al aula propia Lumara.

Nunca habilitar acceso a partir del redirect del navegador.

## 5. Video
1. Usuario inicia reproducción.
2. Backend valida sesión, entitlement, publicación y permiso.
3. Backend emite JWT temporal firmado para playback.
4. Player reproduce mediante Mux.
5. Cliente reporta checkpoints; servidor valida propiedad y persiste progreso.
6. Eventos de reembolso/contracargo pueden suspender entitlement.

No prometer imposibilidad de grabación de pantalla externa.

## 6. Agenda y videollamadas
- El motor de agenda de Lumara es la fuente de verdad.
- Un calendario Google central recibe eventos confirmados.
- Los slots se bloquean temporalmente durante checkout.
- Solo el webhook de pago confirma una reserva.
- Tras confirmación, backend sincroniza Calendar y crea reunión Zoom cuando aplique.
- Deben contemplarse reintentos, idempotencia, zonas horarias, buffers y doble reserva.

## 7. Internacionalización
- Rutas localizadas desde el inicio: `/[locale]/...`.
- Locale por defecto `es`; locales previstos `en` y `pt`.
- Contenido CMS localizado, fallback controlado y metadatos SEO/hreflang.
- USD como moneda base de venta; conversión local informativa, no precio de cobro alternativo.

## 8. Entornos
- Local.
- Development.
- Staging.
- Production.
- Proyectos y secretos separados; nunca compartir claves entre ambientes.
