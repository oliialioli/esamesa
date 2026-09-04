"use client";

import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const UNITS: { key: keyof TimeLeft; label: string }[] = [
  { key: "days", label: "Días" },
  { key: "hours", label: "Horas" },
  { key: "minutes", label: "Min" },
  { key: "seconds", label: "Seg" },
];

function diff(target: number): TimeLeft {
  const total = Math.max(0, target - Date.now());
  const seconds = Math.floor(total / 1000);
  return {
    days: Math.floor(seconds / 86400),
    hours: Math.floor((seconds % 86400) / 3600),
    minutes: Math.floor((seconds % 3600) / 60),
    seconds: seconds % 60,
  };
}

const pad = (n: number) => n.toString().padStart(2, "0");

export function Countdown({ target }: { target: string }) {
  const targetMs = new Date(target).getTime();
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTime(diff(targetMs));
    const id = setInterval(() => setTime(diff(targetMs)), 1000);
    return () => clearInterval(id);
  }, [targetMs]);

  return (
    <div
      className="flex items-start justify-center gap-4 sm:gap-8"
      role="timer"
      aria-label="Cuenta regresiva para el lanzamiento"
    >
      {UNITS.map(({ key, label }, i) => (
        <div key={key} className="flex items-start gap-4 sm:gap-8">
          <div className="flex flex-col items-center">
            <span className="font-mono text-4xl tabular-nums tracking-tight text-bone sm:text-6xl md:text-7xl">
              {time ? pad(time[key]) : "--"}
            </span>
            <span className="mt-2 text-[0.65rem] uppercase tracking-[0.28em] text-muted sm:text-xs">
              {label}
            </span>
          </div>
          {i < UNITS.length - 1 && (
            <span
              aria-hidden
              className="font-mono text-4xl leading-none text-muted/40 sm:text-6xl md:text-7xl"
            >
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
