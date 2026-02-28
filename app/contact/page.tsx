import Image from "next/image";
import { ContactHero, ContactSection } from "@/features/contact";
import "./page.css";

export default function ContactPage() {
  return (
    <main className="contact-page flex-1">
      <ContactHero />
      <ContactSection />
      <section className="footer-equipment">
        <Image
          src="/footer_image.png"
          alt="Gym Equipment"
          width={300}
          height={400}
          className="footer-equipment-img"
        />
      </section>
    </main>
  );
}
