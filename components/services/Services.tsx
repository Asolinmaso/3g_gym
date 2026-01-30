import Image from 'next/image';

const SERVICES = [
  {
    title: 'Strength Training',
    image: '/services/Strength_training.png',
    gradient:
      'linear-gradient(180deg, rgba(197, 13, 62, 0) 37.98%, #C50D3E 83.21%)',
  },
  {
    title: 'Weight Loss Program',
    image: '/services/Weight_loss.png',
    gradient:
      'linear-gradient(180deg, rgba(197, 13, 62, 0) 25.12%, #C50D3E 77.08%)',
  },
  {
    title: 'Functional Training',
    image: '/services/Functional.png',
    gradient:
      'linear-gradient(180.19deg, rgba(197, 13, 62, 0) 36.38%, #C50D3E 99.84%)',
  },
  {
    title: 'Personal Training',
    image: '/services/Personal_training.png',
    gradient:
      'linear-gradient(177.49deg, rgba(197, 13, 62, 0) 39.22%, #C50D3E 97.9%)',
  },
  {
    title: 'Group Classes',
    image: '/services/Group_training.png',
    gradient:
      'linear-gradient(180deg, rgba(197, 13, 62, 0) 50%, #C50D3E 100%)',
  },
  {
    title: 'Nutrition Guidance',
    image: '/services/Nutrition_guidance.png',
    gradient:
      'linear-gradient(183.84deg, rgba(197, 13, 62, 0) 40.79%, #C50D3E 91.17%)',
  },
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="content-inner">
        {/* Header: left = SERVICES + heading; right = paragraph + button */}
        <div className="services-header">
          <div className="services-header__left">
            <div className="services-label-wrap">
              <span className="services-label-line" aria-hidden />
              <span className="services-label">SERVICES</span>
              <span className="services-label-line" aria-hidden />
            </div>
            <h2 className="services-heading">
              Programs Designed to Transform You
            </h2>
          </div>
          <div className="services-header__right">
            <p className="services-desc">
              From strength to fat loss, our expert-led programs help you train
              smarter and achieve real results at any fitness level.
            </p>
            <a href="#contact" className="services-cta">
              <span>Know More</span>
              <span className="services-cta-arrows" aria-hidden>
                &gt;&gt;&gt;
              </span>
            </a>
          </div>
        </div>

        {/* 3x2 grid of service cards */}
        <div className="services-grid">
          {SERVICES.map((service) => (
            <div key={service.title} className="services-card">
              <div className="services-card__image-wrap">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="services-card__image"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 357px"
                />
                <div
                  className="services-card__gradient"
                  style={{ background: service.gradient }}
                  aria-hidden
                />
              </div>
              <h3 className="services-card__title">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
