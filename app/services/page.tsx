import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import ServicesHero from '@/components/services-page/ServicesHero';
import ServicesDetailBlock from '@/components/services-page/ServicesDetailBlock';
import FAQ from '@/components/services-page/FAQ';
import Image from "next/image";
import './page.css';
import { SERVICES_DETAIL } from '@/components/services-page/services-detail-data';

export default function ServicesPage() {
  return (
    <main className="services-page" style={{ background: '#FDFDFD' }}>
      <Header />
      <ServicesHero />
      <section className="services-detail-section">
        <div className="content-inner services-detail-inner">
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

      <Footer />
    </main>
  );
}
