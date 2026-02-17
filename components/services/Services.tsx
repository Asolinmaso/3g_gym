import Image from 'next/image';

const SERVICES = [
  { title: 'Strength Training', image: '/services/strength_home.png' },
  { title: 'Weight Loss Program', image: '/services/weight_loss_home.png' },
  { title: 'Functional Training', image: '/services/functional_training.png' },
  { title: 'Personal Training', image: '/services/personel_train.png' },
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="content-inner">
        {/* Header: SERVICES label + heading | description + Know More */}
        <div className="services-header">
          <div className="services-header__left">
            <div className="services-label-wrap">
              <span className="services-label-line" aria-hidden />
              <span className="services-label">SERVICES</span>
              <span className="services-label-line" aria-hidden />
            </div>
            <h2 className="services-heading">
              Programs Designed to <span style={{color:"#c50d3e"}}>Transform You</span>
            </h2>
          </div>
          <div className="services-header__right">
            <p className="services-desc">
              From strength to fat loss, our expert-led programs help you train
              smarter and achieve real results at any fitness level.
            </p>
            <a href="/services" className="services-cta">
              Know More
              <span className="services-cta-arrow" aria-hidden>&gt;</span>
            </a>
          </div>
        </div>
      </div>

      {/* White curved card area */}
      <div className="services-cards-wrap">
        <div className="services-curve services-curve--top" aria-hidden />
        <div className="services-curve services-curve--bottom" aria-hidden />
        <div className="services-cards-inner">
          <div className="services-grid">
            {SERVICES.map((service) => (
              <div key={service.title} className="services-card">
                <div className="services-card__image-wrap">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="services-card__image"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 357px"
                  />
                  <div className="services-card__overlay" aria-hidden />
                </div>
                <h3 className="services-card__title">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
