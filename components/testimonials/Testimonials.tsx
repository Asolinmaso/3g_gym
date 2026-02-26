'use client';

import { useState } from 'react';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';

const TESTIMONIALS = [
  {
    text: 'This is an excellent facility for workouts, equipped with first-class equipment and supported by highly trained trainers who motivate and guide us towards achieving our goals. A special thanks to Mr. Praveen for offering such a gym at a reasonable price.',
    author: 'Agilesh GS',
    role: 'Member, 3G Gym',
  },
  {
    text: 'The gym is clean, well-organized, and equipped with everything you need for effective training. The trainers are knowledgeable, supportive, and always focused on proper form and real progress.',
    author: 'Arjun M.',
    role: 'Fitness Enthusiast',
  },
  {
    text: '3G Gym transformed my fitness journey. The community is amazing, the equipment is top-notch, and the trainers push you to be your best. Highly recommend!',
    author: 'Priya S.',
    role: 'Member, 3G Gym',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goPrev = () => setActiveIndex((i) => (i === 0 ? TESTIMONIALS.length - 1 : i - 1));
  const goNext = () => setActiveIndex((i) => (i === TESTIMONIALS.length - 1 ? 0 : i + 1));

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="content-inner testimonials-inner">
        <AnimateOnScroll>
        <div className="testimonials-subtitle-wrap">
          <span className="testimonials-subtitle-line testimonials-subtitle-line--left" aria-hidden />
          <h2 className="testimonials-subtitle">What Our Members Say</h2>
          <span className="testimonials-subtitle-line testimonials-subtitle-line--right" aria-hidden />
        </div>

        <h3 className="testimonials-heading">
          <span>Real </span><span className="testimonials-heading--red">Stories. </span><span>Honest </span><span className="testimonials-heading--red">Results.</span>
        </h3>
        </AnimateOnScroll>

        {/* Carousel – Loom-style blockquote layout */}
        <div className="testimonials-carousel" style={{ '--carousel-index': activeIndex } as React.CSSProperties}>
          <div className="testimonials-carousel__track">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className={`testimonials-carousel__card ${i === activeIndex ? 'testimonials-carousel__card--active' : ''}`}
              >
                <blockquote className="testimonials-carousel__card-inner">
                  <span className="testimonials-quote-mark" aria-hidden>&ldquo;</span>
                  <p className="testimonials-text">{t.text}</p>
                  <footer className="testimonials-attribution">
                    <cite className="testimonials-author">{t.author}</cite>
                    {t.role && <span className="testimonials-role">{t.role}</span>}
                  </footer>
                </blockquote>
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
