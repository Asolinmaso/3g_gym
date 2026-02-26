'use client';
import { useSlideUpOnScroll } from "@/hooks/useSlideUpOnScroll";
import Image from "next/image";
import { ContactHero, ContactSection } from "@/features/contact";
import "./page.css";

export default function ContactPage() {
  const equipmentRef = useSlideUpOnScroll<HTMLElement>();
  return (
    <main className="contact-page flex-1">
      <ContactHero />
      <ContactSection />
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
