import { CareerApply, CareerHero, OpenPositions } from "@/features/career";

export default function CareerPage() {
  return (
    <main className="career-page flex-1">
      <CareerHero />
      <OpenPositions />
      <CareerApply />
    </main>
  );
}
