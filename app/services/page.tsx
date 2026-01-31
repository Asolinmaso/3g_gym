import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import ServicesHero from '@/components/services-page/ServicesHero';
import ServicesDetailBlock from '@/components/services-page/ServicesDetailBlock';
import FAQ from '@/components/services-page/FAQ';
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
      <Footer />
    </main>
  );
}
