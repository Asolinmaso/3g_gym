'use client';

import Image from 'next/image';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';

export default function AboutFounder() {
  return (
    <section className="about-founder">
      <AnimateOnScroll className="about-founder__inner">
        <div className="about-founder__image-wrap">
          <Image
            src="/images/about_page/about_leadership.png"
            alt="Founder"
            fill
            className="about-founder__image"
            sizes="(max-width: 1023px) 100vw, 648px"
            priority={false}
          />
          <div className="about-founder__red-box">
            <div className="about-founder__red-box-inner">
              <h3 className="about-founder__name">Mr. Raja Prabin</h3>
              <p className="about-founder__title">Founder Of 3rd Gen</p>
            </div>
          </div>
        </div>
        <div className="about-founder__content">
          <div className="about-founder__deco" aria-hidden />
          <div className="about-founder__subtitle-wrap">
            <span className="about-founder__subtitle">LEADERSHIP THAT INSPIRES</span>
            <span className="about-founder__line" aria-hidden />
          </div>
          <h2 className="about-founder__heading">Meet The <span className="about-founder__heading-accent">Founder</span></h2>
          <p className="about-founder__text">
            With a deep commitment to health and discipline, the founder established this gym to deliver professional training, modern facilities, and a positive fitness culture. Every decision is guided by the goal of helping members achieve lasting results.
          </p>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
