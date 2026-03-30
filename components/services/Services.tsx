'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';

/* All 9 services – horizontal scroll order per Figma */
const SERVICES = [
  { id: 'weight-gain', title: 'Weight Gain Program', image: '/services/weight_gain.png' },
  { id: 'group', title: 'Group Classes', image: '/services/group_class.png' },
  { id: 'strength', title: 'Strength training', image: '/services/strength_home.png' },
  { id: 'weight-loss', title: 'Weight Loss Program', image: '/services/weight_loss_home.png' },
  { id: 'functional', title: 'Functional Training', image: '/services/functional_training.png' },
  { id: 'personal', title: 'Personal Training', image: '/services/personel_train.png' },
  { id: 'contest', title: 'Contest Preparation', image: '/services/contest.png' },
  { id: 'nutrition', title: 'Nutrition Guidance', image: '/services/nutrition.png' },
  { id: 'zumba', title: 'Zumba Classes', image: '/services/zumba.png' },
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="content-inner">
        {/* Header: SERVICES label + heading | description + Know More */}
        <AnimateOnScroll className="services-header">
          <div className="services-header__left">
            <div className="services-label-wrap">
              <span className="services-label-line" aria-hidden />
              <span className="services-label">SERVICES</span>
              <span className="services-label-line" aria-hidden />
            </div>
            <h2 className="services-heading">
              Programs Designed to <span style={{ color: "#c50d3e" }}>Transform You</span>
            </h2>
          </div>
          <div className="services-header__right">
            <p className="services-desc">
              From strength to fat loss, our expert-led programs help you train
              smarter and achieve real results at any fitness level.
            </p>
            <a href="/services" className="btn-pill btn--red">
              Know More
              <span className="btn-pill__arrow" aria-hidden>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>
        </AnimateOnScroll>
      </div>

      {/* White curved card area – auto-scrolling marquee strip */}
      <AnimateOnScroll>
        <div className="services-cards-wrap">
          <div className="services-curve services-curve--top" aria-hidden />
          <div className="services-curve services-curve--bottom" aria-hidden />
          <div className="services-cards-inner">
            <div className="services-scroll-wrap" role="region" aria-label="Services carousel">
              <div className="services-marquee-track">
                <div className="services-grid services-grid--scroll">
                  {SERVICES.map((service) => (
                    <Link key={service.title} href={`/services#${service.id}`} className="services-card">
                      <div className="services-card__image-wrap">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="services-card__image"
                          sizes="357px"
                        />
                        <div className="services-card__overlay" aria-hidden />
                      </div>
                      <h3 className="services-card__title">{service.title}</h3>
                    </Link>
                  ))}
                </div>
                {/* Duplicate for seamless infinite loop */}
                <div className="services-grid services-grid--scroll" aria-hidden>
                  {SERVICES.map((service) => (
                    <Link key={`dup-${service.title}`} href={`/services#${service.id}`} className="services-card">
                      <div className="services-card__image-wrap">
                        <Image
                          src={service.image}
                          alt=""
                          fill
                          className="services-card__image"
                          sizes="357px"
                        />
                        <div className="services-card__overlay" aria-hidden />
                      </div>
                      <h3 className="services-card__title">{service.title}</h3>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
