'use client';

import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';

export default function ProductsLaunching() {
  return (
    <section className="products-launching" aria-label="Products coming soon">
      {/* Background – Product_Banner.png */}
      <div className="products-launching__bg" aria-hidden />
      {/* Ellipse 1 – bottom right glow */}
      <div className="products-launching__ellipse products-launching__ellipse--1" aria-hidden />
      {/* Ellipse 2 – top left glow */}
      <div className="products-launching__ellipse products-launching__ellipse--2" aria-hidden />

      {/* Centered gradient text – LAUNCHING SOON... */}
      <AnimateOnScroll className="products-launching__content">
        <h1 className="products-launching__line1">LAUNCHING</h1>
        <h1 className="products-launching__line2">SOON...</h1>
      </AnimateOnScroll>
    </section>
  );
}
