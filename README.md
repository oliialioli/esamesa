# esamesa — Muy pronto

Página _muy pronto_ (coming soon) para el estudio **esamesa**, inspirada en la
plantilla de Framer [Comolio](https://comolio.framer.website/): fondo color
papel, un collage de obras de arte cálidas que cruzan la pantalla, cuenta
regresiva en vivo, el gran texto "MUY PRONTO" que se invierte sobre las obras,
logotipo con tipografía script, redes y correos que se copian con un clic.

Publicada en <https://oliialioli.github.io/esamesa/>.

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

- **Redes, correos y teléfono**: se editan en `src/app/page.tsx`.
  - `SOCIALS`: enlaces del encabezado.
  - `EMAILS`: cada dirección se muestra como un chip que la copia al portapapeles.
  - `PHONE`: vacío = oculto. Escribe el número real para mostrarlo en el pie.
- **Textos**: la web está en español. Los textos viven en `src/app/page.tsx`
  y `src/components/countdown.tsx`; el idioma y los metadatos, en
  `src/app/layout.tsx`.
- **Galería**: las imágenes están en `public/gallery/` y su tamaño, posición y
  velocidad se definen en `src/components/marquee.tsx` (lista `CARDS`).
- **URL pública y metadatos**: `NEXT_PUBLIC_SITE_URL` fija la URL canónica y la
  de las imágenes para redes sociales. Si no se define, usa la de GitHub Pages.
  La imagen para compartir es `public/og.jpg` (1200×630 px, ligera); si cambias
  las obras o el diseño, vuelve a generarla.

## Despliegue

Cada push a `main` ejecuta `.github/workflows/deploy.yml`: construye el export
estático y lo publica en GitHub Pages (en torno a un minuto). El workflow
rellena solo `NEXT_PUBLIC_BASE_PATH` y `NEXT_PUBLIC_SITE_URL` a partir de la
configuración de Pages, así que si añades un dominio propio en
_Settings → Pages_ no hace falta tocar el código.

## Estructura

```
public/
  gallery/          # obras del collage (art-1…art-7.jpg, art-8.png)
  og.jpg            # imagen para compartir en redes (1200×630)
src/
  app/
    layout.tsx      # fuentes, idioma y metadatos (Open Graph)
    page.tsx        # composición (logo, redes, cuenta regresiva, MUY PRONTO, correos, pie)
    globals.css     # tema y animaciones
  components/
    copy-email.tsx  # chip que copia un correo al portapapeles
    countdown.tsx   # cuenta regresiva en vivo
    logo.tsx        # logotipo vectorial
    marquee.tsx     # obras que cruzan la pantalla (parallax)
  lib/
    base-path.ts    # prefijo de ruta para servir desde un subpath (GitHub Pages)
```

## Créditos

Diseño y disposición inspirados en la plantilla Comolio de Framer. Las imágenes
provienen de la misma plantilla de referencia; sustitúyelas por obra propia de
esamesa cuando esté disponible.
