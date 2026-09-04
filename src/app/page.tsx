import Link from "next/link";
import { Countdown } from "@/components/countdown";
import { Gallery } from "@/components/gallery";

const LAUNCH_DATE =
  process.env.NEXT_PUBLIC_LAUNCH_DATE ?? "2027-01-05T00:00:00-06:00";

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/esamesa", icon: InstagramIcon },
  { label: "Twitter", href: "https://twitter.com/esamesa", icon: TwitterIcon },
  { label: "Facebook", href: "https://facebook.com/esamesa", icon: FacebookIcon },
];

const EMAIL = "HELLO@ESAMESA.COM";
const PHONE = "+52 55 1234 5678";

export default function Page() {
  return (
    <div className="relative min-h-dvh overflow-hidden bg-paper">
      {/* Big translucent wordmark, sits behind the artwork */}
      <h2
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[47%] z-10 w-full -translate-x-1/2 -translate-y-1/2 select-none text-center text-[19vw] font-bold leading-none tracking-tight text-ink/10 sm:top-[57%] lg:text-[9vw]"
      >
        COMING SOON
      </h2>

      {/* Scattered gallery */}
      <Gallery />

      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-40 flex items-center justify-between px-6 py-6 sm:px-10 sm:py-8">
        <Link href="/" className="flex items-center gap-2 text-ink" aria-label="esamesa home">
          <LeafMark />
          <span className="font-script text-2xl leading-none sm:text-[1.7rem]">
            esamesa
          </span>
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
      <div className="absolute left-1/2 top-[34%] z-30 -translate-x-1/2 -translate-y-1/2 px-4">
        <Countdown target={LAUNCH_DATE} />
      </div>

      {/* Footer */}
      <footer className="absolute inset-x-0 bottom-0 z-40 px-6 py-6 sm:px-10 sm:py-8">
        <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="order-2 text-[0.7rem] uppercase tracking-[0.1em] text-ink/60 sm:order-1">
            © 2026 ESAMESA. ALL RIGHTS RESERVED.
          </p>
          <p className="order-1 flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.1em] text-ink/80 sm:order-2">
            <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="transition-opacity hover:opacity-60">
              {PHONE}
            </a>
            <span className="text-ink/30">/</span>
            <a href={`mailto:${EMAIL.toLowerCase()}`} className="transition-opacity hover:opacity-60">
              {EMAIL}
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

function LeafMark() {
  return (
    <svg
      viewBox="0 0 15.005 15.333"
      className="h-5 w-5"
      aria-hidden
      overflow="visible"
    >
      <path
        d="M 6.123 1.58 C -3.249 9.01 0.927 13.86 0.927 13.86 L 14 15 L 3.566 8.126 L 15 15.333 C 15 15.333 15.496 -5.85 6.123 1.58 Z"
        fill="currentColor"
        stroke="currentColor"
      />
    </svg>
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
