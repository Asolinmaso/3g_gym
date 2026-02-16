'use client';

import { useState } from 'react';

const FEATURES = ['Steam bath - free', 'Diet chart - free', 'Workout plan - free'];

function PlanCard({
  title,
  priceLines,
  sessions,
  highlighted,
}: {
  title: string;
  priceLines: string[];
  sessions?: string;
  highlighted?: boolean;
}) {
  return (
    <div className={`pricing-card ${highlighted ? 'pricing-card--highlight' : ''}`}>
      {highlighted && (
        <>
          <div className="pricing-card__chevrons pricing-card__chevrons--tl" aria-hidden>
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
              <path d="M1 1L7 7L13 1" stroke="rgba(197, 13, 62, 0.25)" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <svg width="13" height="8" viewBox="0 0 13 8" fill="none">
              <path d="M1 1L6.5 7L12 1" stroke="rgba(197, 13, 62, 0.25)" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <svg width="13" height="8" viewBox="0 0 13 8" fill="none">
              <path d="M1 1L6.5 7L12 1" stroke="rgba(197, 13, 62, 0.25)" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div className="pricing-card__chevrons pricing-card__chevrons--br" aria-hidden>
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
              <path d="M13 7L7 1L1 7" stroke="rgba(197, 13, 62, 0.25)" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <svg width="13" height="8" viewBox="0 0 13 8" fill="none">
              <path d="M12 7L6.5 1L1 7" stroke="rgba(197, 13, 62, 0.25)" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <svg width="13" height="8" viewBox="0 0 13 8" fill="none">
              <path d="M12 7L6.5 1L1 7" stroke="rgba(197, 13, 62, 0.25)" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </>
      )}
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
              <path fill="rgba(255, 255, 255, 0.9)" d="M20 7h-2.5V5.5a1.5 1.5 0 0 0-3 0V7h-5V5.5a1.5 1.5 0 0 0-3 0V7H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2.5v5.5a1.5 1.5 0 0 0 3 0V13h5v5.5a1.5 1.5 0 0 0 3 0V13H20a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z" />
            </svg>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a href="#contact" className="pricing-card__cta">
        Join Now
        <span className="pricing-card__cta-arrow" aria-hidden>&gt;</span>
      </a>
    </div>
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
        <h2 className="pricing-title">
          Choose the <span className="pricing-title__accent">Plan</span> That Fits Your <span className="pricing-title__accent">Goals</span>
        </h2>

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

        <div className={`pricing-grid ${gridClass}`}>
          {plans.map((plan) => (
            <PlanCard
              key={plan.title + plan.priceLines[0] + ((plan as { sessions?: string }).sessions ?? '')}
              title={plan.title}
              priceLines={plan.priceLines}
              sessions={(plan as { sessions?: string }).sessions}
              highlighted={plan.highlighted}
            />
          ))}
        </div>

        <div className="pricing-note">
          <span>Personal Training & other add-ons are not included.</span>
          <span>Student price applicable only with valid ID.</span>
          <span>Terms & conditions apply.</span>
        </div>
      </div>
    </section>
  );
}
