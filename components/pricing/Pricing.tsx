'use client';

import { useState } from 'react';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';

const FEATURES = ['Steam bath - free', 'Diet chart - free', 'Workout plan - free'];

function PlanCard({
  title,
  priceLines,
  sessions,
}: {
  title: string;
  priceLines: string[];
  sessions?: string;
}) {
  return (
    <a href="#contact" className="pricing-card">
      <h3 className="pricing-card__title">{title}</h3>
      <div className="pricing-card__prices">
        {priceLines.map((line) => (
          <p key={line} className="pricing-card__price">
            {line}
          </p>
        ))}
        {sessions && <p className="pricing-card__price pricing-card__price--sessions">{sessions}</p>}
      </div>
      <ul className="pricing-card__features">
        {FEATURES.map((f) => (
          <li key={f} className="pricing-card__feature">
            <svg className="pricing-card__icon" width="24" height="24" viewBox="0 0 24 24" aria-hidden>
              <path d="M20.57 14.86L22 13.43L20.57 12L17 15.57L8.43 7L12 3.43L10.57 2L9.14 3.43L7.71 2L5.57 4.14L4.14 2.71L2.71 4.14L4.14 5.57L2 7.71L3.43 9.14L2 10.57L3.43 12L7 8.43L15.57 17L12 20.57L13.43 22L14.86 20.57L16.29 22L18.43 19.86L19.86 21.29L21.29 19.86L19.86 18.43L22 16.29L20.57 14.86Z" fill="white" fillOpacity="0.9" />
            </svg>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <span className="pricing-card__cta">
        Join Now
        <span className="pricing-card__cta-arrow" aria-hidden>&gt;</span>
      </span>
    </a>
  );
}

const TABS = [
  { id: 'general', label: 'General Training' },
  { id: 'personal', label: 'Personal Training' },
  { id: 'body', label: 'Body Transformation' },
] as const;

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<'general' | 'personal' | 'body'>('general');

  const generalPlans = [
    { title: 'Monthly Plan', priceLines: ['Rs. 1,499 (Regular)', 'Rs. 999 (Student)'], highlighted: false },
    { title: '3 Month Plan', priceLines: ['Rs. 4,499 (Regular)', 'Rs. 2,499 (Student)'], highlighted: false },
    { title: '6 Month Plan', priceLines: ['Rs. 7,999 (Regular)', 'Rs. 4,999 (Student)'], highlighted: true },
    { title: 'Annual Plan', priceLines: ['Rs. 9,999 (Regular)', 'Rs. 7,999 (Student)'], highlighted: false },
  ];

  const personalPlans = [
    { title: 'Monthly Plan', priceLines: ['Rs. 5,000'], sessions: '12 Sessions', highlighted: false },
    { title: 'Monthly Plan', priceLines: ['Rs. 8,000'], sessions: '16 Sessions', highlighted: false },
    { title: 'Monthly Plan', priceLines: ['Rs. 10,000'], sessions: '24 Sessions', highlighted: true },
  ];

  const bodyPlans = [
    { title: '90 Days Plan', priceLines: ['Rs. 20,000'], highlighted: false },
    { title: '150 Days Plan', priceLines: ['Rs. 35,000'], highlighted: true },
  ];

  const plans = activeTab === 'general' ? generalPlans : activeTab === 'personal' ? personalPlans : bodyPlans;
  const gridClass = activeTab === 'general' ? 'pricing-grid--four' : activeTab === 'personal' ? 'pricing-grid--three' : 'pricing-grid--two';

  return (
    <section id="pricing" className="pricing-section">
      <div className="content-inner">
        <AnimateOnScroll>
        <div className="pricing-title-wrap">
         
          <h2 className="pricing-title">
            <span className="pricing-title__gradient">Choose the </span>
            <span className="pricing-title__accent">Plan</span>
            <span className="pricing-title__gradient"> That Fits Your </span>
            <span className="pricing-title__accent">Goals</span>
          </h2>
        </div>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.1}>
        <div className="pricing-tabs">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`pricing-tab ${activeTab === tab.id ? 'pricing-tab--active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.2}>
        <div className={`pricing-grid ${gridClass}`}>
          {plans.map((plan) => (
            <PlanCard
              key={plan.title + plan.priceLines[0] + ((plan as { sessions?: string }).sessions ?? '')}
              title={plan.title}
              priceLines={plan.priceLines}
              sessions={(plan as { sessions?: string }).sessions}
            />
          ))}
        </div>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.3}>
        <div className="pricing-note">
          <span>Personal Training & other add-ons are not included.</span>
          <span>Student price applicable only with valid ID.</span>
          <span>Terms & conditions apply.</span>
        </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
