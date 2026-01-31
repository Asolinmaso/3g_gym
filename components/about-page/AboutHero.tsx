import Image from 'next/image';

export default function AboutHero() {
  return (
    <section className="about-page-hero">
      <div className="about-page-hero__bg" aria-hidden />
      <div className="about-page-hero__overlay about-page-hero__overlay--1" aria-hidden />
      <div className="about-page-hero__overlay about-page-hero__overlay--2" aria-hidden />
      <div className="about-page-hero__rect" aria-hidden />
      <div className="content-inner about-page-hero__inner">
        <h1 className="about-page-hero__title">About Us</h1>
        <div className="about-page-hero__image-wrap">
          <Image
            src="/banner.png"
            alt="Fitness"
            width={679}
            height={586}
            className="about-page-hero__image"
            sizes="(max-width: 1024px) 60vw, 679px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
