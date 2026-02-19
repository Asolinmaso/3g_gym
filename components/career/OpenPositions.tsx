'use client';

import { useState, useMemo } from 'react';
import { JOBS } from './career-data';

const JOBS_PER_PAGE = 4;

export default function OpenPositions() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(
    () => Math.ceil(JOBS.length / JOBS_PER_PAGE) || 1,
    []
  );
  const start = (currentPage - 1) * JOBS_PER_PAGE;
  const jobsOnPage = useMemo(
    () => JOBS.slice(start, start + JOBS_PER_PAGE),
    [start]
  );

  const goPrev = () => setCurrentPage((p) => Math.max(1, p - 1));
  const goNext = () => setCurrentPage((p) => Math.min(totalPages, p + 1));

  return (
    <section className="career-positions">
      <div className="content-inner">
        <h2 className="career-positions-heading">Open Positions</h2>
        <div className="career-jobs-grid">
          {jobsOnPage.map((job) => (
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
        {totalPages > 1 && (
          <nav className="career-pagination" aria-label="Jobs pagination">
            <button
              type="button"
              className="career-pagination-btn career-pagination-btn--arrow"
              aria-label="Previous page"
              onClick={goPrev}
              disabled={currentPage === 1}
            >
              <span className="career-pagination-arrow career-pagination-arrow--left" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                type="button"
                className={`career-pagination-btn ${currentPage === page ? 'career-pagination-btn--active' : ''}`}
                aria-current={currentPage === page ? 'page' : undefined}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
            <button
              type="button"
              className="career-pagination-btn career-pagination-btn--arrow"
              aria-label="Next page"
              onClick={goNext}
              disabled={currentPage === totalPages}
            >
              <span className="career-pagination-arrow career-pagination-arrow--right" />
            </button>
          </nav>
        )}
      </div>
    </section>
  );
}
