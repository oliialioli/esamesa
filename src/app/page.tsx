import Link from "next/link";
import { CopyEmail } from "@/components/copy-email";
import { Countdown } from "@/components/countdown";
import { EsamesaLogo } from "@/components/logo";
import { Marquee } from "@/components/marquee";

const LAUNCH_DATE =
  process.env.NEXT_PUBLIC_LAUNCH_DATE ?? "2027-01-05T00:00:00-06:00";

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/esamesa", icon: InstagramIcon },
  { label: "Twitter", href: "https://twitter.com/esamesa", icon: TwitterIcon },
  { label: "Facebook", href: "https://facebook.com/esamesa", icon: FacebookIcon },
];

// Correos que se muestran como chips para copiar con un clic.
const EMAILS = ["olaia@esamesa.com", "adriana@esamesa.com"];

// Teléfono del pie. Vacío = oculto, hasta tener el número real.
const PHONE: string = "";

export default function Page() {
  return (
    <div className="relative min-h-dvh overflow-hidden bg-paper">
      {/* Scrolling gallery of artworks */}
      <Marquee />

      {/* Large wordmark that reveals on load. White + mix-blend-difference so it
          sits OVER the artwork and inverts against it (black on the white paper,
          cyan over the red pieces, etc.) — the reference blend effect. */}
      <h2
        aria-hidden
        className="title-in pointer-events-none absolute left-1/2 top-[50%] z-20 w-full -translate-x-1/2 -translate-y-1/2 select-none text-center text-[17vw] font-bold leading-none tracking-tight text-white mix-blend-difference max-sm:short:top-[47%] sm:top-[52%] lg:text-[9vw]"
      >
        MUY PRONTO
      </h2>

      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-40 flex items-center justify-between px-6 py-6 sm:px-10 sm:py-8">
        <Link href="/" className="flex items-center text-ink" aria-label="esamesa, inicio">
          <EsamesaLogo className="h-4 w-auto sm:h-[18px]" />
        </Link>
        <nav className="flex items-center gap-5 sm:gap-8">
          {SOCIALS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-ink transition-opacity hover:opacity-60"
            >
              <Icon className="h-5 w-5 sm:hidden" />
              <span className="hidden text-xs font-medium uppercase tracking-[0.12em] sm:inline">
                {label}
              </span>
            </a>
          ))}
        </nav>
      </header>

      {/* Countdown */}
      <div className="absolute left-1/2 top-[36%] z-30 -translate-x-1/2 -translate-y-1/2 px-4 max-sm:short:top-[33%]">
        <Countdown target={LAUNCH_DATE} />
      </div>

      {/* Intro copy, copyable emails and footer, stacked from the bottom so they
          can't collide with each other on short screens */}
      <div className="absolute inset-x-0 bottom-0 z-40 flex flex-col items-center gap-3 px-6 pb-6 sm:gap-5 sm:px-10 sm:pb-8">
        {/* Same translucent paper plate as the countdown labels: invisible on the
            page background, keeps the copy readable when an artwork passes behind. */}
        <p className="-my-2 max-w-[36rem] rounded-3xl bg-paper/80 px-3 py-2 text-center text-[0.8rem] leading-normal text-ink/60 backdrop-blur-[2px] sm:px-4 sm:text-sm sm:leading-relaxed">
          Estamos afinando cada detalle antes de lanzar nuestro pequeño espacio.{" "}
          <span className="text-ink">
            <span aria-hidden>
              <EsamesaLogo className="inline-block h-[0.8em] w-auto align-baseline" />
            </span>
            <span className="sr-only">esamesa</span>
          </span> es
          el lugar donde las ideas se sientan a trabajar. Escríbenos y te avisamos
          cuando abramos.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-3">
          {EMAILS.map((email) => (
            <CopyEmail key={email} email={email} />
          ))}
        </div>

        <footer className="flex w-full flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-[0.7rem] uppercase tracking-[0.1em] text-ink/60">
            © 2026 ESAMESA.
            <span className="max-sm:hidden"> TODOS LOS DERECHOS RESERVADOS.</span>
          </p>
          {PHONE && (
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="text-[0.7rem] uppercase tracking-[0.1em] text-ink/80 transition-opacity hover:opacity-60"
            >
              {PHONE}
            </a>
          )}
        </footer>
      </div>
    </div>
  );
}

type IconProps = { className?: string };

function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TwitterIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.4 4.7a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.6 3.3 4a4.1 4.1 0 0 1-1.9.1 4.1 4.1 0 0 0 3.8 2.9A8.3 8.3 0 0 1 2 18.6a11.6 11.6 0 0 0 6.3 1.8c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.2Z" />
    </svg>
  );
}

function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z" />
    </svg>
  );
}
