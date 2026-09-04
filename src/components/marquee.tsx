import type { CSSProperties } from "react";

type Card = {
  src: string;
  width: string;
  ty: number;
  dur: number;
  delay: number;
  z: number;
};

const LG = "clamp(140px,13vw,190px)";
const MD = "clamp(120px,11vw,164px)";
const SM = "clamp(96px,9vw,130px)";

// Each card crosses the screen at its own speed (larger/closer art moves
// faster, smaller/farther slower) and has its own depth (`z`), so cards pass
// in front of or behind one another — matching the reference parallax. All
// cards render above the wordmark, which they scroll over. `delay` (negative)
// sets the starting phase so cards are spread across the viewport at load.
const CARDS: Card[] = [
  { src: "/gallery/art-1.jpg", width: MD, ty: -70, dur: 34, delay: -3.4, z: 2 },
  { src: "/gallery/art-2.jpg", width: MD, ty: 20, dur: 32, delay: -7.7, z: 4 },
  { src: "/gallery/art-3.jpg", width: LG, ty: -34, dur: 26, delay: -9.9, z: 6 },
  { src: "/gallery/art-4.jpg", width: SM, ty: 52, dur: 40, delay: -20, z: 1 },
  { src: "/gallery/art-5.jpg", width: LG, ty: 86, dur: 24, delay: -14.4, z: 7 },
  { src: "/gallery/art-6.jpg", width: MD, ty: 14, dur: 34, delay: -25.2, z: 3 },
  { src: "/gallery/art-7.jpg", width: LG, ty: -78, dur: 27, delay: -23.8, z: 5 },
];

function Frame({ card }: { card: Card }) {
  const style: CSSProperties = {
    width: card.width,
    zIndex: card.z,
    ["--ty" as string]: `${card.ty}px`,
    ["--dur" as string]: `${card.dur}s`,
    ["--delay" as string]: `${card.delay}s`,
  };
  return (
    <div
      className="pcard aspect-[3/4] overflow-hidden rounded-2xl shadow-[0_30px_60px_-20px_rgba(0,0,0,0.35)] ring-1 ring-black/5"
      style={style}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={card.src}
        alt=""
        className="h-full w-full object-cover"
        loading="eager"
        draggable={false}
      />
    </div>
  );
}

export function Marquee() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-10 overflow-hidden"
    >
      {CARDS.map((card) => (
        <Frame key={card.src} card={card} />
      ))}
    </div>
  );
}
