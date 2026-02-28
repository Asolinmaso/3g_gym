import Image from "next/image";
import { FAQ, SERVICES_DETAIL, ServicesDetailBlock, ServicesHero } from "@/features/services";
import "./page.css";

export default function ServicesPage() {
  return (
    <main className="services-page flex-1" style={{ background: "#FDFDFD" }}>
      <ServicesHero />
      <section className="services-detail-section">
        <div className="services-detail-inner">
          {SERVICES_DETAIL.map((service) => (
            <ServicesDetailBlock key={service.id} service={service} />
          ))}
        </div>
      </section>
      <FAQ />
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
