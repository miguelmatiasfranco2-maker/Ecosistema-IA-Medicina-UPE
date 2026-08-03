# Entrega para Cursor

## Objetivo permanente

Mantener esta web como una presentación institucional ejecutiva, no como una landing comercial ni como reemplazo del micrositio de Medicina.

## Reglas que no deben romperse

1. Conservar la identidad del apartado Medicina UPE: azul profundo, cian, blanco y tipografía condensada en títulos.
2. No inventar cifras, porcentajes, ahorros, consultas atendidas ni resultados.
3. Usar fotografías oficiales antes que imágenes genéricas.
4. Mantener navegación vertical, lectura clara en proyector y adaptación móvil.
5. Preservar los denominadores de las encuestas cuando una pregunta tenga menos respuestas válidas.
6. No publicar respuestas individuales ni archivos CSV con datos personales.
7. No modificar ni depender del código del micrositio oficial.

## Archivos que se editan normalmente

- Contenido y cifras: `app/page.tsx`.
- Diseño y responsive: `app/globals.css`.
- Logos y fotografías: `public/media/`.
- Videos y audios reales: `public/media/videos/` y `public/media/audio/`.

## Sustituir marcadores audiovisuales

La web contiene botones y marcos visuales preparados para material real. Al recibir cada archivo:

1. Renombrarlo en minúsculas, sin espacios ni acentos.
2. Guardarlo en `public/media/videos/` o `public/media/audio/`.
3. Reemplazar el marcador correspondiente en `app/page.tsx` por `<video controls>` o `<audio controls>`.
4. Mantener `preload="metadata"` para evitar carga excesiva.
5. Añadir subtítulos con `<track>` cuando el video tenga voz.

Ejemplo:

```tsx
<video controls preload="metadata" poster="/media/practica.jpg">
  <source src="/media/videos/videoclase-final.mp4" type="video/mp4" />
  <track kind="captions" src="/media/videos/videoclase-final-es.vtt" srcLang="es" label="Español" />
</video>
```

## Encuestas integradas

- Encuesta institucional: 128 respuestas.
- Encuesta Paciente 360: 89 respuestas.
- Los arreglos `institutionalChannels`, `followedAccounts` y `patientUse` contienen valores agregados.
- Las preguntas opcionales muestran su número real de respuestas válidas.

## Criterios de aceptación antes de cada publicación

- `npm run lint` sin errores.
- `npm test` aprobado.
- Ningún enlace interno roto.
- Gráficos legibles a 1366×768 y 390×844.
- Navegación por teclado y textos alternativos conservados.
- No hay desplazamiento horizontal en celular.
- Los medios no se reproducen automáticamente con sonido.
