"use client";

import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const UNITS: { key: keyof TimeLeft; label: string; pad: boolean }[] = [
  { key: "days", label: "Days", pad: false },
  { key: "hours", label: "Hours", pad: true },
  { key: "minutes", label: "Minutes", pad: true },
  { key: "seconds", label: "Seconds", pad: true },
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

const fmt = (n: number, pad: boolean) =>
  pad ? n.toString().padStart(2, "0") : n.toString();

export function Countdown({ target }: { target: string }) {
  const targetMs = new Date(target).getTime();
  // Lazy init renders live values on the client's first paint; the server
  // renders placeholders, so the number spans suppress hydration warnings.
  const [time, setTime] = useState<TimeLeft | null>(() =>
    typeof window === "undefined" ? null : diff(targetMs),
  );

  useEffect(() => {
    const id = setInterval(() => setTime(diff(targetMs)), 1000);
    return () => clearInterval(id);
  }, [targetMs]);

  return (
    <div
      className="flex items-start justify-center gap-3 sm:gap-5"
      role="timer"
      aria-label="Countdown to launch"
    >
      {UNITS.map(({ key, label, pad }, i) => (
        <div key={key} className="flex items-start gap-3 sm:gap-5">
          <div className="flex flex-col">
            <span
              suppressHydrationWarning
              className="text-4xl font-medium leading-none tracking-tight text-ink tabular-nums sm:text-5xl md:text-6xl"
            >
              {time ? fmt(time[key], pad) : "--"}
            </span>
            <span className="mt-2 text-sm text-label sm:text-base">{label}</span>
          </div>
          {i < UNITS.length - 1 && (
            <span
              aria-hidden
              className="mt-1 text-3xl font-light leading-none text-ink sm:text-4xl md:text-5xl"
            >
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
