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
         <div className="services-faq__icon-wrap" aria-hidden>
          <svg width="120" height="120" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="10" width="38" height="30" rx="6" fill="#C50D3E"/>
            <text x="10" y="31" fontSize="16" fontWeight="bold" fill="white">Q</text>
            <rect x="20" y="0" width="38" height="30" rx="6" fill="#C50D3E"/>
            <text x="30" y="21" fontSize="16" fontWeight="bold" fill="white">A</text>
          </svg>
        </div>
        <h2 className="services-faq__title">
          Frequently Asked <span style={{ color: '#C50D3E' }}>Questions</span>
        </h2>
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
                    {isOpen ? (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M1 10l6-6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M1 4l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    )}
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
        <p className="services-faq__bottom-text">
          Still have questions? Contact us and we&apos;ll be happy to help.
        </p>
        <a href="/contact" className="services-faq__contact-btn">
          Contact Us <span aria-hidden>&gt;</span>
        </a>
      </div>
      
    </section>
  );
}
