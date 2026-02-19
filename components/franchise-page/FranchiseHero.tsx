import Image from "next/image";

export default function FranchiseHero() {
  return (
    <section className="franchise-page-hero" aria-label="Franchise banner">
      <div className="franchise-page-hero__bg" aria-hidden />
      <div className="franchise-page-hero__overlay" aria-hidden />
      <div className="content-inner franchise-page-hero__inner">
        <div className="franchise-page-hero__image-wrap">
          <Image
            src="/Franchise/middle.png"
            alt="3rd Generation Fitness"
            fill
            className="franchise-page-hero__image"
            sizes="(max-width: 767px) 70vw, (max-width: 1024px) 50vw, 420px"
            priority
          />
        </div>
        <h1 className="franchise-page-hero__title">FRANCHISE</h1>
      </div>
    </section>
  );
}
