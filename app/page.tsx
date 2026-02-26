'use client';
import Image from "next/image";
import { useSlideUpOnScroll } from "@/hooks/useSlideUpOnScroll";
import {
  About,
  Commitment,
  CTA,
  Hero,
  Marquee,
  Pricing,
  Results,
  Services,
  Testimonials,
} from "@/features/home";
import "./page.css";

export default function Home() {
  const equipmentRef = useSlideUpOnScroll<HTMLElement>();
  
  return (
    <main className="min-h-screen flex-1">
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Results />
      <Testimonials />
      <Pricing />
      <Commitment />
      <CTA />
      <section className="footer-equipment" ref={equipmentRef}>
        <Image
          src="/footer_image2.png"
          alt="Gym Equipment"
          width={300}
          height={400}
          className="footer-equipment-img"
        />
      </section>
    </main>
  );
}
