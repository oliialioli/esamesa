# esamesa — Coming Soon

Página _coming soon_ para el estudio **esamesa**, una réplica fiel de la
plantilla de Framer [Comolio](https://comolio.framer.website/): fondo blanco,
un collage disperso de obras de arte cálidas, cuenta regresiva en vivo, el gran
texto translúcido "COMING SOON", logotipo con tipografía script y enlaces
sociales.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router) + React 19
- TypeScript
- Tailwind CSS v4
- Tipografías: Inter (texto) + Lily Script One (logotipo)

## Desarrollo local

Requisitos: Node.js 18.18+ (recomendado 20+).

```bash
npm install
npm run dev
```

Abre [http://localhost:43117](http://localhost:43117).

```bash
npm run build   # build de producción
npm run start   # servir el build (puerto 43117)
npm run lint    # linting
```

## Configuración

- **Fecha de lanzamiento**: define `NEXT_PUBLIC_LAUNCH_DATE` (ISO 8601) para
  cambiar el objetivo de la cuenta regresiva. Por defecto:
  `2027-01-05T00:00:00-06:00`.

  ```bash
  NEXT_PUBLIC_LAUNCH_DATE="2027-03-01T00:00:00-06:00" npm run dev
  ```

- **Marca, redes, teléfono y correo**: se editan en `src/app/page.tsx`.
- **Galería**: las imágenes están en `public/gallery/` y sus posiciones se
  definen en `src/components/gallery.tsx`.

## Estructura

```
public/gallery/     # obras del collage (art-1…art-7.jpg)
src/
  app/
    layout.tsx      # fuentes, metadata
    page.tsx        # composición (logo, redes, galería, COMING SOON, pie)
    globals.css     # tema y animación flotante
  components/
    countdown.tsx   # cuenta regresiva en vivo
    gallery.tsx     # collage disperso (desktop + móvil)
```

## Créditos

Diseño y disposición inspirados en la plantilla Comolio de Framer. Las imágenes
provienen de la misma plantilla de referencia; sustitúyelas por obra propia de
esamesa cuando esté disponible.
