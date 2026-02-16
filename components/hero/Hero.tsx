export default function Hero() {
  return (
    <section id="home" className="hero-banner-section" aria-label="Hero banner">
      {/* Ellipse blurs */}
      <div className="hero-banner__blur hero-banner__blur--left" aria-hidden />
      <div
        className="hero-banner__blur hero-banner__blur--right-top"
        aria-hidden
      />
      <div
        className="hero-banner__blur hero-banner__blur--center"
        aria-hidden
      />
      <div
        className="hero-banner__blur hero-banner__blur--right-bottom"
        aria-hidden
      />

      {/* Chevron decorations – left */}
      <div
        className="hero-banner__chevrons hero-banner__chevrons--left"
        aria-hidden
      >
        <svg
          width="250"
          height="345"
          viewBox="0 0 250 345"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: "rotate(270deg)" }}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M138.887 139.235L250 27.843L222.227 0L125 97.4702L27.7734 0L0 27.843L111.113 139.235C114.797 142.926 119.792 145 125 145C130.208 145 135.203 142.926 138.887 139.235Z"
            fill="#010101"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M138.887 240.394L250 132.075L222.227 105L125 199.781L27.7734 105L0 132.075L111.113 240.394C114.797 243.983 119.792 246 125 246C130.208 246 135.203 243.983 138.887 240.394Z"
            fill="#010101"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M138.887 339.473L250 232.691L222.227 206L125 299.437L27.7734 206L0 232.691L111.113 339.473C114.797 343.012 119.792 345 125 345C130.208 345 135.203 343.012 138.887 339.473Z"
            fill="#010101"
          />
        </svg>
      </div>

      {/* Chevron decorations – right */}
      <div
        className="hero-banner__chevrons hero-banner__chevrons--right"
        aria-hidden
      >
        <svg
          width="250"
          height="345"
          viewBox="0 0 250 345"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: "rotate(270deg)" }}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M138.887 139.235L250 27.843L222.227 0L125 97.4702L27.7734 0L0 27.843L111.113 139.235C114.797 142.926 119.792 145 125 145C130.208 145 135.203 142.926 138.887 139.235Z"
            fill="#010101"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M138.887 240.394L250 132.075L222.227 105L125 199.781L27.7734 105L0 132.075L111.113 240.394C114.797 243.983 119.792 246 125 246C130.208 246 135.203 243.983 138.887 240.394Z"
            fill="#010101"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M138.887 339.473L250 232.691L222.227 206L125 299.437L27.7734 206L0 232.691L111.113 339.473C114.797 343.012 119.792 345 125 345C130.208 345 135.203 343.012 138.887 339.473Z"
            fill="#010101"
          />
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
          Premium training plans, certified experts & a community built for
          success, start your fitness transformation today.
        </p>
        <a href="#contact" className="hero-get-started-btn hero-banner__cta">
          Get Started
          <span className="hero-banner__cta-arrow" aria-hidden>
            &gt;
          </span>
        </a>
      </div>
    </section>
  );
}
