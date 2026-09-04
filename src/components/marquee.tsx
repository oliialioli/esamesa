import type { CSSProperties } from "react";

type Card = {
  src: string;
  width: string;
  ty: number;
};

// Upright framed artworks with pronounced, varied vertical offsets and sizes,
// matching the scattered spread of the reference collage as they scroll.
const CARDS: Card[] = [
  { src: "/gallery/art-2.jpg", width: "clamp(120px,11vw,164px)", ty: 20 },
  { src: "/gallery/art-1.jpg", width: "clamp(120px,11vw,164px)", ty: -70 },
  { src: "/gallery/art-3.jpg", width: "clamp(140px,13vw,190px)", ty: -34 },
  { src: "/gallery/art-5.jpg", width: "clamp(140px,13vw,190px)", ty: 86 },
  { src: "/gallery/art-7.jpg", width: "clamp(140px,13vw,190px)", ty: -78 },
  { src: "/gallery/art-4.jpg", width: "clamp(96px,9vw,130px)", ty: 52 },
  { src: "/gallery/art-6.jpg", width: "clamp(120px,11vw,164px)", ty: 14 },
];

function Frame({ card }: { card: Card }) {
  // The trailing margin (not a flex `gap`) travels with each card, so two
  // duplicated copies loop seamlessly at translateX(-50%).
  const style: CSSProperties = {
    width: card.width,
    transform: `translateY(${card.ty}px)`,
    marginRight: "clamp(24px,4vw,72px)",
  };
  return (
    <div
      className="aspect-[3/4] shrink-0 overflow-hidden rounded-2xl shadow-[0_30px_60px_-20px_rgba(0,0,0,0.35)] ring-1 ring-black/5"
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
  const loop = [...CARDS, ...CARDS];
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-[55%] z-10 flex h-[560px] -translate-y-1/2 items-center overflow-hidden"
    >
      <div className="marquee-track flex h-full w-max items-center">
        {loop.map((card, i) => (
          <Frame key={i} card={card} />
        ))}
      </div>
    </div>
  );
}
