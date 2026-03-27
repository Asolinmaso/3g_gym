'use client';

import Image from 'next/image';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';

const CARDS = [
  { title: 'OUR VISION', text: 'We aim to create a community where every individual is empowered to become stronger, healthier, and more confident inside and out.', image: '/images/about_page/about_vision.png' },
  { title: 'OUR MISSION', text: 'Our mission is to provide expert guidance, personalized training, and a motivating environment that helps you achieve your fitness goals faster and sustainably.', image: '/images/about_page/about_mission.png', highlight: true },
  { title: 'OUR VALUE', text: 'We believe in dedication, integrity, and supporting every member’s journey with the right mindset, tools, and encouragement.', image: '/images/about_page/about_value.png' },
];

export default function AboutVisionMission() {
  return (
    <section className="about-vm">
      <div className="about-vm__bg" aria-hidden />
      <div className="about-vm__blur about-vm__blur--1" aria-hidden />
      <div className="about-vm__blur about-vm__blur--2" aria-hidden />
      <div className="about-vm__blur about-vm__blur--3" aria-hidden />
      <div className="content-inner about-vm__inner">
        <AnimateOnScroll>
          <div className="about-vm__grid">
            {CARDS.map((card) => (
              <div key={card.title} className={`about-vm__card ${card.highlight ? 'about-vm__card--highlight' : ''}`}>
                <div className="about-vm__icon-wrap">
                  <Image src={card.image} alt="" fill className="about-vm__card-image" sizes="92px" />
                </div>
                <h3 className="about-vm__title">{card.title}</h3>
                <p className="about-vm__text">{card.text}</p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.2}>
          <p className="about-vm__watermark" aria-hidden>Professional Fitness</p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
