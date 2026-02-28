'use client';
import { CareerApply, CareerHero, OpenPositions } from "@/features/career";
import Image from "next/image";
import { useSlideUpOnScroll } from "@/hooks/useSlideUpOnScroll";

export default function CareerPage() {
   const equipmentRef = useSlideUpOnScroll<HTMLElement>();
  return (
    <main className="career-page flex-1">
      <CareerHero />
      <OpenPositions />
      <CareerApply />
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
