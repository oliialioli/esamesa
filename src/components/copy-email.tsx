"use client";

import { useEffect, useRef, useState } from "react";

async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback for contexts without the async clipboard API.
    const el = document.createElement("textarea");
    el.value = text;
    el.setAttribute("readonly", "");
    el.style.position = "fixed";
    el.style.opacity = "0";
    document.body.appendChild(el);
    el.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(el);
    return ok;
  }
}

// Email pill: one click copies the address (friendlier than a mailto: link for
// people without a configured mail client).
export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  async function onClick() {
    if (!(await copyText(email))) return;
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1800);
  }

  return (
    <span className="relative inline-flex">
      <button
        type="button"
        onClick={onClick}
        aria-label={`Copiar ${email}`}
        className="inline-flex h-9 items-center gap-3 rounded-full bg-chip px-5 text-sm text-ink transition-colors hover:bg-chip-hover focus-visible:outline-2 sm:h-10 focus-visible:outline-offset-2 focus-visible:outline-ink"
      >
        {email}
        {copied ? (
          <CheckIcon className="h-4 w-4" />
        ) : (
          <CopyIcon className="h-4 w-4" />
        )}
      </button>
      {copied && (
        <span
          aria-hidden
          className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink px-3 py-1 text-xs text-paper transition-opacity duration-200 starting:opacity-0"
        >
          ¡Copiado!
        </span>
      )}
      <span role="status" className="sr-only">
        {copied ? "Correo copiado" : ""}
      </span>
    </span>
  );
}

type IconProps = { className?: string };

function CopyIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="9" y="9" width="12" height="12" rx="3" />
      <path d="M5 15V6a3 3 0 0 1 3-3h9" />
    </svg>
  );
}

function CheckIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}
