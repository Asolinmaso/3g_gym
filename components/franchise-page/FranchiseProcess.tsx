'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const STEPS = [
  {
    num: 1,
    title: 'Franchise Enquiry',
    text: 'We look for partners who are passionate about fitness and committed to delivering a premium experience.',
    image: '/images/franchise_page/franchise_process1.png',
    red: true,
  },
  {
    num: 2,
    title: 'Discussion',
    text: 'Detailed presentation of the business model, financials, and expectations.',
    image: '/images/franchise_page/franchise_process2.jpg',
    red: false,
  },
  {
    num: 3,
    title: 'Location Approval',
    text: 'Site selection assistance and final approval of the gym premises.',
    image: '/images/franchise_page/franchise_process3.png',
    red: true,
  },
  {
    num: 4,
    title: 'Launch Support',
    text: 'Pre-launch marketing, staff hiring, and grand opening execution.',
    image: '/images/franchise_page/franchise_process4.png',
    red: false,
  },
];

function StickyStepCard({
  step,
  i,
  total,
  progress,
}: {
  step: (typeof STEPS)[number];
  i: number;
  total: number;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
}) {
  const start = i * (1 / total);
  const targetScale = Math.max(0.5, 1 - (total - i - 1) * 0.1);

  const scale = useTransform(progress, [start, 1], [1, targetScale]);
  const y = useTransform(progress, [start, 1], [0, -30]);

  // First card visible from start; others fade in one-by-one as you scroll into their segment
  const opacity =
    i === 0
      ? useTransform(progress, [0, 0.05], [1, 1])
      : useTransform(progress, [Math.max(0, start - 0.1), start], [0, 1]);

  return (
    <div className="franchise-process__stack-item">
      <motion.div
        className={`franchise-process__step franchise-process__step--stack ${
          step.red ? 'franchise-process__step--red' : 'franchise-process__step--black'
        }`}
        style={{
          scale,
          y,
          opacity,
          transformOrigin: 'center top',
        }}
      >
        <span className="franchise-process__step-num">{step.num}</span>
        <div className="franchise-process__step-content">
          <h3 className="franchise-process__step-title">{step.title}</h3>
          <p className="franchise-process__step-text">{step.text}</p>
        </div>
        <div className="franchise-process__step-image">
          <Image src={step.image} alt="" fill className="franchise-process__step-img" sizes="460px" />
        </div>
      </motion.div>
    </div>
  );
}

export default function FranchiseProcess() {
  const stackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section className="franchise-process">
      <div className="content-inner franchise-process__inner">
        <div className="franchise-process__subtitle-wrap">
          <span className="franchise-process__line" aria-hidden />
          <span className="franchise-process__subtitle">THE JOURNEY</span>
          <span className="franchise-process__line" aria-hidden />
        </div>
        <h2 className="franchise-process__heading">
          Franchise <span style={{ color: '#C50D3E' }}>Process</span>
        </h2>
      </div>

      <div ref={stackRef} className="franchise-process__stack">
        {STEPS.map((step, i) => (
          <StickyStepCard key={step.num} step={step} i={i} total={STEPS.length} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}
