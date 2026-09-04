"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function NotifyForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!EMAIL_RE.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    // Mock persistence — swap for a real endpoint when the backend exists.
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
    setEmail("");
  }

  if (status === "success") {
    return (
      <p className="text-sm text-bone/90" role="status">
        Gracias. Te avisaremos en cuanto abramos las puertas.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full max-w-md">
      <div className="flex items-center gap-2 border-b border-line pb-2 transition-colors focus-within:border-bone/50">
        <input
          type="email"
          inputMode="email"
          autoComplete="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder="tu@correo.com"
          aria-label="Correo electrónico"
          aria-invalid={status === "error"}
          disabled={status === "loading"}
          className="w-full bg-transparent py-1 text-sm text-bone outline-none placeholder:text-muted/70 disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="shrink-0 text-xs uppercase tracking-[0.22em] text-bone transition-opacity hover:opacity-60 disabled:opacity-40"
        >
          {status === "loading" ? "Enviando…" : "Avísame"}
        </button>
      </div>
      <p
        className={`mt-2 h-4 text-xs ${
          status === "error" ? "text-accent" : "text-muted"
        }`}
      >
        {status === "error"
          ? "Introduce un correo válido."
          : "Sé el primero en saber cuándo abrimos."}
      </p>
    </form>
  );
}
