'use client';

import Image from "next/image";
import Link from "next/link";
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';

export default function CTA() {
  return (
    <section id="contact" className="cta-section">
      <div className="cta-inner">
        <AnimateOnScroll className="cta-banner">
          <h2 className="cta-heading">Start Your Fitness Journey <span style={{color:"#ffffff"}}>Today</span>.</h2>
          <p className="cta-desc">
            Train with expert coaches, modern equipment, and programs designed
            to deliver real results.
          </p>
          <Link href="/contact" className="cta-btn">
            Know More
            <span className="cta-btn-arrow" aria-hidden>
              <svg width="9" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L8 8L1 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </span>
          </Link>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.2} className="cta-image">
          <Image
            src="/home/homeService.png"
            alt="Fitness training"
            fill
            className="cta-img"
            sizes="(max-width: 1023px) 100vw, 701px"
          />
        </AnimateOnScroll>
      </div>
    </section>
  );
}
