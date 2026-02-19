import {
  AboutFounder,
  AboutGeneration,
  AboutHero,
  AboutInfrastructure,
  AboutVisionMission,
  AboutWhyChoose,
} from "@/features/about";

export default function AboutPage() {
  return (
    <main className="about-page flex-1" style={{ background: "#FDFDFD" }}>
      <AboutHero />
      <AboutGeneration />
      <AboutVisionMission />
      <AboutFounder />
      <AboutWhyChoose />
      <AboutInfrastructure />
    </main>
  );
}
