import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import FranchiseHero from '@/components/franchise-page/FranchiseHero';
import FranchiseEmpire from '@/components/franchise-page/FranchiseEmpire';
import FranchiseSupport from '@/components/franchise-page/FranchiseSupport';
import FranchiseBlueprint from '@/components/franchise-page/FranchiseBlueprint';
import FranchiseProcess from '@/components/franchise-page/FranchiseProcess';
import FranchiseContact from '@/components/franchise-page/FranchiseContact';

export default function FranchisePage() {
  return (
    <main className="franchise-page" style={{ background: '#FDFDFD' }}>
      <Header />
      <FranchiseHero />
      <FranchiseEmpire />
      <FranchiseSupport />
      <FranchiseBlueprint />
      <FranchiseProcess />
      <FranchiseContact />
      <Footer />
    </main>
  );
}
