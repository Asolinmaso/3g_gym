import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import CareerHero from '@/components/career/CareerHero';
import OpenPositions from '@/components/career/OpenPositions';
import CareerApply from '@/components/career/CareerApply';

export default function CareerPage() {
  return (
    <main className="career-page">
      <Header />
      <CareerHero />
      <OpenPositions />
      <CareerApply />
      <Footer />
    </main>
  );
}
