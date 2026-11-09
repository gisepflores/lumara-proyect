# Lumara — Starter técnico

Base inicial de arquitectura para **Lumara | Espiritualidad Consciente**.

Repositorio privado: https://github.com/gisepflores/lumara-proyect

## Estado
Este starter contiene la especificación de producto, arquitectura, contratos API, modelo inicial de datos, migración SQL y una página inicial de Next.js. **No es todavía una aplicación desplegada ni contiene conexiones activas** con Whop, Mux, Supabase, Zoom o Google Calendar.

## Stack objetivo
- Node.js 24 LTS y pnpm
- Next.js App Router + React + TypeScript
- Supabase Auth + PostgreSQL + RLS
- Payload CMS para contenido editorial y catálogo
- Whop para checkout y cobros en USD
- Mux para streaming firmado y DRM compatible
- Google Calendar como calendario central sincronizado
- Zoom para reuniones
- Vercel (hosting propuesto, pendiente de configuración)

Ver `docs/` antes de implementar integraciones.

## Primeros pasos
1. Instalar Node.js 24 LTS y pnpm.
2. Clonar este repositorio.
3. Configurar variables de entorno a partir de `.env.example`; no subir nunca un archivo `.env`.
4. Crear proyectos Supabase separados para desarrollo, staging y producción.
5. Completar y probar las políticas RLS antes de conectar la aplicación.
6. Implementar autenticación, modelo de usuario y roles.
7. Ejecutar la migración SQL en un proyecto Supabase de desarrollo.
8. Construir el piloto de una compra Whop + habilitación de curso + reproducción Mux antes de cargar el catálogo real.

## Convenciones
- Idioma de código: inglés.
- Idioma inicial de interfaz y contenidos: español (`es`).
- Locales previstos: `es`, `en`, `pt`; ampliables.
- Moneda de catálogo inicial: USD.
- Importes monetarios: almacenar en unidades menores (centavos) y con código ISO 4217.
- Timestamps: UTC en base de datos; mostrar según zona horaria del usuario.
- Toda operación de proveedor debe ser server-side, validada, idempotente y auditable.

## Seguridad
No introducir secretos, tokens privados, claves de firma, credenciales OAuth ni API keys en Git, en el navegador o en mensajes de chat. El archivo `.env.example` contiene únicamente nombres de variables sin valores sensibles.

## Advertencia técnica
La migración inicial habilita RLS deliberadamente sin políticas permisivas. Antes de conectar clientes o datos reales, crear políticas específicas por tabla/rol y probarlas con usuarios de prueba.
