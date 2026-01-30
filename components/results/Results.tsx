import Image from 'next/image';

const TRANSFORMATIONS = [
  {
    image: '/results/male_result.png',
    title: '–14 kg in 12 Weeks',
    subtitle: 'Strength Training + Nutrition Plan',
  },
  {
    image: '/results/female_result.png',
    title: 'Abs Built in 8 Weeks',
    subtitle: 'Personal Training + Core Workouts',
  },
];

export default function Results() {
  return (
    <section id="results" className="results-section">
      {/* Blurred ellipses */}
      <div className="results-ellipse results-ellipse--left" aria-hidden />
      <div className="results-ellipse results-ellipse--right" aria-hidden />

      <div className="content-inner results-inner">
        <h2 className="results-title">Real People. Real Results.</h2>
        <p className="results-subtitle">Transformations That Inspire.</p>

        <div className="results-grid">
          {TRANSFORMATIONS.map((t) => (
            <div key={t.title} className="results-card">
              <div className="results-card__image-wrap">
                <Image
                  src={t.image}
                  alt={t.title}
                  fill
                  className="results-card__image"
                  sizes="(max-width: 1023px) 100vw, 603px"
                />
                <span className="results-card__badge results-card__badge--before">
                  Before
                </span>
                <span className="results-card__badge results-card__badge--after">
                  After
                </span>
              </div>
              <div className="results-card__bar">
                <p className="results-card__bar-title">{t.title}</p>
                <p className="results-card__bar-subtitle">{t.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
