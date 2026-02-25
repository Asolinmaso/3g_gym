'use client';

import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';

export default function Commitment() {
  return (
    <section id="commitment" className="commitment-section">
      <AnimateOnScroll className="content-inner commitment-inner">
        <div className="commitment-label-wrap">
          <span className="commitment-label-line commitment-label-line--left" aria-hidden />
          <h2 className="commitment-label">Our Promise to You</h2>
          <span className="commitment-label-line commitment-label-line--right" aria-hidden />
        </div>

        <h3 className="commitment-heading">Our Commitment</h3>

        <p className="commitment-text">
          We are confident in delivering visible and measurable transformation. With proper
          training, discipline and diet adherence, we guarantee results.
        </p>

        <p className="commitment-motto">
          Your transformation is our responsibility!
        </p>
      </AnimateOnScroll>
    </section>
  );
}
