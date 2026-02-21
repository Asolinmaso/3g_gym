'use client';

const items = [
  'Certified Trainers',
  'Modern Equipment',
  'Personalized Programs',
  'Certified Trainers',
  'Modern Equipment',
  'Personalized Programs',
];

function MarqueeTrack() {
  return (
    <div className="flex items-center gap-6 md:gap-10 shrink-0">
      {items.map((label, i) => (
        <span key={i} className="flex items-center gap-6 md:gap-10">
          <span className="text-[#C50D3E] font-bold text-lg md:text-xl lg:text-2xl whitespace-nowrap">
            {label}
          </span>
          <span
            className="w-2 h-2 rounded-full bg-[#C50D3E] shrink-0"
            aria-hidden
          />
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <section
      className="marquee-section"
      aria-label="Features ticker"
    >
      <div className="marquee-container">
        <div className="marquee-track-wrap flex w-max">
          <div className="animate-marquee flex items-center gap-6 md:gap-10 pr-6 md:pr-10">
            <MarqueeTrack />
            <MarqueeTrack />
          </div>
        </div>
      </div>
    </section>
  );
}
