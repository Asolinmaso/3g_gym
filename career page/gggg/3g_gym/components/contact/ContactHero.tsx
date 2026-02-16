import Image from 'next/image';

export default function ContactHero() {
  return (
    <section className="contact-hero" aria-label="Contact Us">
      <div className="contact-hero-bg">
        <Image
          src="/banner.png"
          alt=""
          fill
          className="contact-hero-bg-image"
          sizes="100vw"
          priority
        />
        <div className="contact-hero-overlay" aria-hidden />
      </div>
      <div className="contact-hero-blur" aria-hidden />
      <div className="contact-hero-deco" aria-hidden />
      <div className="content-inner contact-hero-inner">
        <h1 className="contact-hero-title">Contact Us</h1>
      </div>
      <div className="contact-hero-image-wrap">
        <Image
          src="/contactus.png"
          alt=""
          fill
          className="contact-hero-image"
          sizes="(max-width: 1023px) 0px, 573px"
        />
      </div>
    </section>
  );
}
