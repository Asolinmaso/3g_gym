
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ValuesSection from '@/components/ValuesSection';
import FounderSection from '@/components/FounderSection';
import TrainingSection from '@/components/TrainingSection';
import GymSpaceSection from '@/components/GymSpaceSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-dark">
      <Navbar />
      <HeroSection />
      <div id="about">
        <AboutSection />
      </div>
      <ValuesSection />
      <FounderSection />
      <div id="services">
        <TrainingSection />
      </div>
      <GymSpaceSection />
      <div id="contact">
        <Footer />
      </div>
    </main>
  );
}
