import Image from 'next/image';

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
              More Than a Gym. A Place to Transform.
            </h2>

            <div className="about-content-row">
              <div className="about-image-small-wrap">
                <Image
                  src="/about_us/small_image.png"
                  alt="Athlete training"
                  fill
                  className="about-image-small"
                  sizes="292px"
                />
              </div>
              <p className="about-desc">
                We are a results-driven fitness community built to help you
                become stronger, healthier, and more confident. Our programs are
                designed by certified experts and backed by proven training
                methods that deliver real, lasting results.
              </p>
            </div>

            <a href="#services" className="about-cta">
              <span>Know More</span>
              <span className="about-cta-arrows" aria-hidden>
                &gt;&gt;&gt;
              </span>
            </a>
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
    </section>
  );
}
