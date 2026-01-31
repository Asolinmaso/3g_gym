import Image from 'next/image';

const TRAINERS = [
  { name: 'JOHN MICHAEL', role: 'Personal Trainer', image: '/about_us/small_image.png', barLeft: true },
  { name: 'EVEN JOHN', role: 'Personal Trainer', image: '/about_us/big_image.png', barLeft: false },
  { name: 'ALEXANDER CHRIST', role: 'Personal Trainer', image: '/results/male_result.png', barLeft: true },
];

export default function AboutTrainers() {
  return (
    <section className="about-trainers">
      <div className="content-inner about-trainers__inner">
        <div className="about-trainers__subtitle-wrap">
          <span className="about-trainers__line about-trainers__line--left" aria-hidden />
          <span className="about-trainers__subtitle">TRAINERS</span>
          <span className="about-trainers__line about-trainers__line--right" aria-hidden />
        </div>
        <h2 className="about-trainers__heading">
          Team Of <span className="about-trainers__heading-accent">Expert</span> Coaches.
        </h2>
        <div className="about-trainers__grid">
          {TRAINERS.map((t) => (
            <div key={t.name} className="about-trainers__card">
              <div className="about-trainers__image-wrap">
                {t.barLeft && <div className="about-trainers__bar" aria-hidden />}
                <Image src={t.image} alt={t.name} fill className="about-trainers__image" sizes="397px" />
              </div>
              <h3 className="about-trainers__name">{t.name}</h3>
              <p className="about-trainers__role">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
