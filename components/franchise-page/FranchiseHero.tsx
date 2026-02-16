import Image from "next/image";
import "./FranchiseHero.css";

export default function FranchiseHero() {
  return (
    <section className="franchise-hero">
      <div className="franchise-hero__overlay" />

      <div className="franchise-hero__content">
        <Image
          src="/Franchise/middle.png"
          alt="3rd Generation Fitness Studio"
          width={240}
          height={240}
          className="franchise-hero__logo"
        />

        <h1 className="franchise-hero__title">FRANCHISE</h1>
      </div>
    </section>
  );
}
