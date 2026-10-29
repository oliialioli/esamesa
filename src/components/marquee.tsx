import type { CSSProperties } from "react";
import { asset } from "@/lib/base-path";

type Card = {
  src: string;
  // Width / height of the image file, so each piece keeps its own proportions.
  ratio: number;
  width: string;
  ty: number;
  dur: number;
  // Fraction of the cycle already elapsed at load. Below 0.5 the card is
  // crossing the screen (closer to 0 = further right); from 0.5 up it waits
  // off-screen and enters after (1 - phase) * dur seconds.
  phase: number;
  z: number;
};

// Portrait pieces.
const LG = "clamp(120px,13vw,190px)";
const MD = "clamp(104px,11vw,164px)";
// Landscape pieces are wider so every piece carries a similar visual weight.
const WL = "clamp(170px,19vw,280px)";
const WM = "clamp(150px,16vw,236px)";
const WS = "clamp(130px,13vw,190px)";

// Each card crosses the screen at its own speed and has its own depth (`z`), so
// cards pass in front of or behind one another — matching the reference
// parallax. After crossing, a card waits off-screen for the rest of its cycle
// (see `cross` in globals.css): only about half of the pieces are on screen at
// once and every piece gets its turn. The wordmark sits above the cards and
// blends against them.
const CARDS: Card[] = [
  // On screen at load, spread from right to left.
  { src: "/gallery/xendra-poster.jpg", ratio: 520 / 780, width: LG, ty: -10, dur: 62, phase: 0.06, z: 12 },
  { src: "/gallery/talentl-laptop.jpg", ratio: 720 / 540, width: WL, ty: 60, dur: 70, phase: 0.12, z: 6 },
  { src: "/gallery/colectin-patch.jpg", ratio: 520 / 553, width: MD, ty: -55, dur: 58, phase: 0.18, z: 9 },
  { src: "/gallery/smartb.jpg", ratio: 720 / 545, width: WL, ty: 20, dur: 76, phase: 0.25, z: 13 },
  { src: "/gallery/erse.jpg", ratio: 520 / 683, width: MD, ty: -85, dur: 66, phase: 0.31, z: 4 },
  { src: "/gallery/colectin-poster.jpg", ratio: 520 / 650, width: LG, ty: 40, dur: 56, phase: 0.37, z: 11 },
  { src: "/gallery/capchase-web.jpg", ratio: 720 / 551, width: WM, ty: -30, dur: 72, phase: 0.44, z: 7 },
  // Waiting off-screen, entering one after another over the first ~35 s.
  { src: "/gallery/xendra-web.jpg", ratio: 720 / 480, width: WM, ty: -70, dur: 68, phase: 0.96, z: 2 },
  { src: "/gallery/jackrom.jpg", ratio: 720 / 405, width: WS, ty: 80, dur: 80, phase: 0.91, z: 1 },
  { src: "/gallery/poder-digital-1.jpg", ratio: 720 / 405, width: WM, ty: 10, dur: 64, phase: 0.83, z: 5 },
  { src: "/gallery/smartship.jpg", ratio: 520 / 564, width: MD, ty: -45, dur: 60, phase: 0.73, z: 8 },
  { src: "/gallery/colectin-web.jpg", ratio: 720 / 615, width: WM, ty: 50, dur: 74, phase: 0.72, z: 14 },
  { src: "/gallery/talentl-about.jpg", ratio: 720 / 466, width: WS, ty: -20, dur: 82, phase: 0.68, z: 3 },
  { src: "/gallery/capchase-deals.jpg", ratio: 720 / 405, width: WS, ty: 90, dur: 78, phase: 0.62, z: 10 },
  { src: "/gallery/poder-digital-2.jpg", ratio: 720 / 506, width: WS, ty: -60, dur: 84, phase: 0.58, z: 15 },
];

function Frame({ card }: { card: Card }) {
  const style: CSSProperties = {
    width: card.width,
    aspectRatio: card.ratio,
    zIndex: card.z,
    ["--ty" as string]: `${card.ty}px`,
    ["--dur" as string]: `${card.dur}s`,
    ["--delay" as string]: `${(-card.phase * card.dur).toFixed(2)}s`,
  };
  return (
    <div
      className="pcard overflow-hidden rounded-2xl shadow-[0_30px_60px_-20px_rgba(0,0,0,0.35)] ring-1 ring-black/5"
      style={style}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset(card.src)}
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
