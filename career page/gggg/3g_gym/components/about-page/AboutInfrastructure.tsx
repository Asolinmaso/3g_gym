import Image from 'next/image';

export default function AboutInfrastructure() {
  return (
    <section className="about-infra">
      <div className="about-infra__layout">
        <div className="about-infra__left">
          <div className="about-infra__subtitle-wrap">
            <span className="about-infra__line" aria-hidden />
            <span className="about-infra__subtitle">INFRASTRUCTURE</span>
          </div>
          <h2 className="about-infra__heading">
            Explore Our <span className="about-infra__heading-accent">Gym Space</span>
          </h2>
          <p className="about-infra__text">
            From strength to fat loss, our expert-led programs help you train smarter and achieve real results at any fitness level.
          </p>
          <div className="about-infra__icons">
            <span className="about-infra__icon about-infra__icon--barbell" aria-hidden />
            <span className="about-infra__icon about-infra__icon--person" aria-hidden />
            <span className="about-infra__icon about-infra__icon--shield" aria-hidden />
            <span className="about-infra__ellipsis" aria-hidden>…</span>
          </div>
        </div>
        <div className="about-infra__right">
          <div className="about-infra__image-wrap">
            <Image src="/banner.png" alt="Gym space" fill className="about-infra__image" sizes="748px" />
            <div className="about-infra__image-overlay" aria-hidden />
          </div>
          <div className="about-infra__red-bar" aria-hidden />
          <span className="about-infra__vertical-label">INFRASTRUCTURE</span>
        </div>
      </div>
    </section>
  );
}
