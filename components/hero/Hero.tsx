import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-banner-section"
      aria-label="Hero banner"
    >
      {/* Frame 19: base + image 46 – dark bg + banner-bg with 0.9 overlay */}
      <div className="hero-banner__bg" aria-hidden />

      {/* Ellipse 2 – left red blur */}
      <div className="hero-banner__blur hero-banner__blur--left" aria-hidden />
      {/* Ellipse 3 – right red blur */}
      <div className="hero-banner__blur hero-banner__blur--right" aria-hidden />

      {/* Train Hard. See Results. + Live Strong – gradient text, left */}
      <h1 className="hero-banner__headline">
        <span className="hero-banner__line1">Train Hard. See Results.</span>
        <span className="hero-banner__line2">Live Strong</span>
      </h1>

      {/* Frame 1321314968 + image 48 – action image bottom-left */}
      <div className="hero-banner__image-frame">
        <Image
          src="/banner.png"
          alt="Train Hard. See Results. Live Strong."
          width={792}
          height={528}
          className="hero-banner__image"
          priority
          sizes="(max-width: 1024px) 100vw, 792px"
        />
      </div>

      {/* Premium training plans... + Frame 18 (Get Started) – right */}
      <div className="hero-banner__copy">
        <p className="hero-banner__paragraph">
          Premium training plans, certified experts & a community built for success, start your fitness transformation today.
        </p>
        <a href="#contact" className="hero-get-started-btn hero-banner__cta">
          Get Started <span aria-hidden>&gt;&gt;&gt;</span>
        </a>
      </div>
    </section>
  );
}
