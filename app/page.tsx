import Header from '@/components/header/Header';
import Hero from '@/components/hero/Hero';
import Marquee from '@/components/marquee/Marquee';
import About from '@/components/about/About';
import Services from '@/components/services/Services';
import Results from '@/components/results/Results';
import Testimonials from '@/components/testimonials/Testimonials';
import Pricing from '@/components/pricing/Pricing';
import Commitment from '@/components/commitment/Commitment';
import CTA from '@/components/cta/CTA';
import Footer from '@/components/footer/Footer';
import Image from "next/image";
import './page.css';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Results />
      <Testimonials />
      <Pricing />
      <Commitment />
      <CTA />
      {/* Equipment Top Section */}
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
