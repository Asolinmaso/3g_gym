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
import CareersHero from "@/components/CareersHero";
import OpenPositions from "@/components/OpenPositions";
import ApplyNow from "@/components/ApplyNow";
import Footer from "@/components/Footer";


import Footer from '@/components/footer/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
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
      <Footer />
    </main>
  );
}
export default function CareerPage() {
  return (
    <>
      <CareersHero />
      <OpenPositions />
      <ApplyNow />
      <Footer />
    </>
  );
}