const FEATURES = ['Steam bath - free', 'Diet chart - free', 'Workout plan - free'];

function PlanCard({
  title,
  priceLines,
  sessions,
  highlighted,
}: {
  title: string;
  priceLines: string[];
  sessions?: string;
  highlighted?: boolean;
}) {
  return (
    <div className={`pricing-card ${highlighted ? 'pricing-card--highlight' : ''}`}>
      <h3 className="pricing-card__title">{title}</h3>
      <div className="pricing-card__prices">
        {priceLines.map((line) => (
          <p key={line} className="pricing-card__price">
            {line}
          </p>
        ))}
        {sessions && <p className="pricing-card__price">{sessions}</p>}
      </div>
      <ul className="pricing-card__features">
        {FEATURES.map((f) => (
          <li key={f} className="pricing-card__feature">
            <svg
              className="pricing-card__icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                fill="currentColor"
                d="M20 7h-2.5V5.5a1.5 1.5 0 0 0-3 0V7h-5V5.5a1.5 1.5 0 0 0-3 0V7H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2.5v5.5a1.5 1.5 0 0 0 3 0V13h5v5.5a1.5 1.5 0 0 0 3 0V13H20a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z"
              />
            </svg>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a href="#contact" className="pricing-card__cta">
        <span>Join Now</span>
        <span className="pricing-card__cta-arrows" aria-hidden>
          &gt;&gt;&gt;
        </span>
      </a>
    </div>
  );
}

export default function Pricing() {
  const membership = [
    { title: 'Monthly Plan', priceLines: ['Rs. 1,499 (Regular)', 'Rs. 999 (Student)'], highlighted: false },
    { title: '3 Month Plan', priceLines: ['Rs. 4,499 (Regular)', 'Rs. 2,499 (Student)'], highlighted: false },
    { title: '6 Month Plan', priceLines: ['Rs. 7,999 (Regular)', 'Rs. 4,999 (Student)'], highlighted: true },
    { title: 'Annual Plan', priceLines: ['Rs. 9,999 (Regular)', 'Rs. 7,999 (Student)'], highlighted: false },
  ];

  const personalTraining = [
    { title: 'Monthly Plan', priceLines: ['Rs. 5,000'], sessions: '12 Sessions', highlighted: false },
    { title: 'Monthly Plan', priceLines: ['Rs. 8,000'], sessions: '16 Sessions', highlighted: false },
    { title: 'Monthly Plan', priceLines: ['Rs. 10,000'], sessions: '24 Sessions', highlighted: true },
  ];

  const bodyTransformation = [
    { title: '90 Days Plan', priceLines: ['Rs. 20,000'], highlighted: false },
    { title: '150 Days Plan', priceLines: ['Rs. 35,000'], highlighted: true },
  ];

  return (
    <section id="pricing" className="pricing-section">
      <div className="content-inner">
        {/* Membership Plans */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="pricing-title">
            Choose the <span className="text-[#C50D3E]">Plan</span> That Fits Your Goals
          </h2>
          <p className="pricing-subtitle">Membership plans</p>
        </div>

        <div className="pricing-grid pricing-grid--four">
          {membership.map((plan) => (
            <PlanCard
              key={plan.title + plan.priceLines[0]}
              title={plan.title}
              priceLines={plan.priceLines}
              highlighted={plan.highlighted}
            />
          ))}
        </div>

        <p className="pricing-note">
          Personal Training & other add-ons are not included. Student price applicable only with valid ID. Terms & conditions apply.
        </p>

        {/* Personal Training Packages */}
        <div className="pricing-section-divider">
          <h3 className="pricing-section-title">Personal Training Packages</h3>
          <div className="pricing-grid pricing-grid--three">
            {personalTraining.map((plan) => (
              <PlanCard
                key={plan.title + plan.priceLines[0] + (plan.sessions ?? '')}
                title={plan.title}
                priceLines={plan.priceLines}
                sessions={plan.sessions}
                highlighted={plan.highlighted}
              />
            ))}
          </div>
        </div>

        {/* Body Transformation Packages */}
        <div className="pricing-section-divider">
          <h3 className="pricing-section-title">Body Transformation Packages</h3>
          <div className="pricing-grid pricing-grid--two">
            {bodyTransformation.map((plan) => (
              <PlanCard
                key={plan.title + plan.priceLines[0]}
                title={plan.title}
                priceLines={plan.priceLines}
                highlighted={plan.highlighted}
              />
            ))}
          </div>
        </div>

        {/* Our Commitment */}
        <div className="pricing-section-divider pricing-section-divider--last">
          <h3 className="pricing-section-title">Our Commitment</h3>
          <p className="pricing-commitment">
            We are confident in delivering visible and measurable transformation. With proper training discipline and diet adherence, we guarantee results.{' '}
            <strong>Your transformation is our responsibility!</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
