const FEATURES = [
  'Steam bath - free',
  'Diet chart - free',
  'Workout plan - free',
];

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
    <div
      className={`relative rounded-xl p-6 md:p-8 ${
        highlighted
          ? 'bg-[#C50D3E] text-white'
          : 'bg-gray-900/80 text-white border border-[#C50D3E]/70 shadow-[0_0_20px_rgba(197,13,62,0.15)]'
      }`}
    >
      {highlighted && (
        <>
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" aria-hidden>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
            </svg>
          </span>
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60" aria-hidden>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
            </svg>
          </span>
        </>
      )}
      <h3 className="text-lg md:text-xl font-bold uppercase mb-3">{title}</h3>
      <div className="space-y-1 mb-4">
        {priceLines.map((line) => (
          <p key={line} className="text-sm md:text-base">
            {line}
          </p>
        ))}
        {sessions && (
          <p className="text-sm md:text-base">{sessions}</p>
        )}
      </div>
      <ul className="space-y-2 mb-6">
        {FEATURES.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm">
            <svg className="w-4 h-4 shrink-0 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className={`block w-full py-3 rounded-lg font-semibold text-center text-sm md:text-base hover:opacity-90 transition-opacity ${
          highlighted ? 'bg-white text-[#C50D3E]' : 'bg-[#C50D3E] text-white'
        }`}
      >
        Join Now <span className="text-base md:text-lg">&gt;&gt;&gt;</span>
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
    <section id="pricing" className="py-16 md:py-20 lg:py-24 bg-black text-white">
      <div className="content-inner">
        {/* Membership Plans */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
            Choose the <span className="text-[#C50D3E]">Plan</span> That Fits Your Goals
          </h2>
          <p className="text-white/70 text-sm md:text-base">Membership plans</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10 md:mb-12">
          {membership.map((plan) => (
            <PlanCard
              key={plan.title + plan.priceLines[0]}
              title={plan.title}
              priceLines={plan.priceLines}
              highlighted={plan.highlighted}
            />
          ))}
        </div>

        <p className="text-white/60 text-center text-xs md:text-sm max-w-2xl mx-auto mb-16 md:mb-20">
          Personal Training & other add-ons are not included. Student price applicable only with valid ID. Terms & conditions apply.
        </p>

        {/* Personal Training Packages */}
        <div className="border-t border-white/20 pt-12 md:pt-16 mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10">
            Personal Training Packages
          </h3>
          <div className="grid sm:grid-cols-3 gap-4 md:gap-6">
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
        <div className="border-t border-white/20 pt-12 md:pt-16 mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10">
            Body Transformation Packages
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto">
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
        <div className="border-t border-white/20 pt-12 md:pt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">
            Our Commitment
          </h3>
          <p className="text-white/90 text-center text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            We are confident in delivering visible and measurable transformation. With proper training discipline and diet adherence, we guarantee results.{' '}
            <strong className="text-white">Your transformation is our responsibility!</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
