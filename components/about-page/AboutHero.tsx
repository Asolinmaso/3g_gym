import Image from 'next/image';

export default function AboutHero() {
  return (
    <section className="about-page-hero">
      <div className="about-page-hero__bg" aria-hidden />
      <div className="about-page-hero__overlay about-page-hero__overlay--2" aria-hidden />
      <div className="about-page-hero__rect" aria-hidden />
      <div className="content-inner about-page-hero__inner">
        <h1 className="about-page-hero__title">ABOUT US</h1>
        <div className="about-page-hero__image-wrap">
          <Image
            src="/images/about_page/about_banner_hero.png"
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
