export default function Hero() {
  return (
    <section
      id="home"
      className="hero-banner-section"
      aria-label="Hero banner"
    >
      {/* Ellipse blurs */}
      <div className="hero-banner__blur hero-banner__blur--left" aria-hidden />
      <div className="hero-banner__blur hero-banner__blur--right-top" aria-hidden />
      <div className="hero-banner__blur hero-banner__blur--center" aria-hidden />
      <div className="hero-banner__blur hero-banner__blur--right-bottom" aria-hidden />

      {/* Chevron decorations – left */}
      <div className="hero-banner__chevrons hero-banner__chevrons--left" aria-hidden>
        <svg viewBox="0 0 145 250" fill="none" className="hero-banner__chevron">
          <path d="M0 0 L145 125 L0 250 Z" fill="#010101" />
        </svg>
        <svg viewBox="0 0 141 250" fill="none" className="hero-banner__chevron">
          <path d="M0 0 L141 125 L0 250 Z" fill="#010101" />
        </svg>
        <svg viewBox="0 0 139 250" fill="none" className="hero-banner__chevron">
          <path d="M0 0 L139 125 L0 250 Z" fill="#010101" />
        </svg>
      </div>

      {/* Chevron decorations – right */}
      <div className="hero-banner__chevrons hero-banner__chevrons--right" aria-hidden>
        <svg viewBox="0 0 145 250" fill="none" className="hero-banner__chevron">
          <path d="M145 0 L0 125 L145 250 Z" fill="#010101" />
        </svg>
        <svg viewBox="0 0 141 250" fill="none" className="hero-banner__chevron">
          <path d="M141 0 L0 125 L141 250 Z" fill="#010101" />
        </svg>
        <svg viewBox="0 0 139 250" fill="none" className="hero-banner__chevron">
          <path d="M139 0 L0 125 L139 250 Z" fill="#010101" />
        </svg>
      </div>

      {/* 3RD GEN – outlined text */}
      <h2 className="hero-banner__badge">3RD GEN</h2>

      {/* Train Hard See Results. – gradient with HARD in red */}
      <h1 className="hero-banner__headline">
        <span className="hero-banner__line1">
          TRAIN <span className="hero-banner__accent">HARD</span> SEE RESULTS.
        </span>
        <span className="hero-banner__line2">LIVE STRONG.</span>
      </h1>

      {/* Copy + CTA – centered */}
      <div className="hero-banner__copy">
        <p className="hero-banner__paragraph">
          Premium training plans, certified experts & a community built for success, start your fitness transformation today.
        </p>
        <a href="#contact" className="hero-get-started-btn hero-banner__cta">
          Get Started
          <span className="hero-banner__cta-arrow" aria-hidden>&gt;</span>
        </a>
      </div>
    </section>
  );
}
