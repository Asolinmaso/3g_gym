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
              className="career-job-card"
            >
              <div className="career-job-card__content">
                <h3 className="career-job-card__title">{job.title}</h3>
                <p className="career-job-card__details">{job.details}</p>
              </div>
              <span className="career-job-card__arrow" aria-hidden>
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="career-job-card__arrow-svg" aria-hidden>
                  <rect className="career-job-card__arrow-circle" x="0.5" y="0.5" width="49" height="49" rx="24.5" stroke="#010101" fill="transparent" />
                  <path className="career-job-card__arrow-path" d="M21.8033 18.5876C21.6175 18.5942 21.4322 18.5632 21.2586 18.4966C21.085 18.43 20.9266 18.3292 20.7928 18.2C20.659 18.0709 20.5526 17.9161 20.4799 17.7449C20.4072 17.5738 20.3698 17.3897 20.3698 17.2038C20.3698 17.0178 20.4072 16.8338 20.4799 16.6626C20.5526 16.4915 20.659 16.3367 20.7928 16.2075C20.9266 16.0784 21.085 15.9775 21.2586 15.9109C21.4322 15.8443 21.6175 15.8134 21.8033 15.82L32.2473 15.82C32.6142 15.8202 32.9661 15.9661 33.2255 16.2255C33.485 16.485 33.6309 16.8368 33.6311 17.2038L33.6311 27.6477C33.6376 27.8336 33.6067 28.0188 33.5401 28.1924C33.4735 28.3661 33.3726 28.5245 33.2435 28.6583C33.1144 28.7921 32.9596 28.8985 32.7884 28.9711C32.6173 29.0438 32.4332 29.0813 32.2473 29.0813C32.0613 29.0813 31.8773 29.0438 31.7061 28.9711C31.5349 28.8985 31.3802 28.7921 31.251 28.6583C31.1219 28.5245 31.021 28.3661 30.9544 28.1924C30.8878 28.0188 30.8569 27.8336 30.8634 27.6477L30.8634 20.5458L18.2132 33.1961C17.9535 33.4558 17.6013 33.6016 17.2341 33.6016C16.8668 33.6016 16.5146 33.4558 16.255 33.1961C15.9953 32.9364 15.8494 32.5842 15.8494 32.217C15.8494 31.8497 15.9953 31.4975 16.255 31.2378L28.9052 18.5876L21.8033 18.5876Z" fill="#010101" />
                </svg>
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
