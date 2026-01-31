const CARDS = [
  {
    title: 'Marketing Support',
    text: 'Full-scale digital marketing, local SEO, and brand guidelines to ensure your gym is packed from day one.',
    highlight: false,
  },
  {
    title: 'Training & Onboarding',
    text: 'Comprehensive training for owners and staff on sales, management, and fitness excellence.',
    highlight: true,
  },
  {
    title: 'Equipment Guidance',
    text: 'Exclusive partnerships with top-tier equipment manufacturers for premium gear at wholesale prices.',
    highlight: false,
  },
  {
    title: 'Software & Ops Support',
    text: 'Proprietary gym management software and streamlined workflows for maximum efficiency.',
    highlight: false,
  },
];

export default function FranchiseSupport() {
  return (
    <section className="franchise-support">
      <div className="franchise-support__bg" aria-hidden />
      <div className="franchise-support__blur franchise-support__blur--1" aria-hidden />
      <div className="franchise-support__blur franchise-support__blur--2" aria-hidden />
      <div className="content-inner franchise-support__inner">
        <div className="franchise-support__subtitle-wrap">
          <span className="franchise-support__line franchise-support__line--left" aria-hidden />
          <span className="franchise-support__subtitle">Why Partner With Us</span>
          <span className="franchise-support__line franchise-support__line--right" aria-hidden />
        </div>
        <h2 className="franchise-support__heading">Unmatched Support</h2>
        <div className="franchise-support__grid">
          {CARDS.map((card) => (
            <div key={card.title} className={`franchise-support__card ${card.highlight ? 'franchise-support__card--highlight' : ''}`}>
              <h3 className="franchise-support__card-title">{card.title}</h3>
              <span className="franchise-support__card-line" aria-hidden />
              <p className="franchise-support__card-text">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
