import Image from "next/image";
import "./about.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="content-inner">
        <div className="about-layout">
          {/* Left column: label, headline, small image + paragraph, button */}
          <div className="about-left">
            <div className="about-label-wrap">
              <span className="about-label-line" aria-hidden />
              <span className="about-label">ABOUT US</span>
              <span className="about-label-line" aria-hidden />
            </div>

            <h2 className="about-heading">
              <span className="about-heading__line">More Than a <span className="about-heading__accent">Gym </span>.</span>
              <span className="about-heading__line">A Place to <span className="about-heading__accent">Transform</span>.</span>
            </h2>

            <div className="about-content-row">
              <div className="about-image-small-wrap">
                <Image
                  src="/about_us/small_image.png"
                  alt="Athlete training"
                  fill
                  className="about-image-small"
                  sizes="302px"
                />
              </div>
              <div className="about-content-text">
                <p className="about-desc">
                  We are a results-driven fitness community built to help you
                  become stronger, healthier, and more confident. Our programs are
                  designed by certified experts and backed by proven training
                  methods that deliver real, lasting results.
                </p>
                <a href="/about" className="about-cta">
                  Know More
                  <span className="about-cta-arrow" aria-hidden>
                    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L8 8L1 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right column: large image */}
          <div className="about-image-big-wrap">
            <Image
              src="/about_us/big_image.png"
              alt="Athlete with macebell"
              fill
              className="about-image-big"
              sizes="(max-width: 1023px) 100vw, 503px"
            />
          </div>
        </div>
        
      </div>
      {/* Bottom Stats Image */}
        {/* ===== Stats Section ===== */}
<div className="about-stats-section">
  <Image
    src="/images/home_page/Plain-stat-strip.png"
    alt="Statistics background"
    fill
    priority
    className="about-stats-bg"
  />
  <div className="mobile-bars mobile-bars-top">
    <div className="bar thick" />
    <div className="bar thin" />
  </div>

  <div className="about-stats-content">
    {[
      { number: "1000+", label: "People Trained" },
      { number: "09+", label: "Years Experience" },
      { number: "100+", label: "Lives Transformed" },
      { number: "10+", label: "Awards & Achievements" },
    ].map((stat, index) => (
      <div key={index} className="stat-item">
        <h3 className="stat-number">{stat.number}</h3>
        <p className="stat-label">{stat.label}</p>
      </div>
    ))}
  </div>
  <div className="mobile-bars mobile-bars-bottom">
    <div className="bar thick" />
    <div className="bar thin" />
  </div>
</div>
      
    </section>
  );
}
