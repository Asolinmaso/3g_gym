import {
  FranchiseBlueprint,
  FranchiseContact,
  FranchiseEmpire,
  FranchiseHero,
  FranchiseProcess,
  FranchiseSupport,
} from "@/features/franchise";

export default function FranchisePage() {
  return (
    <main className="franchise-page flex-1" style={{ background: "#FDFDFD" }}>
      <FranchiseHero />
      <FranchiseEmpire />
      <FranchiseSupport />
      <FranchiseBlueprint />
      <FranchiseProcess />
      <FranchiseContact />
    </main>
  );
}
