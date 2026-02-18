import { JOBS } from './career-data';

export default function OpenPositions() {
  return (
    <section className="career-positions">
      <div className="content-inner">
        <h2 className="career-positions-heading">Open Positions</h2>
        <div className="career-jobs-grid">
          {JOBS.map((job) => (
            <article
              key={job.id}
              className={`career-job-card ${job.highlighted ? 'career-job-card--highlight' : ''}`}
            >
              <div className="career-job-card__content">
                <div className="career-job-card__title-row">
                  <h3 className="career-job-card__title">{job.title}</h3>
                  <span className="career-job-card__arrow" aria-hidden>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="career-job-card__arrow-svg" aria-hidden>
                      <circle className="career-job-card__arrow-circle" cx="20" cy="20" r="19.5" stroke="#010101" fill="transparent" />
                      <path className="career-job-card__arrow-path" d="M15 25L25 15M25 15H17M25 15V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
                <p className="career-job-card__details">{job.details}</p>
              </div>
            </article>
          ))}
        </div>
        <nav className="career-pagination" aria-label="Jobs pagination">
          <button type="button" className="career-pagination-btn career-pagination-btn--arrow" aria-label="Previous page">
            <span className="career-pagination-arrow career-pagination-arrow--left" />
          </button>
          <button type="button" className="career-pagination-btn career-pagination-btn--active" aria-current="page">1</button>
          <button type="button" className="career-pagination-btn">2</button>
          <button type="button" className="career-pagination-btn">3</button>
          <button type="button" className="career-pagination-btn">4</button>
          <button type="button" className="career-pagination-btn career-pagination-btn--arrow" aria-label="Next page">
            <span className="career-pagination-arrow career-pagination-arrow--right" />
          </button>
        </nav>
      </div>
    </section>
  );
}
