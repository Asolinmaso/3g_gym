'use client';

export default function FranchiseContact() {
  return (
    <section id="franchise-contact" className="franchise-contact">
      <div className="content-inner franchise-contact__inner">
        <div className="franchise-contact__left">
          <div className="franchise-contact__subtitle-wrap">
            <span className="franchise-contact__subtitle">Get In Touch</span>
            <span className="franchise-contact__line" aria-hidden />
          </div>
          <h2 className="franchise-contact__heading">Let&apos;s Build Your Fitness Goals Together.</h2>
          <div className="franchise-contact__blocks">
            <div className="franchise-contact__block">
              <div className="franchise-contact__icon" aria-hidden>
                <svg width="25" height="32" viewBox="0 0 25 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M11.3469 31.5649C11.3469 31.5649 0 21.9766 0 12.5419C0 9.21562 1.31696 6.02552 3.66117 3.67345C6.00537 1.32138 9.18479 0 12.5 0C15.8152 0 18.9946 1.32138 21.3388 3.67345C23.683 6.02552 25 9.21562 25 12.5419C25 21.9766 13.6531 31.5649 13.6531 31.5649C13.0219 32.1482 11.9828 32.1419 11.3469 31.5649ZM12.5 18.0291C13.2182 18.0291 13.9293 17.8871 14.5928 17.6114C15.2563 17.3356 15.8592 16.9314 16.367 16.4219C16.8748 15.9124 17.2776 15.3075 17.5525 14.6418C17.8273 13.976 17.9688 13.2625 17.9688 12.5419C17.9688 11.8214 17.8273 11.1079 17.5525 10.4421C17.2776 9.7764 16.8748 9.17151 16.367 8.66198C15.8592 8.15246 15.2563 7.74828 14.5928 7.47253C13.9293 7.19677 13.2182 7.05485 12.5 7.05485C11.0496 7.05485 9.6586 7.63295 8.63301 8.66198C7.60742 9.69101 7.03125 11.0867 7.03125 12.5419C7.03125 13.9972 7.60742 15.3929 8.63301 16.4219C9.6586 17.4509 11.0496 18.0291 12.5 18.0291Z" fill="#C50D3E"/></svg>
              </div>
              <div>
                <h3 className="franchise-contact__block-title">Head Office</h3>
                <p className="franchise-contact__block-text">Pre-launch marketing, staff hiring, and grand opening execution.</p>
              </div>
            </div>
            <div className="franchise-contact__block">
              <div className="franchise-contact__icon" aria-hidden>
                <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.2 26C2.32 26 1.56693 25.682 0.9408 25.0461C0.314667 24.4102 0.00106667 23.6448 0 22.75V3.25C0 2.35625 0.3136 1.59142 0.9408 0.9555C1.568 0.319583 2.32107 0.00108333 3.2 0H28.8C29.68 0 30.4336 0.3185 31.0608 0.9555C31.688 1.5925 32.0011 2.35733 32 3.25V22.75C32 23.6437 31.6869 24.4091 31.0608 25.0461C30.4347 25.6831 29.6811 26.0011 28.8 26H3.2ZM16 14.625L28.8 6.5V3.25L16 11.375L3.2 3.25V6.5L16 14.625Z" fill="#C50D3E"/></svg>
              </div>
              <div>
                <h3 className="franchise-contact__block-title">Email Support</h3>
                <p className="franchise-contact__block-text">support@yourdomain.tld hello@yourdomain.tld</p>
              </div>
            </div>
            <div className="franchise-contact__block">
              <div className="franchise-contact__icon" aria-hidden>
                <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.928 17.9629L20.1696 18.7091C20.1696 18.7091 18.3646 20.4813 13.4397 15.6422C8.5147 10.8031 10.3197 9.03086 10.3197 9.03086L10.7964 8.5598C11.9747 7.40356 12.0863 5.54566 11.058 4.18847L8.95803 1.41645C7.68471 -0.263565 5.22639 -0.48592 3.76807 0.947033L1.15142 3.51647C0.429758 4.228 -0.053573 5.14707 0.00475997 6.16825C0.154759 8.78215 1.35142 14.4036 8.02471 20.9623C15.103 27.9162 21.7446 28.1929 24.4596 27.9425C25.3196 27.8635 26.0663 27.432 26.6679 26.839L29.0346 24.5133C30.6346 22.9437 30.1846 20.2507 28.1379 19.1521L24.9546 17.4408C23.6113 16.721 21.9779 16.9319 20.928 17.9629Z" fill="#C50D3E"/></svg>
              </div>
              <div>
                <h3 className="franchise-contact__block-title">Let&apos;s Talk</h3>
                <p className="franchise-contact__block-text">Phone : +6221.2002.2012 Fax : +6221.2002.2013</p>
              </div>
            </div>
          </div>
        </div>
        <div className="franchise-contact__form-wrap">
          <h3 className="franchise-contact__form-title">Start Your Application</h3>
          <p className="franchise-contact__form-desc">Fill out the form below and our franchise manager will contact you within 24 hours.</p>
          <form className="franchise-contact__form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Name" className="franchise-contact__input" aria-label="Name" />
            <div className="franchise-contact__input-row">
              <span className="franchise-contact__prefix">+91</span>
              <span className="franchise-contact__divider" aria-hidden />
              <input type="tel" placeholder="Contact" className="franchise-contact__input franchise-contact__input--contact" aria-label="Contact" />
            </div>
            <input type="email" placeholder="Email" className="franchise-contact__input" aria-label="Email" />
            <input type="text" placeholder="City" className="franchise-contact__input" aria-label="City" />
            <input type="text" placeholder="Investment Capacity" className="franchise-contact__input" aria-label="Investment Capacity" />
            <button type="submit" className="franchise-contact__submit">Submit Enquiry</button>
          </form>
        </div>
      </div>
    </section>
  );
}
