'use client';
import { useSlideUpOnScroll } from "@/hooks/useSlideUpOnScroll";
import Image from "next/image";
import {
  AboutFounder,
  AboutGeneration,
  AboutHero,
  AboutInfrastructure,
  AboutVisionMission,
  AboutWhyChoose,
} from "@/features/about";

export default function AboutPage() {
  const equipmentRef = useSlideUpOnScroll<HTMLElement>();
  return (
    <main className="about-page flex-1" style={{ background: "#FDFDFD" }}>
      <AboutHero />
      <AboutGeneration />
      <AboutVisionMission />
      <AboutFounder />
      <AboutWhyChoose />
      <AboutInfrastructure />
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
