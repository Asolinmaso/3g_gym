import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import ProductsHero from '@/components/products/ProductsHero';
import ProductsGrid from '@/components/products/ProductsGrid';

export default function ProductsPage() {
  return (
    <main className="products-page">
      <Header />
      <ProductsHero />
      <section className="products-main">
        <div className="content-inner">
          <h2 className="products-our-heading">
            Our <span className="products-our-heading-accent">Products</span>
          </h2>
          <ProductsGrid />
          <nav className="products-pagination" aria-label="Products pagination">
            <button type="button" className="products-pagination-btn" aria-label="Previous page">
              <span className="products-pagination-arrow products-pagination-arrow--left" />
            </button>
            <button type="button" className="products-pagination-btn products-pagination-btn--active" aria-current="page">
              1
            </button>
            <button type="button" className="products-pagination-btn">2</button>
            <button type="button" className="products-pagination-btn">3</button>
            <button type="button" className="products-pagination-btn">4</button>
            <button type="button" className="products-pagination-btn" aria-label="Next page">
              <span className="products-pagination-arrow products-pagination-arrow--right" />
            </button>
          </nav>
        </div>
      </section>
      <Footer />
    </main>
  );
}
