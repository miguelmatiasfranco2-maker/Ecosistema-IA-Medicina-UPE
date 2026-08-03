# Ecosistema IA Medicina UPE

Presentación web institucional e interactiva del Área de Innovación Tecnológica Educativa de la Facultad de Ciencias Médicas de la Universidad Privada del Este, sede Presidente Franco.

## Contenido

- Historia y evolución del proyecto durante 2026.
- Investigación de más de 21 herramientas de inteligencia artificial.
- Flujo de producción de guiones, voces, avatares y videoclases.
- Asistente virtual, Respond.io, Moodle y Google Workspace.
- Nuevo micrositio y recorrido 360°.
- Infraestructura académica real de Medicina UPE.
- Resumen y gráficos de dos encuestas institucionales.
- Línea de tiempo, resultados y próximas etapas.

## Requisitos

- Node.js 22.13 o superior.
- npm 10 o superior.

## Ejecutar en Cursor

1. Abrir esta carpeta en Cursor.
2. Abrir una terminal integrada.
3. Ejecutar `npm ci`.
4. Ejecutar `npm run dev`.
5. Abrir la dirección local indicada en la terminal.

## Validación

```bash
npm run lint
npm test
```

## Estructura principal

- `app/page.tsx`: contenido, datos agregados y estructura de la presentación.
- `app/globals.css`: identidad visual, animaciones y adaptación responsive.
- `app/layout.tsx`: metadatos generales.
- `public/media`: logos y fotografías institucionales.
- `public/media/videos`: ubicación prevista para fragmentos audiovisuales.
- `CURSOR_HANDOFF.md`: instrucciones precisas para continuar el desarrollo.

## Identidad visual

- Azul principal Medicina: `#070D87`.
- Azul secundario: `#14219A`.
- Cian: `#00D9FF`.
- Verde institucional: `#289447`.
- Texto oscuro: `#101649`.

## Git

```bash
git init
git add .
git commit -m "Presentacion Ecosistema IA Medicina UPE"
git branch -M main
git remote add origin URL_DEL_REPOSITORIO
git push -u origin main
```

No se incluyen respuestas individuales de Google Forms. Los gráficos utilizan únicamente resultados agregados y denominadores documentados.
