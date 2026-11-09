# Seguridad, privacidad y validaciones previas a producción

## Seguridad
- RLS en todas las tablas de usuario.
- Roles: `customer`, `admin`, `editor`, `support`; docentes como registros gestionados, no rol autónomo en V1.
- MFA obligatorio para administradores.
- Cookies seguras, HttpOnly, SameSite y PKCE para auth SSR.
- CSRF/rate limiting donde corresponda.
- Webhooks con firma verificada, tolerancia temporal, idempotencia y protección contra replay.
- Secrets en secret manager del hosting/proveedor.
- Backups y procedimiento de restauración probado.
- Auditoría de acceso, pagos, reembolsos y cambios administrativos.
- Política de retención y eliminación de datos.

## Protección audiovisual
- Signed playback, tokens de vida corta, restricción de dominio y DRM compatible.
- Prueba de reproducción en navegadores, iOS, Android, Safari, Chrome y dispositivos de baja capacidad.
- DRM puede aumentar coste y generar fricción; validar plan, precio y compatibilidad antes de habilitarlo globalmente.
- No prometer protección absoluta frente a grabación externa.

## País, cobros e impuestos
El país comercial permanece pendiente y bloquea la salida a producción de cobros, no el desarrollo local.
Antes de habilitar ventas:
1. Confirmar elegibilidad de la cuenta Whop y país de la entidad vendedora.
2. Verificar métodos de pago, payout, monedas, comisiones y restricciones por país.
3. Definir entidad legal, facturación, impuestos indirectos y tratamiento de ventas internacionales.
4. Definir si Argentina opera como mercado secundario y qué medios/reglas locales aplican.
5. Validar contratos, privacidad, cookies y términos por jurisdicción.

## Reembolsos
La política comercial de siete días y el umbral de progreso menor al 10% no sustituyen derechos legales obligatorios.
La normativa de revocación, botón de arrepentimiento, contenido digital y servicios debe validarse por país antes del lanzamiento. El sistema debe poder aplicar reglas por jurisdicción y tipo de producto.

## Accesibilidad
Objetivo WCAG 2.2 AA. Pruebas manuales y automatizadas, teclado, lector de pantalla, contraste, foco y subtítulos/transcripciones cuando corresponda.
