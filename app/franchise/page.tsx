'use client';
import Image from "next/image";
import { useSlideUpOnScroll } from "@/hooks/useSlideUpOnScroll";
import {
  FranchiseBlueprint,
  FranchiseContact,
  FranchiseEmpire,
  FranchiseHero,
  FranchiseProcess,
  FranchiseSupport,
} from "@/features/franchise";

export default function FranchisePage() {
  const equipmentRef = useSlideUpOnScroll<HTMLElement>();
  return (
    <main className="franchise-page flex-1" style={{ background: "#FDFDFD" }}>
      <FranchiseHero />
      <FranchiseEmpire />
      <FranchiseSupport />
      <FranchiseBlueprint />
      <FranchiseProcess />
      <FranchiseContact />
      <section className="footer-equipment" ref={equipmentRef}>
        <Image
          src="/footer_image2.png"
          alt="Gym Equipment"
          width={300}
          height={400}
          className="footer-equipment-img"
        />
      </section>
    </main>
  );
}
