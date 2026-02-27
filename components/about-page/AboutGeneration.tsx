'use client';

import Image from 'next/image';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';

const PINK_CARDS = [
  { label: 'Modern Facilities', icon: true },
  { label: 'Expert Team', icon: true },
  { label: 'Diverse Offering', icon: true },
  { label: 'Fitness Focus', icon: true },
];

export default function AboutGeneration() {
  return (
    <section className="about-gen">
      <div className="content-inner about-gen__inner">
        <AnimateOnScroll>
        <div className="about-gen__layout">
          <div className="about-gen__image-wrap">
            <Image
              src="/images/about_page/about_generation.jpg"
              alt="Fitness training"
              fill
              className="about-gen__image"
              sizes="(max-width: 1023px) 100vw, 500px"
            />
            <div className="about-gen__card">
              <span className="about-gen__card-num">09+</span>
              <span className="about-gen__card-label">
                <span className="about-gen__card-label-line1">Years Of</span>
                <span className="about-gen__card-label-line2">Fitness Experience</span>
              </span>
            </div>
          </div>
          <div className="about-gen__right">
            <div className="about-gen__subtitle-wrap">
              <span className="about-gen__line" aria-hidden />
              <span className="about-gen__subtitle">ABOUT 3RD GENERATION</span>
            </div>
            <h3 className="about-gen__heading">
              <span className="about-gen__heading-line">Always Provide Best</span>
              <span className="about-gen__heading-accent"> Fitness Trainers.</span>
            </h3>
            <p className="about-gen__text">
              With over 9 years of experience, 3rd Gen Fitness delivers expert training designed to transform your strength, endurance, and confidence. Our certified trainers combine modern techniques with personalized programs to help you achieve real, lasting results in a motivating environment.
            </p>
            <div className="about-gen__pink-grid">
              {PINK_CARDS.map((item) => (
                <div key={item.label} className="about-gen__pink-card">
                  <span className="about-gen__pink-icon" aria-hidden>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                      <circle cx="13" cy="13" r="12" fill="#C50D3E" />
                      <path d="M8 13l3 3 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </span>
                  <span className="about-gen__pink-label">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
