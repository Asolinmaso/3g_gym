import Image from 'next/image';

export default function ServicesHero() {
  return (
    <section className="services-page-hero">
      <div className="services-page-hero__bg">
        <div className="services-page-hero__gradient services-page-hero__gradient--1" />
        <div className="services-page-hero__gradient services-page-hero__gradient--2" />
        <div className="services-page-hero__gradient services-page-hero__gradient--3" />
      </div>
      <div className="content-inner services-page-hero__inner">
        <h1 className="services-page-hero__title">Services</h1>
        <div className="services-page-hero__image-wrap">
          <Image
            src="/banner.png"
            alt="Fitness training"
            width={422}
            height={541}
            className="services-page-hero__image"
            sizes="(max-width: 1024px) 40vw, 422px"
          />
        </div>
      </div>
    </section>
  );
}
