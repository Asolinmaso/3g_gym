'use client';

import { useState } from 'react';

const TESTIMONIALS = [
  {
    text: 'This is an excellent facility for workouts, equipped with first-class equipment and supported by highly trained trainers who motivate and guide us towards achieving our goals. A special thanks to Mr. Praveen for offering such a gym at a reasonable price.',
    author: 'Agilesh GS',
  },
  {
    text: 'The gym is clean, well-organized, and equipped with everything you need for effective training. The trainers are knowledgeable, supportive, and always focused on proper form and real progress.',
    author: 'Arjun M.',
  },
  {
    text: '3G Gym transformed my fitness journey. The community is amazing, the equipment is top-notch, and the trainers push you to be your best. Highly recommend!',
    author: 'Priya S.',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goPrev = () => setActiveIndex((i) => (i === 0 ? TESTIMONIALS.length - 1 : i - 1));
  const goNext = () => setActiveIndex((i) => (i === TESTIMONIALS.length - 1 ? 0 : i + 1));

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="content-inner testimonials-inner">
        <div className="testimonials-subtitle-wrap">
          <span className="testimonials-subtitle-line testimonials-subtitle-line--left" aria-hidden />
          <h2 className="testimonials-subtitle">What Our Members Say</h2>
          <span className="testimonials-subtitle-line testimonials-subtitle-line--right" aria-hidden />
        </div>

        <h3 className="testimonials-heading">
          <span>Real </span><span className="testimonials-heading--red">Stories. </span><span>Honest </span><span className="testimonials-heading--red">Results.</span>
        </h3>

        {/* Carousel with side peek effect */}
        <div className="testimonials-carousel" style={{ '--carousel-index': activeIndex } as React.CSSProperties}>
         
          <div className="testimonials-carousel__track">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className={`testimonials-carousel__card ${i === activeIndex ? 'testimonials-carousel__card--active' : ''}`}
              >
                <div className="testimonials-carousel__card-inner">
                <svg width="50" height="40" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.24189 5.73C7.74828 1.9275 13.0541 0 20.0094 0H22.5086V7.0475L20.4993 7.45C17.0753 8.135 14.6936 9.4825 13.419 11.46C12.7537 12.5252 12.3765 13.7451 12.3243 15H20.0094C20.6723 15 21.3079 15.2634 21.7766 15.7322C22.2453 16.2011 22.5086 16.837 22.5086 17.5V35C22.5086 37.7575 20.2668 40 17.5102 40H2.51493C1.8521 40 1.21641 39.7366 0.747717 39.2678C0.279024 38.7989 0.0157146 38.163 0.0157146 37.5V25L0.0232123 17.7025C0.000719404 17.425 -0.474131 10.85 4.24189 5.73ZM45.0016 40H30.0063C29.3435 40 28.7078 39.7366 28.2391 39.2678C27.7704 38.7989 27.5071 38.163 27.5071 37.5V25L27.5146 17.7025C27.4921 17.425 27.0172 10.85 31.7332 5.73C35.2396 1.9275 40.5455 0 47.5008 0H50V7.0475L47.9906 7.45C44.5667 8.135 42.185 9.4825 40.9104 11.46C40.2451 12.5252 39.8679 13.7451 39.8157 15H47.5008C48.1636 15 48.7993 15.2634 49.268 15.7322C49.7367 16.2011 50 16.837 50 17.5V35C50 37.7575 47.7582 40 45.0016 40Z" fill="#C50D3E"/>
</svg>

                  <p className="testimonials-text">{t.text}</p>
                  <p className="testimonials-attribution">{t.author}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonials-nav">
            <button type="button" className="testimonials-nav-btn" onClick={goPrev} aria-label="Previous testimonial">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button type="button" className="testimonials-nav-btn" onClick={goNext} aria-label="Next testimonial">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
