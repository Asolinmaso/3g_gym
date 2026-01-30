import Image from 'next/image';

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="content-inner">
        <h2 className="testimonials-section-title">
          Real Stories. <span className="text-[#C50D3E]">Honest Results.</span>
        </h2>

        <div className="testimonials-layout">
          {/* Left: image (Frame 40 / Rectangle 4) */}
          <div className="testimonials-image-wrap">
            <Image
              src="/about_us/small_image.png"
              alt="Arjun M. - Group Training Program"
              fill
              className="testimonials-image"
              sizes="(max-width: 1023px) 100vw, 373px"
            />
          </div>

          {/* Right: quote + text + attribution + nav (Frame 42 / Frame 41) */}
          <div className="testimonials-content">
            <div className="testimonials-quote-block">
              <span className="testimonials-quote-mark" aria-hidden>
                "
              </span>
              <p className="testimonials-text">
                The gym is clean, well-organized, and equipped with everything
                you need for effective training. The trainers are knowledgeable,
                supportive, and always focused on proper form and real progress.
                Every workout feels structured, motivating, and results-driven.
              </p>
              <p className="testimonials-attribution">
                — Arjun M. Group Training Program
              </p>
            </div>
            <div className="testimonials-nav">
              <button
                type="button"
                className="testimonials-nav-btn"
                aria-label="Previous testimonial"
              >
                <span className="testimonials-nav-arrow testimonials-nav-arrow--left" />
              </button>
              <button
                type="button"
                className="testimonials-nav-btn"
                aria-label="Next testimonial"
              >
                <span className="testimonials-nav-arrow testimonials-nav-arrow--right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
