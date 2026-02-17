import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import ProductsLaunching from '@/components/products/ProductsLaunching';

export default function ProductsPage() {
  return (
    <main className="products-page">
      <Header />
      <ProductsLaunching />
      <Footer />
    </main>
  );
}
