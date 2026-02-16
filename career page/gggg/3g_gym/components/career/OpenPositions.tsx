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
                <h3 className="career-job-card__title">{job.title}</h3>
                <p className="career-job-card__details">{job.details}</p>
              </div>
              <span className="career-job-card__arrow" aria-hidden>
                <span className="career-job-card__arrow-icon" />
              </span>
            </article>
          ))}
        </div>
        <nav className="career-pagination" aria-label="Jobs pagination">
          <button type="button" className="career-pagination-btn" aria-label="Previous page">
            <span className="career-pagination-arrow career-pagination-arrow--left" />
          </button>
          <button type="button" className="career-pagination-btn career-pagination-btn--active" aria-current="page">
            1
          </button>
          <button type="button" className="career-pagination-btn" aria-label="Next page">
            <span className="career-pagination-arrow career-pagination-arrow--right" />
          </button>
        </nav>
      </div>
    </section>
  );
}
