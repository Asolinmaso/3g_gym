import Image from 'next/image';

const BANNER_BG = '/images/career_page_image/banner_bg.png';

export default function CareerHero() {
  return (
    <section className="career-hero" aria-label="Careers">
      <Image
        src={BANNER_BG}
        alt=""
        fill
        className="career-hero-bg"
        priority
        sizes="100vw"
      />
    </section>
  );
}
