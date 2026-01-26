import Header from '@/components/header/Header';
import Hero from '@/components/hero/Hero';
import Marquee from '@/components/marquee/Marquee';
import About from '@/components/about/About';
import Services from '@/components/services/Services';
import Programs from '@/components/programs/Programs';
import Results from '@/components/results/Results';
import Testimonials from '@/components/testimonials/Testimonials';
import Pricing from '@/components/pricing/Pricing';
import CTA from '@/components/cta/CTA';
import Footer from '@/components/footer/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Programs />
      <Results />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
