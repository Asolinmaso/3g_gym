import Image from 'next/image';

const REQUIREMENTS = [
  { label: 'Area Requirement', value: 'Minimum 2500 Sq. Ft.' },
  { label: 'Initial Investment', value: '30 - 35 Lakhs' },
  { label: 'ROI Timeline', value: '24 - 36 Months' },
];

export default function FranchiseBlueprint() {
  return (
    <section className="franchise-blueprint">
      <div className="franchise-blueprint__layout">
        <div className="franchise-blueprint__left">
          <div className="franchise-blueprint__gradient-strip" aria-hidden />
          <div className="franchise-blueprint__img-main">
            <Image src="/images/franchise_page/franchise_blueprint1.png" alt="" fill className="franchise-blueprint__img" sizes="517px" />
          </div>
          <div className="franchise-blueprint__img-sub">
            <Image src="/images/franchise_page/franchise_blueprint2.jpg" alt="" fill className="franchise-blueprint__img" sizes="331px" />
          </div>
        </div>
        <div className="franchise-blueprint__right">
          <div className="franchise-blueprint__header-strip">
            <span className="franchise-blueprint__subtitle">THE BLUEPRINT</span>
            <span className="franchise-blueprint__line" aria-hidden />
            <h2 className="franchise-blueprint__heading">
              What You Need <span className="franchise-blueprint__heading-accent">To Get Started</span>
            </h2>
          </div>
          <div className="franchise-blueprint__right-body">
          <p className="franchise-blueprint__text">
            We look for partners who are passionate about fitness and committed to delivering a premium experience.
          </p>
          <div className="franchise-blueprint__cards">
            {REQUIREMENTS.map((item) => (
              <div key={item.label} className="franchise-blueprint__card">
                <span className="franchise-blueprint__card-icon" aria-hidden />
                <div className="franchise-blueprint__card-text">
                  <span className="franchise-blueprint__card-label">{item.label}</span>
                  <span className="franchise-blueprint__card-value">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
