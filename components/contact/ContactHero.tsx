import Image from "next/image";
import "./ContactHero.css";

export default function ContactHero() {
  return (
    <section className="contact-hero">

      {/* Background */}
      <div className="contact-hero-bg">
        <Image
          src="/contact/contact_bg.png"
          alt=""
          fill
          priority
          className="contact-hero-bg-image"
        />
      </div>

      {/* Huge Background Title */}
      <h1 className="contact-hero-title-bg">
        <span className="contact-hero-title-line1">CONTACT</span>
        <span className="contact-hero-title-line2">US</span>
      </h1>

      {/* Center Model */}
      <div className="contact-hero-model">
        <Image
          src="/contact/hero_con.png"
          alt="Trainer"
          width={600}
          height={750}
          className="contact-hero-model-img"
          
        />
      </div>

    </section>
  );
}
