import Image from 'next/image';

export default function ProductsHero() {
  return (
    <section className="products-hero" aria-label="Products">
      <div className="products-hero-bg">
        <Image
          src="/banner.png"
          alt=""
          fill
          className="products-hero-bg-image"
          sizes="100vw"
          priority
        />
        <div className="products-hero-overlay" aria-hidden />
      </div>
      <div className="products-hero-blur" aria-hidden />
      <div className="products-hero-frames">
        <span className="products-hero-frame products-hero-frame--1" aria-hidden />
        <span className="products-hero-frame products-hero-frame--2" aria-hidden />
      </div>
      <div className="content-inner products-hero-inner">
        <h1 className="products-hero-title">Products</h1>
        <div className="products-hero-image-wrap">
          <Image
            src="/banner.png"
            alt="Gym equipment"
            fill
            className="products-hero-image"
            sizes="700px"
          />
        </div>
      </div>
    </section>
  );
}
