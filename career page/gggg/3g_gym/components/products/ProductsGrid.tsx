import Image from 'next/image';
import { PRODUCTS } from './products-data';

export default function ProductsGrid() {
  return (
    <div className="products-grid">
      {PRODUCTS.map((product) => (
        <article key={product.id} className="product-card">
          <div className="product-card__inner">
            <div className="product-card__image-wrap">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="product-card__image"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 397px"
              />
            </div>
            <div className="product-card__body">
              <h3 className="product-card__title">{product.name}</h3>
              <p className="product-card__desc">{product.description}</p>
            </div>
            <div className="product-card__footer">
              <span className="product-card__price">{product.price}</span>
              <a href="#contact" className="product-card__btn">
                <span>Buy Now</span>
                <span className="product-card__btn-arrows" aria-hidden>
                  &gt;&gt;&gt;
                </span>
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
