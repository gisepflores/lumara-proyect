# Contratos API propuestos

Todos los endpoints mutables son server-side. Los nombres son contratos internos iniciales, no endpoints ya desplegados.

## Commerce
- `POST /api/commerce/checkout`: recibe productId, successUrl, cancelUrl; autentica al usuario; crea orden local y checkout Whop.
- `POST /api/webhooks/whop`: valida firma, deduplica evento, actualiza orden, entitlement y auditoría.
- `POST /api/commerce/refunds`: admin autorizado; crea solicitud/acción de reembolso y sincroniza estado.
- `GET /api/me/entitlements`: devuelve derechos activos del usuario autenticado.

## Video
- `POST /api/video/playback-token`: recibe lessonId; verifica sesión, curso, entitlement y estado de lección; emite token Mux temporal.
- `POST /api/video/progress`: recibe checkpoints/eventos; valida propiedad y actualiza progreso.
- `POST /api/webhooks/mux`: recibe eventos técnicos de asset y procesamiento; no concede acceso.

## Agenda
- `GET /api/availability`: consulta slots libres por servicio y rango.
- `POST /api/bookings/hold`: crea hold temporal de slot.
- `POST /api/bookings/checkout`: genera checkout para reserva.
- `POST /api/webhooks/calendar`: procesa notificaciones de sincronización si se habilitan.
- `POST /api/webhooks/zoom`: procesa eventos de reuniones cuando sea necesario.
- `POST /api/webhooks/whop`: al confirmar pago, confirma reserva y programa Calendar/Zoom.

## CMS y administración
- Payload Admin para contenido editorial.
- Rutas de administración Lumara para reservas, clientes, pagos, reembolsos, cursos y reportes.
- Todas las acciones requieren rol y quedan auditadas.

## Reglas comunes
- Validación de schema (Zod o equivalente).
- Autenticación y autorización por recurso.
- Idempotency-Key en creación de órdenes, reservas y eventos externos.
- Respuestas de error estables: `400`, `401`, `403`, `404`, `409`, `422`, `429`, `500`.
- No devolver secretos ni datos personales innecesarios.
