import Image from 'next/image';

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      {/* Decorative red triangles – left */}
      <div className="testimonials-decor" aria-hidden>
        <svg width="161" height="169" viewBox="0 0 161 169" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 169L76 86.5L161 0H0V169Z" fill="#C50D3E" />
          <path d="M152.817 77.8877L117.744 114.779L81.0087 156L79.8259 79.009L152.817 77.8877Z" fill="#C50D3E" />
        </svg>
      </div>

      <div className="content-inner testimonials-inner">
        {/* Frame 1321314809 – What Our Members Say + Vector 1 & 2 */}
        <div className="testimonials-subtitle-wrap">
          <span className="testimonials-subtitle-line testimonials-subtitle-line--left" aria-hidden />
          <h2 className="testimonials-subtitle">What Our Members Say</h2>
          <span className="testimonials-subtitle-line testimonials-subtitle-line--right" aria-hidden />
        </div>

        {/* Real Stories. Honest Results. */}
        <h3 className="testimonials-heading">Real Stories. Honest Results.</h3>

        <div className="testimonials-layout">
          {/* Left: member photo with red L-border */}
          <div className="testimonials-image-wrap">
            <Image
              src="/about_us/small_image.png"
              alt="Arjun M. - Group Training Program"
              fill
              className="testimonials-image"
              sizes="(max-width: 1023px) 100vw, 373px"
            />
          </div>

          {/* Right: quote + text + attribution + nav */}
          <div className="testimonials-content">
            <div className="testimonials-quote-block">
              <span className="testimonials-quote-mark" aria-hidden>"</span>
              <p className="testimonials-text">
                The gym is clean, well-organized, and equipped with everything
                you need for effective training. The trainers are knowledgeable,
                supportive, and always focused on proper form and real progress.
                Every workout feels structured, motivating, and results-driven.
              </p>
              <p className="testimonials-attribution">
                — Arjun M.
              </p>
              <p className="testimonials-program">Group Training Program</p>
            </div>
            <div className="testimonials-nav">
              <button
                type="button"
                className="testimonials-nav-btn"
                aria-label="Previous testimonial"
              >
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="testimonials-nav-svg">
                  <rect width="52" height="52" rx="26" fill="#C50D3E" />
                  <path d="M34.0626 26H17.9386M17.9386 26L23.9851 34M17.9386 26L23.9851 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                className="testimonials-nav-btn"
                aria-label="Next testimonial"
              >
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="testimonials-nav-svg">
                  <rect width="52" height="52" rx="26" fill="#C50D3E" />
                  <path d="M17.9386 26H34.0626M34.0626 26L28.0161 18M34.0626 26L28.0161 34" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
