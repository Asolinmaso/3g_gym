import Image from 'next/image';

export default function FranchiseHero() {
  return (
    <section className="franchise-hero">
      <div className="franchise-hero__bg" aria-hidden />
      <div className="franchise-hero__gradient franchise-hero__gradient--1" aria-hidden />
      <div className="franchise-hero__gradient franchise-hero__gradient--2" aria-hidden />
      <div className="franchise-hero__blur" aria-hidden />
      <div className="content-inner franchise-hero__inner">
        <div className="franchise-hero__left">
          <h1 className="franchise-hero__title">Franchise</h1>
          <p className="franchise-hero__subtitle">Create the Next Generation of Fitness</p>
        </div>
        <div className="franchise-hero__logo-wrap">
          <Image src="/logo.png" alt="" width={577} height={577} className="franchise-hero__logo" sizes="(max-width: 1024px) 40vw, 577px" />
        </div>
      </div>
    </section>
  );
}
