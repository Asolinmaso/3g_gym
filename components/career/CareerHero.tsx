import Image from 'next/image';

const HERO_IMAGE = '/images/career_page_image/career_herosec_img.png';

export default function CareerHero() {
  return (
    <section className="career-hero" aria-label="Careers">
      {/* contact bg – base black */}
      <div className="career-hero-base" aria-hidden />

      {/* Rectangle 30 – gradient right, flipped */}
      <div className="career-hero-rect30" aria-hidden />
      {/* Rectangle 31 – gradient + border right, flipped */}
      <div className="career-hero-rect31" aria-hidden />

      {/* Ellipse 1 (red blur left), Ellipse 2 (black blur right) */}
      <div className="career-hero-ellipse career-hero-ellipse--1" aria-hidden />
      <div className="career-hero-ellipse career-hero-ellipse--2" aria-hidden />

      {/* CAREERS – gradient text behind the front image (lower z-index) */}
      <div className="career-hero-inner">
        <h1 className="career-hero-title">CAREERS</h1>
      </div>

     
      {/* Rectangle 59 – front image on top (people in front of text) */}
      <div className="career-hero-front-image">
        <Image
          src={HERO_IMAGE}
          alt="Team at 3G Gym"
          fill
          className="career-hero-front-img"
          priority
        />
      </div>
    </section>
  );
}
