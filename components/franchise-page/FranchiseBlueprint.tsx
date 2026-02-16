import Image from 'next/image';

const REQUIREMENTS = [
  { label: 'Area Requirement', value: '3,000 - 6,000 Sq. Ft.' },
  { label: 'Initial Investment', value: '150k - 350k' },
  { label: 'ROI Timeline', value: '18 - 24 Months' },
];

export default function FranchiseBlueprint() {
  return (
    <section className="franchise-blueprint">
      <div className="franchise-blueprint__layout">
        <div className="franchise-blueprint__left">
          <div className="franchise-blueprint__img-main">
            <Image src="/banner.png" alt="" fill className="franchise-blueprint__img" sizes="544px" />
          </div>
          <div className="franchise-blueprint__img-sub">
            <Image src="/banner-bg.png" alt="" fill className="franchise-blueprint__img" sizes="331px" />
          </div>
        </div>
        <div className="franchise-blueprint__right">
          <div className="franchise-blueprint__subtitle-wrap">
            <span className="franchise-blueprint__line franchise-blueprint__line--left" aria-hidden />
            <span className="franchise-blueprint__subtitle">The Blueprint</span>
            <span className="franchise-blueprint__line franchise-blueprint__line--right" aria-hidden />
          </div>
          <h2 className="franchise-blueprint__heading">What You Need To Get Started</h2>
          <p className="franchise-blueprint__text">
            We look for partners who are passionate about fitness and committed to delivering a premium experience.
          </p>
          <div className="franchise-blueprint__cards">
            {REQUIREMENTS.map((item) => (
              <div key={item.label} className="franchise-blueprint__card">
                <span className="franchise-blueprint__card-icon" aria-hidden />
                <div>
                  <span className="franchise-blueprint__card-label">{item.label}</span>
                  <span className="franchise-blueprint__card-value">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
