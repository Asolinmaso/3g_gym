import Image from "next/image";
import "./ServicesHero.css";   // 👈 new css file

export default function ServicesHero() {
  return (
    <section className="services-hero-custom">

      {/* Background Image */}
      <div className="services-hero-bg">
        <Image
          src="/services/service_bg.png"   // your background
          alt=""
          fill
          priority
          className="services-hero-bg-image"
        />
      </div>

      {/* Big Background Title */}
      <h1 className="services-hero-big-title">SERVICES</h1>

      {/* Center Image */}
      <div className="services-hero-model">
        <Image
          src="/services/service_hero.png"
          alt="Fitness training"
          width={500}
          height={400}
          className="services-hero-model-img"
        />
      </div>

    </section>
  );
}
