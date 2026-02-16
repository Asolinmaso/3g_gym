'use client';

import { useState } from 'react';

const FAQ_ITEMS = [
  {
    id: 'trial',
    question: 'Do you offer a free trial or demo session?',
    answer:
      'Yes. We offer a free trial session so you can experience our training environment before joining.',
  },
  {
    id: 'days',
    question: 'How many days per week should I work out?',
    answer: 'It depends on your goals and schedule. We recommend 3–5 days for most members.',
  },
  {
    id: 'women',
    question: 'Is there a separate program for women?',
    answer: 'We have programs suited for everyone; some classes are women-focused.',
  },
  {
    id: 'signup',
    question: 'How can I enquire or sign up?',
    answer: 'Visit our Contact page, call us, or drop in for a free trial session.',
  },
  {
    id: 'first-day',
    question: 'What should I bring on my first day?',
    answer: 'Comfortable workout clothes, water, and a towel. We provide everything else.',
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('trial');

  return (
    <section className="services-faq">
      <div className="content-inner services-faq__inner">
        <h2 className="services-faq__title">Frequently Asked Questions</h2>
        <div className="services-faq__list">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`services-faq__item ${isOpen ? 'services-faq__item--open' : ''}`}
              >
                <button
                  type="button"
                  className="services-faq__question"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  id={`faq-question-${item.id}`}
                >
                  <span>{item.question}</span>
                  <span className="services-faq__chevron" aria-hidden>
                    <svg width="12" height="22" viewBox="0 0 12 22" fill="currentColor">
                      <path d="M1 1l10 10L1 21" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-answer-${item.id}`}
                  className="services-faq__answer-wrap"
                  role="region"
                  aria-labelledby={`faq-question-${item.id}`}
                  hidden={!isOpen}
                >
                  <p className="services-faq__answer">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
