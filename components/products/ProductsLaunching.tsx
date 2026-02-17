export default function ProductsLaunching() {
  return (
    <section className="products-launching" aria-label="Products coming soon">
      {/* Ellipse 1 – bottom right glow */}
      <div className="products-launching__ellipse products-launching__ellipse--1" aria-hidden />
      {/* Ellipse 2 – top left glow */}
      <div className="products-launching__ellipse products-launching__ellipse--2" aria-hidden />

      {/* Group 162579 – decorative layer at 0.25 opacity */}
      <div className="products-launching__images" aria-hidden />

      {/* Centered gradient text */}
      <div className="products-launching__content">
        <h1 className="products-launching__line1">LAUNCHING</h1>
        <h1 className="products-launching__line2">SOON...</h1>
      </div>
    </section>
  );
}
