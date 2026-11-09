# Lumara — Especificación de producto y requisitos V1.0

## 1. Visión
Lumara es una plataforma internacional de espiritualidad consciente que integra experiencias, aprendizaje, biblioteca editorial, productos digitales y comunidad bajo una cuenta única.

## 2. Mercados e idiomas
- Mercado prioritario: Centroamérica, Estados Unidos, Europa y otros mercados internacionales.
- Moneda de comercialización principal: USD.
- Argentina: mercado secundario; mostrar conversión informativa local cuando se disponga de una fuente de cambio y fecha de actualización.
- País comercial del vendedor: pendiente de definición y validación con Whop, asesoría fiscal y legal.
- Lanzamiento público: español.
- Arquitectura preparada para inglés y portugués desde la primera versión; activación comercial de cada idioma cuando las traducciones estén aprobadas.
- Locales: `es` (default), `en`, `pt`; extensible.

## 3. Audiencias
- Alumnos y compradores.
- Personas que reservan sesiones, mentorías o consultas.
- Docentes invitados (gestionados por Lumara, sin acceso administrativo autónomo en V1).
- Equipo administrador y editorial de Lumara.

## 4. Áreas del producto
### Sitio público
Inicio, Universo, Experiencias, Aprender, Biblioteca, Comunidad, Productos digitales, Ayuda y contacto.

### Cuenta Mi Lumara
Perfil, seguridad, reservas, cursos y aula, compras, consultas, descargas y preferencias.

### Aula virtual
Cursos, módulos, lecciones, reproductor Mux, materiales, progreso y estado de acceso.

### Back office
Dashboard, agenda, reservas, clientes, transacciones, reembolsos, cursos, docentes, contenidos, traducciones, FAQs, roles y configuración.

## 5. Modelo comercial
- Venta de cursos, talleres, sesiones, mentorías, consultas, ebooks, guías, meditaciones y recursos digitales.
- Catálogo mixto: productos propios y de docentes invitados.
- Docentes son administrados por Lumara. La plataforma registra su perfil, biografía, especialidades, cursos y participación; no se habilita un portal de autogestión docente en V1.
- Precio principal en USD.
- Conversión a moneda local exclusivamente informativa; debe indicar moneda, fuente y fecha/hora de actualización.
- Whop es el proveedor de checkout y registro de pagos.
- La web Lumara mantiene catálogo, ficha, experiencia de usuario, derechos de acceso y aula.

## 6. Acceso de por vida
- Una compra válida concede acceso de por vida al curso comprado.
- El acceso está asociado a una cuenta de alumno Lumara y vinculado con los IDs de usuario, producto y transacción de Whop.
- No se dependerá de una URL de compra ni de una sesión del navegador.
- La plataforma debe permitir recuperación y vinculación de cuenta con verificación de identidad.
- Reembolsos, contracargos, fraude o incumplimientos legales pueden suspender el entitlement según las reglas comerciales y legales aplicables.
- No prometer acceso perpetuo si el servicio se discontinuara; redactar términos de continuidad y contingencia.

## 7. Reglas de reembolso
- Garantía comercial propuesta: 7 días corridos desde la compra, sin limitar derechos legales obligatorios.
- Cursos: regla comercial de reembolso condicionada al progreso inferior al 10%, con progreso medido mediante actividad verificable.
- Ebooks: no se ofrece garantía comercial voluntaria de devolución, sin excluir derechos legales obligatorios.
- Botón de arrepentimiento y derechos de revocación aplicables por jurisdicción deben validarse legalmente antes del lanzamiento.
- Registrar compra, fecha, moneda, importe, producto, porcentaje de progreso, solicitud, decisión, reembolso y revocación de acceso.
- El reembolso financiero en Whop y la revocación del acceso en Lumara son procesos separados y coordinados.

## 8. Reservas
- Pre-pago obligatorio para confirmar reservas.
- Motor de agenda de Lumara como fuente de verdad.
- Un Google Calendar central sincronizado.
- Configuración por servicio: duración, buffers, anticipación mínima/máxima, disponibilidad, bloqueos, vacaciones y política de cancelación.
- Bloqueo temporal de slot durante checkout; expiración automática si no se confirma el pago.
- Confirmación de reserva solo tras webhook de pago válido.
- Zoom se crea server-side cuando corresponda.
- Zona horaria explícita para cliente, servicio y calendario.

## 9. FAQs y soporte
- FAQs globales y FAQs contextuales por curso, servicio, pago y reserva.
- Formularios de consulta y contacto.
- Estados de consulta: recibida, en revisión, respondida, propuesta enviada, esperando respuesta, convertida, cerrada.

## 10. Accesibilidad y experiencia
- WCAG 2.2 AA como objetivo.
- Navegación por teclado, foco visible, contraste, labels, errores comprensibles, áreas táctiles adecuadas y textos alternativos.
- Tema claro/oscuro; preferencia automática del dispositivo con selector manual persistente.
- Responsive mobile-first.
- Estética editorial sofisticada, serena, espiritualidad contemporánea; evitar clichés visuales esotéricos.

## 11. Criterios de aceptación V1
1. Usuario puede registrarse, iniciar sesión y recuperar cuenta.
2. Usuario puede comprar un curso en USD vía Whop.
3. Un webhook validado habilita el curso de manera idempotente.
4. Un usuario sin entitlement no obtiene token de reproducción Mux.
5. Un usuario con entitlement puede reproducir el video en el aula Lumara.
6. Una devolución o contracargo actualiza el estado y el acceso según política.
7. Un usuario puede reservar, pagar y recibir confirmación.
8. Google Calendar recibe el evento confirmado.
9. Zoom genera una reunión cuando el tipo de servicio lo requiere.
10. Admin puede gestionar cursos, docentes, FAQs, páginas y traducciones.
11. Contenido en español funciona y la estructura admite inglés y portugués.
12. Auditoría registra eventos críticos.
