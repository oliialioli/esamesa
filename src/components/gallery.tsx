import type { CSSProperties } from "react";

type Card = {
  src: string;
  alt: string;
  left: string;
  top: string;
  width: string;
  rot: number;
  dur: string;
  delay: string;
  center?: boolean;
};

// Scattered collage that mirrors the reference layout: a gentle wave of
// framed artworks rising across the lower two-thirds of the canvas.
const DESKTOP: Card[] = [
  { src: "/gallery/art-1.jpg", alt: "", left: "1%", top: "33%", width: "clamp(96px,9vw,150px)", rot: -4, dur: "9s", delay: "0s" },
  { src: "/gallery/art-2.jpg", alt: "", left: "15%", top: "42%", width: "clamp(160px,13vw,224px)", rot: 2, dur: "11s", delay: "0.6s" },
  { src: "/gallery/art-3.jpg", alt: "", left: "50%", top: "29%", width: "clamp(160px,12vw,208px)", rot: 0, dur: "10s", delay: "0.3s", center: true },
  { src: "/gallery/art-7.jpg", alt: "", left: "36%", top: "62%", width: "clamp(96px,8vw,140px)", rot: -3, dur: "12s", delay: "1s" },
  { src: "/gallery/art-4.jpg", alt: "", left: "56%", top: "55%", width: "clamp(104px,8vw,150px)", rot: -2, dur: "9.5s", delay: "0.9s" },
  { src: "/gallery/art-5.jpg", alt: "", left: "70%", top: "56%", width: "clamp(160px,13vw,216px)", rot: 3, dur: "11.5s", delay: "0.2s" },
  { src: "/gallery/art-6.jpg", alt: "", left: "92%", top: "42%", width: "clamp(96px,8vw,150px)", rot: 4, dur: "10.5s", delay: "1.3s" },
];

const MOBILE: Card[] = [
  { src: "/gallery/art-1.jpg", alt: "", left: "0%", top: "34%", width: "42vw", rot: -3, dur: "9s", delay: "0s" },
  { src: "/gallery/art-2.jpg", alt: "", left: "54%", top: "48%", width: "44vw", rot: 3, dur: "11s", delay: "0.6s" },
];

function Frame({ card }: { card: Card }) {
  const style: CSSProperties = {
    left: card.left,
    top: card.top,
    width: card.width,
    ["--rot" as string]: `${card.rot}deg`,
    ["--dur" as string]: card.dur,
    ["--delay" as string]: card.delay,
    transform: card.center
      ? `translateX(-50%) rotate(${card.rot}deg)`
      : undefined,
  };
  return (
    <div
      aria-hidden
      className="floaty absolute aspect-[3/4] overflow-hidden rounded-2xl shadow-[0_30px_60px_-20px_rgba(0,0,0,0.35)] ring-1 ring-black/5"
      style={style}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={card.src}
        alt={card.alt}
        className="h-full w-full object-cover"
        loading="eager"
        draggable={false}
      />
    </div>
  );
}

export function Gallery() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="hidden h-full w-full lg:block">
        {DESKTOP.map((c) => (
          <Frame key={c.src} card={c} />
        ))}
      </div>
      <div className="block h-full w-full lg:hidden">
        {MOBILE.map((c) => (
          <Frame key={c.src} card={c} />
        ))}
      </div>
    </div>
  );
}
