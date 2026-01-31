import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import AboutHero from '@/components/about-page/AboutHero';
import AboutGeneration from '@/components/about-page/AboutGeneration';
import AboutVisionMission from '@/components/about-page/AboutVisionMission';
import AboutWhyChoose from '@/components/about-page/AboutWhyChoose';
import AboutTrainers from '@/components/about-page/AboutTrainers';
import AboutInfrastructure from '@/components/about-page/AboutInfrastructure';

export default function AboutPage() {
  return (
    <main className="about-page" style={{ background: '#FDFDFD' }}>
      <Header />
      <AboutHero />
      <AboutGeneration />
      <AboutVisionMission />
      <AboutWhyChoose />
      <AboutTrainers />
      <AboutInfrastructure />
      <Footer />
    </main>
  );
}
