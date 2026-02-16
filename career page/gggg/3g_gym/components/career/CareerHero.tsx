import Image from 'next/image';

export default function CareerHero() {
  return (
    <section className="career-hero" aria-label="Career">
      <div className="career-hero-bg">
        <Image
          src="/banner.png"
          alt=""
          fill
          className="career-hero-bg-image"
          sizes="100vw"
          priority
        />
        <div className="career-hero-overlay" aria-hidden />
      </div>
      <div className="career-hero-deco" aria-hidden />
      <div className="content-inner career-hero-inner">
        <h1 className="career-hero-title">Career</h1>
      </div>
    </section>
  );
}
