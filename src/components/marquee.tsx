import type { CSSProperties } from "react";

type Card = {
  src: string;
  width: string;
  ty: number;
};

// Upright framed artworks with individual vertical offsets, forming a wave
// as they scroll. Order matches the reference collage.
const CARDS: Card[] = [
  { src: "/gallery/art-1.jpg", width: "clamp(120px,12vw,168px)", ty: -36 },
  { src: "/gallery/art-2.jpg", width: "clamp(150px,15vw,220px)", ty: 44 },
  { src: "/gallery/art-3.jpg", width: "clamp(140px,14vw,196px)", ty: -64 },
  { src: "/gallery/art-7.jpg", width: "clamp(110px,11vw,150px)", ty: 56 },
  { src: "/gallery/art-4.jpg", width: "clamp(120px,12vw,160px)", ty: 28 },
  { src: "/gallery/art-5.jpg", width: "clamp(150px,15vw,216px)", ty: 24 },
  { src: "/gallery/art-6.jpg", width: "clamp(120px,12vw,160px)", ty: -48 },
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
      className="pointer-events-none absolute inset-x-0 top-[55%] z-10 flex h-[460px] -translate-y-1/2 items-center overflow-hidden"
    >
      <div className="marquee-track flex h-full w-max items-center">
        {loop.map((card, i) => (
          <Frame key={i} card={card} />
        ))}
      </div>
    </div>
  );
}
