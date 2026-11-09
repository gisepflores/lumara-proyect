# Plan de implementación

## Fase 0 — Preparación
- Repositorio privado `gisepflores/lumara-proyect`.
- Definir organización y accesos.
- Crear entornos local, development, staging y production.
- Confirmar país comercial, elegibilidad Whop, dominio y presupuesto de Mux/DRM.
- Configurar gestor de secretos.

**Salida:** repositorio inicial, entornos y decisiones bloqueantes documentadas.

## Fase 1 — Fundación
- Next.js + TypeScript + pnpm + lint + tests.
- Supabase Auth SSR y modelo inicial.
- RLS y roles.
- Payload CMS integrado.
- CI para lint, typecheck y tests.
- Design tokens y componentes base.

**Salida:** aplicación ejecutable, login, CMS y base segura.

## Fase 2 — Web pública
- Home inmersiva.
- Universo, Experiencias, Aprender, Biblioteca, Comunidad.
- Fichas de cursos/servicios/productos.
- SEO, accesibilidad, responsive y tema claro/oscuro.
- Estructura ES/EN/PT; publicación inicial ES.

**Salida:** sitio público navegable con contenido administrable.

## Fase 3 — Cuenta y aula
- Mi Lumara.
- Perfil, recuperación de cuenta y enlace seguro con identidad Whop.
- Catálogo de cursos, módulos y lecciones.
- Progreso verificable.
- Aula y player Mux.

**Salida:** alumno puede acceder a su panel y a un curso de prueba.

## Fase 4 — Piloto de comercio y video (gate obligatorio)
1. Crear producto/curso de prueba.
2. Configurar checkout Whop de prueba.
3. Comprar con usuario de prueba.
4. Validar webhook y registro idempotente.
5. Crear entitlement.
6. Emitir token Mux solo para usuario autorizado.
7. Rechazar reproducción de usuario no autorizado.
8. Probar DRM y restricción de dominio en dispositivos objetivo.
9. Simular reembolso/contracargo y revocar acceso.
10. Probar reconciliación con Whop.

**No cargar el catálogo real hasta aprobar este gate.**

## Fase 5 — Agenda y Zoom
- Servicios y reglas de disponibilidad.
- Holds y checkout de reserva.
- Google Calendar central.
- Creación de Zoom.
- Emails y recordatorios.
- Reprogramación, cancelación y reembolso.

## Fase 6 — Back office
- Gestión de clientes, reservas, consultas y pagos.
- Cursos, módulos, docentes y productos.
- FAQs, páginas, artículos y traducciones.
- Reportes, auditoría y permisos.

## Fase 7 — Internacionalización y lanzamiento
- Revisar traducciones EN/PT.
- SEO internacional y hreflang.
- Legal/fiscal por mercados.
- Pruebas de carga, seguridad, accesibilidad y recuperación.
- Dominio, DNS, email, analítica y despliegue.
- Lanzamiento controlado.

## Orden de prioridad
P0: identidad, pagos, entitlement, video y seguridad.
P1: aula, catálogo, reservas y agenda.
P2: CMS completo, back office, traducciones y analítica.
P3: mejoras de comunidad, automatizaciones y app móvil si el negocio lo justifica.
