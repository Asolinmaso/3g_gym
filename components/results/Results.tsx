import Image from 'next/image';
import './Result.css';

const TRANSFORMATIONS = [
  {
    image: '/results/male_result.png',
  },
  {
    image: '/results/female_result.png',
  },
];

export default function Results() {
  return (
    <section id="results" className="results-section">
      {/* Blurred ellipses */}
      <div className="results-ellipse results-ellipse--left" aria-hidden />
      <div className="results-ellipse results-ellipse--right" aria-hidden />

      <div className="content-inner results-inner">
        <h2 className="results-title">Real <span className='result-span'>People.</span> Real <span className='result-span'>Results.</span></h2>
        <p className="results-subtitle">Transformations That Inspire.</p>

        <div className="results-grid">
          {TRANSFORMATIONS.map((t) => (
            <div key={t.image} className="results-card">
              <div className="results-card__image-wrap">
                <Image
                  src={t.image}
                  alt="Result"
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
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
