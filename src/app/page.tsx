import { Countdown } from "@/components/countdown";
import { NotifyForm } from "@/components/notify-form";

const LAUNCH_DATE =
  process.env.NEXT_PUBLIC_LAUNCH_DATE ?? "2027-01-15T09:00:00-06:00";

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/esamesa" },
  { label: "Behance", href: "https://behance.net/esamesa" },
  { label: "LinkedIn", href: "https://linkedin.com/company/esamesa" },
];

const EMAIL = "hola@esamesa.studio";
const PHONE = "+52 55 1234 5678";
const YEAR = new Date().getFullYear();

export default function Page() {
  return (
    <div className="grain relative flex min-h-dvh flex-col overflow-hidden">
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_-10%,#16151a_0%,#0a0a0c_55%,#050506_100%)]" />
        <div className="glow absolute left-1/2 top-1/2 h-[70vw] w-[70vw] max-h-[820px] max-w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(217,116,74,0.20)_0%,rgba(217,116,74,0)_65%)] blur-2xl" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink to-transparent" />
      </div>

      {/* Header */}
      <header className="reveal flex items-center justify-between px-6 py-7 sm:px-10 sm:py-9">
        <a
          href="/"
          className="text-lg font-medium lowercase tracking-[0.02em] text-bone"
        >
          esa<span className="text-accent">mesa</span>
        </a>
        <nav className="flex items-center gap-5 sm:gap-7">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.7rem] uppercase tracking-[0.22em] text-muted transition-colors hover:text-bone sm:text-xs"
            >
              {s.label}
            </a>
          ))}
        </nav>
      </header>

      {/* Hero */}
      <main className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <p
          className="reveal text-[0.7rem] uppercase tracking-[0.4em] text-muted"
          style={{ animationDelay: "0.05s" }}
        >
          Estudio de diseño · Ciudad de México
        </p>

        <div className="reveal mt-10 sm:mt-12" style={{ animationDelay: "0.15s" }}>
          <Countdown target={LAUNCH_DATE} />
        </div>

        <h1
          className="reveal mt-10 font-display text-[19vw] leading-[0.86] tracking-[-0.02em] text-bone sm:mt-12 sm:text-[13vw] lg:text-[11rem]"
          style={{ animationDelay: "0.25s" }}
        >
          Muy <span className="italic text-accent">pronto</span>
        </h1>

        <p
          className="reveal mt-8 max-w-xl text-balance text-sm leading-relaxed text-muted sm:text-base"
          style={{ animationDelay: "0.35s" }}
        >
          Estamos afinando cada detalle antes de abrir. esamesa es el lugar donde
          las ideas se sientan a trabajar. Déjanos tu correo y te avisamos el día
          del lanzamiento.
        </p>

        <div
          className="reveal mt-9 flex w-full flex-col items-center"
          style={{ animationDelay: "0.45s" }}
        >
          <NotifyForm />
        </div>
      </main>

      {/* Footer */}
      <footer className="reveal px-6 py-7 sm:px-10 sm:py-9" style={{ animationDelay: "0.55s" }}>
        <div className="flex flex-col items-center gap-4 border-t border-line pt-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-[0.7rem] uppercase tracking-[0.2em] text-muted">
            © {YEAR} esamesa · Todos los derechos reservados
          </p>
          <div className="flex items-center gap-5 text-[0.7rem] uppercase tracking-[0.2em]">
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="text-muted transition-colors hover:text-bone"
            >
              {PHONE}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="text-bone transition-colors hover:text-accent"
            >
              {EMAIL}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
