# esamesa — Coming Soon

Página _coming soon_ ("Muy pronto") para el estudio de diseño **esamesa**,
inspirada en la plantilla de Framer [Comolio](https://comolio.framer.website/).

Incluye marca, enlaces sociales, cuenta regresiva en vivo hasta el lanzamiento,
un título editorial grande, captura de correo para avisos y un pie con datos de
contacto. Diseño oscuro y elegante, totalmente responsive.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router) + React 19
- TypeScript
- Tailwind CSS v4
- Tipografías: Instrument Serif (display) + Geist / Geist Mono

## Desarrollo local

Requisitos: Node.js 18.18+ (recomendado 20+).

```bash
npm install
npm run dev
```

Abre [http://localhost:43117](http://localhost:43117).

Otros comandos:

```bash
npm run build   # build de producción
npm run start   # servir el build (puerto 43117)
npm run lint    # linting
```

## Configuración

- **Fecha de lanzamiento**: define `NEXT_PUBLIC_LAUNCH_DATE` (ISO 8601) para
  cambiar el objetivo de la cuenta regresiva. Por defecto:
  `2027-01-15T09:00:00-06:00`.

  ```bash
  NEXT_PUBLIC_LAUNCH_DATE="2027-03-01T00:00:00-06:00" npm run dev
  ```

- **Contenido**: la marca, redes sociales, teléfono y correo se editan en
  `src/app/page.tsx`.

## Notas

- El formulario de "Avísame" es una maqueta en el cliente (simula el envío y
  muestra un estado de éxito). Conéctalo a un endpoint real —por ejemplo una
  Route Handler en `src/app/api/`— cuando exista backend o proveedor de correo.

## Estructura

```
src/
  app/
    layout.tsx      # fuentes, metadata / SEO
    page.tsx        # composición de la landing
    globals.css     # tema, grano, animaciones
  components/
    countdown.tsx   # cuenta regresiva en vivo
    notify-form.tsx # captura de correo (maqueta)
```
