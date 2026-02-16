export default function ContactCards() {
  return (
    <section className="contact-cards" aria-label="Contact information">
      <div className="content-inner">
        <div className="contact-cards-grid">
          <article className="contact-card">
            <span className="contact-card__icon contact-card__icon--phone" aria-hidden>
              <svg width="64" height="60" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <h3 className="contact-card__title">Contact</h3>
            <p className="contact-card__text">
              +91 86673 78012
              <br />
              +91 8778359643
            </p>
          </article>
          <article className="contact-card">
            <span className="contact-card__icon contact-card__icon--mail" aria-hidden>
              <svg width="75" height="60" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <h3 className="contact-card__title">Mail</h3>
            <p className="contact-card__text">Contact@3rdgenerationfitnessstudio.com</p>
          </article>
          <article className="contact-card">
            <span className="contact-card__icon contact-card__icon--address" aria-hidden>
              <svg width="48" height="60" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </span>
            <h3 className="contact-card__title">Address</h3>
            <p className="contact-card__text">
              10, Alamadhi Rd, Vetrivel Nagar, ganesh Nagar, New Vellanur, Tamil Nadu 600062
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
