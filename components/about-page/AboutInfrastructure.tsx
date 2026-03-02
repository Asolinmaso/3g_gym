'use client';

import Image from 'next/image';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';

export default function AboutInfrastructure() {
  return (
    <section className="about-infra">
      <AnimateOnScroll className="about-infra__layout">
        <div className="about-infra__left">
          <div className="about-infra__subtitle-wrap">
            <span className="about-infra__subtitle">INFRASTRUCTURE</span>
            <span className="about-infra__line" aria-hidden />
          </div>
          <h2 className="about-infra__heading">
            Explore <span className="about-infra__heading-accent">Our Gym Space</span>
          </h2>
          <p className="about-infra__text">
            From strength to fat loss, our expert-led programs help you train smarter and achieve real results at any fitness level.
          </p>
          <div className="about-infra__icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="about-infra__icon" aria-label="Facebook">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="currentColor"/></svg>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="about-infra__icon" aria-label="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="currentColor"/></svg>
            </a>
            <a href="https://www.instagram.com/3rdgenerationfitnessstudio?igsh=MnF4M3cxdTJmdXZ5&utm_source=qr" target="_blank" rel="noopener noreferrer" className="about-infra__icon" aria-label="Instagram">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Red filled rounded square background */}
              <rect x="2" y="2" width="20" height="20" rx="6" fill="#C50D3E" />

              {/* White outlined circle (ring) */}
              <circle cx="12" cy="12" r="3.8" fill="none" stroke="#FFFFFF" strokeWidth="2" />

              {/* White dot */}
              <circle cx="17" cy="7" r="1.5" fill="#FFFFFF" />
            </svg>
            </a>
              
          </div>
        </div>
        
      <div className="about-infra__right">

          <div className="about-infra__image-wrap">

            <Image src="/images/about_page/about_infrastructure.png" alt="Gym space" fill className="about-infra__image" sizes="748px" />

          </div>

          <div className="about-infra__red-bar" />    

        </div>
      </AnimateOnScroll>
    </section>
  );
}
