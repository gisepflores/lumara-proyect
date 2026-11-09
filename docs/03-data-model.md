# Modelo de datos inicial

La migración `supabase/migrations/0001_lumara_core.sql` define el núcleo operativo. Este modelo es una base revisable antes de producción.

## Entidades principales
- profiles: perfil Lumara vinculado a Supabase Auth.
- provider_identities: IDs externos (Whop, Zoom u otros).
- instructors: docentes administrados por Lumara.
- courses, course_modules, lessons: estructura de formación.
- orders, order_items, payment_events: órdenes y eventos de pago.
- entitlements: derechos de acceso por usuario y producto.
- lesson_progress: progreso verificable del alumno.
- availability_rules, bookings: disponibilidad y reservas.
- consultations: consultas comerciales.
- audit_events: trazabilidad de acciones críticas.

## Reglas
- IDs internos UUID.
- IDs externos conservados como texto, con proveedor y entorno.
- Importes en centavos y moneda ISO 4217.
- Fechas en timestamptz UTC.
- Entitlement único por usuario/producto, con source order.
- Estados controlados por CHECK constraints.
- RLS y políticas de acceso deben completarse antes de exponer tablas.
